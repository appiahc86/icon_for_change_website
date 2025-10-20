<template>
  <div class="admin-sidebar" :class="{ 'collapsed': props.isCollapsed, 'show': props.isMobileOpen }">
    <div class="sidebar-header">
      <div class="logo">
        <i class="pi pi-heart-fill"></i>
        <span v-if="!props.isCollapsed">Icon of Change</span>
      </div>
    </div>

    <nav class="sidebar-nav">
      <router-link
          to="/admin/dashboard"
          class="nav-item"
          :class="{ 'active': activeMenu === 'dashboard' }"
      >
        <i class="pi pi-home"></i>
        <span v-if="!props.isCollapsed">Dashboard</span>
      </router-link>

      <router-link
          to="/admin/donations"
          class="nav-item"
          :class="{ 'active': activeMenu === 'donations' }"
      >
        <i class="pi pi-dollar"></i>
        <span v-if="!props.isCollapsed">Donations</span>

      </router-link>

<!--      <router-link-->
<!--          to="/admin/donators"-->
<!--          class="nav-item"-->
<!--          :class="{ 'active': activeMenu === 'donators' }"-->
<!--      >-->
<!--        <i class="pi pi-users"></i>-->
<!--        <span v-if="!props.isCollapsed">Donators</span>-->
<!--      </router-link>-->

<!--      <router-link-->
<!--          to="/admin/messages"-->
<!--          class="nav-item"-->
<!--          :class="{ 'active': activeMenu === 'messages' }"-->
<!--      >-->
<!--        <i class="pi pi-envelope"></i>-->
<!--        <span v-if="!props.isCollapsed">Messages</span>-->
<!--        <span v-if="!props.isCollapsed && unreadCount > 0" class="badge badge-danger">{{ unreadCount }}</span>-->
<!--      </router-link>-->

      <div class="nav-divider" v-if="!props.isCollapsed"></div>

<!--      <router-link-->
<!--          to="/admin/settings"-->
<!--          class="nav-item"-->
<!--          :class="{ 'active': activeMenu === 'settings' }"-->
<!--      >-->
<!--        <i class="pi pi-cog"></i>-->
<!--        <span v-if="!props.isCollapsed">Settings</span>-->
<!--      </router-link>-->

      <a href="/" target="_blank" class="nav-item">
        <i class="pi pi-external-link"></i>
        <span v-if="!props.isCollapsed">View Website</span>
      </a>
    </nav>

    <div class="sidebar-footer">
      <button class="btn-logout" @click="handleLogout">
        <i class="pi pi-sign-out"></i>
        <span v-if="!props.isCollapsed">Logout</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {useAuthStore} from "@/stores/auth.js";
const authStore = useAuthStore();

const props = defineProps({
  activeMenu: {
    type: String,
    default: 'dashboard'
  },
  isCollapsed: {
    type: Boolean,
    default: false
  },
  isMobileOpen: {
    type: Boolean,
    default: false
  }
});

const router = useRouter();
const donationCount = ref(12);
const unreadCount = ref(5);

const handleLogout = () => {
  authStore.clearAuth();
  router.push('/admin/login');
};
</script>

<style scoped>
.admin-sidebar {
  width: 260px;
  background: linear-gradient(180deg, #2c5282 0%, #1a365d 100%);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, transform 0.3s ease;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  will-change: transform, width;
  contain: layout style paint;
}

.admin-sidebar.collapsed {
  width: 80px;
}

.admin-sidebar.collapsed .logo {
  justify-content: center;
}

.admin-sidebar.collapsed .nav-item {
  justify-content: center;
  padding: 0.875rem 0;
}

.admin-sidebar.collapsed .nav-item.active {
  border-left: none;
  border-right: 4px solid var(--accent-color);
}

.admin-sidebar.collapsed .btn-logout {
  justify-content: center;
  padding: 0.875rem 0;
}

.admin-sidebar.collapsed span {
  display: none;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
}

.logo i {
  font-size: 1.5rem;
  color: var(--accent-color);
  flex-shrink: 0;
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-left: 4px solid var(--accent-color);
}

.nav-item i {
  font-size: 1.25rem;
  width: 24px;
  text-align: center;
}

.badge {
  margin-left: auto;
  background: var(--accent-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
}

.badge-danger {
  background: #e53e3e;
}

.nav-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 1.5rem;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-logout {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.875rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.btn-logout:hover {
  background: rgba(255, 255, 255, 0.2);
}

.btn-logout i {
  font-size: 1.25rem;
}

@media (min-width: 769px) and (max-width: 991px) {
  .admin-sidebar {
    width: 80px;
  }

  .admin-sidebar .logo {
    justify-content: center;
  }

  .admin-sidebar .nav-item {
    justify-content: center;
    padding: 0.875rem 0;
  }

  .admin-sidebar .nav-item.active {
    border-left: none;
    border-right: 4px solid var(--accent-color);
  }

  .admin-sidebar .btn-logout {
    justify-content: center;
    padding: 0.875rem 0;
  }

  .admin-sidebar span {
    display: none;
  }
}

@media (max-width: 768px) {
  .admin-sidebar {
    transform: translateX(-100%);
  }

  .admin-sidebar.show {
    transform: translateX(0);
  }
}
</style>