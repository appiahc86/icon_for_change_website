<template>
  <Navbar />
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section" ref="heroSection">
      <div class="hero-overlay">
        <div class="hero-particles"></div>
        <div class="container">
          <div class="row align-items-center min-vh-75">
            <div class="col-lg-7">
              <h1 class="hero-title display-3 fw-bold text-white mb-4 fade-in-up">
                Empowering Children & Elderly with Love and Care
              </h1>
              <p class="hero-subtitle text-white fs-5 mb-4 fade-in-up" style="animation-delay: 0.2s">
                Join us in creating a society where every child and elderly person thrives in dignity, safety, and hope.
              </p>
              <div class="fade-in-up" style="animation-delay: 0.4s">
                <router-link to="/donate" class="btn btn-primary-custom text-white btn-lg me-3 mb-2 btn-pulse">
                  <i class="pi pi-heart me-2"></i>Donate Now
                </router-link>
                <router-link to="/about" class="btn btn-outline-light btn-lg mb-2 btn-hover-fill">
                  Learn More
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5 bg-light" ref="statsSection">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="stat-card p-4 animate-on-scroll" data-animation="fade-in-up">
              <i class="pi pi-users stat-icon mb-3"></i>
              <h2 class="stat-number" data-target="582">{{ animatedStats.children }}+</h2>
              <p class="stat-label">Children Supported</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="stat-card p-4 animate-on-scroll" data-animation="fade-in-up" style="animation-delay: 0.1s">
              <i class="pi pi-heart stat-icon mb-3"></i>
              <h2 class="stat-number" data-target="101">{{ animatedStats.elderly }}+</h2>
              <p class="stat-label">Elderly Cared For</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="stat-card p-4 animate-on-scroll" data-animation="fade-in-up" style="animation-delay: 0.2s">
              <i class="pi pi-home stat-icon mb-3"></i>
              <h2 class="stat-number" data-target="3">{{ animatedStats.districts }}</h2>
              <p class="stat-label">Districts Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="about-preview py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 animate-on-scroll" data-animation="slide-in-left">
            <div class="image-wrapper">
              <img src="/images/home/home1.jpeg"
                   alt="Children playing"
                   class="img-fluid rounded shadow-lg">
              <div class="image-overlay">
                <div class="overlay-content">
                  <i class="pi pi-heart text-white" style="font-size: 3rem;"></i>
                  <p class="text-white fw-bold mt-2">Making a Difference</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4 animate-on-scroll" data-animation="slide-in-right">
            <h2 class="section-title">About Icon of Change LGB</h2>
            <div class="title-underline mb-4"></div>
            <p class="lead text-muted mb-4">
              We are a non-profit, community-driven organization committed to improving the quality of life for children and the elderly in Ghana.
            </p>
            <p class="text-muted mb-4">
              Founded on the principles of compassion, dignity, and social justice, we work to bridge gaps in care, education, health, and support by creating sustainable solutions that empower individuals and communities.
            </p>
            <div class="mission-highlights mb-4">
              <div class="highlight-item d-flex align-items-start mb-3">
                <i class="pi pi-check-circle text-success me-3 mt-1" style="font-size: 1.5rem;"></i>
                <div>
                  <strong>Community-Driven Approach</strong>
                  <p class="text-muted mb-0">Working hand-in-hand with local communities</p>
                </div>
              </div>
              <div class="highlight-item d-flex align-items-start mb-3">
                <i class="pi pi-check-circle text-success me-3 mt-1" style="font-size: 1.5rem;"></i>
                <div>
                  <strong>Sustainable Solutions</strong>
                  <p class="text-muted mb-0">Creating lasting impact through strategic programs</p>
                </div>
              </div>
              <div class="highlight-item d-flex align-items-start">
                <i class="pi pi-check-circle text-success me-3 mt-1" style="font-size: 1.5rem;"></i>
                <div>
                  <strong>Dignity & Respect</strong>
                  <p class="text-muted mb-0">Treating every individual with compassion</p>
                </div>
              </div>
            </div>
            <router-link to="/about" class="btn btn-primary-custom text-white btn-animated">
              Discover Our Story <i class="pi pi-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Focus Areas Section -->
    <section class="focus-areas py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Our Focus Areas</h2>
          <p class="lead text-muted mt-3">Making a difference where it matters most</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="focus-card card h-100 border-0 shadow-sm card-hover">
              <div class="card-body p-4 text-center">
                <div class="focus-icon mb-3">
                  <i class="pi pi-sun"></i>
                </div>
                <h4 class="card-title mb-3">Children's Welfare & Education</h4>
                <p class="card-text text-muted">
                  Supporting access to quality education, providing school supplies, scholarships, and running child-protection campaigns.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="focus-card card h-100 border-0 shadow-sm card-hover">
              <div class="card-body p-4 text-center">
                <div class="focus-icon mb-3">
                  <i class="pi pi-users"></i>
                </div>
                <h4 class="card-title mb-3">Elderly Care & Support</h4>
                <p class="card-text text-muted">
                  Providing health screenings, medical care, feeding initiatives, and promoting intergenerational engagement.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="focus-card card h-100 border-0 shadow-sm card-hover">
              <div class="card-body p-4 text-center">
                <div class="focus-icon mb-3">
                  <i class="pi pi-globe"></i>
                </div>
                <h4 class="card-title mb-3">Community Empowerment</h4>
                <p class="card-text text-muted">
                  Advocacy campaigns, skills training for caregivers, and building sustainable partnerships for lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured School Section -->
    <section class="featured-school py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Our School</h2>
          <p class="lead text-muted mt-3">Empowering the next generation through quality education</p>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 animate-on-scroll" data-animation="slide-in-left">
            <div class="school-image-wrapper">
              <img src="/images/schools/kontoh/main.jpeg"
                   alt="Kontoh Educational Complex"
                   class="img-fluid rounded shadow-lg"
                   @error="handleImageError">
              <div class="school-badge">
                <i class="pi pi-building"></i>
                <span>Our School</span>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4 animate-on-scroll" data-animation="slide-in-right">
            <div class="school-content">
              <h3 class="display-6 fw-bold mb-3">Kontoh Educational Complex</h3>
              <div class="school-location mb-4">
                <i class="pi pi-map-marker text-primary me-2"></i>
                <span class="text-muted">Fumesua, Ashanti Region, Ghana</span>
              </div>

              <p class="lead mb-4">
                A beacon of hope and learning, providing quality basic education to children in the Fumesua community.
              </p>

              <div class="school-stats-mini mb-4">
                <div class="row text-center">
                  <div class="col-4">
                    <div class="mini-stat">
                      <h4 class="text-primary mb-1">350+</h4>
                      <p class="text-muted small mb-0">Students</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mini-stat">
                      <h4 class="text-primary mb-1">18</h4>
                      <p class="text-muted small mb-0">Teachers</p>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mini-stat">
                      <h4 class="text-primary mb-1">12</h4>
                      <p class="text-muted small mb-0">Classrooms</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="school-highlights mb-4">
                <div class="highlight-item d-flex align-items-start mb-2">
                  <i class="pi pi-check text-success me-2 mt-1"></i>
                  <span>Quality basic education programs</span>
                </div>
                <div class="highlight-item d-flex align-items-start mb-2">
                  <i class="pi pi-check text-success me-2 mt-1"></i>
                  <span>Modern learning facilities</span>
                </div>
                <div class="highlight-item d-flex align-items-start mb-2">
                  <i class="pi pi-check text-success me-2 mt-1"></i>
                  <span>Dedicated teaching staff</span>
                </div>
              </div>

              <div class="school-actions">
                <router-link to="/schools" class="btn btn-primary-custom text-white me-3">
                  <i class="pi pi-info-circle me-2"></i>Learn More
                </router-link>
                <router-link to="/donate" class="btn btn-outline-primary">
                  <i class="pi pi-heart me-2"></i>Support the School
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved Section -->
    <section class="get-involved py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Get Involved</h2>
          <p class="lead text-muted mt-3">Together, we can create lasting change</p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="involvement-card text-center p-4">
              <i class="pi pi-heart involvement-icon mb-3"></i>
              <h4 class="mb-3">Donate</h4>
              <p class="text-muted mb-4">Support our projects to sustain children's education and elderly care programs.</p>
              <router-link to="/donate" class="btn btn-primary-custom text-white">Donate Now</router-link>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="involvement-card text-center p-4">
              <i class="pi pi-users involvement-icon mb-3"></i>
              <h4 class="mb-3">Volunteer</h4>
              <p class="text-muted mb-4">Join our programs and make a direct impact in the lives of those we serve.</p>
              <router-link to="/contact" class="btn btn-secondary-custom">Join Us</router-link>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="involvement-card text-center p-4">
              <i class="pi pi-building involvement-icon mb-3"></i>
              <h4 class="mb-3">Partner</h4>
              <p class="text-muted mb-4">Collaborate with us for greater outreach and sustainable community development.</p>
              <router-link to="/contact" class="btn btn-secondary-custom">Partner With Us</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Impact Stories</h2>
          <p class="lead text-muted mt-3">Hear from those whose lives we've touched</p>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm">
              <div class="mb-3">
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
              </div>
              <p class="testimonial-text mb-3">
                "Icon of Change gave my children hope when we had none. The educational support has transformed their future."
              </p>
              <div class="testimonial-author">
                <strong>Grace A.</strong>
                <span class="text-muted d-block">Parent, Assin Central</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 mb-4">
            <div class="testimonial-card p-4 bg-white rounded shadow-sm">
              <div class="mb-3">
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
              </div>
              <p class="testimonial-text mb-3">
                "The care and respect shown to our elderly community members is heartwarming. This organization truly values human dignity."
              </p>
              <div class="testimonial-author">
                <strong>Kwame O.</strong>
                <span class="text-muted d-block">Community Leader, Ejisu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-white display-5 fw-bold mb-4">
              Your Support Changes Lives
            </h2>
            <p class="text-white fs-5 mb-4">
              Every donation, no matter the size, helps us reach more children and elderly persons in need.
            </p>
            <router-link to="/donate" class="btn btn-light btn-lg">
              <i class="pi pi-heart me-2"></i>Make a Donation Today
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

