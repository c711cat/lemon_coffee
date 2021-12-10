<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
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
