<template>
  <Navbar></Navbar>
  <Toast />
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from "@/views/Manager/Navbar.vue";
import emitter from "@/methods/emitter.js";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: { Navbar, Footer },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
