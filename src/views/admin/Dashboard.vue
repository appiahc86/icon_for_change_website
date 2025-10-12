<template>
  <div class="dashboard-page">
    <AdminSidebar :active-menu="'dashboard'" :is-collapsed="isSidebarCollapsed" :is-mobile-open="isMobileOpen" />

    <!-- Mobile Overlay -->
    <div v-if="isMobileOpen" class="mobile-overlay" @click="closeMobileSidebar"></div>

    <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <AdminNavbar @toggle-sidebar="toggleSidebar" />

      <div class="content-area">
        <div class="container-fluid">
          <!-- Header -->
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 class="fw-bold mb-1">Dashboard Annual Overview</h2>
              <p class="text-muted mb-0">Welcome back, {{ adminUser }}</p>
            </div>
            <div class="text-end">
              <small class="text-muted">Last updated: {{ currentTime }}</small>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="row g-4 mb-4">
            <div class="col-xl-4 col-md-6">
              <div class="stat-card">
                <div class="stat-icon bg-success">
                  <i class="pi pi-dollar"></i>
                </div>
                <div class="stat-content">
                  <p class="stat-label">Annual Donations</p>
                  <h3 class="stat-value">GHS {{ stats.annualDonations.toLocaleString() }}</h3>
                  <small class="text-success">
                    <i class="pi pi-arrow-up me-1"></i>Total donations
                  </small>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-md-6">
              <div class="stat-card">
                <div class="stat-icon bg-primary">
                  <i class="pi pi-users"></i>
                </div>
                <div class="stat-content">
                  <p class="stat-label">Total Donors</p>
                  <h3 class="stat-value">{{ totalDonors }}</h3>
                  <small class="text-muted">Unique contributors</small>
                </div>
              </div>
            </div>



            <div class="col-xl-4 col-md-6">
              <div class="stat-card">
                <div class="stat-icon bg-warning">
                  <i class="pi pi-heart"></i>
                </div>
                <div class="stat-content">
                  <p class="stat-label">Successful Donations</p>
                  <h3 class="stat-value">{{ stats.donationCount }} </h3>
                  <small class="text-warning">Number of donations</small>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Row -->
          <div class="row g-4 mb-4">
            <div class="col-lg-8">
              <div class="card mb-1 shadow">
                <div class="card-body">
                  <apexchart height="300" type="bar" :series="barChartSeries" :options="barChartOptions"></apexchart>                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title mb-4">Donation by Type</h5>
                  <div class="donation-type-list">
                    <div class="type-item mb-3">
                      <div class="d-flex justify-content-between mb-2">
                        <span>Children's Education</span>
                        <strong>{{ percentages.childrenPercentage.toFixed(2) }}%</strong>
                      </div>
                      <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-primary" :style="`width: ${percentages.childrenPercentage.toFixed(2)}%`"></div>
                      </div>
                    </div>
                    <div class="type-item mb-3">
                      <div class="d-flex justify-content-between mb-2">
                        <span>Elderly Care</span>
                        <strong>{{ percentages.elderlyPercentage.toFixed(2) }}%</strong>
                      </div>
                      <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-success" :style="`width: ${percentages.elderlyPercentage.toFixed(2)}%`"></div>
                      </div>
                    </div>
                    <div class="type-item">
                      <div class="d-flex justify-content-between mb-2">
                        <span>General Support</span>
                        <strong>{{ percentages.generalPercentage.toFixed(2) }}%</strong>
                      </div>
                      <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-info" :style="`width: ${percentages.generalPercentage.toFixed(2)}%`"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="row g-4">
            <div class="col-lg-8">
              <div class="card border-0 shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="card-title mb-0">Recent Donations</h5>
                </div>
                <div class="card-body p-0">
                  <DataTable
                      :value="recentDonations"
                      :loading="loading"
                      stripedRows
                      :paginator="true"
                      :rows="5"
                  >
                    <Column field="name" header="Donator"></Column>
                    <Column field="amount" header="Amount">
                      <template #body="slotProps">
                        {{ slotProps.data.currency }} {{ slotProps.data.amount }}
                      </template>
                    </Column>
                    <Column field="donation_type" header="Type"></Column>
                    <Column field="created_at" header="Date">
                      <template #body="slotProps">
                        {{ formatDate(slotProps.data.created_at) }}
                      </template>
                    </Column>
                    <Column field="payment_status" header="Status">
                      <template #body="slotProps">
                        <span :class="getStatusClass(slotProps.data.payment_status)">
                          {{ slotProps.data.payment_status }}
                        </span>
                      </template>
                    </Column>
                  </DataTable>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card border-0 shadow-sm">
                <div class="card-header bg-white">
                  <h5 class="card-title mb-0">Quick Actions</h5>
                </div>
                <div class="card-body">
                  <div class="d-grid gap-2">
                    <router-link to="/admin/donations" class="btn btn-primary">
                      <i class="pi pi-list me-2"></i>View All Donations
                    </router-link>
