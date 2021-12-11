<template>
  <Navbar @change-visible="visibleRight = true" />
  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="sidebar-wrap"
    style="width: 380px"
  >
    <CartSidebar></CartSidebar>
  </Sidebar>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import emitter from "@/methods/emitter.js";
import CartSidebar from "@/components/CartSidebar.vue";

export default {
  data() {
    return {
      visibleRight: false,
    };
  },
  components: { Navbar, CartSidebar },

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
</style>
