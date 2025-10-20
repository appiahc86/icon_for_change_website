<template>
  <Navbar />
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero" ref="heroSection">
      <div class="hero-overlay">
        <div class="hero-background-shapes"></div>
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9">
              <div class="breadcrumb-nav mb-4 fade-in-up">
                <router-link to="/" class="text-white-50">Home</router-link>
                <span class="text-white-50 mx-2">/</span>
                <span class="text-white">About Us</span>
              </div>
              <h1 class="display-3 fw-bold text-white mb-4 fade-in-up" style="animation-delay: 0.1s">
                About Icon of Change LGB
              </h1>
              <p class="lead text-white mb-4 fade-in-up" style="animation-delay: 0.2s">
                Committed to improving lives through compassion, dignity, and social justice
              </p>
              <div class="hero-stats row text-white mt-5 fade-in-up" style="animation-delay: 0.3s">
                <div class="col-md-4 mb-3">
                  <div class="stat-item">
                    <h3 class="fw-bold mb-0">{{ heroStats.years }}+</h3>
                    <p class="mb-0 small">Years of Service</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="stat-item">
                    <h3 class="fw-bold mb-0">{{ heroStats.beneficiaries }}+</h3>
                    <p class="mb-0 small">Lives Touched</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="stat-item">
                    <h3 class="fw-bold mb-0">{{ heroStats.districts }}</h3>
                    <p class="mb-0 small">Districts Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-vision py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 animate-on-scroll" data-animation="slide-in-left">
            <div class="mission-vision-card h-100 border-0 shadow-sm">
              <div class="card-body p-5">
                <div class="icon-box mb-4">
                  <i class="pi pi-eye"></i>
                </div>
                <h3 class="mb-3">Our Vision</h3>
                <p class="text-muted lead mb-4">
                  To create a society where children and the aged thrive in safety, dignity, and hope, regardless of their culture and socio-economic background.
                </p>
                <div class="vision-highlight">
                  <i class="pi pi-arrow-right text-primary me-2"></i>
                  <span class="text-muted">A Ghana where every voice matters</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 animate-on-scroll" data-animation="slide-in-right">
            <div class="mission-vision-card h-100 border-0 shadow-sm">
              <div class="card-body p-5">
                <div class="icon-box mb-4">
                  <i class="pi pi-flag"></i>
                </div>
                <h3 class="mb-3">Our Mission</h3>
                <p class="text-muted lead mb-4">
                  To protect, empower, and support vulnerable children and the elderly in Ghana through education, healthcare, advocacy, and community development initiatives.
                </p>
                <div class="vision-highlight">
                  <i class="pi pi-arrow-right text-primary me-2"></i>
                  <span class="text-muted">Creating sustainable community impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Metrics Section -->
    <section class="impact-metrics py-5 bg-light" ref="impactSection">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Our Impact in Numbers</h2>
          <p class="lead text-muted mt-3">Measurable change across communities</p>
        </div>

        <div class="row g-4 text-center">
          <div class="col-md-3 col-6">
            <div class="impact-card p-4 animate-on-scroll" data-animation="zoom-in">
              <div class="impact-icon mb-3">
                <i class="pi pi-users"></i>
              </div>
              <h2 class="impact-number mb-2">{{ impactMetrics.children }}+</h2>
              <p class="text-muted mb-0">Children Supported</p>
            </div>
          </div>

          <div class="col-md-3 col-6">
            <div class="impact-card p-4 animate-on-scroll" data-animation="zoom-in" style="animation-delay: 0.1s">
              <div class="impact-icon mb-3">
                <i class="pi pi-heart"></i>
              </div>
              <h2 class="impact-number mb-2">{{ impactMetrics.elderly }}+</h2>
              <p class="text-muted mb-0">Elderly Cared For</p>
            </div>
          </div>

          <div class="col-md-3 col-6">
            <div class="impact-card p-4 animate-on-scroll" data-animation="zoom-in" style="animation-delay: 0.2s">
              <div class="impact-icon mb-3">
                <i class="pi pi-book"></i>
              </div>
              <h2 class="impact-number mb-2">{{ impactMetrics.scholarships }}+</h2>
              <p class="text-muted mb-0">Scholarships Given</p>
            </div>
          </div>

          <div class="col-md-3 col-6">
            <div class="impact-card p-4 animate-on-scroll" data-animation="zoom-in" style="animation-delay: 0.3s">
              <div class="impact-icon mb-3">
                <i class="pi pi-briefcase"></i>
              </div>
              <h2 class="impact-number mb-2">{{ impactMetrics.volunteers }}+</h2>
              <p class="text-muted mb-0">Active Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Timeline Section -->
    <section class="journey-timeline py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Our Journey</h2>
          <p class="lead text-muted mt-3">Milestones in our mission to serve</p>
        </div>

        <div class="timeline">
          <div class="timeline-item left animate-on-scroll" data-animation="slide-in-left">
            <div class="timeline-content">
              <div class="timeline-year">2019</div>
              <h4>Foundation</h4>
              <p class="text-muted">Icon of Change LGB was founded with a vision to support vulnerable children and elderly in Ghana.</p>
            </div>
          </div>

          <div class="timeline-item right animate-on-scroll" data-animation="slide-in-right">
            <div class="timeline-content">
              <div class="timeline-year">2020</div>
              <h4>First Community Program</h4>
              <p class="text-muted">Launched our first community outreach program in Assin Central, reaching 150 children and 30 elderly persons.</p>
            </div>
          </div>

          <div class="timeline-item left animate-on-scroll" data-animation="slide-in-left">
            <div class="timeline-content">
              <div class="timeline-year">2021</div>
              <h4>Expansion</h4>
              <p class="text-muted">Extended services to Ejisu and Kumasi districts, establishing sustainable partnerships with local communities.</p>
            </div>
          </div>

          <div class="timeline-item right animate-on-scroll" data-animation="slide-in-right">
            <div class="timeline-content">
              <div class="timeline-year">2022</div>
              <h4>Healthcare Initiative</h4>
              <p class="text-muted">Introduced free health screenings and medical support for elderly community members.</p>
            </div>
          </div>

          <div class="timeline-item left animate-on-scroll" data-animation="slide-in-left">
            <div class="timeline-content">
              <div class="timeline-year">2023</div>
              <h4>Educational Scholarships</h4>
              <p class="text-muted">Awarded 100+ scholarships to deserving children, providing school supplies and educational support.</p>
            </div>
          </div>

          <div class="timeline-item right animate-on-scroll" data-animation="slide-in-right">
            <div class="timeline-content">
              <div class="timeline-year">2024</div>
              <h4>Growing Impact</h4>
              <p class="text-muted">Reached over 580 children and 100 elderly persons across three districts with comprehensive support programs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="our-story py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4">
            <h2 class="section-title">Our Story</h2>
            <p class="lead mb-4">
              Icon of Change LGB is a non-profit, community-driven organization founded on principles that matter most: compassion, dignity, and social justice.
            </p>
            <p class="text-muted mb-4">
              We work tirelessly to bridge gaps in care, education, health, and support by creating sustainable solutions that empower individuals and communities. Our vision is a Ghana where every child has access to education, health, and basic needs, and every elderly person lives with dignity, care, and respect.
            </p>
            <p class="text-muted">
              From our humble beginnings, we have grown to serve multiple districts in Ghana, touching the lives of hundreds of children and elderly persons who need support the most. Our approach is community-centered, culturally sensitive, and focused on long-term sustainable impact.
            </p>
          </div>
          <div class="col-lg-6 mb-4">
            <img src="/images/about/about1.jpeg"
                 alt="Community gathering"
                 class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="core-values py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Our Core Values</h2>
          <p class="lead text-muted mt-3">The principles that guide everything we do</p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="value-card text-center p-4">
              <div class="value-icon mb-3">
                <i class="pi pi-heart"></i>
              </div>
              <h4 class="mb-3">Compassion</h4>
              <p class="text-muted">
                Caring for the most vulnerable members of our society with genuine empathy and understanding.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="value-card text-center p-4">
              <div class="value-icon mb-3">
                <i class="pi pi-shield"></i>
              </div>
              <h4 class="mb-3">Integrity</h4>
              <p class="text-muted">
                Working with complete transparency and accountability in all our operations and programs.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="value-card text-center p-4">
              <div class="value-icon mb-3">
                <i class="pi pi-star"></i>
              </div>
              <h4 class="mb-3">Respect</h4>
              <p class="text-muted">
                Upholding the dignity of every child and elderly person we serve, regardless of their circumstances.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="value-card text-center p-4">
              <div class="value-icon mb-3">
                <i class="pi pi-users"></i>
              </div>
              <h4 class="mb-3">Collaboration</h4>
              <p class="text-muted">
                Partnering with communities, institutions, and stakeholders to maximize our collective impact.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="value-card text-center p-4">
              <div class="value-icon mb-3">
                <i class="pi pi-sun"></i>
              </div>
              <h4 class="mb-3">Sustainability</h4>
              <p class="text-muted">
                Creating long-term impact and solutions that benefit future generations of Ghanaians.
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="value-card text-center p-4">
              <div class="value-icon mb-3">
                <i class="pi pi-globe"></i>
              </div>
              <h4 class="mb-3">Inclusivity</h4>
              <p class="text-muted">
                Serving all individuals regardless of their culture, religion, or socio-economic background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
