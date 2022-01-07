<template>
  <div class="divider p-pl-2">
    <h4 class="p-mb-2 p-mt-0">購物車清單</h4>
  </div>

  <div
    class="p-grid divider p-m-0 p-pt-3 p-jc-between p-ai-center"
    v-for="(item, index) in cartItems"
    :key="item.product_id + item.package_type"
  >
    <Button
      @click.prevent="delProduct(item, index)"
      icon="pi pi-trash"
      class="p-col-fixed p-ml-2 p-button-rounded p-button-text p-button-danger"
      style="width: 30px"
    />

    <router-link
      :to="`/products/${item.product_id}`"
      class="p-grid p-m-0 p-col-10 p-ai-center link-content"
    >
      <img :src="item.product_image_url" class="product-image p-col-3 p-p-0" />

      <div class="p-col-9 p-pl-3">
        {{ item.product_name }}<br />
        磨粉不磨粉?<br />
      </div>
    </router-link>

    <div class="p-col-fixed p-pl-3">
      $ {{ item.unit_price }} / {{ typeText(item.package_type) }}
    </div>

    <div class="p-fluid p-col-fixed p-p-0 p-my-3" style="width: 129px">
      <InputNumber
        @input="updateCart(item)"
        @change="updateCart(item)"
        class="p-inputtext-sm"
        v-model="item.quantity"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        incrementButtonClass="p-button-info"
        decrementButtonClass="p-button-info"
      />
    </div>

    <div
      class="p-col-fixed p-text-right subtotal-container p-px-1"
      style="width: 80px"
    >
      <div class="discount-content" v-if="item.discount">
        {{ item.discount }}
      </div>

      <del class="del-content" v-if="item.discount"
        >$ {{ item.unit_price * item.quantity }}
      </del>

      <div v-else>$ {{ item.unit_price * item.quantity }}</div>
    </div>
  </div>

  <div v-if="cartItems.length === 0" class="p-pl-2 p-pt-3 p-text-bold">
    你的購物車是空的
  </div>

  <div v-else class="p-grid nested-grid p-jc-between p-mx-0 p-my-2 p-p-0">
    <div class="p-col-3 p-ml-2">
      <div class="p-grid discount-container">
        <div class="p-col-10 p-text-center p-mr-2 discount-mark">優惠</div>
        <div class="p-col-12 discount-content p-pl-0">滿 $1000 免運費</div>
      </div>
    </div>

    <div class="p-col-8">
      <div class="p-grid p-text-right p-ai-center p-jc-end">
        <div class="p-col-6 p-pr-0">小計</div>
        <div class="p-col-5 p-pr-1">$ {{ subtotal }}</div>

        <div v-if="buy_more_discount" class="p-col-6 p-pr-0">多件優惠</div>
        <div v-if="buy_more_discount" class="p-col-5 p-pr-1">
          - $ {{ buy_more_discount }}
        </div>

        <div v-if="freight_cost" class="p-col-6 p-pr-0">運費</div>
        <div v-if="freight_cost" class="p-col-5 p-pr-1">
          $ {{ freight_cost }}
        </div>

        <div v-if="free_shipping" class="p-col-6 p-pr-0">滿千免運</div>
        <div v-if="free_shipping" class="p-col-5 p-pr-1">
          <del>$ {{ free_shipping }}</del>
        </div>

        <div class="p-col-6 p-text-bold checkout-price p-pr-0">總付款金額</div>
        <div class="p-col-5 p-text-bold checkout-price p-pr-1">
          $ {{ subtotal }}
        </div>
      </div>
    </div>
    <router-link
      to="/cart"
      @click.prevent="$emit('close-cart-sidebar')"
      class="p-fluid p-col-12 p-p-0 link-content"
    >
      <Button label="查看購物車" class="p-button-info p-button-raised">
      </Button>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      freight_cost: 0,
      buy_more_discount: 0,
      free_shipping: 0,
      cartItems: [],
    };
  },
  inject: ["emitter"],
  emits: ["close-cart-sidebar"],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.cartItems = [...response.data];
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
    delProduct(item, index) {
      const api = `${process.env.VUE_APP_API}/users/cart_items/${item.product_id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .delete(api, { headers })
        .then((response) => {
          if (response.status === 204) {
            this.showSuccessToast("已刪除商品");
            this.cartItems.splice(index, 1);
            this.emitter.emit("changeCartBadgeCount", this.cartItems.length);
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
    updateCart(item) {
      const data = { quantity: item.quantity };
      const api = `${process.env.VUE_APP_API}/users/cart_items/${item.product_id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .put(api, { cart_item: data }, { headers })
        .then((response) => {
          if (response.status === 200) {
            return;
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
          }
          if (error.response.status === 400) {
            this.showErrorToast("最小購買量為 1");
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
    typeText(package_type) {
      if (package_type === "drip_bag") {
        return "耳掛";
      }
      if (package_type === "half_pound") {
        return "半磅";
      }
      if (package_type === "one_pound") {
        return "一磅";
      }
    },
  },
  computed: {
    subtotal() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid black;
}
.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.product-image {
  width: 60px;
}

.subtotal-container {
  line-height: 1.5;
}

.del-content {
  color: #999;
}

.discount-container {
  font-size: 15px;
}

.discount-content {
  color: #db2828;
}

.discount-mark {
  background: #db2828;
  color: #fff;
}

.checkout-price {
  color: #0288d1;
}

.link-content {
  text-decoration: none;
  color: #2c3e50;
}

.link-content:hover {
  background: #f9f5ef;
}
</style>
