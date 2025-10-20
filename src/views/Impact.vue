<template>
  <Navbar />
  <div class="impact-page">
    <!-- Hero Section -->
    <section class="impact-hero" ref="heroSection">
      <div class="hero-overlay">
        <div class="hero-shapes"></div>
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9">
              <div class="breadcrumb-nav mb-4 fade-in-up">
                <router-link to="/" class="text-white-50">Home</router-link>
                <span class="text-white-50 mx-2">/</span>
                <span class="text-white">Impact</span>
              </div>
              <h1 class="display-3 fw-bold text-white mb-4 fade-in-up" style="animation-delay: 0.1s">
                Our Impact
              </h1>
              <p class="lead text-white mb-4 fade-in-up" style="animation-delay: 0.2s">
                Measuring success through the lives we transform and communities we empower
              </p>
              <div class="impact-summary fade-in-up" style="animation-delay: 0.3s">
                <div class="row justify-content-center">
                  <div class="col-md-3 col-6 mb-3">
                    <div class="summary-item">
                      <h3 class="text-white fw-bold mb-0">680+</h3>
                      <p class="text-white-50 mb-0 small">Lives Touched</p>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-3">
                    <div class="summary-item">
                      <h3 class="text-white fw-bold mb-0">5</h3>
                      <p class="text-white-50 mb-0 small">Years Active</p>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-3">
                    <div class="summary-item">
                      <h3 class="text-white fw-bold mb-0">3</h3>
                      <p class="text-white-50 mb-0 small">Districts</p>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-3">
                    <div class="summary-item">
                      <h3 class="text-white fw-bold mb-0">100%</h3>
                      <p class="text-white-50 mb-0 small">Commitment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Statistics -->
    <section class="impact-stats py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Impact By The Numbers</h2>
          <p class="lead text-muted mt-3">Our journey so far</p>
        </div>

        <div class="row g-4">
          <div class="col-md-3 col-sm-6">
            <div class="stat-box text-center p-4">
              <i class="pi pi-users stat-icon mb-3"></i>
              <h2 class="stat-number mb-2">582+</h2>
              <p class="stat-label">Children Reached</p>
              <p class="text-muted small">With education support and mentorship</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="stat-box text-center p-4">
              <i class="pi pi-heart stat-icon mb-3"></i>
              <h2 class="stat-number mb-2">101+</h2>
              <p class="stat-label">Elderly Persons</p>
              <p class="text-muted small">Provided healthcare and nutrition assistance</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="stat-box text-center p-4">
              <i class="pi pi-home stat-icon mb-3"></i>
              <h2 class="stat-number mb-2">3</h2>
              <p class="stat-label">Districts Served</p>
              <p class="text-muted small">Assin Central, Ejisu, and Assin North</p>
            </div>
          </div>

          <div class="col-md-3 col-sm-6">
            <div class="stat-box text-center p-4">
              <i class="pi pi-globe stat-icon mb-3"></i>
              <h2 class="stat-number mb-2">50+</h2>
              <p class="stat-label">Community Networks</p>
              <p class="text-muted small">Support networks established for caregivers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="success-stories py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Success Stories</h2>
          <p class="lead text-muted mt-3">Real lives, real transformations</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-6">
            <div class="story-card">
              <img src="/images/impact/impact1.jpeg"
                   alt="Student success"
                   class="story-image">
              <div class="story-content p-4">
                <span class="story-badge">Empowerment</span>
                <h4 class="mt-3 mb-3">From Struggles to Success</h4>
                <p class="text-muted">
                  From Struggles to Success showcases inspiring stories of
                  individuals and communities who have overcome hardship through
                  our programs, turning challenges into opportunities for growth,
                  resilience, and lasting change.
                </p>
                <div class="story-meta">
                  <small class="text-muted"><i class="pi pi-map-marker me-1"></i>Assin Central Municipal</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="story-card">
              <img src="/images/impact/impact2.jpeg"
                   alt="Elderly care"
                   class="story-image">
              <div class="story-content p-4">
                <span class="story-badge">Elderly Care</span>
                <h4 class="mt-3 mb-3">Healing with Dignity</h4>
                <p class="text-muted">
                  Providing accessible, compassionate healthcare services
                  that restore health, hope, and dignity to underserved individuals
                  and communities.</p>
                <div class="story-meta">
                  <small class="text-muted"><i class="pi pi-map-marker me-1"></i>Ejisu Municipal</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="story-card">
              <img src="/images/impact/impact3.jpeg"
                   alt="Community"
                   class="story-image">
              <div class="story-content p-4">
                <span class="story-badge">Community</span>
                <h4 class="mt-3 mb-3">Paths to Possibility</h4>
                <p class="text-muted">
                  Highlights the new opportunities and futures made
                  possible through your support, emphasizing growth,
                  education, and empowerment.
                </p>
                <div class="story-meta">
                  <small class="text-muted"><i class="pi pi-map-marker me-1"></i>Assin North District</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="story-card">
              <img src="/images/impact/impact4.jpeg"
                   alt="Volunteers"
                   class="story-image">
              <div class="story-content p-4">
                <span class="story-badge">Empowerment</span>
                <h4 class="mt-3 mb-3">Journeys of Change</h4>
                <p class="text-muted">
                  Showcase real-life stories of how your support has sparked meaningful
                  change in lives, fostering independence, dignity, and hope.
                </p>
                <div class="story-meta">
                  <small class="text-muted"><i class="pi pi-map-marker me-1"></i>Multiple Districts</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Areas of Impact -->
    <section class="areas-impact py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Areas of Impact</h2>
          <p class="lead text-muted mt-3">Making a difference across multiple fronts</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 mb-4">
            <div class="impact-area-card text-center p-4">
              <i class="pi pi-book impact-area-icon mb-3"></i>
              <h5 class="mb-2">Education</h5>
              <p class="text-muted small mb-0">582+ children receiving educational support</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mb-4">
            <div class="impact-area-card text-center p-4">
              <i class="pi pi-heart impact-area-icon mb-3"></i>
              <h5 class="mb-2">Healthcare</h5>
              <p class="text-muted small mb-0">101+ elderly persons receiving medical care</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mb-4">
            <div class="impact-area-card text-center p-4">
              <i class="pi pi-shield impact-area-icon mb-3"></i>
              <h5 class="mb-2">Protection</h5>
              <p class="text-muted small mb-0">Active advocacy for child rights and elderly care</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 mb-4">
            <div class="impact-area-card text-center p-4">
              <i class="pi pi-users impact-area-icon mb-3"></i>
              <h5 class="mb-2">Community</h5>
              <p class="text-muted small mb-0">Strong support networks for caregivers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact By Category with Progress -->
    <section class="impact-progress py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">Impact by Category</h2>
          <p class="lead text-muted mt-3">Tracking our progress across key areas</p>
        </div>

        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="progress-card p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 class="mb-1">Educational Support</h5>
                  <p class="text-muted small mb-0">Scholarships & School Supplies</p>
                </div>
                <div class="progress-percentage">
                  <span class="fw-bold text-primary">{{ progressData.education }}%</span>
                </div>
              </div>
              <div class="custom-progress">
                <div class="progress-bar-fill" :style="{ width: progressData.education + '%' }" data-category="education"></div>
              </div>
              <div class="mt-2 small text-muted">
                <i class="pi pi-check-circle text-success me-1"></i>150+ scholarships awarded
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="progress-card p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 class="mb-1">Healthcare Services</h5>
                  <p class="text-muted small mb-0">Medical Checkups & Support</p>
                </div>
                <div class="progress-percentage">
                  <span class="fw-bold text-primary">{{ progressData.healthcare }}%</span>
                </div>
              </div>
              <div class="custom-progress">
                <div class="progress-bar-fill" :style="{ width: progressData.healthcare + '%' }" data-category="healthcare"></div>
              </div>
              <div class="mt-2 small text-muted">
                <i class="pi pi-check-circle text-success me-1"></i>200+ health screenings completed
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="progress-card p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 class="mb-1">Child Protection</h5>
                  <p class="text-muted small mb-0">Advocacy & Awareness Campaigns</p>
                </div>
                <div class="progress-percentage">
                  <span class="fw-bold text-primary">{{ progressData.protection }}%</span>
                </div>
              </div>
              <div class="custom-progress">
                <div class="progress-bar-fill" :style="{ width: progressData.protection + '%' }" data-category="protection"></div>
              </div>
              <div class="mt-2 small text-muted">
                <i class="pi pi-check-circle text-success me-1"></i>10+ communities reached
              </div>
            </div>
          </div>

          <div class="col-lg-6 mb-4">
            <div class="progress-card p-4">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5 class="mb-1">Community Empowerment</h5>
                  <p class="text-muted small mb-0">Training & Capacity Building</p>
                </div>
                <div class="progress-percentage">
                  <span class="fw-bold text-primary">{{ progressData.community }}%</span>
                </div>
              </div>
              <div class="custom-progress">
                <div class="progress-bar-fill" :style="{ width: progressData.community + '%' }" data-category="community"></div>
              </div>
              <div class="mt-2 small text-muted">
                <i class="pi pi-check-circle text-success me-1"></i>75+ caregivers trained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title d-inline-block">What People Say</h2>
          <p class="lead text-muted mt-3">Voices from our community</p>
        </div>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="testimonial-card p-4">
              <div class="stars mb-3">
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
              </div>
              <p class="testimonial-text mb-3">
                "Icon of Change gave my children hope when we had none. The educational support has transformed their future and our entire family."
              </p>
              <div class="testimonial-author">
                <strong>Grace A.</strong>
                <small class="text-muted d-block">Parent, Assin Central</small>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="testimonial-card p-4">
              <div class="stars mb-3">
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
                <small class="text-muted d-block">Community Leader, Ejisu</small>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="testimonial-card p-4">
              <div class="stars mb-3">
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
                <i class="pi pi-star-fill text-warning"></i>
              </div>
              <p class="testimonial-text mb-3">
                "Being part of Icon of Change as a volunteer has been life-changing. I've learned so much and made a real difference in people's lives."
              </p>
              <div class="testimonial-author">
                <strong>Ama D.</strong>
                <small class="text-muted d-block">Volunteer, Assin North</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container text-center">
        <h2 class="text-white display-5 fw-bold mb-4">Be Part of Our Impact Story</h2>
        <p class="text-white fs-5 mb-4">
          Your support helps us reach more children and elderly persons who need care
        </p>
        <router-link to="/donate" class="btn btn-light btn-lg">
          <i class="pi pi-heart me-2"></i>Donate Today
        </router-link>
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

