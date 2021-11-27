import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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
    path: "/cart",
    component: () => import("@/components/Cart.vue"),
  },
  {
    path: "/",
    component: () => import("@/components/Navbar.vue"),
    children: [
      {
        path: "home",
        component: () => import("@/components/Home.vue"),
      },
      {
        path: "beanlist",
        component: () => import("@/components/BeanList.vue"),
      },
      {
        path: "entrance",
        component: () => import("@/views/Entrance.vue"),
        children: [
          {
            path: "login",
            component: () => import("@/components/Login.vue"),
          },
          {
            path: "register",
            component: () => import("@/components/Register.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
