<template>
  <Accordion
    class="wrap p-mx-auto"
    :multiple="true"
    v-for="order in orders"
    :key="order.id"
  >
    <AccordionTab
      :header="` 訂單編號 ${order.id} - ${changeDateText(order.created_at)}  `"
    >
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
          $ {{ item.unit_price }} /
          {{ typeText(item.package_type) }}
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
            <div class="p-col-5 p-lg-3">${{ caculateSubtotal(order) }}</div>

            <div class="p-col-7 p-lg-9 p-pr-0">運費</div>
            <div class="p-col-5 p-lg-3">
              $ {{ order.shipping_info.shipping_fee }}
            </div>

            <div class="p-col-7 p-lg-9 p-text-bold checkout-price p-pr-0">
              總付款金額
            </div>
            <div class="p-col-5 p-lg-3 p-text-bold checkout-price">
              ${{ caculateSubtotal(order) + order.shipping_info.shipping_fee }}
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
          {{ shippingMethodText(order.shipping_info.shipping_method) }}
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
        <div class="p-col-8 p-lg-11">
          {{ paymentMethodText(order.payment_method) }}
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">備註</div>
        <div class="p-col-8 p-lg-11">{{ order.note }}</div>
      </div>

      <div class="p-grid p-m-1 p-pl-2 p-ai-center">
        <div class="p-col-4 p-lg-1 p-text-bold">訂單狀態</div>
        <div class="p-col-8 p-lg-11">
          <OrderStatusColor :orderStatus="order.status"></OrderStatusColor>
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">付款狀態</div>
        <div class="p-col-8 p-lg-11">
          <PaymentStatusColor :paymentStatus="order.payment_status" />
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">物流狀態</div>
        <div class="p-col-8 p-lg-11">
          <ShippingStatusColor :shippingStatus="order.shipping_status" />
        </div>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import OrderStatusColor from "@/components/OrderStatusColor.vue";
import PaymentStatusColor from "@/components/PaymentStatusColor.vue";
import ShippingStatusColor from "@/components/ShippingStatusColor.vue";

export default {
  data() {
    return {
      orders: [],
    };
  },
  components: { OrderStatusColor, PaymentStatusColor, ShippingStatusColor },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}/users/orders`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          this.orders = response.data;
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        });
    },
    caculateSubtotal(order) {
      let total = 0;
      order.items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
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
    shippingMethodText(shipping_method) {
      if (shipping_method === "home_delivery") {
        return "宅配";
      }
    },
    paymentMethodText(payment_method) {
      if (payment_method === "cash_on_delivery") {
        return "貨到付款";
      }
    },

    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
    changeDateText(time) {
      return new Date(Date.parse(time)).toLocaleString();
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 1200px;
}
</style>