<!--                    <router-link to="/admin/messages" class="btn btn-outline-primary">-->
<!--                      <i class="pi pi-envelope me-2"></i>View Messages-->
<!--                    </router-link>-->
                    <button class="btn btn-outline-secondary" @click="refreshData">
                      <i class="pi pi-refresh me-2"></i>Refresh Data
                    </button>
                  </div>
                </div>
              </div>

              <div class="card border-0 shadow-sm mt-4">
                <div class="card-header bg-white">
                  <h5 class="card-title mb-0">System Info</h5>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled mb-0">
                    <li class="mb-2">
                      <i class="pi pi-calendar me-2 text-muted"></i>
                      <small>Today: {{ new Date().toLocaleDateString() }}</small>
                    </li>
                    <li class="mb-2">
                      <i class="pi pi-server me-2 text-muted"></i>
                      <small>Server: Online</small>
                    </li>
                    <li>
                      <i class="pi pi-database me-2 text-muted"></i>
                      <small>Database: Connected</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import apiService from "@/config/index.js";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import AdminSidebar from '../../components/admin/AdminSidebar.vue';
import AdminNavbar from '../../components/admin/AdminNavbar.vue';

const router = useRouter();

const adminUser = ref(localStorage.getItem('admin_user') || 'Admin');
const currentTime = ref(new Date().toLocaleString());
const loading = ref(true);
const isSidebarCollapsed = ref(false);
const isMobileOpen = ref(false);

const data = ref([])
const totalDonors = ref(0);
const generalCare = ref(0);
const childrenEducation = ref(0);
const elderlyCare = ref(0);


//Barchart data
const barChartOptions = reactive({
  chart: {
    id: 'bar-chart',
  },
  plotOptions: {
    bar: {
      distributed: true
    }
  },
  colors: [
    "rgba(255,99,132,0.7)", "rgba(175, 159, 64, 0.7)", "rgba(255, 205, 86, 0.7)", "rgba(75, 192, 192, 0.7)",
    "rgba(25, 119,132, 0.7)","rgba(125, 99,192, 0.7)", "rgba(67,87,215, 0.7)", "rgba(128, 12, 128, 0.7)",
    "rgba(200,199,12,0.89)", "rgba(91,113,244,0.7)", "rgba(100, 10,12, 0.7)", "rgba(150, 10,100, 0.7)",
  ],
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Annual Donations',
    align: 'left'
  },
  xaxis: {
    categories: ["January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"],
  }
})
const barChartSeries = ref([
  {
    name: 'Month',
    data: [],
  }
])


const recentDonations = ref([]);

// Update time every minute
setInterval(() => {
  currentTime.value = new Date().toLocaleString();
}, 60000);

const fetchStats = async () => {
  try {
    const response = await apiService.get(`/admin/donations/stats`);
    if (response.data.success) {
      recentDonations.value = response.data.recentDonations;
      data.value = response.data?.currentYear?.data || [];
      totalDonors.value = response.data?.stats?.totalDonators || 0;
      populateChart()
    }

  } catch (error) {
    console.error('Error fetching stats:', error);
  } finally {
    loading.value = false;
  }
};

