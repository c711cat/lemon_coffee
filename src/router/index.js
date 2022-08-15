import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/admin",
    component: () => import("@/views/Manager/Root.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Manager/Home.vue"),
      },
      {
        path: "products/new",
        component: () => import("@/views/Manager/AddProduct.vue"),
      },
      {
        path: "products/edit/:productId",
        component: () => import("@/views/Manager/EditProduct.vue"),
      },
      {
        path: "orders",
        component: () => import("@/views/Manager/Orders.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/views/UserRoot.vue"),
    children: [
      {
        path: "",
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
      {
        path: "products/:id",
        component: () => import("@/components/ProductDetail.vue"),
      },
      {
        path: "cart",
        component: () => import("@/components/Cart.vue"),
      },
      {
        path: "checkout",
        component: () => import("@/components/Checkout.vue"),
      },
      {
        path: "order/:id",
        component: () => import("@/components/Order.vue"),
      },
      {
        path: "orders",
        component: () => import("@/components/Orders.vue"),
      },
      {
        path: "favorite",
        component: () => import("@/components/MyFavoriteList.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
