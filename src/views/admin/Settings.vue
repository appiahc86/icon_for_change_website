<template>
  <div class="settings-page">
    <AdminSidebar :active-menu="'settings'" :is-collapsed="isSidebarCollapsed" :is-mobile-open="isMobileOpen" />

    <!-- Mobile Overlay -->
    <div v-if="isMobileOpen" class="mobile-overlay" @click="closeMobileSidebar"></div>

    <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <AdminNavbar @toggle-sidebar="toggleSidebar" />

      <div class="content-area">
        <div class="container-fluid">
          <!-- Header -->
          <div class="mb-4">
            <h2 class="fw-bold mb-1">Settings</h2>
            <p class="text-muted mb-0">Manage your account and application settings</p>
          </div>

          <div class="row g-4">
            <!-- Settings Navigation -->
            <div class="col-lg-3">
              <div class="card border-0 shadow-sm">
                <div class="list-group list-group-flush">
                  <a
                      href="#"
                      class="list-group-item list-group-item-action"
                      :class="{ active: activeTab === 'profile' }"
                      @click.prevent="activeTab = 'profile'"
                  >
                    <i class="pi pi-user me-2"></i>Profile
                  </a>
                  <a
                      href="#"
                      class="list-group-item list-group-item-action"
                      :class="{ active: activeTab === 'security' }"
                      @click.prevent="activeTab = 'security'"
                  >
                    <i class="pi pi-shield me-2"></i>Security
                  </a>
                  <a
                      href="#"
                      class="list-group-item list-group-item-action"
                      :class="{ active: activeTab === 'notifications' }"
                      @click.prevent="activeTab = 'notifications'"
                  >
                    <i class="pi pi-bell me-2"></i>Notifications
                  </a>
                  <a
                      href="#"
                      class="list-group-item list-group-item-action"
                      :class="{ active: activeTab === 'general' }"
                      @click.prevent="activeTab = 'general'"
                  >
                    <i class="pi pi-cog me-2"></i>General
                  </a>
                </div>
              </div>
            </div>

            <!-- Settings Content -->
            <div class="col-lg-9">
              <!-- Profile Settings -->
              <div v-if="activeTab === 'profile'" class="card border-0 shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Profile Information</h5>
                </div>
                <div class="card-body">
                  <Toast />

                  <form @submit.prevent="saveProfile">
                    <div class="text-center mb-4">
                      <div class="profile-avatar-large mx-auto mb-3">
                        <i class="pi pi-user"></i>
                      </div>
                      <button type="button" class="btn btn-sm btn-outline-primary">
                        <i class="pi pi-camera me-2"></i>Change Photo
                      </button>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label fw-bold">Full Name</label>
                        <input type="text" class="form-control" v-model="profile.name" required />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label fw-bold">Email</label>
                        <input type="email" class="form-control" v-model="profile.email" required />
                      </div>
                    </div>

                    <div class="row mb-3">
                      <div class="col-md-6">
                        <label class="form-label fw-bold">Phone</label>
                        <input type="tel" class="form-control" v-model="profile.phone" />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label fw-bold">Role</label>
                        <input type="text" class="form-control" v-model="profile.role" disabled />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label class="form-label fw-bold">Bio</label>
                      <textarea class="form-control" rows="4" v-model="profile.bio"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary-custom">
                      <i class="pi pi-save me-2"></i>Save Changes
                    </button>
                  </form>
                </div>
              </div>

              <!-- Security Settings -->
              <div v-if="activeTab === 'security'" class="card border-0 shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Security Settings</h5>
                </div>
                <div class="card-body">
                  <Toast />

                  <form @submit.prevent="changePassword">
                    <h6 class="mb-3">Change Password</h6>

                    <div class="mb-3">
                      <label class="form-label fw-bold">Current Password</label>
                      <input
                          type="password"
                          class="form-control"
                          v-model="security.currentPassword"
                          required
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label fw-bold">New Password</label>
                      <input
                          type="password"
                          class="form-control"
                          v-model="security.newPassword"
                          required
                      />
                      <small class="text-muted">Minimum 8 characters</small>
                    </div>

                    <div class="mb-4">
                      <label class="form-label fw-bold">Confirm New Password</label>
                      <input
                          type="password"
                          class="form-control"
                          v-model="security.confirmPassword"
                          required
                      />
                    </div>

                    <button type="submit" class="btn btn-primary-custom">
                      <i class="pi pi-lock me-2"></i>Update Password
                    </button>
                  </form>

                  <hr class="my-4">

                  <h6 class="mb-3">Two-Factor Authentication</h6>
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <p class="mb-1">Enable two-factor authentication for extra security</p>
                      <small class="text-muted">Recommended for all admin accounts</small>
                    </div>
                    <div class="form-check form-switch">
                      <input
                          class="form-check-input"
                          type="checkbox"
                          v-model="security.twoFactor"
                          style="width: 3rem; height: 1.5rem;"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notifications Settings -->
              <div v-if="activeTab === 'notifications'" class="card border-0 shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Notification Preferences</h5>
                </div>
                <div class="card-body">
                  <Toast />

                  <div class="notification-item">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 class="mb-1">Email Notifications</h6>
                        <small class="text-muted">Receive email notifications for important events</small>
                      </div>
                      <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="notifications.email"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="notification-item">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 class="mb-1">New Donations</h6>
                        <small class="text-muted">Get notified when new donations are received</small>
                      </div>
                      <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="notifications.newDonations"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="notification-item">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 class="mb-1">New Messages</h6>
                        <small class="text-muted">Get notified when new contact messages arrive</small>
                      </div>
                      <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="notifications.newMessages"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="notification-item">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h6 class="mb-1">Weekly Reports</h6>
                        <small class="text-muted">Receive weekly summary reports</small>
                      </div>
                      <div class="form-check form-switch">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="notifications.weeklyReports"
                        />
                      </div>
                    </div>
                  </div>

                  <button @click="saveNotifications" class="btn btn-primary-custom mt-3">
                    <i class="pi pi-save me-2"></i>Save Preferences
                  </button>
                </div>
              </div>

              <!-- General Settings -->
              <div v-if="activeTab === 'general'" class="card border-0 shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="mb-0">General Settings</h5>
                </div>
                <div class="card-body">
                  <Toast />

                  <div class="mb-4">
                    <label class="form-label fw-bold">Language</label>
                    <select class="form-select" v-model="general.language">
                      <option value="en">English</option>
                      <option value="tw">Twi</option>
                      <option value="ga">Ga</option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <label class="form-label fw-bold">Timezone</label>
                    <select class="form-select" v-model="general.timezone">
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                      <option value="WAT">WAT (West Africa Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <label class="form-label fw-bold">Currency Display</label>
                    <select class="form-select" v-model="general.currency">
                      <option value="GHS">GHS (₵)</option>
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                  </div>

                  <div class="mb-4">
                    <h6>Data Management</h6>
                    <button class="btn btn-outline-primary me-2">
                      <i class="pi pi-download me-2"></i>Export All Data
                    </button>
                    <button class="btn btn-outline-danger">
                      <i class="pi pi-trash me-2"></i>Clear Cache
                    </button>
                  </div>

                  <button @click="saveGeneral" class="btn btn-primary-custom">
                    <i class="pi pi-save me-2"></i>Save Settings
                  </button>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import AdminSidebar from '../../components/admin/AdminSidebar.vue';
import AdminNavbar from '../../components/admin/AdminNavbar.vue';

const router = useRouter();
const toast = useToast();
const activeTab = ref('profile');
const isSidebarCollapsed = ref(false);
const isMobileOpen = ref(false);

const profile = ref({
  name: 'Admin User',
  email: 'admin@iconofchange.org',
  phone: '+233 XX XXX XXXX',
  role: 'Administrator',
  bio: ''
});

const security = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  twoFactor: false
});

