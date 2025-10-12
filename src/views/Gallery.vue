<template>
  <Navbar />
  <div class="gallery-page">
    <!-- Hero Section -->
    <section class="gallery-hero py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold text-white mb-3">Our Gallery</h1>
            <p class="lead text-white">Moments of hope, care, and transformation in our community</p>
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
          <button
              class="btn filter-btn"
              :class="{ active: activeFilter === 'volunteers' }"
              @click="activeFilter = 'volunteers'"
          >
            <i class="pi pi-users me-2"></i>Volunteers
          </button>
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
        <div v-if="filteredImages.length > 0 && hasMore" class="text-center mt-5">
          <button class="btn btn-primary-custom btn-lg" @click="loadMore">
            <i class="pi pi-plus-circle me-2"></i>Load More Photos
          </button>
        </div>
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
          <router-link to="/donate" class="btn btn-primary-custom btn-lg">
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
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    title: 'School Supplies Distribution',
    description: 'Providing essential learning materials to children in Assin Central',
    category: 'Children\'s Education',
    date: 'March 2024',
    location: 'Assin Central',
    categorySlug: 'children'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    title: 'Reading Time',
    description: 'Children enjoying books from our mobile library program',
    category: 'Children\'s Education',
    date: 'February 2024',
    location: 'Ejisu Municipal',
    categorySlug: 'children'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800',
    title: 'Elderly Health Screening',
    description: 'Free medical check-ups for senior citizens',
    category: 'Elderly Care',
    date: 'March 2024',
    location: 'Assin North',
    categorySlug: 'elderly'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    title: 'Community Gathering',
    description: 'Bringing generations together through shared activities',
    category: 'Community Events',
    date: 'January 2024',
    location: 'Kumasi',
    categorySlug: 'community'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    title: 'Mentorship Program',
    description: 'Volunteers guiding the next generation',
    category: 'Volunteers',
    date: 'February 2024',
    location: 'Assin Central',
    categorySlug: 'volunteers'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
    title: 'Feeding Program',
    description: 'Nutritious meals for elderly community members',
    category: 'Elderly Care',
    date: 'March 2024',
    location: 'Ejisu Municipal',
    categorySlug: 'elderly'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    title: 'Sports Day',
    description: 'Promoting health and teamwork among children',
    category: 'Children\'s Education',
    date: 'January 2024',
    location: 'Assin North',
    categorySlug: 'children'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
    title: 'Intergenerational Program',
    description: 'Children and elderly sharing stories and wisdom',
    category: 'Community Events',
    date: 'February 2024',
    location: 'Kumasi',
    categorySlug: 'community'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800',
    title: 'Volunteer Training',
    description: 'Equipping volunteers with caregiving skills',
    category: 'Volunteers',
    date: 'March 2024',
    location: 'Assin Central',
    categorySlug: 'volunteers'
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
    'Volunteers': 'bg-warning text-dark'
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
.gallery-hero {
  background: linear-gradient(135deg, var(--primary-color), #1a365d);
  min-height: 300px;
  display: flex;
  align-items: center;
}

.gallery-filters {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.filter-btn {
  background: white;
  border: 2px solid #e2e8f0;
  color: #4a5568;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

.gallery-stat {
  padding: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #718096;
  font-weight: 500;
  margin: 0;
}

.gallery-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gallery-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover .gallery-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.9) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.gallery-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  width: 100%;
}

.gallery-card-footer {
  padding: 1rem;
  background: white;
}

/* Lightbox Styles */
.lightbox-dialog :deep(.p-dialog-content) {
  padding: 0;
  background: #000;
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
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-prev {
  left: 1rem;
}

.lightbox-next {
  right: 1rem;
}

.lightbox-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  max-height: 70vh;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.lightbox-info {
  background: white;
  padding: 1.5rem;
}

.lightbox-counter {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Animation */
.fade-in-0 {
  animation: fadeInUp 0.6s ease-out;
}

.fade-in-1 {
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.fade-in-2 {
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
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

@media (max-width: 768px) {
  .image-wrapper {
    height: 250px;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
  }
}
</style>