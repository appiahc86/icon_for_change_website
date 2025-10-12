<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <i class="pi pi-heart-fill me-2" style="font-size: 1.8rem; color: var(--accent-color);"></i>
        <span class="fw-bold" style="color: var(--primary-color);">Icon of Change LGB</span>
      </router-link>

      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/programs" class="nav-link">Programs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/impact" class="nav-link">Our Impact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link">Gallery</router-link>
          </li>
          <li class="nav-item ms-lg-3">
            <router-link to="/donate" class="btn btn-primary-custom btn-sm text-white">
              <i class="pi pi-heart me-1"></i> Donate Now
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No props or logic needed for this component
</script>

<style scoped>
.navbar {
  padding: 1rem 0;
}

.nav-link {
  font-weight: 500;
  color: var(--text-dark);
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.router-link-active.nav-link {
  color: var(--primary-color);
  font-weight: 600;
}

.navbar-brand {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}
</style>