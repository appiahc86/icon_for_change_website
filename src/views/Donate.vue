<template>
 <Navbar />
  <div class="donate-page">
    <!-- Hero Section -->
    <section class="donate-hero py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold text-white mb-3">Make a Difference Today</h1>
            <p class="lead text-white">Your generosity empowers children and the elderly to live with dignity and hope</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Form Section -->
    <section class="donation-form-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow-lg border-0 rounded-3">
              <div class="card-body p-5">
                <h2 class="text-center mb-4">Support Our Mission</h2>

                <Toast />

                <form @submit.prevent="handleDonation">
                  <!-- Donation Type -->
                  <div class="mb-4">
                    <label class="form-label fw-bold">Choose a Cause</label>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <div class="donation-type-card"
                             :class="{ active: donationForm.donationType === 'Children Education' }"
                             @click="donationForm.donationType = 'Children Education'">
                          <i class="pi pi-graduation-cap"></i>
                          <p class="mb-0">Children's Education</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="donation-type-card"
                             :class="{ active: donationForm.donationType === 'Elderly Care' }"
                             @click="donationForm.donationType = 'Elderly Care'">
                          <i class="pi pi-users"></i>
                          <p class="mb-0">Elderly Care</p>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="donation-type-card"
                             :class="{ active: donationForm.donationType === 'General' }"
                             @click="donationForm.donationType = 'General'">
                          <i class="pi pi-heart"></i>
                          <p class="mb-0">General Support</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Donation Amount -->
                  <div class="mb-4">
                    <label class="form-label fw-bold">Select Amount (GHS)</label>
                    <div class="row g-3 mb-3">
                      <div class="col-4 col-md-2" v-for="preset in presetAmounts" :key="preset">
                        <button
                            type="button"
                            class="btn btn-outline-primary w-100"
                            :class="{ active: donationForm.amount === preset }"
                            @click="donationForm.amount = preset">
                          {{ preset }}
                        </button>
                      </div>
                    </div>
                    <InputNumber
                        v-model="donationForm.amount"
                        placeholder="Enter custom amount"
                        :min="1"
                        :max="1000000"
                        mode="currency"
                        currency="GHS"
                        locale="en-GH"
                        class="w-100"
                        inputClass="form-control"
                        required
                    />
                  </div>

                  <!-- Personal Information -->
                  <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Full Name *</label>
                      <InputText
                          v-model="donationForm.name"
                          placeholder="John Doe"
                          class="w-100"
                          inputClass="form-control"
                          required
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Email Address *</label>
                      <InputText
                          v-model="donationForm.email"
                          type="email"
                          placeholder="john@example.com"
                          class="w-100"
                          inputClass="form-control"
                          required
                      />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Phone Number</label>
                      <InputText
                          v-model="donationForm.phone"
                          placeholder="+233 XX XXX XXXX"
                          class="w-100"
                          inputClass="form-control"
                      />
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-bold">Country</label>
<!--                      <InputText-->
<!--                          v-model="donationForm.country"-->
<!--                          placeholder="Ghana"-->
<!--                          class="w-100"-->
<!--                          inputClass="form-control"-->
<!--                      />-->
                      <template v-if="loading">
                        <v-select placeholder="Loading Countries. please wait......"
                                  class="form-control w-100" disabled="disabled" title="Countries is loading. please be patient...">
                        </v-select>
                      </template>
                      <template v-else>
                        <v-select :options="countries" label="name" v-model="donationForm.country"
                                  placeholder="" class="form-control w-100">
                        </v-select>
                      </template>
                    </div>
                  </div>

                  <!-- Message -->
                  <div class="mb-4">
                    <label class="form-label fw-bold">Message (Optional)</label>
                    <Textarea
                        v-model="donationForm.message"
                        rows="3"
                        placeholder="Leave a message of hope..."
                        class="w-100"
                        inputClass="form-control"
                    />
                  </div>

                  <!-- Anonymous Donation -->
                  <div class="mb-4">
                    <div class="form-check">
                      <Checkbox
                          v-model="donationForm.isAnonymous"
                          :binary="true"
                          inputId="anonymous"
                      />
                      <label class="form-check-label ms-2" for="anonymous">
                        Make this donation anonymous
                      </label>
                    </div>
                  </div>

                  <!-- Submit Button -->
                  <div class="d-grid">
                    <Button
                        type="submit"
                        label="Proceed to Payment"
                        icon="pi pi-lock"
                        :loading="isProcessing"
                        class="btn-lg btn-primary-custom"
                        :disabled="!isFormValid"
                    />
                  </div>

                  <p class="text-center text-muted mt-3 small">
                    <i class="pi pi-shield me-1"></i>
                    Secure payment powered by Paystack
                  </p>
                </form>
              </div>
            </div>

            <!-- Impact Message -->
            <div class="impact-message text-center mt-5">
              <h4 class="mb-3">Your Impact</h4>
              <div class="row">
                <div class="col-md-4">
                  <div class="impact-card p-3">
                    <h5 class="text-primary">GHS 50</h5>
                    <p class="small mb-0">Provides school supplies for 2 children</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="impact-card p-3">
                    <h5 class="text-primary">GHS 150</h5>
                    <p class="small mb-0">Supports healthcare for 5 elderly persons</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="impact-card p-3">
                    <h5 class="text-primary">GHS 500</h5>
                    <p class="small mb-0">Funds a month of feeding program</p>
                  </div>
                </div>
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
import {ref, computed, reactive, onMounted} from 'vue';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import 'vue-select/dist/vue-select.css';
import {useHomeStore} from "@/stores/home.js";


