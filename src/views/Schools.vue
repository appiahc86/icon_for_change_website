<template>
  <Navbar />
  <div class="schools-page">
    <!-- Hero Section -->
    <section class="schools-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8 mx-auto text-center text-white">
            <h1 class="display-3 fw-bold mb-4" data-aos="fade-up">Our Schools & Projects</h1>
            <p class="lead mb-4" data-aos="fade-up" data-aos-delay="100">
              Empowering communities through quality education and sustainable development
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontoh Educational Complex Section -->
    <section class="school-details py-5">
      <div class="container py-5">
        <!-- School Header -->
        <div class="row mb-5">
          <div class="col-lg-12" data-aos="fade-up">
            <div class="school-header-card">
              <div class="row align-items-center">
                <div class="col-lg-8">
                  <h2 class="display-5 fw-bold text-primary mb-3">Kontoh Educational Complex</h2>
                  <div class="location-info mb-3">
                    <i class="bi bi-geo-alt-fill text-secondary me-2"></i>
                    <span class="fs-5">Fumesua, Ashanti Region, Ghana</span>
                  </div>
                  <p class="lead text-muted">
                    A beacon of hope and learning, providing quality basic education to children in the Fumesua community
                  </p>
                </div>
                <div class="col-lg-4 text-lg-end">
                  <a href="#donate-section" class="btn btn-primary-custom text-white btn-lg">
                    <i class="bi bi-heart-fill me-2"></i>Support This School
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Photo Gallery -->
        <div class="row mb-5">
          <div class="col-12" data-aos="fade-up">
            <h3 class="section-title mb-4">School Gallery</h3>
          </div>

          <!-- Main Featured Image -->
          <div class="col-lg-8 mb-4" data-aos="fade-up">
            <div class="gallery-item gallery-item-large">
              <img :src="mainImage" alt="Kontoh Educational Complex" class="img-fluid rounded shadow-lg">
              <div class="gallery-overlay">
                <p class="gallery-caption">Kontoh Educational Complex Campus</p>
              </div>
            </div>
          </div>

          <!-- Side Images -->
          <div class="col-lg-4">
            <div class="row g-4">
              <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                <div class="gallery-item">
                  <img :src="galleryImages[0]" alt="School Building" class="img-fluid rounded shadow">
                  <div class="gallery-overlay">
                    <p class="gallery-caption">Active Learning</p>
                  </div>
                </div>
              </div>
              <div class="col-12" data-aos="fade-up" data-aos-delay="200">
                <div class="gallery-item">
                  <img :src="galleryImages[1]" alt="Students Learning" class="img-fluid rounded shadow">
                  <div class="gallery-overlay">
                    <p class="gallery-caption">Modern Facilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Gallery Images -->
          <div class="col-lg-12 mt-4">
            <div class="row g-4">
              <div
                v-for="(image, index) in additionalImages"
                :key="index"
                class="col-lg-3 col-md-6"
                data-aos="zoom-in"
                :data-aos-delay="index * 100"
              >
                <div class="gallery-item">
                  <img :src="image" alt="School Activity" class="img-fluid rounded shadow">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- About the School -->
        <div class="row mb-5">
          <div class="col-lg-12" data-aos="fade-up">
            <div class="about-school-card p-5 rounded shadow-lg">
              <h3 class="section-title mb-4">About Kontoh Educational Complex</h3>
              <div class="row">
                <div class="col-lg-8">
                  <p class="lead mb-4">
                    Kontoh Educational Complex stands as a testament to Icon of Change LGB Ghana's commitment to quality education.
                    Located in the heart of Fumesua, Ashanti Region, our school provides a nurturing environment where children
                    can learn, grow, and develop their full potential.
                  </p>
                  <p class="mb-4">
                    We offer comprehensive basic education programs that prepare students for their future academic endeavors
                    while instilling strong moral values and community responsibility. Our dedicated teachers and staff work
                    tirelessly to ensure every child receives personalized attention and support.
                  </p>
                  <div class="school-features">
                    <h5 class="fw-bold mb-3">Key Features:</h5>
                    <ul class="feature-list">
                      <li><i class="pi pi-check-circle text-success me-2"></i>Quality Basic Education (Primary & JHS)</li>
                      <li><i class="pi pi-check-circle text-success me-2"></i>Qualified and Dedicated Teaching Staff</li>
                      <li><i class="pi pi-check-circle text-success me-2"></i>Modern Learning Facilities</li>
                      <li><i class="pi pi-check-circle text-success me-2"></i>Extracurricular Activities & Sports</li>
                      <li><i class="pi pi-check-circle text-success me-2"></i>Safe and Conducive Learning Environment</li>
                      <li><i class="pi pi-check-circle text-success me-2"></i>Community Engagement Programs</li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="stats-card p-4 rounded">
                    <h5 class="fw-bold mb-4 text-center">School Statistics</h5>
                    <div class="stat-item mb-3">
                      <div class="stat-icon">
                        <i class="pi pi-users"></i>
                      </div>
                      <div class="stat-info">
                        <h4 class="stat-number">{{ studentCount }}</h4>
                        <p class="stat-label">Students Enrolled</p>
                      </div>
                    </div>
                    <div class="stat-item mb-3">
                      <div class="stat-icon">
                        <i class="pi pi-user-plus"></i>
                      </div>
                      <div class="stat-info">
                        <h4 class="stat-number">{{ teacherCount }}</h4>
                        <p class="stat-label">Teaching Staff</p>
                      </div>
                    </div>
                    <div class="stat-item">
                      <div class="stat-icon">
                        <i class="pi pi-home"></i>
                      </div>
                      <div class="stat-info">
                        <h4 class="stat-number">{{ classroomCount }}</h4>
                        <p class="stat-label">Classrooms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Programs & Activities -->
        <div class="row mb-5">
          <div class="col-12" data-aos="fade-up">
            <h3 class="section-title mb-4">Programs & Activities</h3>
          </div>
          <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div class="program-card card-hover h-100">
              <div class="program-icon">
                <i class="bi bi-book"></i>
              </div>
              <h4>Academic Excellence</h4>
              <p>
                Comprehensive curriculum covering all core subjects with emphasis on literacy, numeracy,
                and critical thinking skills.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div class="program-card card-hover h-100">
              <div class="program-icon">
                <i class="bi bi-palette"></i>
              </div>
              <h4>Creative Arts</h4>
              <p>
                Music, drama, and visual arts programs that nurture creativity and self-expression
                among students.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="program-card card-hover h-100">
              <div class="program-icon">
                <i class="bi bi-trophy"></i>
              </div>
              <h4>Sports & Recreation</h4>
              <p>
                Football, athletics, and other sports activities promoting physical fitness, teamwork,
                and healthy competition.
              </p>
            </div>
          </div>
        </div>

        <!-- Needs & Support Section -->
        <div class="row" id="donate-section">
          <div class="col-lg-12" data-aos="fade-up">
            <div class="support-section p-5 rounded shadow-lg">
              <div class="row align-items-center">
                <div class="col-lg-7">
                  <h3 class="section-title mb-4">How You Can Help</h3>
                  <p class="lead mb-4">
                    Your support can make a significant difference in the lives of students at Kontoh Educational Complex.
                    We are continuously working to improve our facilities and expand our programs.
                  </p>
                  <h5 class="fw-bold mb-3">Current Needs:</h5>
                  <div class="needs-list">
                    <div class="need-item">
                      <i class="bi bi-check2-square text-primary me-2"></i>
                      <span>Library books and learning materials</span>
                    </div>
                    <div class="need-item">
                      <i class="bi bi-check2-square text-primary me-2"></i>
                      <span>Computer lab equipment and technology</span>
                    </div>
                    <div class="need-item">
                      <i class="bi bi-check2-square text-primary me-2"></i>
                      <span>Sports equipment and playground facilities</span>
                    </div>
                    <div class="need-item">
                      <i class="bi bi-check2-square text-primary me-2"></i>
                      <span>Classroom furniture and teaching aids</span>
                    </div>
                    <div class="need-item">
                      <i class="bi bi-check2-square text-primary me-2"></i>
                      <span>Scholarships for underprivileged students</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 text-center">
                  <div class="donate-card p-4 rounded">
                    <i class="bi bi-heart-fill display-1 text-danger mb-3"></i>
                    <h4 class="mb-4">Make a Difference Today</h4>
                    <router-link to="/donate" class="btn btn-primary-custom text-white btn-lg w-100 mb-3">
                      <i class="bi bi-gift-fill me-2"></i>Donate Now
                    </router-link>
                    <p class="text-muted small mb-0">
                      100% of your donation goes directly to supporting our school programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section py-5 bg-primary text-white">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-8" data-aos="fade-right">
            <h2 class="display-5 fw-bold mb-3">Want to Visit Kontoh Educational Complex?</h2>
            <p class="lead mb-0">
              We welcome visitors, volunteers, and partners. Get in touch to schedule a visit or learn more about partnership opportunities.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end" data-aos="fade-left">
            <router-link to="/contact" class="btn btn-light btn-lg">
              <i class="bi bi-envelope-fill me-2"></i>Contact Us
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'Schools',
  components: {Navbar, Footer},
  setup() {
    // Image paths - you can add your actual images here
    const mainImage = ref('/images/schools/kontoh/main2.jpeg');
    const galleryImages = ref([
      '/images/schools/kontoh/classroom1.jpeg',
      '/images/schools/kontoh/students.jpeg'
    ]);
    const additionalImages = ref([
      '/images/schools/kontoh/playground.jpeg',
      '/images/schools/kontoh/speech.jpeg',
      '/images/schools/kontoh/playground2.jpeg',
      '/images/schools/kontoh/classroom2.jpeg'
    ]);

    // School statistics
    const studentCount = ref(350);
    const teacherCount = ref(18);
    const classroomCount = ref(12);

    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    });

    return {
      mainImage,
      galleryImages,
      additionalImages,
      studentCount,
      teacherCount,
      classroomCount
    };
  }
};
</script>

