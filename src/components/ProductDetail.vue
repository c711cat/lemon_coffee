<template>
  <div class="p-grid nested-grid wrap p-my-0 p-mx-auto" v-if="!is_error">
    <div class="p-col-4">
      <img class="product-image p-col-4 p-py-3" :src="product.image_url" />
    </div>
    <div class="p-col-8">
      <div class="p-grid">
        <h3 class="p-col-12">{{ product.name }}</h3>
        <div class="p-col-12">
          <SelectButton
            v-model="type"
            :options="typeOfOptions"
            optionValue="value"
            optionLabel="label"
            class="selected"
          />
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
          >
          </Button>
        </div>
      </div>
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
      typeOfOptions: [
        { value: "drip_bag", label: "耳掛" },
        { value: "half_pound", label: "半磅" },
        { value: "one_pound", label: "一磅" },
      ],
      qty: 1,
      type: "half_pound",
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
          console.log(this.product);
        })
        .catch(() => {
          this.is_error = !this.is_error;
        });
    },
    addToCart() {
      const cart = {
        product_id: this.product.id,
        package_type: this.type,
        quantity: this.qty,
      };
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .post(api, { cart_item: cart }, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.showSuccessToast("已加入購物車");
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
          if (error.response.data.quantity[0] === "must be greater than 0") {
            this.showErrorToast("最小購買量為 1");
          }
          if (error.response.data.product) {
            this.showErrorToast("此商品不存在");
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
  created() {
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid black;
}
.wrap {
  max-width: 1200px;
}

.product-image {
  width: 350px;
}
</style>
