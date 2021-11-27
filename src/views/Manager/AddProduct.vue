<template>
  <ProductForm :onSubmit="addProduct"></ProductForm>
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
      axios.post(api, { product: this.product }).then((response) => {
        if (response.status === 200) {
          this.$router.push("/admin");
        }
      });
    },
  },
};
</script>
