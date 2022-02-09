<template>
  <Loading v-if="isLoading" />
  <div v-else class="wrap p-my-0 p-mx-auto p-p-2">
    <div class="divider p-pl-3">
      <h4>購物車清單</h4>
    </div>

    <div
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      v-for="(item, index) in cartItems"
      :key="item.product_id + item.package_type"
    >
      <div class="p-col-2 p-lg-1 p-text-center">
        <Button
          @click.prevent="delProduct(item, index)"
          icon="pi pi-trash"
          class="p-button-rounded p-button-text p-button-danger"
        />
      </div>
      <router-link
        :to="`/products/${item.product_id}`"
        class="
          p-grid p-m-0 p-col-10 p-lg-6 p-jc-around p-ai-center
          link-content
        "
      >
        <img
          :src="item.product_image_url"
          class="product-image p-col-1 p-lg-1 p-p-0"
        />

        <div class="p-col-9 p-lg-9 p-pl-3">
          {{ item.product_name }} <br />
          {{ groundText(item.ground) }}
        </div>
      </router-link>

      <div class="p-col-fixed p-pl-4" style="width: 130px">
        $ {{ item.unit_price }} / {{ typeText(item.package_type) }}
      </div>

      <div class="p-fluid p-col-fixed p-p-0 p-my-3" style="width: 135px">
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

      <div class="p-col-3 p-lg-1 p-text-right subtotal-container">
        <div class="discount-content" v-if="item.discount">
          {{ item.discount }}
        </div>

        <del class="del-content" v-if="item.discount"
          >$ {{ item.unit_price * item.quantity }}
        </del>

        <div v-if="item.sale_price">$ {{ item.sale_price }}</div>

        <div v-else>$ {{ item.unit_price * item.quantity }}</div>
      </div>
    </div>

    <div class="p-grid nested-grid p-jc-between p-mx-0 p-my-2">
      <div class="p-col-5">
        <div class="p-grid p-ml-1 discount-container">
          <div class="p-col-6 p-lg-2 p-text-center p-mr-2 discount-mark">
            優惠
          </div>
          <div class="p-col-12 p-lg-4 discount-content p-pl-0">
            滿 $1000 免運費
          </div>
        </div>
      </div>

      <div class="p-col-7 p-lg-6">
        <div class="p-grid p-jc-between p-text-right p-ai-center">
          <div class="p-col-6 p-lg-9 p-pr-0">小計</div>
          <div class="p-col-6 p-lg-3">$ {{ subtotal }}</div>

          <div v-if="buy_more_discount" class="p-col-6 p-lg-9 p-pr-0">
            多件優惠
          </div>
          <div v-if="buy_more_discount" class="p-col-6 p-lg-3">
            - $ {{ buy_more_discount }}
          </div>

          <div v-if="origin_shipping_fee" class="p-col-6 p-lg-9 p-pr-0">
            運費
          </div>
          <div v-if="origin_shipping_fee" class="p-col-6 p-lg-3">
            $ {{ origin_shipping_fee }}
          </div>

          <div
            v-if="origin_shipping_fee > 0 && free_shipping"
            class="p-col-6 p-lg-9 p-pr-0"
          >
            滿千免運
          </div>
          <div
            v-if="origin_shipping_fee > 0 && free_shipping"
            class="p-col-6 p-lg-3"
          >
            <del>$ {{ origin_shipping_fee }}</del>
          </div>

          <div class="p-col-6 p-lg-9 p-text-bold checkout-price p-pr-0">
            總付款金額
          </div>

          <div class="p-col-6 p-lg-3 p-text-bold checkout-price">
            $ {{ final_shipping_fee + subtotal }}
          </div>
        </div>
      </div>
    </div>
    <AddresseeForm @shipping-method="updateShippingFee"></AddresseeForm>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import AddresseeForm from "@/components/AddresseeForm.vue";
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      buy_more_discount: 0,
      cartItems: [],
      origin_shipping_fee: 0,
      isLoading: false,
    };
  },
  components: { AddresseeForm, Loading },
  inject: ["emitter"],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .get(api, { headers })
        .then((response) => {
          this.isLoading = false;
          if (response.status === 200) {
            this.cartItems = [...response.data];
          }
        })
        .catch((error) => {
          this.isLoading = false;
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
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
            Cookies.remove("lemonToken");
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
            Cookies.remove("lemonToken");
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
    groundText(ground_result) {
      if (ground_result === true) {
        return "磨粉";
      }
      if (ground_result === false) {
        return "原豆";
      }
    },
    updateShippingFee(shippingMethod) {
      switch (shippingMethod) {
        case "home_delivery":
          this.origin_shipping_fee = 100;
          break;
        default:
          this.origin_shipping_fee = 0;
          break;
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
    final_shipping_fee() {
      if (this.subtotal >= 1000) {
        return 0;
      } else {
        return this.origin_shipping_fee;
      }
    },
    free_shipping() {
      return this.final_shipping_fee === 0;
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 1200px;
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
