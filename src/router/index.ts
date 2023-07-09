import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/Home/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/library',
  //   name: 'library',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '@/views/Library/Library'),
  // },
  {
    path: '/*',
    redirect: { name: 'home' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
