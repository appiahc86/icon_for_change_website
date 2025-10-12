import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import vSelect from "vue-select"
import Vue3Apexcharts from "vue3-apexcharts";

// PrimeVue CSS
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';

// Bootstrap JS for components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(Vue3Apexcharts);
app.component('v-select', vSelect);

app.mount('#app');