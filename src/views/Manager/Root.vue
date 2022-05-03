<template>
  <Navbar></Navbar>
  <Toast style="max-width: 350px" />
  <router-view />
  <ScrollTop :threshold="200" />
</template>

<script>
import Navbar from "@/views/Manager/Navbar.vue";
import emitter from "@/methods/emitter.js";

export default {
  data() {
    return {};
  },
  components: { Navbar },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
