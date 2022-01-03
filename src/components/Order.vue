<template>
  <div class="wrap p-my-0 p-mx-auto p-p-2">
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
        磨粉不磨粉?<br />
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

          <div class="p-col-7 p-lg-9 p-text-bold checkout-price p-pr-0">
            總付款金額
          </div>
          <div class="p-col-5 p-lg-3 p-text-bold checkout-price">
            $ {{ finalTotal }}
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
        {{ order.shipping_info.shipping_method }}
      </div>

      <div
        v-if="order.shipping_info.shipping_method === 'home_delivery'"
        class="p-col-4 p-lg-1 p-text-bold"
      >
        收件地址
      </div>
      <div
        v-if="order.shipping_info.shipping_method === 'home_delivery'"
        class="p-col-8 p-lg-11"
      >
        {{ order.shipping_info.address }}
      </div>

      <div class="p-col-4 p-lg-1 p-text-bold">付款方式</div>
      <div class="p-col-8 p-lg-11">{{ order.payment_method }}</div>

      <div class="p-col-4 p-lg-1 p-text-bold">備註</div>
      <div class="p-col-8 p-lg-11">{{ order.note }}</div>
    </div>

    <div class="p-grid p-m-1 p-pl-2 p-ai-center">
      <div class="p-col-4 p-lg-1 p-text-bold">訂單狀態</div>
      <div class="p-col-8 p-lg-11">{{ order.status }}</div>
      <div class="p-col-4 p-lg-1 p-text-bold">付款狀態</div>
      <div class="p-col-8 p-lg-11">{{ order.payment_status }}</div>
      <div class="p-col-4 p-lg-1 p-text-bold">物流狀態</div>
      <div class="p-col-8 p-lg-11">{{ order.shipping_status }}</div>
    </div>

    <div
      class="p-grid p-jc-end p-ai-end p-col-12 p-pb-3 p-m-0 p-text-right p-pr-0"
    >
      <router-link to="/home" class="p-lg-2 link-content">
        <Button
          class="p-button-lg p-button-info p-button-raised"
          label="回首頁"
        >
        </Button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

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
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}/users/orders/${this.$route.params.id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };

      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.order = { ...response.data };
            console.log(this.order);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            console.log(error.response);
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
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
      this.order.items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
    },
    finalTotal() {
      let total = 0;
      total = this.subtotal + this.order.shipping_info.shipping_fee;
      return total;
    },
  },
  created() {
    this.getOrder();
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

.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.subtotal-container {
  line-height: 1.5;
}

.checkout-price {
  color: #0288d1;
}

.link-content {
  text-decoration: none;
}
</style>
