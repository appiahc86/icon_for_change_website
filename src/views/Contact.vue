<template>
 <Navbar />
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold text-white mb-3">Get In Touch</h1>
            <p class="lead text-white">We'd love to hear from you. Reach out to learn more or get involved.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-7">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-5">
                <h3 class="mb-4">Send Us a Message</h3>

                <Toast />

                <form @submit.prevent="handleSubmit">
                  <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Full Name *</label>
                      <input
                          type="text"
                          v-model="contactForm.name"
                          class="form-control"
                          placeholder="Your name"
                          required
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Email Address *</label>
                      <input
                          type="email"
                          v-model="contactForm.email"
                          class="form-control"
                          placeholder="your@email.com"
                          required
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label fw-bold">Subject</label>
                    <input
                        type="text"
                        v-model="contactForm.subject"
                        class="form-control"
                        placeholder="What is this about?"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="form-label fw-bold">Message *</label>
                    <textarea
                        v-model="contactForm.message"
                        rows="6"
                        class="form-control"
                        placeholder="Tell us more..."
                        required
                    ></textarea>
                  </div>

                  <button
                      type="submit"
                      class="btn btn-primary-custom w-100"
                      :disabled="isSubmitting"
                  >
                    <i class="pi pi-send me-2"></i>
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="col-lg-5">
            <div class="contact-info-wrapper">
              <h3 class="mb-4">Contact Information</h3>

              <div class="contact-info-card mb-4">
                <div class="info-icon">
                  <i class="pi pi-map-marker"></i>
                </div>
                <div class="info-content">
                  <h5>Our Location</h5>
                  <p class="text-muted mb-0">Kumasi, Ashanti Region, Ghana</p>
                </div>
              </div>

              <div class="contact-info-card mb-4">
                <div class="info-icon">
                  <i class="pi pi-phone"></i>
                </div>
                <div class="info-content">
                  <h5>Phone Number</h5>
                  <p class="text-muted mb-0">+233 XX XXX XXXX</p>
                </div>
              </div>

              <div class="contact-info-card mb-4">
                <div class="info-icon">
                  <i class="pi pi-envelope"></i>
                </div>
                <div class="info-content">
                  <h5>Email Address</h5>
                  <p class="text-muted mb-0">info@iconofchange.org</p>
                </div>
              </div>

              <div class="contact-info-card mb-4">
                <div class="info-icon">
                  <i class="pi pi-clock"></i>
                </div>
                <div class="info-content">
                  <h5>Working Hours</h5>
                  <p class="text-muted mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p class="text-muted mb-0">Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div class="social-section mt-5">
                <h5 class="mb-3">Follow Us</h5>
                <div class="social-icons">
                  <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
                  <a href="#" class="social-icon"><i class="pi pi-twitter"></i></a>
                  <a href="#" class="social-icon"><i class="pi pi-instagram"></i></a>
                  <a href="#" class="social-icon"><i class="pi pi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-4">
          <h3>Visit Our Office</h3>
          <p class="text-muted">We welcome visitors by appointment</p>
        </div>
        <div class="map-container">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126179.01057371163!2d-1.6780769!3d6.6884727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f342e5cd63%3A0x2ef00bc628e84c8a!2sKumasi%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="400"
              style="border:0; border-radius: 10px;"
              allowfullscreen=""
              loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

const toast = useToast();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, {
      name: contactForm.value.name,
      email: contactForm.value.email,
      subject: contactForm.value.subject,
      message: contactForm.value.message
    });

    if (response.data.success) {
      toast.add({
        severity: 'success',
        summary: 'Message Sent',
        detail: 'Thank you for contacting us! We will get back to you soon.',
        life: 5000
      });

      // Reset form
      contactForm.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  } catch (error) {
    console.error('Contact form error:', error);
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to send message. Please try again.',
      life: 5000
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-hero {
  background: linear-gradient(135deg, var(--primary-color), #1a365d);
  min-height: 300px;
  display: flex;
  align-items: center;
}

.form-control {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(44, 82, 130, 0.25);
  outline: 0;
}

.contact-info-card {
  display: flex;
  align-items: start;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.contact-info-card:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.info-icon i {
  font-size: 1.5rem;
  color: white;
}

.info-content h5 {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  width: 45px;
  height: 45px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: var(--secondary-color);
  transform: translateY(-3px);
  color: white;
}

.map-container {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.btn-primary-custom:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>