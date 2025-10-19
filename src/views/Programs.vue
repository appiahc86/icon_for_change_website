<template>
  <Navbar />
  <div class="programs-page">
    <!-- Hero Section -->
    <section class="programs-hero" ref="heroSection">
      <div class="hero-overlay">
        <div class="hero-shapes"></div>
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9">
              <div class="breadcrumb-nav mb-4 fade-in-up">
                <router-link to="/" class="text-white-50">Home</router-link>
                <span class="text-white-50 mx-2">/</span>
                <span class="text-white">Programs</span>
              </div>
              <h1 class="display-3 fw-bold text-white mb-4 fade-in-up" style="animation-delay: 0.1s">
                Our Programs
              </h1>
              <p class="lead text-white mb-4 fade-in-up" style="animation-delay: 0.2s">
                Comprehensive initiatives that transform lives and build stronger communities across Ghana
              </p>
              <div class="hero-tags fade-in-up" style="animation-delay: 0.3s">
                <span class="tag">Education</span>
                <span class="tag">Healthcare</span>
                <span class="tag">Community Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Overview -->
    <section class="programs-overview py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">What We Do</h2>
          <p class="lead text-muted mt-3">Creating lasting impact through targeted interventions</p>
        </div>

        <!-- Children's Welfare and Education -->
        <div class="program-section mb-5">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4">
              <img src="/images/programs/children_education.jpeg"
                   alt="Children in school"
                   class="img-fluid rounded shadow-lg">
            </div>
            <div class="col-lg-6 mb-4">
              <div class="program-icon mb-3">
                <i class="pi pi-users"></i>
              </div>
              <h3 class="mb-3">Children's Welfare & Education</h3>
              <p class="lead mb-4">
                Empowering the next generation through education and protection
              </p>
              <ul class="program-list">
                <li><i class="pi pi-check-circle me-2"></i>Access to quality education for underprivileged children</li>
                <li><i class="pi pi-check-circle me-2"></i>School supplies and educational materials distribution</li>
                <li><i class="pi pi-check-circle me-2"></i>Scholarship programs for deserving students</li>
                <li><i class="pi pi-check-circle me-2"></i>Mentorship programs connecting children with role models</li>
                <li><i class="pi pi-check-circle me-2"></i>Child-protection campaigns against child labour and neglect</li>
                <li><i class="pi pi-check-circle me-2"></i>Healthcare and nutrition support for vulnerable children</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Elderly Care and Support -->
        <div class="program-section mb-5 bg-light p-5 rounded">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4 order-lg-2">
              <img src="/images/programs/elderly.jpeg"
                   alt="Elderly care"
                   class="img-fluid rounded shadow-lg">
            </div>
            <div class="col-lg-6 mb-4 order-lg-1">
              <div class="program-icon mb-3">
                <i class="pi pi-users"></i>
              </div>
              <h3 class="mb-3">Elderly Care & Support</h3>
              <p class="lead mb-4">
                Ensuring dignity and quality of life for our senior citizens
              </p>
              <ul class="program-list">
                <li><i class="pi pi-check-circle me-2"></i>Regular health screenings and medical check-ups</li>
                <li><i class="pi pi-check-circle me-2"></i>Access to quality medical care and treatment</li>
                <li><i class="pi pi-check-circle me-2"></i>Community-based elderly support programs</li>
                <li><i class="pi pi-check-circle me-2"></i>Feeding initiatives for neglected and abandoned aged persons</li>
                <li><i class="pi pi-check-circle me-2"></i>Social activities and companionship programs</li>
                <li><i class="pi pi-check-circle me-2"></i>Intergenerational learning and engagement activities</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Community Empowerment -->
        <div class="program-section mb-5">
          <div class="row align-items-center">
            <div class="col-lg-6 mb-4">
              <img src="/images/programs/community.jpeg"
                   alt="Community gathering"
                   class="img-fluid rounded shadow-lg">
            </div>
            <div class="col-lg-6 mb-4">
              <div class="program-icon mb-3">
                <i class="pi pi-globe"></i>
              </div>
              <h3 class="mb-3">Community Empowerment</h3>
              <p class="lead mb-4">
                Building sustainable solutions through community partnerships
              </p>
              <ul class="program-list">
                <li><i class="pi pi-check-circle me-2"></i>Advocacy campaigns for child rights and elderly care</li>
                <li><i class="pi pi-check-circle me-2"></i>Skills training for caregivers and volunteers</li>
                <li><i class="pi pi-check-circle me-2"></i>Community awareness and education programs</li>
                <li><i class="pi pi-check-circle me-2"></i>Partnership building with local and international organizations</li>
                <li><i class="pi pi-check-circle me-2"></i>Capacity building for sustainable community development</li>
                <li><i class="pi pi-check-circle me-2"></i>Research and documentation of best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Highlights -->
    <section class="program-highlights py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Program Highlights</h2>
          <p class="lead text-muted mt-3">Key features of our comprehensive approach</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="highlight-card text-center p-4 animate-on-scroll" data-animation="zoom-in">
              <div class="highlight-icon mb-3">
                <i class="pi pi-book"></i>
              </div>
              <h5 class="mb-3">Educational Support</h5>
              <p class="text-muted small">Scholarships, school supplies, and tutoring programs for underprivileged children</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="highlight-card text-center p-4 animate-on-scroll" data-animation="zoom-in" style="animation-delay: 0.1s">
              <div class="highlight-icon mb-3">
                <i class="pi pi-shield"></i>
              </div>
              <h5 class="mb-3">Child Protection</h5>
              <p class="text-muted small">Advocacy and awareness campaigns against child labor and abuse</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="highlight-card text-center p-4 animate-on-scroll" data-animation="zoom-in" style="animation-delay: 0.2s">
              <div class="highlight-icon mb-3">
                <i class="pi pi-heart-fill"></i>
              </div>
              <h5 class="mb-3">Healthcare Access</h5>
              <p class="text-muted small">Free health screenings and medical support for elderly and children</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="highlight-card text-center p-4 animate-on-scroll" data-animation="zoom-in" style="animation-delay: 0.3s">
              <div class="highlight-icon mb-3">
                <i class="pi pi-users"></i>
              </div>
              <h5 class="mb-3">Community Building</h5>
              <p class="text-muted small">Bringing generations together through engagement activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Impact Numbers -->
    <section class="program-stats py-5 bg-primary" ref="statsSection">
      <div class="container">
        <div class="row text-center text-white">
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold mb-2">{{ programStats.children }}+</h2>
              <p class="lead mb-0">Children Supported</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold mb-2">{{ programStats.elderly }}+</h2>
              <p class="lead mb-0">Elderly Cared For</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold mb-2">{{ programStats.districts }}</h2>
              <p class="lead mb-0">Districts Reached</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-4">
            <div class="stat-item">
              <h2 class="display-4 fw-bold mb-2">{{ programStats.volunteers }}+</h2>
              <p class="lead mb-0">Active Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="success-stories py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Success Stories</h2>
          <p class="lead text-muted mt-3">Real impact, real lives transformed</p>
        </div>

        <div class="row">
          <div class="col-lg-4 mb-4">
            <div class="story-card animate-on-scroll" data-animation="fade-in-up">
              <div class="story-image">
                <img src="/images/programs/success1.jpeg" alt="Success story" class="img-fluid">
                <div class="story-category">Education</div>
              </div>
              <div class="story-content p-4">
                <h5 class="mb-3">From Struggling to Excelling</h5>
                <p class="text-muted mb-3">
                  Akosua, a 2-year-old from Assin Central, was on the verge of dropping out of school. Through our scholarship program, she now ranks top of her class and dreams of becoming a doctor.
                </p>
                <div class="story-meta">
                  <span class="text-primary"><i class="pi pi-map-marker me-1"></i>Assin Central</span>
                  <span class="text-muted ms-3"><i class="pi pi-calendar me-1"></i>2023</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="story-card animate-on-scroll" data-animation="fade-in-up" style="animation-delay: 0.1s">
              <div class="story-image">
                <img src="/images/programs/success3.jpeg" alt="Success story" class="img-fluid">
                <div class="story-category">Elderly Care</div>
              </div>
              <div class="story-content p-4">
                <h5 class="mb-3">Renewed Hope and Dignity</h5>
                <p class="text-muted mb-3">
                  Renewed Hope and Dignity empowers vulnerable communities through support, education, and sustainable solutions, restoring self-worth and creating pathways to a brighter, independent future
                </p>
                <div class="story-meta">
                  <span class="text-primary"><i class="pi pi-map-marker me-1"></i>Fumesua</span>
                  <span class="text-muted ms-3"><i class="pi pi-calendar me-1"></i>2024</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 mb-4">
            <div class="story-card animate-on-scroll" data-animation="fade-in-up" style="animation-delay: 0.2s">
              <div class="story-image">
                <img src="/images/programs/success2.jpeg" alt="Success story" class="img-fluid">
                <div class="story-category">Community</div>
              </div>
              <div class="story-content p-4">
                <h5 class="mb-3">Community Transformation</h5>
                <p class="text-muted mb-3">
                  The Assin North community came together through our empowerment programs, creating a sustainable support network that continues to thrive independently.
                </p>
                <div class="story-meta">
                  <span class="text-primary"><i class="pi pi-map-marker me-1"></i>Assin North</span>
                  <span class="text-muted ms-3"><i class="pi pi-calendar me-1"></i>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Districts We Serve -->
    <section class="districts-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Where We Work</h2>
          <p class="lead text-muted mt-3">Serving communities across Ghana</p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="district-card text-center p-4">
              <i class="pi pi-map-marker district-icon mb-3"></i>
              <h4>Assin Central Municipal</h4>
              <p class="text-muted">Supporting education and healthcare initiatives</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="district-card text-center p-4">
              <i class="pi pi-map-marker district-icon mb-3"></i>
              <h4>Ejisu Municipal</h4>
              <p class="text-muted">Elderly care and community development programs</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="district-card text-center p-4">
              <i class="pi pi-map-marker district-icon mb-3"></i>
              <h4>Assin North District</h4>
              <p class="text-muted">Child protection and welfare services</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Get Involved -->
    <section class="get-involved-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Support Our Programs</h2>
          <p class="lead text-muted mt-3">Every contribution makes a difference</p>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-4 mb-4">
            <div class="involvement-card text-center p-4">
              <i class="pi pi-heart involvement-icon mb-3"></i>
              <h4 class="mb-3">Donate</h4>
              <p class="text-muted mb-4">Fund specific programs or contribute to our general operations</p>
              <router-link to="/donate" class="btn btn-primary-custom text-white">Support Now</router-link>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="involvement-card text-center p-4">
              <i class="pi pi-users involvement-icon mb-3"></i>
              <h4 class="mb-3">Volunteer</h4>
              <p class="text-muted mb-4">Join our team and directly impact lives in your community</p>
              <router-link to="/contact" class="btn btn-secondary-custom">Join Us</router-link>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="involvement-card text-center p-4">
              <i class="pi pi-building involvement-icon mb-3"></i>
              <h4 class="mb-3">Partner</h4>
              <p class="text-muted mb-4">Collaborate with us for greater reach and sustainable impact</p>
              <router-link to="/contact" class="btn btn-secondary-custom">Partner</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

