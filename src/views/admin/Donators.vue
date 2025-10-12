<template>
  <div class="donators-page">
    <AdminSidebar :active-menu="'donators'" :is-collapsed="isSidebarCollapsed" />

    <div class="main-content" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <AdminNavbar @toggle-sidebar="toggleSidebar" />

      <div class="content-area">
        <div class="container-fluid">
          <!-- Header -->
          <div class="header-section mb-4">
            <div class="header-text mb-3 mb-md-0">
              <h2 class="fw-bold mb-1">Donators Management</h2>
              <p class="text-muted mb-0">View and manage all donators</p>
            </div>
            <div class="header-actions">
              <button class="btn btn-outline-primary">
                <i class="pi pi-download"></i>
                <span class="btn-text">Export</span>
              </button>
              <button class="btn btn-primary-custom">
                <i class="pi pi-refresh"></i>
                <span class="btn-text">Refresh</span>
              </button>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="stats-grid mb-4">
            <div class="stat-item">
              <div class="stat-icon-wrapper bg-primary">
                <i class="pi pi-users"></i>
              </div>
              <div class="stat-info">
                <p class="stat-label">Total Donators</p>
                <h3 class="stat-value">{{ stats.totalDonators }}</h3>
              </div>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrapper bg-success">
                <i class="pi pi-user-plus"></i>
              </div>
              <div class="stat-info">
                <p class="stat-label">New This Month</p>
                <h3 class="stat-value">{{ stats.newThisMonth }}</h3>
              </div>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrapper bg-info">
                <i class="pi pi-sync"></i>
              </div>
              <div class="stat-info">
                <p class="stat-label">Recurring</p>
                <h3 class="stat-value">{{ stats.recurring }}</h3>
              </div>
            </div>

            <div class="stat-item">
              <div class="stat-icon-wrapper bg-warning">
                <i class="pi pi-star"></i>
              </div>
              <div class="stat-info">
                <p class="stat-label">Top Contributors</p>
                <h3 class="stat-value">{{ stats.topContributors }}</h3>
              </div>
            </div>
          </div>

          <!-- Filters Card -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
              <div class="filters-grid">
                <div class="filter-item search-filter">
                  <div class="input-group">
                    <span class="input-group-text">
                      <i class="pi pi-search"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        v-model="searchQuery"
                        placeholder="Search by name or email..."
                    />
                  </div>
                </div>

                <div class="filter-item">
                  <select class="form-select" v-model="filterCountry">
                    <option value="">All Countries</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>

                <div class="filter-item">
                  <select class="form-select" v-model="sortBy">
                    <option value="recent">Most Recent</option>
                    <option value="amount">Highest Amount</option>
                    <option value="name">Name A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <ProgressSpinner style="width: 50px; height: 50px" />
            <p class="text-muted mt-3">Loading donators...</p>
          </div>

          <!-- Donators List -->
          <div v-else>
            <!-- Mobile/Tablet Card View -->
            <div class="donators-cards d-xl-none">
              <div v-for="donator in paginatedDonators" :key="donator.id" class="donator-card">
                <div class="donator-card-header">
                  <div class="donator-avatar-lg">
                    {{ donator.name.charAt(0).toUpperCase() }}
                  </div>
                  <div class="donator-main-info">
                    <h6 class="donator-name">{{ donator.name }}</h6>
                    <p class="donator-email">{{ donator.email }}</p>
                    <p class="donator-phone">{{ donator.phone }}</p>
                  </div>
                </div>

                <div class="donator-card-body">
                  <div class="info-grid">
                    <div class="info-item">
                      <span class="info-label">Country</span>
                      <span class="badge bg-light text-dark">{{ donator.country }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Donations</span>
                      <span class="info-value text-success">{{ donator.total_donations }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">Total Amount</span>
                      <span class="info-value text-primary fw-bold">GHS {{ donator.total_amount.toLocaleString() }}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">First Donation</span>
                      <span class="info-value">{{ formatDate(donator.created_at) }}</span>
                    </div>
                  </div>
                </div>

                <div class="donator-card-footer">
                  <button class="btn btn-sm btn-outline-primary" @click="viewDonator(donator)">
                    <i class="pi pi-eye me-1"></i>View
                  </button>
                  <button class="btn btn-sm btn-outline-secondary" @click="sendEmail(donator)">
                    <i class="pi pi-envelope me-1"></i>Email
                  </button>
                </div>
              </div>

              <!-- Pagination for Mobile -->
              <div v-if="filteredDonators.length > itemsPerPage" class="mobile-pagination">
                <button
                    class="btn btn-outline-primary"
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                >
                  <i class="pi pi-chevron-left"></i> Previous
                </button>
                <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                    class="btn btn-outline-primary"
                    @click="currentPage++"
                    :disabled="currentPage === totalPages"
                >
                  Next <i class="pi pi-chevron-right"></i>
                </button>
              </div>
            </div>

            <!-- Desktop Table View -->
            <div class="card border-0 shadow-sm d-none d-xl-block">
              <div class="card-body p-0">
                <div class="table-responsive">
                <DataTable
                    :value="filteredDonators"
                    :loading="loading"
                    stripedRows
                    :paginator="true"
                    :rows="10"
                    :rowsPerPageOptions="[10, 25, 50]"
                    responsiveLayout="scroll"
                >
                  <template #empty>
                    <div class="text-center py-5">
                      <i class="pi pi-users" style="font-size: 3rem; color: #cbd5e0;"></i>
                      <p class="text-muted mt-3">No donators found</p>
                    </div>
                  </template>

                  <Column field="id" header="ID" :sortable="true" style="min-width: 80px">
                    <template #body="slotProps">
                      <span class="badge bg-secondary">#{{ slotProps.data.id }}</span>
                    </template>
                  </Column>

                  <Column field="name" header="Name" :sortable="true" style="min-width: 220px">
                    <template #body="slotProps">
                      <div class="d-flex align-items-center">
                        <div class="table-avatar">
                          {{ slotProps.data.name.charAt(0).toUpperCase() }}
                        </div>
                        <div>
                          <div class="fw-semibold">{{ slotProps.data.name }}</div>
                          <small class="text-muted">{{ slotProps.data.email }}</small>
                        </div>
                      </div>
                    </template>
                  </Column>

                  <Column field="phone" header="Phone" style="min-width: 150px"></Column>

                  <Column field="country" header="Country" :sortable="true" style="min-width: 120px">
                    <template #body="slotProps">
                      <span class="badge bg-light text-dark">{{ slotProps.data.country }}</span>
                    </template>
                  </Column>

                  <Column field="total_donations" header="Donations" :sortable="true" style="min-width: 120px">
                    <template #body="slotProps">
                      <span class="fw-bold text-success">{{ slotProps.data.total_donations }}</span>
                    </template>
                  </Column>

                  <Column field="total_amount" header="Total Amount" :sortable="true" style="min-width: 150px">
                    <template #body="slotProps">
                      <span class="fw-bold text-primary">
                        GHS {{ slotProps.data.total_amount.toLocaleString() }}
                      </span>
                    </template>
                  </Column>

                  <Column field="created_at" header="First Donation" :sortable="true" style="min-width: 150px">
                    <template #body="slotProps">
                      {{ formatDate(slotProps.data.created_at) }}
                    </template>
                  </Column>

                  <Column header="Actions" style="min-width: 130px">
                    <template #body="slotProps">
                      <button
                          class="btn btn-sm btn-outline-primary me-1"
                          @click="viewDonator(slotProps.data)"
                      >
                        <i class="pi pi-eye"></i>
                      </button>
                      <button
                          class="btn btn-sm btn-outline-secondary"
                          @click="sendEmail(slotProps.data)"
                      >
                        <i class="pi pi-envelope"></i>
                      </button>
                    </template>
                  </Column>
                </DataTable>
              </div>
              </div>
            </div>

            <!-- No Results -->
            <div v-if="filteredDonators.length === 0" class="text-center py-5">
              <i class="pi pi-users" style="font-size: 4rem; color: #cbd5e0;"></i>
              <h5 class="mt-4 text-muted">No donators found</h5>
              <p class="text-muted">Try adjusting your search or filters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressSpinner from 'primevue/progressspinner';
import AdminSidebar from '../../components/admin/AdminSidebar.vue';
import AdminNavbar from '../../components/admin/AdminNavbar.vue';

const router = useRouter();
const loading = ref(true);
const searchQuery = ref('');
const filterCountry = ref('');
const sortBy = ref('recent');
const currentPage = ref(1);
const itemsPerPage = ref(10);
const isSidebarCollapsed = ref(false);

const stats = ref({
  totalDonators: 156,
  newThisMonth: 23,
  recurring: 45,
  topContributors: 12
});

const donators = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+233 XX XXX XXXX', country: 'Ghana', total_donations: 5, total_amount: 2500, created_at: new Date('2024-01-15') },
  { id: 2, name: 'Mary Johnson', email: 'mary@example.com', phone: '+233 XX XXX XXXX', country: 'Ghana', total_donations: 3, total_amount: 1500, created_at: new Date('2024-02-20') },
  { id: 3, name: 'David Smith', email: 'david@example.com', phone: '+1 XXX XXX XXXX', country: 'USA', total_donations: 8, total_amount: 5000, created_at: new Date('2023-12-10') },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '+233 XX XXX XXXX', country: 'Ghana', total_donations: 2, total_amount: 800, created_at: new Date('2024-03-05') },
  { id: 5, name: 'James Brown', email: 'james@example.com', phone: '+44 XXX XXX XXXX', country: 'UK', total_donations: 4, total_amount: 3200, created_at: new Date('2024-01-28') },
  { id: 6, name: 'Lisa Anderson', email: 'lisa@example.com', phone: '+233 XX XXX XXXX', country: 'Ghana', total_donations: 6, total_amount: 4100, created_at: new Date('2023-11-15') },
  { id: 7, name: 'Michael Chen', email: 'michael@example.com', phone: '+1 XXX XXX XXXX', country: 'USA', total_donations: 10, total_amount: 7500, created_at: new Date('2023-10-20') },
  { id: 8, name: 'Emma Wilson', email: 'emma@example.com', phone: '+233 XX XXX XXXX', country: 'Ghana', total_donations: 7, total_amount: 3900, created_at: new Date('2024-01-10') }
]);

