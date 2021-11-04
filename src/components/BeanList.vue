<template>
  <div><CleanBeanList :products="products"></CleanBeanList></div>
</template>
<script>
import axios from "axios";
import CleanBeanList from "@/components/CleanBeanList.vue";
export default {
  data() {
    return {
      round: [1, 2, 3, 4, 5],
      products: [],
    };
  },
  components: { CleanBeanList },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      axios.get(api).then((response) => {
        this.products = response.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
