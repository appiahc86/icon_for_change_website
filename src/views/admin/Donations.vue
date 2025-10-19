<template>
  <div class="donations-page">
    <AdminSidebar :active-menu="'donations'" :is-collapsed="isSidebarCollapsed" :is-mobile-open="isMobileOpen" />

    <!-- Mobile Overlay -->
    <div v-if="isMobileOpen" class="mobile-overlay" @click="closeMobileSidebar"></div>

    <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <AdminNavbar @toggle-sidebar="toggleSidebar" />

      <div class="content-area">
        <div class="container-fluid">
          <!-- Header -->
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
            <div>
              <h2 class="fw-bold mb-1">Donations Management</h2>
              <p class="text-muted mb-0">View and manage all donations</p>
            </div>
            <div class="d-flex gap-2 w-100 w-md-auto">
<!--              <button class="btn btn-outline-primary flex-fill flex-md-grow-0" @click="exportData">-->
<!--                <i class="pi pi-download me-2"></i>-->
<!--                <span class="d-none d-sm-inline">Export</span>-->
<!--              </button>-->
              <button class="btn btn-primary-custom text-white flex-fill flex-md-grow-0" @click="refreshData">
                <i class="pi pi-refresh me-2"></i>
                <span class="d-none d-sm-inline">Refresh</span>
              </button>
            </div>
          </div>

          <!-- Filters -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
              <div class="row g-3">
                <div class="col-12 col-md-6 col-lg-3">
                  <label class="form-label small fw-bold">Search</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="pi pi-search"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        v-model="filters.search"
                        placeholder="Name, email..."
                    />
                  </div>
                </div>

                <div class="col-6 col-md-3 col-lg-2">
                  <label class="form-label small fw-bold">Status</label>
                  <select class="form-select" v-model="filters.payment_status">
                    <option value="">All Status</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>

                <div class="col-6 col-md-3 col-lg-2">
                  <label class="form-label small fw-bold">Type</label>
                  <select class="form-select" v-model="filters.donation_type">
                    <option value="">All Types</option>
                    <option value="Children Education">Children Education</option>
                    <option value="Elderly Care">Elderly Care</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div class="col-6 col-md-6 col-lg-2">
                  <label class="form-label small fw-bold">Date From</label>
                  <input type="date" class="form-control" v-model="filters.dateFrom" />
                </div>

                <div class="col-6 col-md-6 col-lg-2">
                  <label class="form-label small fw-bold">Date To</label>
                  <input type="date" class="form-control" v-model="filters.dateTo" />
                </div>

                <div class="col-12 col-lg-1 d-flex align-items-end">
                  <button class="btn btn-outline-secondary w-100" @click="clearFilters">
                    <i class="pi pi-times"></i>
                    <span class="d-md-none ms-2">Clear</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile Cards View -->
          <div class="d-lg-none mb-4">
            <div v-if="loading" class="text-center py-5">
              <ProgressSpinner style="width: 50px; height: 50px" />
            </div>

            <div v-else>
              <div v-for="donation in paginatedDonations" :key="donation.id" class="card mb-3 shadow-sm">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <span class="badge bg-secondary mb-2">#{{ donation.id }}</span>
                      <h6 class="mb-1 fw-bold">{{ donation.donator_name }}</h6>
                      <small class="text-muted d-block">{{ donation.donator_email }}</small>
                    </div>
                    <span :class="getStatusClass(donation.payment_status)">
                      {{ donation.payment_status }}
                    </span>
                  </div>

                  <div class="row mb-3">
                    <div class="col-6">
                      <small class="text-muted d-block">Amount</small>
                      <strong class="text-success">{{ donation.currency }} {{ donation.amount.toLocaleString() }}</strong>
                    </div>
                    <div class="col-6">
                      <small class="text-muted d-block">Type</small>
                      <span class="badge" :class="getTypeClass(donation.donation_type)">
                        {{ donation.donation_type }}
                      </span>
                    </div>
                  </div>


                  <div class="mb-3">
                    <small class="text-muted d-block">Date</small>
                    <small>{{ formatDate(donation.created_at) }}</small>
                  </div>

                  <div class="d-flex gap-2">
                    <button
                        class="btn btn-sm btn-outline-primary flex-fill"
                        @click="viewDonation(donation)"
                    >
                      <i class="pi pi-eye me-1"></i>View
                    </button>
