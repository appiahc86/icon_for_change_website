<template>
  <div class="messages-page">
    <AdminSidebar :active-menu="'messages'" :is-collapsed="isSidebarCollapsed" />

    <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <AdminNavbar @toggle-sidebar="toggleSidebar" />

      <div class="content-area">
        <div class="container-fluid">
          <!-- Header -->
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 class="fw-bold mb-1">Contact Messages</h2>
              <p class="text-muted mb-0">View and manage all contact form submissions</p>
            </div>
            <div>
              <button class="btn btn-outline-danger me-2" @click="deleteSelected" :disabled="selectedMessages.length === 0">
                <i class="pi pi-trash me-2"></i>Delete Selected
              </button>
              <button class="btn btn-primary-custom" @click="markAllRead">
                <i class="pi pi-check me-2"></i>Mark All Read
              </button>
            </div>
          </div>

          <!-- Messages Grid -->
          <div class="row g-4">
            <div class="col-lg-4">
              <div class="card border-0 shadow-sm messages-list">
                <div class="card-body p-0">
                  <div class="messages-header p-3 border-bottom">
                    <div class="input-group">
                      <span class="input-group-text bg-white border-end-0">
                        <i class="pi pi-search"></i>
                      </span>
                      <input
                          type="text"
                          class="form-control border-start-0"
                          placeholder="Search messages..."
                          v-model="searchQuery"
                      />
                    </div>
                  </div>

                  <div class="messages-items" v-if="!loading">
                    <div
                        v-for="message in filteredMessages"
                        :key="message.id"
                        class="message-item"
                        :class="{
                        'active': selectedMessageId === message.id,
                        'unread': !message.is_read
                      }"
                        @click="selectMessage(message)"
                    >
                      <div class="message-avatar">
                        {{ message.name.charAt(0).toUpperCase() }}
                      </div>
                      <div class="message-content">
                        <div class="d-flex justify-content-between align-items-start mb-1">
                          <h6 class="mb-0">{{ message.name }}</h6>
                          <small class="text-muted">{{ formatTimeAgo(message.created_at) }}</small>
                        </div>
                        <p class="message-subject mb-1">{{ message.subject || 'No subject' }}</p>
                        <p class="message-preview mb-0">{{ truncate(message.message, 60) }}</p>
                      </div>
                      <div v-if="!message.is_read" class="unread-indicator"></div>
                    </div>

                    <div v-if="filteredMessages.length === 0" class="text-center py-5">
                      <i class="pi pi-inbox" style="font-size: 3rem; color: #cbd5e0;"></i>
                      <p class="text-muted mt-3">No messages found</p>
                    </div>
                  </div>

                  <div v-else class="text-center py-5">
                    <ProgressSpinner style="width: 50px; height: 50px" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8">
              <div class="card border-0 shadow-sm message-detail">
                <div v-if="selectedMessage" class="card-body">
                  <div class="message-header pb-3 border-bottom mb-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div class="d-flex align-items-center gap-3">
                        <div class="message-avatar-large">
                          {{ selectedMessage.name.charAt(0).toUpperCase() }}
                        </div>
                        <div>
                          <h4 class="mb-1">{{ selectedMessage.name }}</h4>
                          <p class="text-muted mb-0">{{ selectedMessage.email }}</p>
                        </div>
                      </div>
                      <div class="message-actions">
                        <button
                            class="btn btn-sm btn-outline-primary me-2"
                            @click="toggleRead(selectedMessage)"
                        >
                          <i :class="selectedMessage.is_read ? 'pi pi-envelope' : 'pi pi-envelope-open'"></i>
                        </button>
                        <button
                            class="btn btn-sm btn-outline-danger"
                            @click="deleteMessage(selectedMessage.id)"
                        >
                          <i class="pi pi-trash"></i>
                        </button>
                      </div>
                    </div>

                    <div class="message-meta">
                      <h5 class="mb-2">{{ selectedMessage.subject || 'No Subject' }}</h5>
                      <small class="text-muted">
                        <i class="pi pi-clock me-1"></i>
                        {{ formatDate(selectedMessage.created_at) }}
                      </small>
                    </div>
                  </div>

                  <div class="message-body">
                    <p style="white-space: pre-wrap; line-height: 1.8;">{{ selectedMessage.message }}</p>
                  </div>

                  <div class="message-footer mt-4 pt-3 border-top">
                    <button class="btn btn-primary-custom me-2" @click="replyToMessage">
                      <i class="pi pi-reply me-2"></i>Reply
                    </button>
                    <button class="btn btn-outline-secondary">
                      <i class="pi pi-forward me-2"></i>Forward
                    </button>
                  </div>
                </div>

                <div v-else class="card-body text-center py-5">
                  <i class="pi pi-inbox" style="font-size: 4rem; color: #cbd5e0;"></i>
                  <h5 class="mt-4 text-muted">Select a message to view</h5>
                  <p class="text-muted">Choose a message from the list to read its contents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import ProgressSpinner from 'primevue/progressspinner';
