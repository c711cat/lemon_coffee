import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/BeanList.vue"),
  },
  {
    path: "/admin",
    component: () => import("@/views/Manager/Home.vue"),
  },
  {
    path: "/admin/products/new",
    component: () => import("@/views/Manager/AddProduct.vue"),
  },
  {
    path: "/admin/products/edit/:productId",
    component: () => import("@/views/Manager/EditProduct.vue"),
  },
  {
    path: "/admin/products/edit/:productId",
    component: () => import("@/components/AddProduct.vue"),
  },
  {
    path: "/cart",
    component: () => import("@/components/CartContent.vue"),
  },
  {
    path: "/cart-2",
    component: () => import("@/components/CartContentII.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
