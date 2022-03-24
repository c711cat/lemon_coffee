<template>
  <Loading v-if="isLoading" />
  <div v-show="!isLoading">
    <ProductForm :editItem="product" :onSubmit="updateProduct"> </ProductForm>
  </div>
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
    getProduct() {
      const api = `${process.env.VUE_APP_API}/admin/products/${this.$route.params.productId}/edit`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .get(api, { headers })
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
          }
          this.$router.push("/entrance/login");
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    updateProduct(updateItem) {
      this.product = { ...updateItem };
      const api = `${process.env.VUE_APP_API}/admin/products/${this.product.id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .put(api, this.product, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.showSuccessToast("編輯成功");
            this.$router.push("/admin/products");
          }
        })
        .catch((error) => {
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
        })
        .finally(() => {
          this.isLoading = false;
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

  created() {
    this.getProduct();
  },
};
</script>
