<template>
  <Navbar />
  <div class="donation-success-page">
    <section class="success-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="success-card text-center p-5">
              <!-- Loading State -->
              <div v-if="isVerifying" class="loading-state">
                <ProgressSpinner />
                <p class="mt-4 text-muted">Verifying your payment...</p>
              </div>

              <!-- Success State -->
              <div v-else-if="paymentVerified && paymentStatus === 'success'" class="success-state">
                <div class="success-icon mb-4">
                  <i class="pi pi-check-circle"></i>
                </div>
                <h1 class="display-4 fw-bold mb-3">Thank You!</h1>
                <h4 class="text-muted mb-4">Your donation was successful</h4>

                <div class="donation-details p-4 bg-light rounded mb-4">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <p class="text-muted small mb-1">Amount Donated</p>
                      <h5 class="mb-0">{{ donationDetails.currency }} {{ donationDetails.amount }}</h5>
                    </div>
                    <div class="col-md-6 mb-3">
                      <p class="text-muted small mb-1">Reference</p>
                      <h5 class="mb-0">{{ donationDetails.reference }}</h5>
                    </div>
                  </div>
                </div>

                <div class="impact-message mb-4">
                  <h5 class="mb-3">Your Impact</h5>
                  <p class="lead text-muted">
                    Your generosity will directly help children access quality education and elderly persons
                    receive the care and dignity they deserve. Thank you for making a difference!
                  </p>
                </div>

                <div class="next-steps">
                  <p class="text-muted mb-4">
                    A receipt has been sent to your email address. You can also share your good deed with others.
                  </p>

                  <div class="button-group">
                    <router-link to="/" class="btn btn-primary-custom btn-lg me-2 mb-2 text-white">
                      <i class="pi pi-home me-2"></i>Back to Home
                    </router-link>
                    <button @click="shareOnSocial" class="btn btn-secondary-custom btn-lg mb-2">
                      <i class="pi pi-share-alt me-2"></i>Share
                    </button>
                  </div>
                </div>

                <!-- Social Share Icons -->
                <div class="social-share mt-4">
                  <p class="small text-muted mb-2">Inspire others:</p>
                  <a href="#" @click.prevent="shareOnFacebook" class="share-icon me-2">
                    <i class="pi pi-facebook"></i>
                  </a>
                  <a href="#" @click.prevent="shareOnTwitter" class="share-icon me-2">
                    <i class="pi pi-twitter"></i>
                  </a>
                  <a href="#" @click.prevent="shareOnLinkedIn" class="share-icon">
                    <i class="pi pi-linkedin"></i>
                  </a>
                </div>
              </div>

              <!-- Failed State -->
              <div v-else-if="paymentVerified && paymentStatus !== 'success'" class="failed-state">
                <div class="failed-icon mb-4">
                  <i class="pi pi-times-circle"></i>
                </div>
                <h1 class="display-4 fw-bold mb-3">Payment Not Completed</h1>
                <p class="lead text-muted mb-4">
                  We couldn't process your donation at this time. Please try again.
                </p>

                <div class="button-group">
                  <router-link to="/donate" class="btn btn-primary-custom btn-lg me-2 mb-2">
                    <i class="pi pi-refresh me-2"></i>Try Again
                  </router-link>
                  <router-link to="/contact" class="btn btn-outline-primary btn-lg mb-2">
                    Contact Support
                  </router-link>
                </div>
              </div>

              <!-- Error State -->
              <div v-else-if="verificationError" class="error-state">
                <div class="error-icon mb-4">
                  <i class="pi pi-exclamation-triangle"></i>
                </div>
                <h1 class="display-4 fw-bold mb-3">Verification Error</h1>
                <p class="lead text-muted mb-4">
                  We encountered an issue verifying your payment. Please contact us with your reference number.
                </p>

                <div class="button-group">
                  <router-link to="/contact" class="btn btn-primary-custom btn-lg me-2 mb-2">
                    Contact Support
                  </router-link>
                  <router-link to="/" class="btn btn-outline-primary btn-lg mb-2">
                    Back to Home
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="additional-info text-center mt-5">
              <h5 class="mb-3">Stay Connected</h5>
              <p class="text-muted mb-4">
                Follow our journey and see how your donation is making an impact
              </p>
              <div class="social-links">
                <a href="#" class="social-link me-3"><i class="pi pi-facebook"></i></a>
                <a href="#" class="social-link me-3"><i class="pi pi-twitter"></i></a>
                <a href="#" class="social-link me-3"><i class="pi pi-instagram"></i></a>
                <a href="#" class="social-link"><i class="pi pi-linkedin"></i></a>
              </div>
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
import { useRoute } from 'vue-router';
import ProgressSpinner from 'primevue/progressspinner';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import {useHomeStore} from "@/stores/home.js";