<!--    <section class="team-section py-5 bg-light">-->
<!--      <div class="container">-->
<!--        <div class="text-center mb-5">-->
<!--          <h2 class="section-title d-inline-block">Our Leadership</h2>-->
<!--          <p class="lead text-muted mt-3">Dedicated individuals driving positive change</p>-->
<!--        </div>-->

<!--        <div class="row justify-content-center">-->
<!--          <div class="col-md-6 col-lg-4 mb-4">-->
<!--            <div class="team-card text-center">-->
<!--              <div class="team-img-wrapper">-->
<!--                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"-->
<!--                     alt="Team member"-->
<!--                     class="img-fluid rounded-circle">-->
<!--              </div>-->
<!--              <h5 class="mt-3 mb-1">Executive Director</h5>-->
<!--              <p class="text-muted small mb-2">Leadership & Strategy</p>-->
<!--              <div class="social-links">-->
<!--                <a href="#"><i class="pi pi-linkedin"></i></a>-->
<!--                <a href="#"><i class="pi pi-twitter"></i></a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="col-md-6 col-lg-4 mb-4">-->
<!--            <div class="team-card text-center">-->
<!--              <div class="team-img-wrapper">-->
<!--                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"-->
<!--                     alt="Team member"-->
<!--                     class="img-fluid rounded-circle">-->
<!--              </div>-->
<!--              <h5 class="mt-3 mb-1">Program Director</h5>-->
<!--              <p class="text-muted small mb-2">Operations & Programs</p>-->
<!--              <div class="social-links">-->
<!--                <a href="#"><i class="pi pi-linkedin"></i></a>-->
<!--                <a href="#"><i class="pi pi-twitter"></i></a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="col-md-6 col-lg-4 mb-4">-->
<!--            <div class="team-card text-center">-->
<!--              <div class="team-img-wrapper">-->
<!--                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"-->
<!--                     alt="Team member"-->
<!--                     class="img-fluid rounded-circle">-->
<!--              </div>-->
<!--              <h5 class="mt-3 mb-1">Community Relations</h5>-->
<!--              <p class="text-muted small mb-2">Outreach & Partnerships</p>-->
<!--              <div class="social-links">-->
<!--                <a href="#"><i class="pi pi-linkedin"></i></a>-->
<!--                <a href="#"><i class="pi pi-twitter"></i></a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <h2 class="text-white display-5 fw-bold mb-4">Join Our Mission</h2>
        <p class="text-white fs-5 mb-4">
          Together, we can create a brighter future for Ghana's children and elderly
        </p>
        <div>
          <button @click="router.push('/donate')" class="btn btn-light btn-lg me-3 mb-2">
            <i class="pi pi-heart me-2"></i>Donate
          </button>
          <button @click="router.push('/contact')" class="btn btn-outline-light btn-lg mb-2">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import {useRouter} from "vue-router";

