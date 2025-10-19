<template>
  <Navbar />
  <div class="gallery-page">
    <!-- Hero Section -->
    <section class="gallery-hero">
      <div class="hero-overlay">
        <div class="hero-shapes"></div>
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9">
              <div class="breadcrumb-nav mb-4 fade-in-up">
                <router-link to="/" class="text-white-50">Home</router-link>
                <span class="text-white-50 mx-2">/</span>
                <span class="text-white">Gallery</span>
              </div>
              <h1 class="display-3 fw-bold text-white mb-4 fade-in-up" style="animation-delay: 0.1s">
                Our Gallery
              </h1>
              <p class="lead text-white mb-4 fade-in-up" style="animation-delay: 0.2s">
                Moments of hope, care, and transformation in our community
              </p>
              <div class="hero-tags fade-in-up" style="animation-delay: 0.3s">
                <span class="tag"><i class="pi pi-images me-2"></i>{{ galleryImages.length }} Photos</span>
                <span class="tag"><i class="pi pi-camera me-2"></i>Latest Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="gallery-filters py-4 bg-light sticky-top">
      <div class="container">
        <div class="d-flex justify-content-center flex-wrap gap-2">
          <button
              class="btn filter-btn"
              :class="{ active: activeFilter === 'all' }"
              @click="activeFilter = 'all'"
          >
            <i class="pi pi-th-large me-2"></i>All Photos
          </button>
          <button
              class="btn filter-btn"
              :class="{ active: activeFilter === 'children' }"
              @click="activeFilter = 'children'"
          >
            <i class="pi pi-users me-2"></i>Children's Education
          </button>
          <button
              class="btn filter-btn"
              :class="{ active: activeFilter === 'elderly' }"
              @click="activeFilter = 'elderly'"
          >
            <i class="pi pi-heart me-2"></i>Elderly Care
          </button>
          <button
              class="btn filter-btn"
              :class="{ active: activeFilter === 'community' }"
              @click="activeFilter = 'community'"
          >
            <i class="pi pi-globe me-2"></i>Community Events
          </button>
<!--          <button-->
<!--              class="btn filter-btn"-->
<!--              :class="{ active: activeFilter === 'volunteers' }"-->
<!--              @click="activeFilter = 'volunteers'"-->
<!--          >-->
<!--            <i class="pi pi-users me-2"></i>Volunteers-->
<!--          </button>-->
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-content py-5">
      <div class="container">
        <!-- Stats -->
        <div class="row mb-5">
          <div class="col-md-3 col-6 mb-3 text-center">
            <div class="gallery-stat">
              <h3 class="stat-number">{{ filteredImages.length }}</h3>
              <p class="stat-label">Photos</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-3 text-center">
            <div class="gallery-stat">
              <h3 class="stat-number">50+</h3>
              <p class="stat-label">Events</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-3 text-center">
            <div class="gallery-stat">
              <h3 class="stat-number">500+</h3>
              <p class="stat-label">Smiles Captured</p>
            </div>
          </div>
          <div class="col-md-3 col-6 mb-3 text-center">
            <div class="gallery-stat">
              <h3 class="stat-number">3</h3>
              <p class="stat-label">Districts</p>
            </div>
          </div>
        </div>

        <!-- Image Grid with Masonry Layout -->
        <div class="row g-4">
          <div
              v-for="(image, index) in filteredImages"
              :key="image.id"
              class="col-lg-4 col-md-6 gallery-item"
              :class="`fade-in-${index % 3}`"
          >
            <div class="gallery-card" @click="openLightbox(index)">
              <div class="image-wrapper">
                <img :src="image.src" :alt="image.title" class="gallery-image" />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <h5 class="text-white mb-2">{{ image.title }}</h5>
                    <p class="text-white-50 small mb-3">{{ image.description }}</p>
                    <div class="d-flex gap-2 justify-content-center">
                      <button class="btn btn-light btn-sm">
                        <i class="pi pi-search-plus"></i>
                      </button>
                      <button class="btn btn-light btn-sm">
                        <i class="pi pi-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gallery-card-footer">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge" :class="getCategoryClass(image.category)">
                    {{ image.category }}
                  </span>
                  <small class="text-muted">
                    <i class="pi pi-calendar me-1"></i>{{ image.date }}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredImages.length === 0" class="text-center py-5">
          <i class="pi pi-images" style="font-size: 4rem; color: #cbd5e0;"></i>
          <h4 class="mt-4 text-muted">No photos found</h4>
          <p class="text-muted">Try selecting a different category</p>
        </div>

        <!-- Load More -->