const filteredDonators = computed(() => {
  let result = donators.value;

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.email.toLowerCase().includes(query)
    );
  }

  if (filterCountry.value) {
    result = result.filter(d => d.country === filterCountry.value);
  }

  return result;
});

const totalPages = computed(() => {
  return Math.ceil(filteredDonators.value.length / itemsPerPage.value);
});

const paginatedDonators = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredDonators.value.slice(start, end);
});

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const viewDonator = (donator) => {
  console.log('View donator:', donator);
};

const sendEmail = (donator) => {
  window.location.href = `mailto:${donator.email}`;
};

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

onMounted(() => {
  if (!localStorage.getItem('admin_token')) {
    router.push('/admin/login');
    return;
  }
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<style scoped>
.donators-page {
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
  padding: 1rem;
}

/* Header */
.header-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header-actions {
  display: flex;
  gap: 0.5rem;
}

.header-actions .btn {
  flex: 1;
}

.btn-text {
  display: none;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-item {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
}

.stat-icon-wrapper {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.stat-info {
  flex: 1;
  min-width: 0;
}

.stat-label {
  margin: 0;
  color: #6c757d;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stat-value {
  margin: 0.25rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
}

/* Filters */
.filters-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.search-filter {
  grid-column: 1 / -1;
}

/* Donator Cards */
.donators-cards {
  display: grid;
  gap: 1rem;
}

.donator-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.donator-card:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

.donator-card-header {
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #f0f0f0;
}

.donator-avatar-lg {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.donator-main-info {
  flex: 1;
  min-width: 0;
}

.donator-name {
  margin: 0 0 0.25rem 0;
  font-weight: 700;
  font-size: 1rem;
  color: #2d3748;
}

.donator-email {
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
  color: #718096;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.donator-phone {
  margin: 0;
  font-size: 0.875rem;
  color: #a0aec0;
}

.donator-card-body {
  padding: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-label {
  font-size: 0.75rem;
  color: #718096;
  font-weight: 500;
}

.info-value {
  font-size: 0.95rem;
  color: #2d3748;
  font-weight: 600;
}

.donator-card-footer {
  padding: 1rem;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 0.5rem;
}

.donator-card-footer .btn {
  flex: 1;
}

/* Mobile Pagination */
.mobile-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.page-info {
  font-size: 0.875rem;
  color: #718096;
}

/* Table Avatar */
.table-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

/* Responsive Breakpoints */
@media (min-width: 576px) {
  .filters-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 768px) {
  .content-area {
    padding: 1.5rem;
  }

  .header-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-actions {
    flex: initial;
  }

  .header-actions .btn {
    flex: initial;
  }

  .btn-text {
    display: inline;
    margin-left: 0.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .stat-icon-wrapper {
    width: 55px;
    height: 55px;
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }

  .stat-value {
    font-size: 1.75rem;
  }

  .filters-grid {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

@media (min-width: 992px) {
  .main-content {
    margin-left: 260px;
  }
}

@media (max-width: 991px) {
  .main-content {
    margin-left: 0;
  }
}

@media (min-width: 1200px) {
  .content-area {
    padding: 2rem;
  }
}
</style>