//Get Stats
const stats = computed(() => {
  let annualDonations = 0;
  let donationCount = 0;
  for (const d of data.value) {
    annualDonations += d.totalAmount;
    donationCount += d.donationCount;

    //donation type
    if (d.donationType === "Elderly Care") elderlyCare.value += d.totalAmount;
    if (d.donationType === "General") generalCare.value += d.totalAmount;
    if (d.donationType === "Children Education") childrenEducation.value += d.totalAmount;
  }
  return { annualDonations, donationCount }
})

//Get Percentages on Donation Type
const percentages = computed(() => {
  let childrenPercentage = 0;
  let generalPercentage = 0;
  let elderlyPercentage = 0;
  const total = childrenEducation.value + generalCare.value + elderlyCare.value;

  childrenPercentage = (childrenEducation.value / total) * 100;
  generalPercentage = (generalCare.value / total) * 100;
  elderlyPercentage = (elderlyCare.value / total) * 100;

  return {childrenPercentage, generalPercentage, elderlyPercentage}

})



//Prepare Barchart
const populateChart = () => {
  const months = {
      January:0, February:0, March:0, April:0, May:0, June:0, July:0, August:0,
      September:0, October:0, November:0, December:0
}


if (data.value.length){
  for (const d of data.value) {
    if (d.month === 1) months.January += parseFloat(d.totalAmount) || 0; //JAN
    if (d.month === 2) months.February += parseFloat(d.totalAmount) || 0; //FEB
    if (d.month === 3) months.March += parseFloat(d.totalAmount) || 0; //MAR
    if (d.month === 4) months.April += parseFloat(d.totalAmount) || 0; //APR
    if (d.month === 5) months.May += parseFloat(d.totalAmount) || 0; //MAY
    if (d.month === 6) months.June += parseFloat(d.totalAmount) || 0; //JUN/
    if (d.month === 7) months.July += parseFloat(d.totalAmount) || 0; //JUL
    if (d.month === 8) months.August += parseFloat(d.totalAmount) || 0; //AUG
    if (d.month === 9) months.September += parseFloat(d.totalAmount) || 0; //SEP
    if (d.month === 10) months.October += parseFloat(d.totalAmount) || 0; //OCT
    if (d.month === 11) months.November += parseFloat(d.totalAmount) || 0; //NOV
    if (d.month === 12) months.December += parseFloat(d.totalAmount) || 0; //DEC
  }
}

  const monthValues = Object.values(months);


  barChartSeries.value = [
    {
      name: 'Month',
      data: monthValues
    }
  ];

}


const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const getStatusClass = (status) => {
  const classes = {
    'success': 'badge bg-success',
    'pending': 'badge bg-warning',
    'failed': 'badge bg-danger'
  };
  return classes[status] || 'badge bg-secondary';
};

const refreshData = () => {
  loading.value = true;
  fetchStats();
};

const toggleSidebar = () => {
  // On mobile, toggle the mobile open state
  if (window.innerWidth <= 768) {
    isMobileOpen.value = !isMobileOpen.value;
  } else {
    // On desktop, toggle collapse state
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
  }
};

const closeMobileSidebar = () => {
  isMobileOpen.value = false;
};

onMounted(() => {
  // Check authentication
  if (!localStorage.getItem('admin_token')) {
    router.push('/admin/login');
    return;
  }
  fetchStats();
});
</script>

<style scoped>
.dashboard-page {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
}

.main-content {
  flex: 1;
  margin-left: 260px;
  transition: margin-left 0.3s ease;
}

.main-content.sidebar-collapsed {
  margin-left: 80px;
}

.content-area {
  padding: 2rem;
}

.stat-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
}

.stat-content {
  flex: 1;
}

.stat-label {
  margin: 0;
  color: #6c757d;
  font-size: 0.875rem;
  font-weight: 500;
}

.stat-value {
  margin: 0.25rem 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
}

.chart-container {
  min-height: 300px;
}

:deep(.p-datatable) {
  font-size: 0.9rem;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
  background: #f8f9fa;
  color: #495057;
  font-weight: 600;
  padding: 1rem;
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  padding: 1rem;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>