<!--                    <button-->
<!--                        class="btn btn-sm btn-outline-danger"-->
<!--                        @click="deleteDonation(donation.id)"-->
<!--                    >-->
<!--                      <i class="pi pi-trash"></i>-->
<!--                    </button>-->
                  </div>
                </div>
              </div>

              <!-- Mobile Pagination -->
              <div v-if="totalRecords > itemsPerPage" class="d-flex justify-content-between align-items-center">
                <button
                    class="btn btn-outline-primary btn-sm"
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                >
                  <i class="pi pi-chevron-left"></i> Prev
                </button>
                <span class="text-muted small">Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                    class="btn btn-outline-primary btn-sm"
                    @click="currentPage++"
                    :disabled="currentPage === totalPages"
                >
                  Next <i class="pi pi-chevron-right"></i>
                </button>
              </div>

              <div v-if="donations.length === 0 && !loading" class="text-center py-5">
                <i class="pi pi-inbox" style="font-size: 3rem; color: #cbd5e0;"></i>
                <p class="text-muted mt-3">No donations found</p>
              </div>
            </div>
          </div>

          <!-- Desktop Table View -->
          <div class="card border-0 shadow-sm d-none d-lg-block">
            <div class="card-body p-0">
              <DataTable
                  :value="donations"
                  :loading="loading"
                  stripedRows
                  :paginator="false"
                  responsiveLayout="scroll"
                  v-model:selection="selectedDonations"
                  dataKey="id"
              >
                <template #empty>
                  <div class="text-center py-5">
                    <i class="pi pi-inbox" style="font-size: 3rem; color: #cbd5e0;"></i>
                    <p class="text-muted mt-3">No donations found</p>
                  </div>
                </template>

                <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

                <Column field="id" header="ID" :sortable="true" style="min-width: 80px">
                  <template #body="slotProps">
                    <span class="badge bg-secondary">#{{ slotProps.data.id }}</span>
                  </template>
                </Column>

                <Column field="donator_name" header="Donator" :sortable="true" style="min-width: 180px">
                  <template #body="slotProps">
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm me-2">
                        {{ slotProps.data.donator_name.charAt(0).toUpperCase() }}
                      </div>
                      <div>
                        <div class="fw-semibold">{{ slotProps.data.donator_name }}</div>
                        <small class="text-muted">{{ slotProps.data.donator_email }}</small>
                      </div>
                    </div>
                  </template>
                </Column>

                <Column field="amount" header="Amount" :sortable="true" style="min-width: 120px">
                  <template #body="slotProps">
                    <span class="fw-bold text-success">
                      {{ slotProps.data.currency }} {{ slotProps.data.amount.toLocaleString() }}
                    </span>
                  </template>
                </Column>

                <Column field="type" header="Type" :sortable="true" style="min-width: 150px">
                  <template #body="slotProps">
                    <span class="badge" :class="getTypeClass(slotProps.data.donation_type)">
                      {{ slotProps.data.donation_type }}
                    </span>
                  </template>
                </Column>

                <Column field="status" header="Status" :sortable="true" style="min-width: 100px">
                  <template #body="slotProps">
                    <span :class="getStatusClass(slotProps.data.payment_status)">
                      {{ slotProps.data.payment_status }}
                    </span>
                  </template>
                </Column>


                <Column field="created_at" header="Date" :sortable="true" style="min-width: 180px">
                  <template #body="slotProps">
                    {{ formatDate(slotProps.data.created_at) }}
                  </template>
                </Column>

                <Column header="Actions" style="min-width: 120px">
                  <template #body="slotProps">
                    <button
                        class="btn btn-sm btn-outline-primary me-1"
                        @click="viewDonation(slotProps.data)"
                        v-tooltip.top="'View Details'"
                    >
                      <i class="pi pi-eye"></i>
                    </button>
