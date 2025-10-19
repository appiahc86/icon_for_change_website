import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from "vue-toastification";
import vSelect from "vue-select"
import Vue3Apexcharts from "vue3-apexcharts";
import { createPinia } from 'pinia';

// PrimeVue CSS
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';

// Bootstrap JS for components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

// Pinia store
app.use(createPinia())

app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(Toast, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
})

app.use(Vue3Apexcharts);
app.component('v-select', vSelect);

app.mount('#app');