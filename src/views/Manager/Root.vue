<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from "@/views/Manager/Navbar.vue";

export default {
  data() {
    return {};
  },
  components: { Navbar },
};
</script>
