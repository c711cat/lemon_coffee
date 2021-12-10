<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {};
  },
  components: { Navbar },
};
</script>
