<template>
  <div id="app">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'primeicons/primeicons.css';

:root {
  --primary-color: #2c5282;
  --secondary-color: #48bb78;
  --accent-color: #ed8936;
  --text-dark: #2d3748;
  --text-light: #718096;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-dark);
  line-height: 1.6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--secondary-color);
  margin-top: 0.5rem;
}

.btn-primary-custom {
  background: var(--primary-color);
  border: none;
  padding: 12px 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary-custom:hover {
  background: #1a365d;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 82, 130, 0.3);
}

.btn-secondary-custom {
  background: var(--secondary-color);
  border: none;
  padding: 12px 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary-custom:hover {
  background: #38a169;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
</style>