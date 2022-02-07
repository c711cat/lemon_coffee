<template>
  <Loading :isLoading="isLoading" />
  <ProductForm :onSubmit="addProduct"></ProductForm>
</template>

<script>
import axios from "axios";
import ProductForm from "@/components/ProductForm.vue";
import Cookies from "js-cookie";
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },

  components: { ProductForm, Loading },

  methods: {
    addProduct(addItem) {
      this.product = { ...addItem };
      const api = `${process.env.VUE_APP_API}/admin/products`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .post(api, { product: this.product }, { headers })
        .then((response) => {
          this.isLoading = false;
          if (response.status === 200) {
            this.showSuccessToast("新增成功");
            this.$router.push("/admin/products");
          }
        })
        .catch((error) => {
          this.isLoading = false;
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
          if (error.response.data.name) {
            this.showErrorToast("產品名稱不可空白");
          }
          if (error.response.data.roast) {
            this.showErrorToast("烘焙度不可空白");
          }
        });
    },
    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
    showSuccessToast(text) {
      this.$toast.add({
        severity: "success",
        summary: text,
        life: 2000,
      });
    },
  },
};
</script>
