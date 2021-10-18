<template>
  <CleanBeanList
    :products="products"
    :showEditButton="showEditButton"
  ></CleanBeanList>
</template>
<script>
import axios from "axios";
import CleanBeanList from "@/components/CleanBeanList.vue";

export default {
  data() {
    return {
      products: [],
      showEditButton: true,
    };
  },
  components: {
    CleanBeanList,
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      axios.get(api).then((response) => {
        this.products = [...response.data];
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
