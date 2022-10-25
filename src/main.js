import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/tailwind-light/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
// primevue global components
import Button from 'primevue/button';
// vue defaults
import App from './App.vue';
import router from './router';
// import store from './store';

const app = createApp(App);

app
.use(createPinia())
.use(router)
.use(PrimeVue)
.component('Button', Button)
.mount('#app');