const heroSection = ref(null);
const statsSection = ref(null);

// Animated statistics
const animatedStats = ref({
  children: 0,
  elderly: 0,
  districts: 0
});

let statsAnimated = false;

// Animate counter function
const animateCounter = (key, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      animatedStats.value[key] = target;
      clearInterval(timer);
    } else {
      animatedStats.value[key] = Math.floor(current);
    }
  }, 16);
};

// Parallax effect for hero
const handleParallax = () => {
  if (!heroSection.value) return;
  const scrolled = window.pageYOffset;
  const heroOverlay = heroSection.value.querySelector('.hero-overlay');
  if (heroOverlay) {
    heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
};

// Intersection Observer for scroll animations
const observeElements = () => {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');

        // Trigger stats animation
        if (entry.target === statsSection.value && !statsAnimated) {
          statsAnimated = true;
          animateCounter('children', 582, 2000);
          animateCounter('elderly', 101, 1800);
          animateCounter('districts', 3, 1000);
        }
      }
    });
  }, options);

  // Observe all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));

  // Observe stats section
  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
};

// Handle image loading errors
const handleImageError = (event) => {
  // Fallback to a placeholder or another image
  event.target.src = '/images/programs/children_education.jpeg';
};

onMounted(() => {
  // Setup scroll animations
  observeElements();

  // Setup parallax effect
  window.addEventListener('scroll', handleParallax);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleParallax);
});
</script>