// Progress data for impact categories
const progressData = ref({
  education: 0,
  healthcare: 0,
  protection: 0,
  community: 0
});

let progressAnimated = false;

// Animate progress bars
const animateProgress = () => {
  if (progressAnimated) return;
  progressAnimated = true;

  const targets = {
    education: 85,
    healthcare: 92,
    protection: 75,
    community: 88
  };

  Object.keys(targets).forEach(key => {
    let current = 0;
    const target = targets[key];
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        progressData.value[key] = target;
        clearInterval(timer);
      } else {
        progressData.value[key] = Math.floor(current);
      }
    }, 16);
  });
};

// Intersection Observer for scroll animations
const observeElements = () => {
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Check if this is the progress section
        if (entry.target.classList.contains('impact-progress')) {
          animateProgress();
        }
      }
    });
  }, options);

  // Observe progress section
  const progressSection = document.querySelector('.impact-progress');
  if (progressSection) {
    observer.observe(progressSection);
  }
};

onMounted(() => {
  // Setup scroll animations
  observeElements();
});
</script>

<style scoped>
/* Hero Section */
.impact-hero {
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
  background: radial-gradient(circle at 25% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
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

.summary-item {
  padding: 15px;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.summary-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Stats Section */
.stat-box {
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  position: relative;
  overflow: hidden;
}

.stat-box::before {
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

.stat-box:hover::before {
  transform: scaleX(1);
}

.stat-box:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  font-size: 3.5rem;
  color: var(--primary-color);
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
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
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin: 0;
}

/* Success Stories */
.story-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
}

.story-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.18);
}

