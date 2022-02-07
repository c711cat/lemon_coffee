<template>
  <div>
    <div
      v-if="isLoading"
      class="progress-spinner-container p-d-flex p-jc-center p-ai-center"
    >
      <div>
        <ProgressSpinner fill="var(--surface-ground)"></ProgressSpinner>
        <div class="p-text-center">Loading...</div>
      </div>
    </div>

    <CleanBeanList :products="products"></CleanBeanList>
  </div>
</template>
<script>
import axios from "axios";
import CleanBeanList from "@/components/CleanBeanList.vue";
export default {
  data() {
    return {
      round: [1, 2, 3, 4, 5],
      products: [],
      isLoading: false,
    };
  },
  components: { CleanBeanList },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/products`;
      this.isLoading = true;
      axios.get(api).then((response) => {
        this.isLoading = false;
        this.products = response.data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.progress-spinner-container {
  height: 820px;
}
</style>