<style scoped>
/* Hero Section Styles */
.hero-section {
  background: linear-gradient(135deg, rgba(0, 40, 85, 0.8), rgba(0, 0, 0, 0.6)),
    url('/images/home/banner.jpeg') center/cover fixed;
  min-height: 85vh;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  min-height: 85vh;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.min-vh-75 {
  min-height: 75vh;
}

/* Hero Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 13px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% { opacity: 1; top: 8px; }
  100% { opacity: 0; top: 24px; }
}

/* Button Animations */
.btn-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }
  50% { box-shadow: 0 0 0 15px rgba(255, 107, 107, 0); }
}

.btn-hover-fill {
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.btn-hover-fill::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-hover-fill:hover::before {
  width: 300px;
  height: 300px;
}

.btn-animated {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-animated::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  transform: translate(-50%, -50%);
  transition: width 0.5s, height 0.5s;
}

.btn-animated:hover::after {
  width: 300px;
  height: 300px;
}

/* Stats Section */
.stat-card {
  background: white;
  border-radius: 15px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s ease;
}

.stat-card:hover::before {
  transform: scaleX(1);
}

.stat-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  font-size: 3rem;
  color: var(--primary-color);
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.stat-label {
  color: var(--text-light);
  font-size: 1.1rem;
  margin: 0;
}

/* Image Wrapper with Overlay */
.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.image-wrapper img {
  transition: transform 0.6s ease;
}

.image-wrapper:hover img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 40, 85, 0.9), rgba(255, 107, 107, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.5s ease;
}

