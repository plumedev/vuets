import { createApp } from 'vue';
import VueLoaders from 'vue-loaders';

import { App } from '@/views/App/App';
import router from './router';
import store from './store';

import './assets/scss/main.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
  .use(store)
  .use(router)
  .use(VueLoaders)
  .mount('#app');