const heroSection = ref(null);
const statsSection = ref(null);

// Program stats (animated on scroll)
const programStats = ref({
  children: 0,
  elderly: 0,
  districts: 0,
  volunteers: 0
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
      programStats.value[key] = target;
      clearInterval(timer);
    } else {
      programStats.value[key] = Math.floor(current);
    }
  }, 16);
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
          animateCounter('volunteers', 100, 2200);
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

onMounted(() => {
  // Setup scroll animations
  observeElements();
});
</script>

<style scoped>
/* Hero Section */
.programs-hero {
  background: linear-gradient(135deg, rgba(0, 40, 85, 0.95), rgba(26, 54, 93, 0.95)),
    url('/images/home/banner.jpeg') center/cover;
  min-height: 500px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 0 80px;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.breadcrumb-nav a {
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-nav a:hover {
  color: var(--accent-color) !important;
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

.hero-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-tags .tag {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.hero-tags .tag:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
}

/* Program Section */
.program-section img {
  transition: transform 0.6s ease;
  border-radius: 15px;
}

.program-section:hover img {
  transform: scale(1.05);
}

.program-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  animation: pulse-slow 3s infinite;
}

@keyframes pulse-slow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(44, 82, 130, 0.4); }
  50% { box-shadow: 0 0 0 20px rgba(44, 82, 130, 0); }
}