.image-wrapper:hover .overlay-content {
  transform: translateY(0);
}

/* Title Underline */
.title-underline {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

/* Focus Areas */
.focus-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.focus-card:hover .focus-icon {
  transform: rotateY(360deg) scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.focus-icon i {
  font-size: 2.5rem;
  color: white;
}

.card-hover {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-hover:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* Get Involved Cards */
.involvement-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.involvement-card::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.involvement-card:hover::after {
  right: -200%;
}

.involvement-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
}

.involvement-icon {
  font-size: 4rem;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.involvement-card:hover .involvement-icon {
  transform: scale(1.2) rotate(5deg);
}

/* Testimonials */
.testimonial-card {
  height: 100%;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.testimonial-card:hover {
  border-left-color: var(--primary-color);
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.testimonial-text {
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.8;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--primary-color), #1a365d);
  position: relative;
  overflow: hidden;
  padding: 80px 0;
}

.cta-section .container {
  position: relative;
  z-index: 1;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  animation: rotate 30s linear infinite;
  pointer-events: none;
  z-index: 0;
}

.cta-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  animation: rotate 25s linear infinite reverse;
  pointer-events: none;
  z-index: 0;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Scroll Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.animate-on-scroll.animated {
  opacity: 1;
  transform: translateY(0);
}

.animate-on-scroll[data-animation="fade-in-up"].animated {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-on-scroll[data-animation="slide-in-left"].animated {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-on-scroll[data-animation="slide-in-right"].animated {
  animation: slideInRight 0.8s ease-out forwards;
}

/* Section Title Styles */
.section-title {
  position: relative;
  font-weight: 700;
  color: var(--text-dark);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

/* Featured School Section */
.featured-school {
  background: white;
}

.school-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.school-image-wrapper img {
  transition: transform 0.6s ease;
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.school-image-wrapper:hover img {
  transform: scale(1.05);
}

.school-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.school-badge i {
  font-size: 1.2rem;
}

.school-content {
  padding: 1rem;
}

.school-location {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}

.school-stats-mini {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
}

.mini-stat {
  padding: 0.5rem;
}

.mini-stat h4 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}

.school-highlights {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary-color);
}

.school-highlights .highlight-item {
  transition: all 0.3s ease;
}

.school-highlights .highlight-item:hover {
  transform: translateX(5px);
}

.school-actions .btn {
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .involvement-icon {
    font-size: 3rem;
  }

  .focus-icon {
    width: 60px;
    height: 60px;
  }

  .focus-icon i {
    font-size: 2rem;
  }

  .school-image-wrapper img {
    height: 300px;
  }

  .school-actions .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>