const notifications = ref({
  email: true,
  newDonations: true,
  newMessages: true,
  weeklyReports: false
});

const general = ref({
  language: 'en',
  timezone: 'GMT',
  currency: 'GHS'
});

const saveProfile = () => {
  toast.add({
    severity: 'success',
    summary: 'Profile Updated',
    detail: 'Your profile has been updated successfully',
    life: 3000
  });
};

const changePassword = () => {
  if (security.value.newPassword !== security.value.confirmPassword) {
    toast.add({
      severity: 'error',
      summary: 'Password Mismatch',
      detail: 'New password and confirmation do not match',
      life: 3000
    });
    return;
  }

  toast.add({
    severity: 'success',
    summary: 'Password Updated',
    detail: 'Your password has been changed successfully',
    life: 3000
  });

  security.value = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactor: security.value.twoFactor
  };
};

const saveNotifications = () => {
  toast.add({
    severity: 'success',
    summary: 'Preferences Saved',
    detail: 'Your notification preferences have been updated',
    life: 3000
  });
};

const saveGeneral = () => {
  toast.add({
    severity: 'success',
    summary: 'Settings Saved',
    detail: 'General settings have been updated successfully',
    life: 3000
  });
};

const toggleSidebar = () => {
  // On mobile, toggle the mobile open state
  if (window.innerWidth <= 768) {
    isMobileOpen.value = !isMobileOpen.value;
  } else {
    // On desktop, toggle collapse state
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
  }
};

const closeMobileSidebar = () => {
  isMobileOpen.value = false;
};

onMounted(() => {
  if (!localStorage.getItem('admin_token')) {
    router.push('/admin/login');
  }
});
</script>

<style scoped>
.settings-page {
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

.list-group-item {
  border: none;
  padding: 1rem 1.25rem;
  color: #4a5568;
  transition: all 0.3s ease;
}

.list-group-item:hover {
  background: #f7fafc;
  color: var(--primary-color);
}

.list-group-item.active {
  background: var(--primary-color);
  color: white;
}

.profile-avatar-large {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.notification-item {
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.notification-item:last-child {
  border-bottom: none;
}

.form-check-input {
  cursor: pointer;
}

.form-check-input:checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>