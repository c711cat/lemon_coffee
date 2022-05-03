<template>
  <Navbar></Navbar>
  <Toast style="max-width: 350px" />
  <router-view />
  <GoTop></GoTop>
</template>

<script>
import Navbar from "@/views/Manager/Navbar.vue";
import emitter from "@/methods/emitter.js";
import GoTop from "@/components/GoTop.vue";

export default {
  data() {
    return {};
  },
  components: { Navbar, GoTop },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
