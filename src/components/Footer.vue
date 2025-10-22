<template>
  <footer class="footer bg-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="d-flex align-items-center mb-3">
            <i class="pi pi-heart-fill me-2" style="font-size: 2rem; color: var(--accent-color);"></i>
            <h5 class="mb-0">Icon of Change LGB</h5>
          </div>
          <p class="text-light">
            Creating a society where children and the elderly thrive in safety, dignity, and hope.
          </p>
          <div class="social-icons">
            <a href="#" class="me-3"><i class="pi pi-facebook"></i></a>
            <a href="#" class="me-3"><i class="pi pi-twitter"></i></a>
            <a href="#" class="me-3"><i class="pi pi-instagram"></i></a>
            <a href="#"><i class="pi pi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 mb-4">
          <h5 class="mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="footer-link">Home</router-link></li>
            <li><router-link to="/about" class="footer-link">About Us</router-link></li>
            <li><router-link to="/programs" class="footer-link">Programs</router-link></li>
            <li><router-link to="/schools" class="footer-link">Schools</router-link></li>
            <li><router-link to="/impact" class="footer-link">Impact</router-link></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3">Get Involved</h5>
          <ul class="list-unstyled">
            <li><router-link to="/donate" class="footer-link">Donate</router-link></li>
            <li><a href="#" class="footer-link">Volunteer</a></li>
            <li><a href="#" class="footer-link">Partner</a></li>
            <li><router-link to="/contact" class="footer-link">Contact</router-link></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3">Contact Info</h5>
          <ul class="list-unstyled contact-info">
            <li>
              <i class="pi pi-map-marker me-2"></i>
              Kumasi, Ashanti Region, Ghana
            </li>
            <li>
              <i class="pi pi-phone me-2"></i>
              +233 20 120 8960
            </li>
            <li>
              <i class="pi pi-envelope me-2"></i>
              info@iconghana.org
            </li>
          </ul>
        </div>
      </div>

      <hr class="bg-secondary my-4">

      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">&copy; {{ currentYear }} Icon of Change LGB Ghana. All rights reserved.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <a href="#" class="footer-link me-3">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  margin-top: 5rem;
}

.footer-link {
  color: #cbd5e0;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.footer-link:hover {
  color: var(--secondary-color);
}

.social-icons a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--secondary-color);
}

.contact-info li {
  margin-bottom: 0.8rem;
  color: #cbd5e0;
}

h5 {
  color: var(--secondary-color);
}
</style>