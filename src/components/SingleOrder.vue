<template>
  <Dialog
    :header="`訂單編號 ${order.id}`"
    v-model:visible="isOpen"
    :breakpoints="{ '960px': '100vw' }"
    style="width: 60%"
  >
    <h4 class="p-mt-0">成立時間 {{ updateDateFormat(order.created_at) }}</h4>
    <div
      v-for="item in order.items"
      :key="item.id"
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
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
      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        姓名
      </div>
      <div class="p-col-12 p-lg-10">{{ order.shipping_info.name }}</div>

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        電話
      </div>
      <div class="p-col-12 p-lg-10">
        {{ order.shipping_info.phone_number }}
      </div>

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        Email
      </div>
      <div class="p-col-12 p-lg-10">{{ order.shipping_info.email }}</div>

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        送貨方式
      </div>
      <div class="p-col-12 p-lg-10">
        {{ shippingMethodText }}
      </div>

      <div
        v-if="homeDelivery"
        class="p-col-12 p-lg-fixed p-text-bold"
        style="width: 100px"
      >
        收件地址
      </div>
      <div v-if="homeDelivery" class="p-col-12 p-lg-10">
        {{ order.shipping_info.address }}
      </div>

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        付款方式
      </div>
      <div class="p-col-12 p-lg-10">
        {{ paymentMethodText }}
      </div>

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        備註
      </div>
      <div class="p-col-12 p-lg-10">{{ order.note }}</div>
    </div>

    <div class="p-grid p-m-1 p-pl-2 p-ai-center">
      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        付款狀態
      </div>
      <div class="p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center">
        <strong :class="paymentStatusColor" class="p-mr-4">
          {{ paymentStatusText }}
          <i v-if="paid" class="success-color pi pi-check-circle p-ml-1"></i>
        </strong>

        <Button
          v-if="oneOrder['may_pay?'] && !canceled"
          @click="confirm_paid"
          label="確認付款"
          class="
            p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
          "
          style="width: 100px"
        />
      </div>

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        訂單狀態
      </div>
      <OrderStatus :orderData="oneOrder" />

      <div class="p-col-12 p-lg-fixed p-text-bold" style="width: 100px">
        物流狀態
      </div>
      <ShippingStatus :orderData="oneOrder" />
    </div>

    <template #footer>
      <div class="p-d-flex p-jc-end">
        <Button
          :disabled="!oneOrder['may_cancel?']"
          @click.prevent="cancelTheOreder"
          label="取消訂單"
          icon="pi pi-times"
          class="p-button-danger p-ml-3"
        />
        <Button
          @click.prevent="closeWindow"
          label="關閉視窗"
          class="p-button-secondary p-button-text"
          autofocus
        />
      </div>
    </template>
  </Dialog>
</template>

<script>
import ShippingStatus from "@/components/ShippingStatus.vue";
import OrderStatus from "@/components/OrderStatus.vue";
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      isOpen: false,
      oneOrder: {},
    };
  },
  components: { ShippingStatus, OrderStatus },
  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    order() {
      this.oneOrder = { ...this.order };
      this.isOpen = true;
    },
  },
  methods: {
    updateDateFormat(time) {
      const oldStyle = new Date(Date.parse(time)).toLocaleString();
      const newStyle = oldStyle.replace("/", "-").replace("/", "-");
      return newStyle;
    },
    groundText(ground_result) {
      if (ground_result === true) {
        return "磨粉";
      } else {
        return "原豆";
      }
    },
    confirm_paid() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.oneOrder.id}/payment_status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { payment_status: "paid" };
      axios
        .put(api, data, { headers })
        .then((response) => {
          this.oneOrder = response.data;
          this.emitter.emit("updateOrderAllStatus");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    caculateSubtotal(order) {
      return order.items.reduce((acc, current_item) => {
        return acc + current_item.unit_price * current_item.quantity;
      }, 0);
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
    closeWindow() {
      this.isOpen = false;
    },
    cancelTheOreder() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.oneOrder.id}/status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { status: "canceled" };
      axios
        .put(api, data, { headers })
        .then((response) => {
          this.oneOrder = response.data;
          this.emitter.emit("updateOrderAllStatus");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  inject: ["emitter"],
  computed: {
    homeDelivery() {
      return this.oneOrder.shipping_info.shipping_method === "home_delivery";
    },
    paymentMethodText() {
      if (this.oneOrder.payment_method === "cash_on_delivery") {
        return "貨到付款";
      } else {
        return "";
      }
    },
    shippingMethodText() {
      if (this.homeDelivery) {
        return "宅配";
      } else {
        return "";
      }
    },
    paymentStatusText() {
      if (this.outstanding) {
        return "未付款";
      }
      if (this.paid) {
        return "已付款";
      } else {
        return "付款失敗";
      }
    },
    paymentStatusColor() {
      if (this.paid) {
        return "success-color";
      } else {
        return "blue-color";
      }
    },
    outstanding() {
      return this.oneOrder.payment_status === "outstanding";
    },
    paid() {
      return this.oneOrder.payment_status === "paid";
    },
    pending() {
      return this.oneOrder.status === "pending";
    },
    confirmed() {
      return this.oneOrder.status === "confirmed";
    },
    canceled() {
      return this.oneOrder.status === "canceled";
    },
    inPreparation() {
      return this.oneOrder.shipping_status === "in_preparation";
    },
  },
};
</script>

<style lang="scss" scoped>
.blue-color {
  color: #0288d1;
}

.success-color {
  color: #689f38;
}
</style>
