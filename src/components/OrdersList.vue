<template>
  <Accordion
    class="wrap p-mx-auto"
    :multiple="true"
    v-for="order in orders"
    :key="order.id"
  >
    <AccordionTab
      :header="`訂單成立時間 ${order.created_at}  訂單編號 ${order.id}`"
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
    </AccordionTab>
  </Accordion>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      orders: [
        {
          created_at: "2022 / 01 / 07 下午 01 : 45",
          id: "1",
          items: [
            {
              id: "01",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 400,
              quantity: 1,
              package_type: "half_pound",
            },
            {
              id: "02",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 40,
              quantity: 10,
              package_type: "drip_bag",
            },
          ],
          note: "",
          payment_method: "cash_on_delivery",
          payment_status: "unpaid",
          shipping_info: {
            name: "kakas",
            phone_number: "0912123123",
            address: "地址......",
            email: "aaa@aaa.aaa",
            shipping_method: "home_delivery",
            shipping_fee: 100,
          },
          shipping_status: "in_preparation",
          status: "pending",
        },
        {
          created_at: "2022 / 01 / 08 下午 08 : 05",
          id: "2",
          items: [
            {
              id: "01",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 400,
              quantity: 1,
              package_type: "half_pound",
            },
            {
              id: "02",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 40,
              quantity: 10,
              package_type: "drip_bag",
            },
          ],
          note: "",
          payment_method: "cash_on_delivery",
          payment_status: "unpaid",
          shipping_info: {
            name: "kakas",
            phone_number: "0912123123",
            address: "地址......",
            email: "aaa@aaa.aaa",
            shipping_method: "home_delivery",
            shipping_fee: 100,
          },
          shipping_status: "in_preparation",
          status: "pending",
        },
      ],
    };
  },
  methods: {
    getOrders() {
      const api = `${process.env.VUE_APP_API}/users/orders`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          console.log(response);
          this.orders = response.data;
          console.log(this.orders);
        })
        .catch((error) => {
          console.log(error.response);
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
        case "unpaid":
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
