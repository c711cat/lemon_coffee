<template>
  <div class="p-grid" v-if="!is_error">
    <h3 class="p-col-12">{{ product.name }}</h3>
    <div class="p-col-12">
      <SelectButton v-model="type" :options="typeOfOptions" class="selected" />
    </div>
    <div class="p-col-fixes p-fluid p-ml-2" style="width: 202px">
      <InputNumber
        v-model="qty"
        class="p-inputtext-sm"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonClass="p-button-outlined p-button-info"
        decrementButtonClass="p-button-outlined p-button-info"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
      />
    </div>
    <div class="p-col-12">
      <Button
        label="加入購物車"
        class="p-button-info p-col-12 p-lg-4"
        @click.prevent="addToCart"
      ></Button>
    </div>
  </div>
  <div v-if="is_error">無此商品</div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      product: {
        name: "",
        id: 0,
      },
      typeOfOptions: ["耳掛", "半磅", "一磅"],
      qty: 1,
      type: "半磅",
      is_error: false,
      typeData: "",
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}/products/${this.$route.params.id}`;
      axios
        .get(api)
        .then((response) => {
          this.product = { ...response.data };
        })
        .catch(() => {
          this.is_error = !this.is_error;
        });
    },
    addToCart() {
      if (this.type === "半磅") {
        this.typeData = "half_pound";
      }
      if (this.type === "一磅") {
        this.typeData = "one_pound";
      }
      if (this.type === "耳掛") {
        this.typeData = "drip_bag";
      }
      const cart = {
        product_id: this.product.id,
        package_type: this.typeData,
        quantity: this.qty,
      };
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .post(api, { cart_item: cart }, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.$toast.add({
              severity: "success",
              summary: "已加入購物車",
              life: 2000,
            });
            history.back();
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
          if (error.response.data.quantity[0] === "must be greater than 0") {
            this.$toast.add({
              severity: "error",
              summary: "最小購買量為 1",
              life: 5000,
            });
          }
          if (error.response.data.product) {
            this.$toast.add({
              severity: "error",
              summary: "此商品不存在",
              life: 5000,
            });
          }
        });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
