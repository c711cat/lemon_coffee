<template>
  <CleanBeanList :products="products" :btnState="btnState"></CleanBeanList>
</template>
<script>
import axios from "axios";
import CleanBeanList from "@/components/CleanBeanList.vue";

export default {
  data() {
    return {
      products: [],
      btnState: true,
    };
  },
  components: {
    CleanBeanList,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/admin`;
      axios.get(api).then((response) => {
        console.log(response);
        this.products = response.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