const route = useRoute();
const homeStore = useHomeStore();

const isVerifying = ref(true);
const paymentVerified = ref(false);
const paymentStatus = ref('');
const verificationError = ref(false);
const donationDetails = ref({
  amount: 0,
  currency: 'GHS',
  reference: ''
});

const verifyPayment = async () => {
  const reference = route.query.reference;

  if (!reference) {
    verificationError.value = true;
    isVerifying.value = false;
    return;
  }

  try {
    const response = await homeStore.verifyDonation(reference);

    if (response.success) {
      paymentVerified.value = true;
      paymentStatus.value = response.data.status;
      donationDetails.value = {
        amount: response.data.amount,
        currency: response.data.currency,
        reference: response.data.reference
      };
    } else {
      verificationError.value = true;
    }
  } catch (error) {
    console.error('Verification error:', error);
    verificationError.value = true;
  } finally {
    isVerifying.value = false;
  }
};

const shareOnSocial = async () => {
  // Check if Web Share API is available
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'I just donated to Icon of Change LGB Ghana',
        text: 'Join me in supporting children and elderly persons in Ghana!',
        url: window.location.origin
      });
    } catch (error) {
      // User cancelled the share dialog
      if (error.name === 'AbortError') {
        return; // Silently handle cancellation
      }
      // Other errors - fallback to clipboard
      console.error('Error sharing:', error);
      copyLinkToClipboard();
    }
  } else {
    // Web Share API not supported - fallback to clipboard
    copyLinkToClipboard();
  }
};

const copyLinkToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(window.location.origin);
    alert('Link copied to clipboard! Share it with your friends.');
  } catch (error) {
    console.error('Failed to copy link:', error);
    // Final fallback - show a prompt with the link
    prompt('Copy this link to share:', window.location.origin);
  }
};

const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnTwitter = () => {
  const text = 'I just donated to @IconOfChangeLGB to support children and elderly persons in Ghana! Join me in making a difference.';
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.origin)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}`;
  window.open(url, '_blank', 'width=600,height=400');
};

onMounted(() => {
  verifyPayment();
});
</script>

<style scoped>
.success-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
}

.success-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.success-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--secondary-color), #2f855a);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.5s ease-out;
}

.success-icon i {
  font-size: 4rem;
  color: white;
}

.failed-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #fc8181, #e53e3e);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.failed-icon i {
  font-size: 4rem;
  color: white;
}

.error-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f6ad55, #ed8936);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.error-icon i {
  font-size: 4rem;
  color: white;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.donation-details {
  border: 2px solid #e2e8f0;
}

.share-icon {
  display: inline-flex;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.share-icon:hover {
  background: var(--secondary-color);
  transform: translateY(-3px);
}

.social-link {
  display: inline-flex;
  width: 45px;
  height: 45px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: var(--secondary-color);
  transform: translateY(-3px);
}

:deep(.p-progress-spinner) {
  width: 80px;
  height: 80px;
}

:deep(.p-progress-spinner-circle) {
  stroke: var(--primary-color);
}
</style>