<!--                    <button-->
<!--                        class="btn btn-sm btn-outline-danger"-->
<!--                        @click="deleteDonation(slotProps.data.id)"-->
<!--                        v-tooltip.top="'Delete'"-->
<!--                    >-->
<!--                      <i class="pi pi-trash"></i>-->
<!--                    </button>-->
                  </template>
                </Column>
              </DataTable>

              <!-- Custom Pagination for Desktop -->
              <div v-if="totalRecords > 0" class="pagination-wrapper p-3 border-top">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <div class="pagination-info">
                    <span class="text-muted">
                      Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to
                      {{ Math.min(currentPage * itemsPerPage, totalRecords) }} of
                      {{ totalRecords }} entries
                    </span>
                  </div>
                  <div class="d-flex gap-2 align-items-center">
                    <select class="form-select form-select-sm" v-model.number="itemsPerPage" style="width: auto;">
                      <option :value="10">10 per page</option>
                      <option :value="25">25 per page</option>
                      <option :value="50">50 per page</option>
                      <option :value="100">100 per page</option>
                    </select>
                    <button
                        class="btn btn-sm btn-outline-secondary"
                        @click="currentPage = 1"
                        :disabled="currentPage === 1"
                    >
                      First
                    </button>
                    <button
                        class="btn btn-sm btn-outline-secondary"
                        @click="currentPage--"
                        :disabled="currentPage === 1"
                    >
                      <i class="pi pi-chevron-left"></i>
                    </button>
                    <span class="px-2 text-muted">
                      Page {{ currentPage }} of {{ totalPages }}
                    </span>
                    <button
                        class="btn btn-sm btn-outline-secondary"
                        @click="currentPage++"
                        :disabled="currentPage === totalPages"
                    >
                      <i class="pi pi-chevron-right"></i>
                    </button>
                    <button
                        class="btn btn-sm btn-outline-secondary"
                        @click="currentPage = totalPages"
                        :disabled="currentPage === totalPages"
                    >
                      Last
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Donation Dialog -->
    <Dialog
        v-model:visible="showViewDialog"
        :modal="true"
        :style="{ width: '95vw', maxWidth: '600px' }"
        header="Donation Details"
        :breakpoints="{'960px': '90vw', '640px': '95vw'}"
        class="p-3"
    >
      <div v-if="selectedDonation" class="donation-details p-3">
        <div class="detail-row">
          <span class="detail-label">Donation ID:</span>
          <span class="detail-value">#{{ selectedDonation.id }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Reference:</span>
          <span class="detail-value"><code>{{ selectedDonation.reference }}</code></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Donator Name:</span>
          <span class="detail-value">{{ selectedDonation.donator_name }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value word-break">{{ selectedDonation.donator_email }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span>
          <span class="detail-value">{{ selectedDonation.donator_phone || 'N/A' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Amount:</span>
          <span class="detail-value fw-bold text-success">
            {{ selectedDonation.currency }} {{ selectedDonation.amount.toLocaleString() }}
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Type:</span>
          <span class="detail-value">{{ selectedDonation.donation_type }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Status:</span>
          <span :class="getStatusClass(selectedDonation.payment_status)">
            {{ selectedDonation.payment_status }}
          </span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Anonymous:</span>
          <span class="detail-value">{{ selectedDonation.is_anonymous ? 'Yes' : 'No' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date:</span>
          <span class="detail-value">{{ formatDate(selectedDonation.created_at) }}</span>
        </div>
        <div v-if="selectedDonation.message" class="detail-row">
          <span class="detail-label">Message:</span>
          <span class="detail-value">{{ selectedDonation.message }}</span>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import {ref, computed, onMounted, watch, reactive} from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import ProgressSpinner from 'primevue/progressspinner';
import AdminSidebar from '../../components/admin/AdminSidebar.vue';
import AdminNavbar from '../../components/admin/AdminNavbar.vue';
import apiService from '../../config/index.js';

const router = useRouter();

const loading = ref(true);
const donations = ref([]);
const selectedDonations = ref([]);
const selectedDonation = ref(null);
const showViewDialog = ref(false);
const isSidebarCollapsed = ref(false);
const isMobileOpen = ref(false);

// Pagination state
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalRecords = ref(0);
const totalPages = computed(() => Math.ceil(totalRecords.value / itemsPerPage.value));

const filters = reactive({
  search: '',
  payment_status: '',
  donation_type: '',
  dateFrom: '',
  dateTo: ''
});

// Debounce timer for search
let searchDebounceTimer = null;

const fetchDonations = async () => {
  loading.value = true;
  try {
    // Build query parameters
    const params = {
      page: currentPage.value.toString(),
      limit:  itemsPerPage.value.toString()
    };


    // Add filter params
    if (filters.search) {
      params.search = filters.search;
    }
    if (filters.payment_status) {
      params.payment_status = filters.payment_status;
    }
    if (filters.donation_type) {
      params.donation_type = filters.donation_type;
    }
    if (filters.dateFrom) {
      params.dateFrom = filters.dateFrom;
    }
    if (filters.dateTo) {
      params.dateTo = filters.dateTo;
    }


    const response = await apiService.get(
        `/admin/donations`,
        {
          params: {...params}
        }
        );
    if (response.data.success) {
      donations.value = response.data.donations;
      totalRecords.value = response.data.total || response.data.donations.length;

      // Update pagination info if provided by backend
      if (response.data.pagination) {
        currentPage.value = response.data.pagination.page || currentPage.value;
        itemsPerPage.value = response.data.pagination.limit || itemsPerPage.value;
        totalRecords.value = response.data.pagination.total || totalRecords.value;
      }
    }

    console.log(response.data)


  } catch (error) {
    console.error('Error fetching donations:', error);
    // Show error message to user
    if (error.response?.status === 401) {
      router.push('/admin/login');
    }
  } finally {
    loading.value = false;
  }
};

// For mobile view - use paginatedDonations computed for compatibility
const paginatedDonations = computed(() => donations.value);

// Watchers for filters - debounce search input, trigger immediate for others
watch(() => filters.search, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    // Clear previous timer
    if (searchDebounceTimer) {
      clearTimeout(searchDebounceTimer);
    }
    // Debounce search input
    searchDebounceTimer = setTimeout(() => {
      currentPage.value = 1; // Reset to first page on new search
      fetchDonations();
    }, 500);
  }
});

watch(() => filters.payment_status, () => {
  currentPage.value = 1;
  fetchDonations();
});

watch(() => filters.donation_type, () => {
  currentPage.value = 1;
  fetchDonations();
});

watch(() => filters.dateFrom, () => {
  currentPage.value = 1;
  fetchDonations();
});

watch(() => filters.dateTo, () => {
  currentPage.value = 1;
  fetchDonations();
});

// Watch pagination changes
watch(currentPage, () => {
  fetchDonations();
});

watch(itemsPerPage, () => {
  currentPage.value = 1; // Reset to first page when changing items per page
  fetchDonations();
});

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString('en-US', {
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
    'pending': 'badge bg-warning text-dark',
    'failed': 'badge bg-danger'
  };
  return classes[status] || 'badge bg-secondary';
};

const getTypeClass = (type) => {
  const classes = {
    'Children Education': 'badge bg-primary',
    'Elderly Care': 'badge bg-info',
    'General': 'badge bg-secondary'
  };
  return classes[type] || 'badge bg-secondary';
};

const viewDonation = (donation) => {
  selectedDonation.value = donation;
  showViewDialog.value = true;
};

const deleteDonation = (id) => {
  if (confirm('Are you sure you want to delete this donation?')) {
    console.log('Delete donation:', id);
    // Implement delete functionality
  }
};

const clearFilters = () => {

    filters.search = '';
    filters.payment_status = '';
    filters.donation_type = '';
    filters.dateFrom = '';
    filters.dateTo = '';

};

const refreshData = () => {
  fetchDonations();
};

const exportData = () => {
  console.log('Export data');
  // Implement export functionality
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
  fetchDonations();
});
</script>

<style scoped>
.donations-page {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
  overflow-x: hidden;
  width: 100%;
}

.main-content {
  flex: 1;
  margin-left: 260px;
  transition: margin-left 0.3s ease;
  overflow-x: hidden;
  max-width: calc(100vw - 260px);
}

.main-content.sidebar-collapsed {
  margin-left: 80px;
  max-width: calc(100vw - 80px);
}

.content-area {
  padding: 1rem;
  width: 100%;
  overflow-x: hidden;
}

.avatar-sm {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.donation-details {
  padding: 1rem 0;
}

.detail-row {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  gap: 0.25rem;
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  font-weight: 600;
  color: #64748b;
  font-size: 0.875rem;
}

.detail-value {
  flex: 1;
  color: #1e293b;
  word-break: break-word;
}

.word-break {
  word-break: break-all;
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

@media (max-width: 991px) {
  .main-content {
    margin-left: 0;
    max-width: 100vw;
  }

  .content-area {
    padding: 1rem;
  }
}

@media (min-width: 769px) and (max-width: 991px) {
  .main-content {
    margin-left: 80px;
    max-width: calc(100vw - 80px);
  }
}

@media (min-width: 768px) {
  .content-area {
    padding: 2rem;
  }

  .detail-row {
    flex-direction: row;
  }

  .detail-label {
    min-width: 150px;
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