<!--        <div v-if="filteredImages.length > 0 && hasMore" class="text-center mt-5">-->
<!--          <button class="btn btn-primary-custom text-white btn-lg" @click="loadMore">-->
<!--            <i class="pi pi-plus-circle me-2"></i>Load More Photos-->
<!--          </button>-->
<!--        </div>-->
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Dialog
        v-model:visible="showLightbox"
        :modal="true"
        :dismissableMask="true"
        :showHeader="false"
        :style="{ width: '90vw', maxWidth: '1200px' }"
        class="lightbox-dialog"
    >
      <div class="lightbox-content">
        <button class="lightbox-close" @click="showLightbox = false">
          <i class="pi pi-times"></i>
        </button>

        <button
            v-if="currentImageIndex > 0"
            class="lightbox-nav lightbox-prev"
            @click="prevImage"
        >
          <i class="pi pi-chevron-left"></i>
        </button>

        <button
            v-if="currentImageIndex < filteredImages.length - 1"
            class="lightbox-nav lightbox-next"
            @click="nextImage"
        >
          <i class="pi pi-chevron-right"></i>
        </button>

        <div class="lightbox-image-wrapper">
          <img
              v-if="currentImage"
              :src="currentImage.src"
              :alt="currentImage.title"
              class="lightbox-image"
          />
        </div>

        <div v-if="currentImage" class="lightbox-info">
          <div class="row align-items-center">
            <div class="col-md-8">
              <h4 class="mb-2">{{ currentImage.title }}</h4>
              <p class="text-muted mb-2">{{ currentImage.description }}</p>
              <div class="d-flex gap-3 align-items-center">
                <span class="badge" :class="getCategoryClass(currentImage.category)">
                  {{ currentImage.category }}
                </span>
                <small class="text-muted">
                  <i class="pi pi-calendar me-1"></i>{{ currentImage.date }}
                </small>
                <small class="text-muted">
                  <i class="pi pi-map-marker me-1"></i>{{ currentImage.location }}
                </small>
              </div>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
              <div class="d-flex gap-2 justify-content-md-end">
                <button class="btn btn-sm btn-outline-primary">
                  <i class="pi pi-heart me-1"></i>Like
                </button>
                <button class="btn btn-sm btn-outline-secondary">
                  <i class="pi pi-share-alt me-1"></i>Share
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="lightbox-counter">
          {{ currentImageIndex + 1 }} / {{ filteredImages.length }}
        </div>
      </div>
    </Dialog>

    <!-- Call to Action -->
    <section class="gallery-cta py-5 bg-light">
      <div class="container text-center">
        <h2 class="fw-bold mb-3">Want to Be Part of Our Story?</h2>
        <p class="lead text-muted mb-4">
          Join us in creating more moments of hope and transformation
        </p>
        <div class="d-flex gap-3 justify-content-center flex-wrap">
          <router-link to="/donate" class="btn btn-primary-custom text-white btn-lg">
            <i class="pi pi-heart me-2"></i>Donate Now
          </router-link>
          <router-link to="/contact" class="btn btn-secondary-custom btn-lg">
            <i class="pi pi-users me-2"></i>Volunteer With Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed } from 'vue';
import Dialog from 'primevue/dialog';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

const activeFilter = ref('all');
const showLightbox = ref(false);
const currentImageIndex = ref(0);
const hasMore = ref(true);

