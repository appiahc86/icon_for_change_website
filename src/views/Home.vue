<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="container">
          <div class="row align-items-center min-vh-75">
            <div class="col-lg-7">
              <h1 class="hero-title display-3 fw-bold text-white mb-4">
                Empowering Children & Elderly with Love and Care
              </h1>
              <p class="hero-subtitle text-white fs-5 mb-4">
                Join us in creating a society where every child and elderly person thrives in dignity, safety, and hope.
              </p>
              <div>
                <router-link to="/donate" class="btn btn-primary-custom btn-lg me-3 mb-2">
                  <i class="pi pi-heart me-2"></i>Donate Now
                </router-link>
                <router-link to="/about" class="btn btn-outline-light btn-lg mb-2">
                  Learn More
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5 bg-light">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4 mb-4">
            <div class="stat-card p-4">
              <i class="pi pi-users stat-icon mb-3"></i>
              <h2 class="stat-number">582+</h2>
              <p class="stat-label">Children Supported</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="stat-card p-4">
              <i class="pi pi-heart stat-icon mb-3"></i>
              <h2 class="stat-number">101+</h2>
              <p class="stat-label">Elderly Cared For</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="stat-card p-4">
              <i class="pi pi-home stat-icon mb-3"></i>
              <h2 class="stat-number">3</h2>
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
          <div class="col-lg-6 mb-4">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800"
                 alt="Children playing"
                 class="img-fluid rounded shadow-lg">
          </div>
          <div class="col-lg-6 mb-4">
            <h2 class="section-title">About Icon of Change LGB</h2>
            <p class="lead text-muted mb-4">
              We are a non-profit, community-driven organization committed to improving the quality of life for children and the elderly in Ghana.
            </p>
            <p class="text-muted mb-4">
              Founded on the principles of compassion, dignity, and social justice, we work to bridge gaps in care, education, health, and support by creating sustainable solutions that empower individuals and communities.
            </p>
            <router-link to="/about" class="btn btn-primary-custom">
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
                  <i class="pi pi-graduation-cap"></i>
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
              <router-link to="/donate" class="btn btn-primary-custom">Donate Now</router-link>
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
</template>

<script setup>
// No reactive data or methods needed for this static page
</script>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600') center/cover;
  min-height: 85vh;
  position: relative;
}

.hero-overlay {
  min-height: 85vh;
  display: flex;
  align-items: center;
}

.min-vh-75 {
  min-height: 75vh;
}

.stat-card {
  background: white;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 3rem;
  color: var(--primary-color);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
}

.stat-label {
  color: var(--text-light);
  font-size: 1.1rem;
  margin: 0;
}

.focus-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.focus-icon i {
  font-size: 2.5rem;
  color: white;
}

.involvement-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.involvement-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.involvement-icon {
  font-size: 4rem;
  color: var(--accent-color);
}

.testimonial-card {
  height: 100%;
}

.testimonial-text {
  font-style: italic;
  color: var(--text-dark);
  line-height: 1.8;
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-color), #1a365d);
  position: relative;
  overflow: hidden;
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
}
</style>