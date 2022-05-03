<template>
  <Navbar @change-visible="visibleRight = true" />
  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="sidebar-wrap"
    style="width: 380px"
  >
    <CartSidebar @close-cart-sidebar="visibleRight = false"></CartSidebar>
  </Sidebar>
  <div class="router-view-style">
    <router-view />
  </div>

  <GoTop></GoTop>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import emitter from "@/methods/emitter.js";
import CartSidebar from "@/components/CartSidebar.vue";
import Footer from "@/components/Footer.vue";
import GoTop from "@/components/GoTop.vue";

export default {
  data() {
    return {
      visibleRight: false,
    };
  },
  components: { Navbar, CartSidebar, Footer, GoTop },

  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wrap {
  width: 500px;
}

.router-view-style {
  min-height: 563px;
}
</style>
