import { createApp } from 'vue'
import App from './App.vue'

// - Style -
import './styleFolder/app.css'

// - Router -
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
