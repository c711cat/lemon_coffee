<template>
  <ProductForm :editItem="product" :onSubmit="updateProduct"></ProductForm>
</template>

<script>
import axios from "axios";
import ProductForm from "@/components/ProductForm.vue";
import Cookies from "js-cookie";

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
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.product = response.data;
        })
        .catch(() => {
          this.$router.push("/m-admin/login");
        });
    },

    updateProduct(updateItem) {
      this.product = { ...updateItem };
      const api = `${process.env.VUE_APP_API}/admin/products/${this.product.id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .put(api, { product: this.product }, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push("/m-admin/products");
          }
        })
        .catch(() => {
          this.$router.push("/m-admin/login");
        });
    },
  },

  created() {
    this.getProduct();
  },
};
</script>
