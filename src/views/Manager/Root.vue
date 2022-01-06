<template>
  <Navbar></Navbar>
  <Toast />
  <router-view />
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
