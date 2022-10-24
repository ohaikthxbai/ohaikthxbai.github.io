import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css'; // theme
import 'primevue/resources/primevue.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
// component imports
// import Button from 'primevue/button';
// vue defaults
import App from './App.vue';
import router from './router';
// import store from './store';

const app = createApp(App);

app.use(createPinia()).use(router).use(PrimeVue);

// app.component('Button', Button);

app.mount('#app');
