<template>
  <Dialog
    :header="`訂單編號 ${order.id}`"
    v-model:visible="orderContent"
    :breakpoints="{ '960px': '100vw' }"
    style="width: 60%"
  >
    <h4 class="p-mt-0">成立時間 {{ order.created_at }}</h4>
    <div
      v-for="item in order.items"
      :key="item.id"
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
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
      <div class="p-col-12 p-lg-1 p-text-bold">付款狀態</div>
      <div class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
        <strong
          v-if="
            oneOrder.payment_status === 'outstanding' ||
            oneOrder.payment_status === 'unpaid'
          "
          class="blue-color p-mr-4"
        >
          {{ paymentStatusText(order.payment_status) }}
        </strong>
        <strong
          v-if="oneOrder.payment_status === 'paid'"
          class="success-color p-mr-4"
        >
          已付款<i class="pi pi-check-circle p-ml-1"></i>
        </strong>

        <!-- <Button
          v-if="
            (oneOrder.payment_status === 'outstanding' ||
              oneOrder.payment_status === 'unpaid') &&
            oneOrder.status !== 'canceled'
          "
          @click="confirm_paid"
          label="確認付款"
          class="
            p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
          "
          style="width: 100px"
        /> -->
      </div>

      <div class="p-col-12 p-lg-1 p-text-bold">訂單狀態</div>
      <UserOrderStatus :orderStatus="oneOrder.status" />

      <div class="p-col-12 p-lg-1 p-text-bold">物流狀態</div>
      <UserShippingStatus
        :shippingStatus="oneOrder.shipping_status"
        :orderStatus="oneOrder.status"
      />
    </div>

    <template #footer>
      <div class="p-d-flex p-jc-end">
        <Button
          :disabled="disabledBtn"
          @click.prevent="cancelTheOreder()"
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
import UserShippingStatus from "@/components/UserShippingStatus.vue";
import UserOrderStatus from "@/components/UserOrderStatus.vue";
export default {
  data() {
    return {
      orderContent: false,
      oneOrder: {},
    };
  },
  components: { UserShippingStatus, UserOrderStatus },
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
      this.orderContent = true;
    },
  },
  methods: {
    // confirm_paid() {
    //   this.oneOrder.payment_status = "paid";
    // },
    paymentStatusText(payment_status) {
      switch (payment_status) {
        case "outstanding":
        case "unpaid":
          return "未付款";
        case "failed":
          return "付款失敗";
        case "paid":
          return "已付款";
      }
    },
    paymentMethodText(payment_method) {
      if (payment_method === "cash_on_delivery") {
        return "貨到付款";
      }
    },
    shippingMethodText(shipping_method) {
      if (shipping_method === "home_delivery") {
        return "宅配";
      }
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
    closeWindow() {
      this.orderContent = false;
    },
    cancelTheOreder() {
      this.oneOrder.status = "canceled";
    },
  },
  inject: ["emitter"],
  computed: {
    disabledBtn() {
      let disabled_btn = false;
      if (
        this.oneOrder.payment_status === "outstanding" &&
        this.oneOrder.shipping_status === "in_preparation" &&
        (this.oneOrder.status === "pending" ||
          this.oneOrder.status === "confirmed")
      ) {
        disabled_btn = false;
      } else {
        disabled_btn = true;
      }
      return disabled_btn;
    },
  },
  created() {
    this.emitter.on("update_shipping_status", (current_shipping_status) => {
      this.oneOrder.shipping_status = current_shipping_status;
    });
    this.emitter.on("update_order_status", (current_order_status) => {
      this.oneOrder.status = current_order_status;
    });
  },
};
</script>

<style lang="scss" scoped>
// * {
//   border: 1px solid black;
// }
.blue-color {
  color: #0288d1;
}
.success-color {
  color: #689f38;
}
</style>