const router = useRouter();

const heroSection = ref(null);
const impactSection = ref(null);

// Hero stats (animated on load)
const heroStats = ref({
  years: 5,
  beneficiaries: 680,
  districts: 3
});

// Impact metrics (animated on scroll)
const impactMetrics = ref({
  children: 0,
  elderly: 0,
  scholarships: 0,
  volunteers: 0
});

let impactAnimated = false;

// Animate counter function
const animateCounter = (key, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      impactMetrics.value[key] = target;
      clearInterval(timer);
    } else {
      impactMetrics.value[key] = Math.floor(current);
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

        // Trigger impact metrics animation
        if (entry.target === impactSection.value && !impactAnimated) {
          impactAnimated = true;
          animateCounter('children', 582, 2000);
          animateCounter('elderly', 101, 1800);
          animateCounter('scholarships', 150, 2200);
          animateCounter('volunteers', 45, 1500);
        }
      }
    });
  }, options);

  // Observe all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));

  // Observe impact section
  if (impactSection.value) {
    observer.observe(impactSection.value);
  }
};

onMounted(() => {
  // Setup scroll animations
  observeElements();
});

onUnmounted(() => {
  // Clean up if needed
});
</script>

<style scoped>
/* Hero Section */
.about-hero {
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

.hero-background-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
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

/* Hero Fade In Animation */
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

.hero-stats .stat-item {
  padding: 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.hero-stats .stat-item:last-child {
  border-right: none;
}

.hero-stats .stat-item:hover {
  transform: scale(1.05);
}

/* Mission & Vision Cards */
.mission-vision-card {
  background: white;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.mission-vision-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s ease;
}

.mission-vision-card:hover::before {
  transform: scaleX(1);
}

.mission-vision-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.icon-box {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  animation: pulse-slow 3s infinite;
}

.mission-vision-card:hover .icon-box {
  transform: rotate(360deg) scale(1.1);
}

@keyframes pulse-slow {
  0%, 100% { box-shadow: 0 0 0 0 rgba(44, 82, 130, 0.4); }
  50% { box-shadow: 0 0 0 20px rgba(44, 82, 130, 0); }
}

.icon-box i {
  font-size: 2.5rem;
  color: white;
}

.vision-highlight {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* Impact Metrics */
.impact-card {
  background: white;
  border-radius: 15px;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.impact-card::after {
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

.impact-card:hover::after {
  transform: scaleX(1);
}

.impact-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.impact-icon {
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

.impact-card:hover .impact-icon {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.impact-icon i {
  font-size: 2rem;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.impact-card:hover .impact-icon i {
  color: white;
  transform: scale(1.2);
}

.impact-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Timeline Styles */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background: linear-gradient(180deg, var(--primary-color), var(--accent-color));
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 50%;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  background: white;
  border: 4px solid var(--primary-color);
  top: 30px;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 0 0 8px rgba(44, 82, 130, 0.1);
  transition: all 0.4s ease;
}

.timeline-item.left::after {
  right: -12px;
}

.timeline-item.right::after {
  left: -12px;
}

.timeline-item:hover::after {
  background: var(--accent-color);
  border-color: var(--accent-color);
  transform: scale(1.2);
}

.timeline-content {
  padding: 30px;
  background: white;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.timeline-content:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.timeline-year {
  display: inline-block;
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.timeline-content h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: 600;
}

/* Responsive Timeline */
@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0 !important;
  }

  .timeline-item::after {
    left: 18px !important;
  }
}

/* Value Cards */
.value-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.value-card::before {
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

.value-card:hover::before {
  opacity: 1;
}

.value-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.value-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(44, 82, 130, 0.1), rgba(72, 187, 120, 0.1));
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.4s ease;
}

.value-card:hover .value-icon {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  transform: rotateY(360deg);
}

.value-icon i {
  font-size: 2rem;
  color: var(--primary-color);
  transition: all 0.4s ease;
}

.value-card:hover .value-icon i {
  color: white;
}

/* Team Cards */
.team-card {
  padding: 2.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.team-card::after {
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

.team-card:hover::after {
  left: 100%;
}

.team-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
}

.team-img-wrapper {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  overflow: hidden;
  border: 5px solid var(--secondary-color);
  position: relative;
  transition: all 0.4s ease;
}

.team-card:hover .team-img-wrapper {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.team-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.team-card:hover .team-img-wrapper img {
  transform: scale(1.1);
}

.social-links a {
  display: inline-block;
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  margin: 0 5px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--accent-color);
  transform: translateY(-5px) rotate(360deg);
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

.cta-section::before,
.cta-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: rotate 30s linear infinite;
  pointer-events: none;
  z-index: 0;
}

.cta-section::before {
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
}

.cta-section::after {
  bottom: -30%;
  left: -10%;
  width: 500px;
  height: 500px;
  animation-direction: reverse;
  animation-duration: 25s;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

.animate-on-scroll[data-animation="slide-in-left"].animated {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-on-scroll[data-animation="slide-in-right"].animated {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-on-scroll[data-animation="zoom-in"].animated {
  animation: zoomIn 0.6s ease-out forwards;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .about-hero {
    min-height: 400px;
    padding: 80px 0 60px;
  }

  .hero-stats .stat-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .hero-stats .stat-item:last-child {
    border-bottom: none;
  }

  .impact-number {
    font-size: 2rem;
  }

  .mission-vision-card .card-body {
    padding: 2rem !important;
  }
}
</style>