// Sample gallery images (replace with your actual images)
const galleryImages = ref([
  {
    id: 1,
    src: '/images/gallery/children/1.jpeg',
    title: 'Bright Futures',
    description: 'Empowering children through access to quality education, mentorship, and learning resources.',
    category: 'Children\'s Education',
    date: 'March 2024',
    location: 'Fumesua',
    categorySlug: 'children'
  },
  {
    id: 2,
    src: '/images/gallery/community/1.jpeg',
    title: 'Together We Thrive',
    description: 'Hosting inclusive events that strengthen community ties and celebrate local culture.',
    category: 'Community Events',
    date: 'February 2024',
    location: 'Ejisu Municipal',
    categorySlug: 'community'
  },
  {
    id: 3,
    src: '/images/gallery/elderly/1.jpeg',
    title: 'Elderly Health Screening',
    description: 'Free medical check-ups for senior citizens',
    category: 'Elderly Care',
    date: 'March 2024',
    location: 'Assin North',
    categorySlug: 'elderly'
  },
    //break
  {
    id: 4,
    src: '/images/gallery/children/2.jpeg',
    title: 'Books & Beyond',
    description: 'Supporting literacy and creativity with book drives, tutoring, and after-school programs.',
    category: 'Children\'s Education',
    date: 'January 2024',
    location: 'Fumesua',
    categorySlug: 'children'
  },
  {
    id: 5,
    src: '/images/gallery/community/2.jpeg',
    title: 'Mentorship Program',
    description: 'Volunteers guiding the next generation',
    category: 'Community Events',
    date: 'February 2024',
    location: 'Assin Central',
    categorySlug: 'community'
  },
  {
    id: 6,
    src: '/images/gallery/elderly/2.jpeg',
    title: 'Wisdom & Wellness',
    description: 'Promoting active aging through wellness programs, storytelling, and social engagement.',
    category: 'Elderly Care',
    date: 'March 2024',
    location: 'Ejisu Municipal',
    categorySlug: 'elderly'
  },
    //break
  {
    id: 7,
    src: '/images/gallery/children/3.jpeg',
    title: 'Classroom to Community',
    description: 'Bridging the gap between school and life skills to help children thrive in every environment.',
    category: 'Children\'s Education',
    date: 'January 2024',
    location: 'Assin North',
    categorySlug: 'children'
  },
  {
    id: 8,
    src: '/images/gallery/community/3.jpeg',
    title: 'Unity in Action',
    description: 'Mobilizing volunteers and residents for cleanups, drives, and neighborhood improvements.',
    category: 'Community Events',
    date: 'February 2024',
    location: 'Ejisu Municipal',
    categorySlug: 'community'
  },
  {
    id: 9,
    src: '/images/gallery/elderly/3.jpeg',
    title: 'Golden Years',
    description: 'Providing companionship, healthcare support, and dignity for our senior citizens.',
    category: 'Elderly Care',
    date: 'March 2024',
    location: 'Assin Central',
    categorySlug: 'elderly'
  },
  //Break
  {
    id: 10,
    src: '/images/gallery/children/4.jpeg',
    title: 'Seeds of Success',
    description: 'Nurturing young minds with early childhood programs that build confidence, curiosity, and lifelong learning habits.',
    category: 'Children\'s Education',
    date: 'January 2024',
    location: 'Assin North',
    categorySlug: 'children'
  },
  {
    id: 11,
    src: '/images/gallery/community/4.jpeg',
    title: 'Voices of the Village',
    description: 'Giving a platform to community members through forums, performances, and storytelling.',
    category: 'Community Events',
    date: 'February 2024',
    location: 'Kumasi',
    categorySlug: 'community'
  },
  {
    id: 12,
    src: '/images/gallery/elderly/4.jpeg',
    title: 'Senior Smiles',
    description: 'Creating joyful moments through community visits, celebrations, and intergenerational bonding.',
    category: 'Elderly Care',
    date: 'March 2024',
    location: 'Assin Central',
    categorySlug: 'elderly'
  }

]);




const filteredImages = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryImages.value;
  }
  return galleryImages.value.filter(img => img.categorySlug === activeFilter.value);
});

