<template>
  <div class="admin-navbar">
    <div class="navbar-left">
      <button class="btn-toggle" @click="toggleSidebar">
        <i class="pi pi-bars"></i>
      </button>
    </div>

    <div class="navbar-right">
      <div class="nav-item">
        <button class="btn-icon" @click="refreshPage">
          <i class="pi pi-refresh"></i>
        </button>
      </div>

<!--      <div class="nav-item">-->
<!--        <button class="btn-icon position-relative" @click="showNotifications = !showNotifications">-->
<!--          <i class="pi pi-bell"></i>-->
<!--          <span v-if="notificationCount > 0" class="notification-badge">{{ notificationCount }}</span>-->
<!--        </button>-->

<!--        &lt;!&ndash; Notifications Dropdown &ndash;&gt;-->
<!--        <div v-if="showNotifications" class="dropdown-menu notifications-dropdown">-->
<!--          <div class="dropdown-header">-->
<!--            <h6>Notifications</h6>-->
<!--            <button class="btn-sm" @click="markAllRead">Mark all read</button>-->
<!--          </div>-->
<!--          <div class="notifications-list">-->
<!--            <div v-for="notification in notifications" :key="notification.id" class="notification-item">-->
<!--              <i :class="notification.icon" :style="{ color: notification.color }"></i>-->
<!--              <div class="notification-content">-->
<!--                <p class="mb-1">{{ notification.message }}</p>-->
<!--                <small class="text-muted">{{ notification.time }}</small>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="dropdown-footer">-->
<!--            <a href="#" class="text-center d-block">View all notifications</a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="nav-item">-->
<!--        <div class="user-menu" @click="showUserMenu = !showUserMenu">-->
<!--          <div class="user-avatar">-->
<!--            <i class="pi pi-user"></i>-->
<!--          </div>-->
<!--          <div class="user-info">-->
<!--            <span class="user-name">{{ adminUser }}</span>-->
<!--            <small class="user-role">Administrator</small>-->
<!--          </div>-->
<!--          <i class="pi pi-chevron-down"></i>-->
<!--        </div>-->

<!--        &lt;!&ndash; User Dropdown &ndash;&gt;-->
<!--        <div v-if="showUserMenu" class="dropdown-menu user-dropdown">-->
<!--          <router-link to="/admin/profile" class="dropdown-item">-->
<!--            <i class="pi pi-user me-2"></i>Profile-->
<!--          </router-link>-->
<!--          <router-link to="/admin/settings" class="dropdown-item">-->
<!--            <i class="pi pi-cog me-2"></i>Settings-->
<!--          </router-link>-->
<!--          <div class="dropdown-divider"></div>-->
<!--          <button @click="handleLogout" class="dropdown-item text-danger">-->
<!--            <i class="pi pi-sign-out me-2"></i>Logout-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['toggle-sidebar']);

const router = useRouter();
const adminUser = ref(localStorage.getItem('admin_user') || 'Admin');
const showNotifications = ref(false);
const showUserMenu = ref(false);
const notificationCount = ref(3);

const notifications = ref([
  {
    id: 1,
    icon: 'pi pi-dollar',
    color: '#48bb78',
    message: 'New donation of GHS 500 received',
    time: '5 minutes ago'
  },
  {
    id: 2,
    icon: 'pi pi-envelope',
    color: '#4299e1',
    message: 'New contact message from John Doe',
    time: '1 hour ago'
  },
  {
    id: 3,
    icon: 'pi pi-check-circle',
    color: '#ed8936',
    message: 'Monthly report is ready',
    time: '2 hours ago'
  }
]);

const toggleSidebar = () => {
  emit('toggle-sidebar');
};

const refreshPage = () => {
  window.location.reload();
};

const markAllRead = () => {
  notificationCount.value = 0;
};

const handleLogout = () => {
  localStorage.removeItem('admin_token');
  localStorage.removeItem('admin_user');
  router.push('/admin/login');
};

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.nav-item')) {
    showNotifications.value = false;
    showUserMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.admin-navbar {
  background: white;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4a5568;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-toggle:hover {
  background: #f7fafc;
}

.btn-icon {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #4a5568;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.btn-icon:hover {
  background: #f7fafc;
}

.notification-badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #e53e3e;
  color: white;
  font-size: 0.65rem;
  padding: 0.15rem 0.35rem;
  border-radius: 10px;
  font-weight: 600;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-menu:hover {
  background: #f7fafc;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
}

.user-role {
  color: #718096;
  font-size: 0.75rem;
}

.nav-item {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  z-index: 1000;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notifications-dropdown {
  min-width: 350px;
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dropdown-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-header h6 {
  margin: 0;
  font-weight: 600;
  color: #2d3748;
}

.dropdown-header .btn-sm {
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 0.85rem;
  cursor: pointer;
}

.notifications-list {
  max-height: 350px;
  overflow-y: auto;
}

.notification-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #f7fafc;
  transition: background 0.3s ease;
}

.notification-item:hover {
  background: #f7fafc;
}

.notification-item i {
  font-size: 1.5rem;
  margin-top: 0.25rem;
}

.notification-content {
  flex: 1;
}

.notification-content p {
  color: #2d3748;
  font-size: 0.9rem;
}

.dropdown-footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #e2e8f0;
}

.dropdown-footer a {
  color: var(--primary-color);
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
}

.user-dropdown {
  min-width: 200px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  color: #2d3748;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f7fafc;
}

.dropdown-item.text-danger {
  color: #e53e3e;
}

.dropdown-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .admin-navbar {
    padding: 0 1rem;
  }

  .user-info {
    display: none;
  }
}
</style>