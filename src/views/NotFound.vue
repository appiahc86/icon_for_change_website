<template>
    <div class="not-found-container">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center">
            <div class="not-found-content">
              <!-- Ghana accent -->
              <div class="ghana-accent mb-4 mx-auto" style="width: 80px;"></div>
              
              <!-- 404 Illustration -->
              <div class="error-illustration mb-4">
                <div class="error-number">404</div>
                <div class="error-icon">
                  <i class="pi pi-exclamation-triangle text-warning"></i>
                </div>
              </div>
              
              <!-- Error Message -->
              <h1 class="h2 mb-3">Page Not Found</h1>
              <p class="lead text-muted mb-4">
                Sorry, the page you're looking for doesn't exist or has been moved.
              </p>
              
              <!-- Suggestions -->
              <div class="suggestions mb-4">
                <h6 class="text-muted mb-3">Here are some helpful links:</h6>
                <div class="row g-2">
                  <div class="col-sm-6">
                    <router-link to="/" class="suggestion-link">
                      <i class="pi pi-home me-2"></i>
                      Go Home
                    </router-link>
                  </div>
                  <div class="col-sm-6">
                    <router-link :to="{name: 'AdminLogin'}"
                                 v-if="authStore.isAuthenticated"
                                 class="suggestion-link">
                      <i class="pi pi-sign-in me-2"></i>
                      Login
                    </router-link>
                  </div>
                  <div class="col-sm-6">
                    <router-link 
                      v-if="authStore.isAuthenticated" 
                      to="/admin/dashboard"
                      class="suggestion-link"
                    >
                      <i class="pi pi-th-large me-2"></i>
                      Dashboard
                    </router-link>
                  </div>
                </div>
              </div>
              
              <!-- Back Button -->
              <Button 
                label="Go Back"
                icon="pi pi-arrow-left"
                class="p-button-outlined"
                @click="goBack"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/auth'
  
  const router = useRouter()
  const authStore = useAuthStore()
  
  const goBack = () => {
    if (window.history.length > 1) {
      router.go(-1)
    } else {
      router.push('/')
    }
  }

  console.log(authStore.isAuthenticated)

  </script>
  
  <style scoped lang="css">
  .not-found-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }
  
  .not-found-content {
    padding: 2rem;
  }
  
  .ghana-accent {
    background: linear-gradient(90deg, #ce1126 0%, #fcd116 50%, #006b3f 100%);
    height: 4px;
    border-radius: 2px;
  }
  
  .error-illustration {
    position: relative;
    margin-bottom: 2rem;
    
    .error-number {
      font-size: 8rem;
      font-weight: 900;
      color: #e2e8f0;
      line-height: 1;
      margin-bottom: 1rem;
      
      @media (max-width: 768px) {
        font-size: 6rem;
      }
    }
    
    .error-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      i {
        font-size: 3rem;
        
        @media (max-width: 768px) {
          font-size: 2rem;
        }
      }
    }
  }
  
  .suggestions {
    .suggestion-link {
      display: block;
      padding: 0.75rem 1rem;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      text-decoration: none;
      color: #475569;
      transition: all 0.2s ease;
      margin-bottom: 0.5rem;
      
      &:hover {
        background: #f1f5f9;
        border-color: #3b82f6;
        color: #3b82f6;
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      i {
        color: #3b82f6;
      }
    }
  }
  
  @media (max-width: 576px) {
    .not-found-content {
      padding: 1rem;
    }
    
    .suggestions .suggestion-link {
      font-size: 0.9rem;
      padding: 0.6rem 0.8rem;
    }
  }
  </style>