<template>
  <ProductForm :editItem="product" @edit="updateProduct"></ProductForm>
</template>

<script>
import axios from "axios";
import ProductForm from "@/components/ProductForm.vue";

export default {
  data() {
    return {
      product: {},
      id: "",
    };
  },

  components: { ProductForm },

  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}/admin/products/edit/${this.id}`;
      axios.get(api).then((response) => {
        this.product = response.data;
      });
    },

    updateProduct(updateItem) {
      this.product = { ...updateItem };
      const api = `${process.env.VUE_APP_API}/admin/products`;
      axios.post(api, { products: this.product }).then((response) => {
        if (response.status === 200) {
          return;
        }
      });
      this.$router.push("/admin");
    },
  },

  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