.program-icon i {
  font-size: 2.2rem;
  color: white;
}

.program-list {
  list-style: none;
  padding: 0;
}

.program-list li {
  padding: 0.6rem 0;
  color: var(--text-dark);
  font-size: 1.05rem;
  transition: all 0.3s ease;
}

.program-list li:hover {
  transform: translateX(5px);
  color: var(--primary-color);
}

.program-list i {
  color: var(--secondary-color);
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.program-list li:hover i {
  transform: scale(1.2);
}

/* Program Highlights */
.highlight-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.highlight-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transform: scaleX(0);
  transition: transform 0.6s ease;
}

.highlight-card:hover::before {
  transform: scaleX(1);
}

.highlight-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
}

.highlight-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(44, 82, 130, 0.1), rgba(72, 187, 120, 0.1));
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.highlight-card:hover .highlight-icon {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  transform: rotateY(360deg);
}

.highlight-icon i {
  font-size: 2rem;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.highlight-card:hover .highlight-icon i {
  color: white;
}

/* Stats Section */
.bg-primary {
  background: linear-gradient(135deg, var(--primary-color), #1a365d) !important;
  position: relative;
  overflow: hidden;
}

.bg-primary::before,
.bg-primary::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.bg-primary::before {
  top: -20%;
  right: -10%;
  width: 500px;
  height: 500px;
  animation: rotate 30s linear infinite;
}

.bg-primary::after {
  bottom: -20%;
  left: -10%;
  width: 400px;
  height: 400px;
  animation: rotate 25s linear infinite reverse;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.stat-item {
  transition: all 0.3s ease;
  padding: 20px;
  position: relative;
  z-index: 1;
}

.stat-item:hover {
  transform: scale(1.1);
}

/* Success Stories */
.story-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
}

.story-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.story-image {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.story-card:hover .story-image img {
  transform: scale(1.1);
}

.story-category {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 15px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 1;
}

.story-content {
  background: white;
}

.story-meta {
  font-size: 0.9rem;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* District Cards */
.district-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.district-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(44, 82, 130, 0.05) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.6s ease;
}

.district-card:hover::before {
  opacity: 1;
}

.district-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.district-icon {
  font-size: 3.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.district-card:hover .district-icon {
  transform: scale(1.2) rotate(10deg);
}

/* Involvement Cards */
.involvement-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.involvement-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.involvement-card:hover::after {
  left: 100%;
}

.involvement-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.18);
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
  transform: scale(1.2) rotate(10deg);
}

/* Section Title */
.section-title {
  position: relative;
  font-weight: 700;
  color: var(--text-dark);
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
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

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-on-scroll[data-animation="zoom-in"].animated {
  animation: zoomIn 0.6s ease-out forwards;
}

.animate-on-scroll[data-animation="fade-in-up"].animated {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 768px) {
  .programs-hero {
    min-height: 400px;
    padding: 80px 0 60px;
  }

  .hero-tags {
    justify-content: center;
  }

  .hero-tags .tag {
    font-size: 0.8rem;
    padding: 6px 15px;
  }

  .story-image {
    height: 200px;
  }

  .program-icon {
    width: 70px;
    height: 70px;
  }

  .program-icon i {
    font-size: 1.8rem;
  }

  .district-icon,
  .involvement-icon {
    font-size: 3rem;
  }
}
</style>