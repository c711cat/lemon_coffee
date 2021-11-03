<template>
  <ProductForm @add="addProduct"></ProductForm>
</template>

<script>
import axios from "axios";
import ProductForm from "@/components/ProductForm.vue";

export default {
  data() {
    return {
      product: {},
    };
  },

  components: { ProductForm },

  methods: {
    addProduct(addItem) {
      this.product = { ...addItem };
      const api = `${process.env.VUE_APP_API}/admin/products`;
      axios.post(api, { products: this.product }).then((response) => {
        if (response.status === 200) {
          return;
        }
      });
      this.$router.push("/admin");
    },
  },
};
</script>
