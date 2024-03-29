<template>
  <Loading v-if="isLoading" />
  <div v-else class="wrap p-my-0 p-mx-auto p-p-2">
    <div class="divider p-pl-3">
      <h4>購買清單</h4>
    </div>
    <div
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      v-for="item in cartItems"
      :key="item.product_id + item.package_type"
    >
      <div class="p-col-12 p-lg-5 p-pl-3">
        {{ item.product_name }}<br />
        {{ groundText(item.ground) }}<br />
      </div>
      <div class="p-col-5 p-lg-3 p-pl-3">
        $ {{ item.unit_price }} / {{ typeText(item.package_type) }}
      </div>
      <div class="p-col-3 p-lg-1 p-p-0 p-my-3">數量 {{ item.quantity }}</div>
      <div class="p-col-3 p-lg-2 p-text-right subtotal-container">
        <div>$ {{ item.unit_price * item.quantity }}</div>
      </div>
    </div>

    <div class="p-grid p-mx-0 p-my-2">
      <div class="p-col-12">
        <div class="p-grid p-jc-between p-text-right p-ai-center">
          <div class="p-col-7 p-lg-9 p-pr-0">小計</div>
          <div class="p-col-5 p-lg-3">$ {{ subtotal }}</div>

          <div class="p-col-7 p-lg-9 p-pr-0">運費</div>
          <div class="p-col-5 p-lg-3">$ {{ origin_shipping_fee }}</div>

          <div v-if="free_shipping" class="p-col-7 p-lg-9 p-pr-0">滿千免運</div>
          <div v-if="free_shipping" class="p-col-5 p-lg-3">
            <del>$ {{ origin_shipping_fee }}</del>
          </div>

          <div class="p-col-7 p-lg-9 p-text-bold checkout-price p-pr-0">
            總付款金額
          </div>
          <div class="p-col-5 p-lg-3 p-text-bold checkout-price">
            $ {{ final_shipping_fee + subtotal }}
          </div>
        </div>
      </div>
    </div>

    <div class="divider p-pl-3">
      <h4>收件人資料</h4>
    </div>

    <div class="p-grid nested-grid p-m-1 p-pl-2">
      <div class="p-col-12 p-lg-7 p-mt-3">
        <div class="p-grid p-fluid p-ai-center">
          <div class="p-col-4 p-lg-2 p-text-bold">姓名</div>
          <div class="p-col-8 p-lg-10">{{ shipping_info.name }}</div>

          <div class="p-col-4 p-lg-2 p-text-bold">電話</div>
          <div class="p-col-8 p-lg-10">
            {{ shipping_info.phone_number }}
          </div>

          <div class="p-col-4 p-lg-2 p-text-bold">Email</div>
          <div class="p-col-8 p-lg-10">{{ shipping_info.email }}</div>

          <div class="p-col-4 p-lg-2 p-text-bold">送貨方式</div>
          <div class="p-col-8 p-lg-10">
            {{ shippingMethodText }}
          </div>

          <div v-if="isHomeDelivery" class="p-col-4 p-lg-2 p-text-bold">
            收件地址
          </div>
          <div v-if="isHomeDelivery" class="p-col-8 p-lg-10">
            {{ shipping_info.address }}
          </div>

          <div class="p-col-4 p-lg-2 p-text-bold">付款方式</div>
          <div class="p-col-8 p-lg-10">
            {{ paymentMethodText }}
          </div>

          <div class="p-col-4 p-lg-2 p-text-bold">備註</div>
          <div class="p-col-8 p-lg-10">{{ note }}</div>
        </div>
      </div>

      <div
        class="
          p-grid p-jc-end p-ai-end p-col-12 p-pb-3 p-m-0 p-text-right p-pr-0
        "
      >
        <router-link to="/cart" class="p-lg-2 link-content">
          <Button
            class="p-button-lg p-button-info p-button-raised"
            label="修改"
          >
          </Button>
        </router-link>

        <div class="p-col-fixed" style="width: 127px">
          <Button
            :disabled="btnIsLoading"
            @click.prevent="createOrder"
            class="p-button-lg p-button-raised p-button-danger"
            label="下訂單"
          >
            <ProgressSpinner
              v-if="btnIsLoading"
              style="width: 63px; height: 27px"
              strokeWidth="8"
              animationDuration="10s"
            />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "@/components/Loading.vue";

export default {
  data() {
    return {
      cartItems: [],
      note: "",
      shipping_info: {
        name: "",
        phone_number: "",
        address: "",
        email: "",
        shipping_method: "",
      },
      isLoading: false,
      btnIsLoading: false,
    };
  },
  components: { Loading },
  inject: ["emitter"],
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.cartItems = [...response.data];
            const buyerRecord =
              JSON.parse(localStorage.getItem("personalData")) || {};
            this.note = buyerRecord.note;
            this.shipping_info = buyerRecord.shipping_info;
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        })
        .finally(() => {
          this.isLoading = false;
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
    createOrder() {
      const api = `${process.env.VUE_APP_API}/users/orders`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = {
        order: { note: this.note, shipping_info: this.shipping_info },
      };
      this.btnIsLoading = true;
      axios
        .post(api, data, { headers })
        .then((response) => {
          if (response.status === 201) {
            this.showSuccessToast("已成立訂單");
            this.$router.push(`/order/${response.data.id}`);
            this.emitter.emit("changeCartBadgeCount", 0);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
          }
          if (error.response.status === 400 && error.response.data.cart) {
            this.showErrorToast("你的購物車是空的");
          }
          if (error.response.status === 400 && error.response.data.name) {
            this.showErrorToast("請填入 : 收件人姓名");
          }
          if (
            error.response.status === 400 &&
            error.response.data.phone_number
          ) {
            this.showErrorToast("請填入 : 收件人電話");
          }
          if (error.response.status === 400 && error.response.data.address) {
            this.showErrorToast("請填入 : 收件地址");
          }
          if (error.response.status === 400 && error.response.data.email) {
            this.showErrorToast("請填入 : 收件人 email");
          }
        })
        .finally(() => {
          this.btnIsLoading = false;
        });
    },
    showSuccessToast(text) {
      this.$toast.add({
        severity: "success",
        summary: text,
        life: 2000,
      });
    },
    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
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
    origin_shipping_fee() {
      switch (this.shipping_info.shipping_method) {
        case "home_delivery":
          return 100;
        default:
          return 0;
      }
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
    shippingMethodText() {
      let shipping_method_text = "";
      if (this.shipping_info.shipping_method === "home_delivery") {
        shipping_method_text = "宅配";
      }
      return shipping_method_text;
    },
    paymentMethodText() {
      let payment_method_text = "";
      if (this.shipping_info.payment_method === "cash_on_delivery") {
        payment_method_text = "貨到付款";
      }
      return payment_method_text;
    },
    isHomeDelivery() {
      let homeDelivery = false;
      if (this.shipping_info.shipping_method === "home_delivery") {
        homeDelivery = true;
      }
      return homeDelivery;
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

.subtotal-container {
  line-height: 1.5;
}

.checkout-price {
  color: #d32f2f;
}

.link-content {
  text-decoration: none;
}
</style>
