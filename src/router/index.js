/**
 * router
 */

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("/@/pages/index.vue"),
    },
    {
      path: "/acticle",
      redirect: '/acticle-前端'
    },
    {
      path: "/acticle-:word?",
      name: "acticle",
      component: () => import("/@/pages/acticle/acticle.vue")
    },
  ],
});

export default router;
