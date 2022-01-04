<template>
  <div class="p-grid nested-grid wrap p-my-4 p-mx-auto" v-if="!is_error">
    <div class="p-col-12 p-lg-5">
      <img class="product-image p-d-block p-mx-auto" :src="product.image_url" />
    </div>
    <div class="p-col-12 p-lg-7">
      <div class="p-grid p-px-3">
        <h3 class="p-col-12">{{ product.name }}</h3>
        <div class="p-col-12 p-text-bold price-size">NT$ {{ unitPrice }}</div>
        <div class="p-col-12 p-mt-7">
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
            incrementButtonClass="p-button-outlined"
            decrementButtonClass="p-button-outlined"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
        <div class="p-col-12">
          <Button
            label="加入購物車"
            class="p-button-raised p-col-12 p-lg-5"
            @click.prevent="addToCart"
          >
          </Button>
        </div>
      </div>
    </div>
    <div class="p-col-11 p-lg-12 bg-color p-my-3 p-mx-auto">
      <div class="p-grid p-m-0 p-pb-2 p-text-bold p-pt-3 p-px-6">
        <div class="p-col-12 p-lg-8">尼加拉瓜 聖荷西莊園 波旁種 蜜處理法</div>
        <div class="p-col-12 p-lg-4">中焙 OOOOO</div>
      </div>
      <hr class="p-mx-6" />
      <div class="p-grid p-m-0 p-py-2 p-px-6">
        <div class="p-col-5 p-lg-2 p-text-bold">國家</div>
        <div class="p-col-7 p-lg-4">尼加拉瓜</div>
        <div class="p-col-5 p-lg-2 p-text-bold">產區</div>
        <div class="p-col-7 p-lg-4">聖荷西莊園</div>
        <div class="p-col-5 p-lg-2 p-text-bold">品種</div>
        <div class="p-col-7 p-lg-4">波旁種</div>
        <div class="p-col-5 p-lg-2 p-text-bold">處理法</div>
        <div class="p-col-7 p-lg-4">蜜處理</div>
        <div class="p-col-12 p-lg-2 p-text-bold">風味描述</div>
        <div class="p-col-12 p-lg-10">
          柑橘、橘皮、黑醋栗氣息與焦糖、橘汁風味與酸甜感、
          餘韻帶有烏龍茶韻及木頭氣息
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
    };
  },
  inject: ["emitter"],
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
            this.getCart();
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
          }
          if (error.response.data.quantity) {
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
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.emitter.emit("changeCartBadgeCount", response.data.length);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
          }
        });
    },
  },
  computed: {
    unitPrice() {
      let price = 0;
      if (this.type === "drip_bag") {
        price = this.product.drip_bag_price;
      }
      if (this.type === "half_pound") {
        price = this.product.half_pound_price;
      }
      if (this.type === "one_pound") {
        price = this.product.one_pound_price;
      }
      return price;
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
  max-width: 950px;
}

.product-image {
  max-width: 350px;
}

.price-size {
  font-size: 18px;
}

.bg-color {
  background: #fdf7ee;
}
</style>
