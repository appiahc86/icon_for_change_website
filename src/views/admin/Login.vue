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
            <label class="form-label fw-bold">Email</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="pi pi-user"></i>
              </span>
              <input
                  type="email"
                  v-model="loginForm.email"
                  :class="['form-control', { 'is-invalid': errors.email }]"
                  placeholder="Enter email"
                  @blur="validateEmail"
                  @input="errors.email = ''"
              />
            </div>
            <div v-if="errors.email" class="invalid-feedback d-block">
              {{ errors.email }}
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
                  :class="['form-control', { 'is-invalid': errors.password }]"
                  placeholder="Enter password"
                  @blur="validatePassword"
                  @input="errors.password = ''"
              />
              <button
                  class="btn btn-outline-secondary"
                  type="button"
                  @click="showPassword = !showPassword"
              >
                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
              </button>
            </div>
            <div v-if="errors.password" class="invalid-feedback d-block">
              {{ errors.password }}
            </div>
          </div>

          <button
              type="submit"
              class="btn btn-dark w-100 mb-3"
              :disabled="authStore.isLoading"
          >
            <span v-if="authStore.isLoading">
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
import {reactive, ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const toast = useToast();

const loginForm = reactive({
  email: '',
  password: ''
});

const errors = reactive({
  email: '',
  password: ''
});

const showPassword = ref(false);
const isLoading = ref(false);

// Email validation function
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!loginForm.email) {
    errors.email = 'Email is required';
    return false;
  } else if (!emailRegex.test(loginForm.email)) {
    errors.email = 'Please enter a valid email address';
    return false;
  } else {
    errors.email = '';
    return true;
  }
};

// Password validation function
const validatePassword = () => {
  if (!loginForm.password) {
    errors.password = 'Password is required';
    return false;
  } else if (loginForm.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
    return false;
  } else {
    errors.password = '';
    return true;
  }
};

// Validate all fields
const validateForm = () => {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  return isEmailValid && isPasswordValid;
};

const handleLogin = async () => {
  // Validate form before submission
  if (!validateForm()) {
    toast.add({
      severity: 'error',
      summary: 'Validation Error',
      detail: 'Please fix the errors in the form',
      life: 3000
    });
    return;
  }

  try {
    const response = await authStore.login(loginForm.email, loginForm.password);

   if (response.success) {
     // Redirect to intended page or dashboard
     const redirectPath = route.query.redirect || '/admin/dashboard'
     authStore.initializeAuth();
     router.push(redirectPath)

   } else {
     // Handle login failure
     toast.add({
       severity: 'error',
       summary: 'Login Failed',
       detail: response.message || 'Invalid email or password',
       life: 4000
     });
   }

  } catch (e) {
    console.error('Login error:', e);
    toast.add({
      severity: 'error',
      summary: 'Login Error',
      detail: e?.response?.data?.message || 'An error occurred during login. Please try again.',
      life: 4000
    });

  }
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

.form-control.is-invalid {
  border-left: 1px solid #dc3545;
}

.form-control.is-invalid ~ .btn {
  border-color: #dc3545;
}

.input-group:has(.form-control.is-invalid) .input-group-text {
  border-color: #dc3545;
  color: #dc3545;
}

.invalid-feedback {
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>