.story-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.story-card:hover .story-image {
  transform: scale(1.1);
}

.story-badge {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-block;
}

/* Impact Area Cards */
.impact-area-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.impact-area-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
  transform: scaleX(0);
  transition: transform 0.6s ease;
}

.impact-area-card:hover::after {
  transform: scaleX(1);
}

.impact-area-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.15);
}

.impact-area-icon {
  font-size: 3rem;
  background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.impact-area-card:hover .impact-area-icon {
  transform: scale(1.2) rotate(10deg);
}

/* Progress Cards */
.progress-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
}

.progress-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.custom-progress {
  width: 100%;
  height: 12px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 10px;
  transition: width 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.progress-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-percentage {
  min-width: 50px;
}

/* Testimonials */
.testimonial-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: all 0.4s ease;
  border-left: 4px solid transparent;
}

.testimonial-card:hover {
  border-left-color: var(--primary-color);
  transform: translateX(5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.testimonial-text {
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.8;
}

.stars i {
  font-size: 1.1rem;
  margin-right: 2px;
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
  top: -30%;
  right: -15%;
  width: 500px;
  height: 500px;
}

.cta-section::after {
  bottom: -30%;
  left: -15%;
  width: 400px;
  height: 400px;
  animation-direction: reverse;
  animation-duration: 25s;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cta-section .btn-light {
  transition: all 0.3s ease;
}

.cta-section .btn-light:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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

/* Responsive Design */
@media (max-width: 768px) {
  .impact-hero {
    min-height: 400px;
    padding: 80px 0 60px;
  }

  .stat-icon {
    font-size: 2.5rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .impact-area-icon {
    font-size: 2.5rem;
  }

  .story-image {
    height: 200px;
  }
}
</style>