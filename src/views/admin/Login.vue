<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <div class="text-center mb-4">
          <i class="pi pi-heart-fill logo-icon mb-3"></i>
          <h2 class="fw-bold">Icon of Change LGB</h2>
          <p class="text-muted">Admin Dashboard Login</p>
        </div>

        <Toast />

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label fw-bold">Username</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="pi pi-user"></i>
              </span>
              <input
                  type="text"
                  v-model="loginForm.username"
                  class="form-control"
                  placeholder="Enter username"
                  required
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label fw-bold">Password</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="pi pi-lock"></i>
              </span>
              <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="loginForm.password"
                  class="form-control"
                  placeholder="Enter password"
                  required
              />
              <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="showPassword = !showPassword"
              >
                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
              </button>
            </div>
          </div>

          <button
              type="submit"
              class="btn btn-primary-custom w-100 mb-3"
              :disabled="isLoading"
          >
            <span v-if="isLoading">
              <i class="pi pi-spin pi-spinner me-2"></i>Logging in...
            </span>
            <span v-else>
              <i class="pi pi-sign-in me-2"></i>Login
            </span>
          </button>
        </form>

        <div class="text-center mt-4">
          <router-link to="/" class="text-muted small">
            <i class="pi pi-arrow-left me-1"></i>Back to Website
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const router = useRouter();
const toast = useToast();

const loginForm = ref({
  username: '',
  password: ''
});

const showPassword = ref(false);
const isLoading = ref(false);

const handleLogin = async () => {
  isLoading.value = true;

  // Simple authentication (in production, use proper backend authentication)
  setTimeout(() => {
    if (loginForm.value.username === 'admin' && loginForm.value.password === 'admin123') {
      // Store auth token
      localStorage.setItem('admin_token', 'authenticated');
      localStorage.setItem('admin_user', loginForm.value.username);

      toast.add({
        severity: 'success',
        summary: 'Login Successful',
        detail: 'Welcome to the admin dashboard',
        life: 3000
      });

      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1000);
    } else {
      toast.add({
        severity: 'error',
        summary: 'Login Failed',
        detail: 'Invalid username or password',
        life: 3000
      });
    }
    isLoading.value = false;
  }, 1000);
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), #1a365d);
  padding: 2rem;
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.logo-icon {
  font-size: 4rem;
  color: var(--accent-color);
  display: inline-block;
}

.input-group-text {
  background: #f7fafc;
  border-right: none;
}

.form-control {
  border-left: none;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(44, 82, 130, 0.25);
}

.input-group:focus-within .input-group-text {
  border-color: var(--primary-color);
}
</style>