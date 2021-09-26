import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/home/WdevHome.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videos',
    name: 'Videos',
    component: () => import('../views/videos/WdevVideo.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/sobre/WdevSobre.vue')
  },
  {
    path: '/contatos',
    name: 'Contato',
    component: () => import('../views/contato/WdevContato.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
});

export default router;