const currentImage = computed(() => {
  return filteredImages.value[currentImageIndex.value];
});

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
};

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const getCategoryClass = (category) => {
  const classes = {
    'Children\'s Education': 'bg-primary',
    'Elderly Care': 'bg-success',
    'Community Events': 'bg-info',
    // 'Volunteers': 'bg-warning text-dark'
  };
  return classes[category] || 'bg-secondary';
};

const loadMore = () => {
  // Implement pagination if needed
  hasMore.value = false;
};

// Keyboard navigation for lightbox
const handleKeyPress = (event) => {
  if (!showLightbox.value) return;

  if (event.key === 'ArrowRight') nextImage();
  if (event.key === 'ArrowLeft') prevImage();
  if (event.key === 'Escape') showLightbox.value = false;
};

// Add event listener
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeyPress);
}
</script>

<style scoped>
/* Hero Section */
.gallery-hero {
  background: linear-gradient(135deg, rgba(0, 40, 85, 0.95), rgba(26, 54, 93, 0.95)),
    url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600') center/cover;
  min-height: 450px;
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
  background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
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

/* Gallery Filters */
.gallery-filters {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 100;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.filter-btn {
  background: white;
  border: 2px solid #e2e8f0;
  color: #4a5568;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-weight: 500;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(44, 82, 130, 0.3);
}

/* Gallery Stats */
.gallery-stat {
  padding: 1.5rem;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.gallery-stat:hover {
  background: rgba(44, 82, 130, 0.05);
  transform: scale(1.05);
}

.stat-number {
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #718096;
  font-weight: 600;
  margin: 0;
}

/* Gallery Cards */
.gallery-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.gallery-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s ease;
  z-index: 1;
}

.gallery-card:hover::before {
  transform: scaleX(1);
}

.gallery-card:hover {
  transform: translateY(-15px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.18);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  height: 300px;
  background: #f7fafc;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  will-change: transform;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.15) rotate(2deg);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.gallery-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  width: 100%;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.gallery-card:hover .overlay-content {
  transform: translateY(0);
}

.overlay-content .btn {
  transition: all 0.3s ease;
}

.overlay-content .btn:hover {
  transform: scale(1.1);
}

.gallery-card-footer {
  padding: 1rem 1.25rem;
  background: white;
  flex-shrink: 0;
}

.gallery-card-footer .badge {
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  border-radius: 12px;
  font-size: 0.75rem;
}

/* Lightbox Styles */
.lightbox-dialog :deep(.p-dialog-content) {
  padding: 0;
  background: #000;
  border-radius: 15px;
}

.lightbox-dialog :deep(.p-dialog-mask) {
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.85);
}

.lightbox-content {
  position: relative;
  background: #000;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 1.5rem;
}

.lightbox-next {
  right: 1.5rem;
}

.lightbox-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  max-height: 70vh;
  padding: 2rem;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  animation: zoomIn 0.4s ease-out;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lightbox-info {
  background: white;
  padding: 2rem;
}

.lightbox-info .btn {
  transition: all 0.3s ease;
}

.lightbox-info .btn:hover {
  transform: translateY(-2px);
}

.lightbox-counter {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Gallery Item Animations */
.fade-in-0 {
  animation: fadeInUp 0.6s ease-out;
}

.fade-in-1 {
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.fade-in-2 {
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

/* CTA Section */
.gallery-cta {
  position: relative;
  background: linear-gradient(135deg, rgba(247, 250, 252, 0.8), rgba(237, 242, 247, 0.8));
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-hero {
    min-height: 350px;
    padding: 80px 0 60px;
  }

  .image-wrapper {
    height: 250px;
  }

  .lightbox-nav {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }

  .lightbox-close {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .lightbox-prev {
    left: 1rem;
  }

  .lightbox-next {
    right: 1rem;
  }

  .lightbox-image-wrapper {
    padding: 1rem;
  }

  .lightbox-info {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .hero-tags {
    justify-content: center;
  }

  .hero-tags .tag {
    font-size: 0.8rem;
    padding: 6px 15px;
  }
}

/* Performance Optimizations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* GPU Acceleration */
.gallery-card,
.gallery-image,
.filter-btn,
.lightbox-image {
  will-change: transform;
  transform: translateZ(0);
}
</style>