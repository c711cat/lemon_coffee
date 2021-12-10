<template>
  <ProductForm :onSubmit="addProduct"></ProductForm>
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
    addProduct(addItem) {
      this.product = { ...addItem };
      const api = `${process.env.VUE_APP_API}/admin/products`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .post(api, { product: this.product }, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.$toast.add({
              severity: "success",
              summary: "成功新增",
              detail: addItem.name,
              life: 2000,
            });
            this.$router.push("/m-admin/products");
          }
        })
        .catch(() => {
          this.$toast.add({
            severity: "error",
            summary: "新增失敗",
            life: 2000,
          });
          this.$router.push("/m-admin/login");
        });
    },
  },
};
</script>