<style scoped>
/* Hero Section */
.schools-hero {
  position: relative;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a365d 100%);
  min-height: 50vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/images/programs/children_education.jpeg') center/cover;
  opacity: 0.1;
}

.min-vh-50 {
  min-height: 50vh;
}

/* School Header Card */
.school-header-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.location-info {
  display: flex;
  align-items: center;
  color: var(--text-dark);
}

/* Gallery Styles */
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-item-large {
  height: 100%;
  min-height: 400px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-caption {
  margin: 0;
  font-weight: 600;
}

/* About School Card */
.about-school-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 1px solid #dee2e6;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
}

/* Stats Card */
.stats-card {
  background: white;
  border: 2px solid var(--primary-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.stat-icon {
  font-size: 2rem;
  color: var(--primary-color);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
}

.stat-info {
  flex: 1;
}

.stat-number {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
}

.stat-label {
  margin: 0;
  color: var(--text-light);
  font-size: 0.9rem;
}

/* Program Cards */
.program-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.program-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.program-icon {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.program-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

/* Support Section */
.support-section {
  background: linear-gradient(135deg, #fff5e6 0%, #ffe0b3 100%);
  border: 2px solid var(--accent-color);
}

.needs-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.need-item {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  padding: 0.5rem;
  background: white;
  border-radius: 8px;
}

.donate-card {
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a365d 100%);
}

/* Section Title */
.section-title {
  color: var(--primary-color);
  font-weight: bold;
  position: relative;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--secondary-color);
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-item-large {
    min-height: 300px;
  }

  .stat-item {
    flex-direction: column;
    text-align: center;
  }

  .program-card {
    margin-bottom: 1rem;
  }
}
</style>