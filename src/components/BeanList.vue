<template>
  <div>
    <Loading v-if="isLoading" />
    <CleanBeanList v-else :products="products"></CleanBeanList>
  </div>
</template>
<script>
import axios from "axios";
import CleanBeanList from "@/components/CleanBeanList.vue";
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      round: [1, 2, 3, 4, 5],
      products: [],
      isLoading: false,
    };
  },
  components: { CleanBeanList, Loading },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      this.isLoading = true;
      axios
        .get(api)
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          return error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
