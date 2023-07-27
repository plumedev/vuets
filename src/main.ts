import { createApp } from 'vue';
import VueLoaders from 'vue-loaders';

import { App } from '@/views/App/App';
import router from './router';
import store from './store';
import LocalStorageService from './services/LocalStorageService';

import './assets/scss/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
  .use(store)
  .use(router)
  .use(VueLoaders)
  .mount('#app');

// Synchroniser le store avec le localStorage au chargement de l'application
LocalStorageService.syncWithStore('transactions');