const toast = useToast();
const homeStore = useHomeStore();


const donationForm = reactive({
  name: '',
  email: '',
  phone: '',
  country: null,
  amount: 100,
  currency: 'GHS',
  donationType: 'General',
  message: '',
  isAnonymous: false
});

const loading = ref(false);
const presetAmounts = [20, 50, 100, 200, 500, 1000];
const isProcessing = ref(false);
const countries = ref([]);

const isFormValid = computed(() => {
  return donationForm.name &&
      donationForm.email &&
      donationForm.amount > 0;
});

const loadCountries = async () => {
  try {
    loading.value = true;
     const response = await homeStore.getCountries();
    countries.value = response?.data?.countries || [];

  }catch (e) {
    console.log(e.message)
  }finally {
    loading.value = false;
  }
}


//Handle donation
const handleDonation = async () => {
  if (!isFormValid.value) {
    toast.add({
      severity: 'warn',
      summary: 'Incomplete Form',
      detail: 'Please fill in all required fields',
      life: 3000
    });
    return;
  }

  isProcessing.value = true;

  const payload = {
    name: donationForm.name,
    email: donationForm.email,
    phone: donationForm.phone,
    country: donationForm.country?.id || null,
    amount: donationForm.amount,
    currency: donationForm.currency,
    donationType: donationForm.donationType,
    message: donationForm.message,
    isAnonymous: donationForm.isAnonymous
  }

  try {
    const response = await homeStore.initializeDonation(payload)

    if (response.success) {
      // Redirect to Paystack payment page
      window.location.href = response.data.authorization_url;
    }
  } catch (error) {
    console.error('Donation error:', error);
    toast.add({
      severity: 'error',
      summary: 'Payment Error',
      detail: error.response?.data?.error || 'Failed to initialize payment. Please try again.',
      life: 5000
    });
  } finally {
    isProcessing.value = false;
  }
};


onMounted(() => {
  loadCountries();
})
</script>

<style scoped>
.donate-hero {
  background: linear-gradient(135deg, var(--primary-color), #1a365d);
  min-height: 300px;
  display: flex;
  align-items: center;
}

.donation-type-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.donation-type-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.donation-type-card.active {
  border-color: var(--primary-color);
  background: linear-gradient(135deg, rgba(44, 82, 130, 0.1), rgba(72, 187, 120, 0.1));
}

.donation-type-card i {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.donation-type-card p {
  font-weight: 600;
  color: var(--text-dark);
}

.btn-outline-primary.active {
  background: var(--primary-color);
  color: white;
}

.impact-card {
  background: #f7fafc;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

:deep(.p-inputtext) {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

:deep(.p-inputnumber-input) {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

:deep(.p-button) {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}
</style>