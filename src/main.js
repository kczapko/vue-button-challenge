import { createApp } from 'vue';
import App from './App.vue';

import AppButton from './components/Button.vue';

const app = createApp(App);

app.component('app-button', AppButton);

app.mount('#app');
