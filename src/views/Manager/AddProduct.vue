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
              summary: "新增成功",
              life: 2000,
            });
            this.$router.push("/m-admin/products");
          }
        })
        .catch((error) => {
          if (error.response.data === "Invalid segment encoding") {
            this.$toast.add({
              severity: "error",
              summary: "請重新登入",
              life: 5000,
            });
            this.$router.push("/entrance/login");
          }
          if (error.response.data.name) {
            this.$toast.add({
              severity: "error",
              summary: "產品名稱不可空白",
              life: 5000,
            });
          }
          if (error.response.data.roast) {
            this.$toast.add({
              severity: "error",
              summary: "烘焙度不可空白",
              life: 5000,
            });
          }
        });
    },
  },
};
</script>