import AdminSidebar from '../../components/admin/AdminSidebar.vue';
import AdminNavbar from '../../components/admin/AdminNavbar.vue';

const router = useRouter();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const loading = ref(true);
const messages = ref([]);
const selectedMessages = ref([]);
const selectedMessage = ref(null);
const selectedMessageId = ref(null);
const searchQuery = ref('');
const isSidebarCollapsed = ref(false);

const filteredMessages = computed(() => {
  if (!searchQuery.value) return messages.value;

  const query = searchQuery.value.toLowerCase();
  return messages.value.filter(m =>
      m.name.toLowerCase().includes(query) ||
      m.email.toLowerCase().includes(query) ||
      (m.subject && m.subject.toLowerCase().includes(query)) ||
      m.message.toLowerCase().includes(query)
  );
});

const fetchMessages = async () => {
  loading.value = true;
  try {
    // Mock data for now - replace with actual API call
    const response = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            success: true,
            messages: [
              {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                subject: 'Interested in volunteering',
                message: 'Hello, I am very interested in volunteering with your organization. I have experience working with children and would love to contribute to your education programs. Please let me know how I can get involved.',
                is_read: false,
                created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
              },
              {
                id: 2,
                name: 'Mary Johnson',
                email: 'mary.j@example.com',
                subject: 'Partnership opportunity',
                message: 'Good day! I represent a local business that would like to partner with Icon of Change LGB. We are interested in sponsoring your elderly care program. Can we schedule a meeting to discuss this further?',
                is_read: false,
                created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
              },
              {
                id: 3,
                name: 'David Smith',
                email: 'david.smith@example.com',
                subject: 'Thank you',
                message: 'I just wanted to say thank you for the amazing work you do. Your organization helped my family during a difficult time, and we are forever grateful.',
                is_read: true,
                created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
              },
              {
                id: 4,
                name: 'Sarah Williams',
                email: 'sarah.w@example.com',
                subject: 'Question about donation',
                message: 'Hi, I made a donation yesterday but haven\'t received a receipt yet. Could you please confirm if my donation was processed successfully? The reference number is IOC-ABC123.',
                is_read: true,
                created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
              },
              {
                id: 5,
                name: 'James Brown',
                email: 'james.b@example.com',
                subject: '',
                message: 'I would like to know more about your programs for elderly care in Ejisu Municipal. Do you have any information materials you can share?',
                is_read: true,
                created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
              }
            ]
          }
        });
      }, 1000);
    });

    if (response.data.success) {
      messages.value = response.data.messages;
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
  } finally {
    loading.value = false;
  }
};

const selectMessage = (message) => {
  selectedMessage.value = message;
  selectedMessageId.value = message.id;

  // Mark as read when opened
  if (!message.is_read) {
    message.is_read = true;
    // In production, make API call to update read status
  }
};

const toggleRead = (message) => {
  message.is_read = !message.is_read;
  // In production, make API call to update read status
};

const deleteMessage = (id) => {
  if (confirm('Are you sure you want to delete this message?')) {
    messages.value = messages.value.filter(m => m.id !== id);
    if (selectedMessageId.value === id) {
      selectedMessage.value = null;
      selectedMessageId.value = null;
    }
    // In production, make API call to delete
  }
};

const deleteSelected = () => {
  if (confirm(`Are you sure you want to delete ${selectedMessages.value.length} message(s)?`)) {
    const ids = selectedMessages.value.map(m => m.id);
    messages.value = messages.value.filter(m => !ids.includes(m.id));
    selectedMessages.value = [];
    // In production, make API call to delete
  }
};

const markAllRead = () => {
  messages.value.forEach(m => m.is_read = true);
  // In production, make API call to update all
};

const replyToMessage = () => {
  if (selectedMessage.value) {
    window.location.href = `mailto:${selectedMessage.value.email}?subject=Re: ${selectedMessage.value.subject || 'Your message'}`;
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const truncate = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

onMounted(() => {
  if (!localStorage.getItem('admin_token')) {
    router.push('/admin/login');
    return;
  }
  fetchMessages();
});
</script>

<style scoped>
.messages-page {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
}

.main-content {
  flex: 1;
  margin-left: 260px;
  transition: margin-left 0.3s ease;
}

.main-content.sidebar-collapsed {
  margin-left: 80px;
}

.content-area {
  padding: 2rem;
}

.messages-list {
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
}

.messages-items {
  flex: 1;
  overflow-y: auto;
}

.message-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.message-item:hover {
  background: #f8f9fa;
}

.message-item.active {
  background: #e3f2fd;
  border-left: 3px solid var(--primary-color);
}

.message-item.unread {
  background: #f0f9ff;
}

.message-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.message-avatar-large {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.5rem;
}

.message-content {
  flex: 1;
  min-width: 0;
}

.message-content h6 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2d3748;
}

.message-subject {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;
}

.message-preview {
  font-size: 0.85rem;
  color: #718096;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.unread-indicator {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background: var(--primary-color);
  border-radius: 50%;
}

.message-detail {
  height: calc(100vh - 180px);
  overflow-y: auto;
}

.message-body {
  color: #2d3748;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}
</style>