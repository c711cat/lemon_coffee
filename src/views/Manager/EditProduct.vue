<template>
  <ProductForm :editItem="product" :onSubmit="updateProduct"></ProductForm>
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
    getProduct() {
      const api = `${process.env.VUE_APP_API}/admin/products/${this.$route.params.productId}/edit`;
      axios.get(api).then((response) => {
        this.product = response.data;
      });
    },

    updateProduct(updateItem) {
      this.product = { ...updateItem };
      const api = `${process.env.VUE_APP_API}/admin/products/${this.product.id}`;
      axios.put(api, { product: this.product }).then((response) => {
        if (response.status === 200) {
          this.$router.push("/navbar/admin");
        }
      });
    },
  },

  created() {
    this.getProduct();
  },
};
</script>
