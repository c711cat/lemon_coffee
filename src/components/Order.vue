<template>
  <Loading v-if="isLoading" />
  <div v-else class="wrap p-my-0 p-mx-auto p-p-2">
    <div class="divider p-pl-3">
      <h4>訂單成立時間 2022 / 01 / 03 下午 02 : 35</h4>
      <h4>訂單編號 {{ order.id }}</h4>
    </div>
    <div
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      v-for="item in order.items"
      :key="item.id"
    >
      <div class="p-col-12 p-lg-5 p-pl-3">
        {{ item.name }}<br />
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
          <div class="p-col-5 p-lg-3">
            $ {{ order.shipping_info.shipping_fee }}
          </div>

          <div v-if="free_shipping" class="p-col-7 p-lg-9 p-pr-0">滿千免運</div>
          <div v-if="free_shipping" class="p-col-5 p-lg-3">
            <del>$ {{ order.shipping_info.shipping_fee }}</del>
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

    <div class="p-grid p-m-1 p-pl-2 divider p-pb-1 p-ai-center">
      <div class="p-col-4 p-lg-1 p-text-bold">姓名</div>
      <div class="p-col-8 p-lg-11">{{ order.shipping_info.name }}</div>

      <div class="p-col-4 p-lg-1 p-text-bold">電話</div>
      <div class="p-col-8 p-lg-11">
        {{ order.shipping_info.phone_number }}
      </div>

      <div class="p-col-4 p-lg-1 p-text-bold">Email</div>
      <div class="p-col-8 p-lg-11">{{ order.shipping_info.email }}</div>

      <div class="p-col-4 p-lg-1 p-text-bold">送貨方式</div>
      <div class="p-col-8 p-lg-11">
        {{ shippingMethodText }}
      </div>

      <div v-if="isHomeDelivery" class="p-col-4 p-lg-1 p-text-bold">
        收件地址
      </div>
      <div v-if="isHomeDelivery" class="p-col-8 p-lg-11">
        {{ order.shipping_info.address }}
      </div>

      <div class="p-col-4 p-lg-1 p-text-bold">付款方式</div>
      <div class="p-col-8 p-lg-11">
        {{ paymentMethodText }}
      </div>

      <div class="p-col-4 p-lg-1 p-text-bold">備註</div>
      <div class="p-col-8 p-lg-11">{{ order.note }}</div>
    </div>

    <div class="p-grid p-m-1 p-pl-2 p-ai-center">
      <div class="p-col-4 p-lg-1 p-text-bold">訂單狀態</div>
      <div class="p-col-8 p-lg-11">{{ orderStatusText(order.status) }}</div>
      <div class="p-col-4 p-lg-1 p-text-bold">付款狀態</div>
      <div class="p-col-8 p-lg-11">
        {{ paymentStatusText(order.payment_status) }}
      </div>
      <div class="p-col-4 p-lg-1 p-text-bold">物流狀態</div>
      <div class="p-col-8 p-lg-11">
        {{ shippingStatusText(order.shipping_status) }}
      </div>
    </div>

    <div
      class="p-grid p-jc-end p-ai-end p-col-12 p-pb-3 p-m-0 p-text-right p-pr-0"
    >
      <router-link to="/orders" class="p-lg-2 link-content">
        <Button
          class="p-button-lg p-button-success p-button-raised"
          label="查閱訂單"
        >
        </Button>
      </router-link>
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
      order: {
        id: "",
        items: [
          {
            id: "",
            name: "",
            unit_price: 0,
            quantity: 0,
            package_type: "",
          },
        ],
        note: "",
        payment_method: "",
        payment_status: "",
        shipping_info: {
          name: "",
          phone_number: "",
          address: ";",
          email: "",
          shipping_method: "",
          shipping_fee: 0,
        },
        shipping_status: "",
        status: "",
      },
      isLoading: false,
    };
  },
  components: { Loading },
  inject: ["emitter"],
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}/users/orders/${this.$route.params.id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      this.isLoading = true;
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.order = { ...response.data };
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
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
    typeText(package_type) {
      switch (package_type) {
        case "drip_bag":
          return "耳掛";
        case "half_pound":
          return "半磅";
        case "one_pound":
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
    orderStatusText(status) {
      switch (status) {
        case "pending":
          return "處理中";
        case "confirmed":
          return "已確認";
        case "finished":
          return "已完成";
        case "canceled":
          return "已取消";
      }
    },
    paymentStatusText(payment_status) {
      switch (payment_status) {
        case "outstanding":
          return "未付款";
        case "failed":
          return "付款失敗";
        case "paid":
          return "已付款";
      }
    },
    shippingStatusText(shipping_status) {
      switch (shipping_status) {
        case "in_preparation":
          return "備貨中";
        case "shipping":
          return "已發貨";
        case "arrived":
          return "已到達";
        case "picked_up":
          return "已取貨";
      }
    },
  },
  computed: {
    subtotal() {
      let total = 0;
      this.order.items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    },
    final_shipping_fee() {
      if (this.subtotal >= 1000) {
        return 0;
      } else {
        return this.order.shipping_info.shipping_fee;
      }
    },
    free_shipping() {
      return this.final_shipping_fee === 0;
    },
    shippingMethodText() {
      let shipping_method_text = "";
      if (this.order.shipping_info.shipping_method === "home_delivery") {
        shipping_method_text = "宅配";
      }
      return shipping_method_text;
    },
    paymentMethodText() {
      let payment_method_text = "";
      if (this.order.payment_method === "cash_on_delivery") {
        payment_method_text = "貨到付款";
      }
      return payment_method_text;
    },
    isHomeDelivery() {
      let homeDelivery = false;
      if (this.order.shipping_info.shipping_method === "home_delivery") {
        homeDelivery = true;
      }
      return homeDelivery;
    },
  },
  created() {
    this.getOrder();
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
  color: #689f38;
}

.link-content {
  text-decoration: none;
}
</style>
