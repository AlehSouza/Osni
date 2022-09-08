import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GameplayView from '../views/GameplayView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/gameplay',
    name: 'gameplay',
    component: GameplayView,
  },
  {
    path: '/credit',
    name: 'credit',
    // route level code-splitting
    // this generates a separate chunk (credit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "credit" */ '../views/CreditView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
