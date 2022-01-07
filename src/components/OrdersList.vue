<template>
  <Accordion :multiple="true" v-for="order in orders" :key="order.id">
    <AccordionTab :header="`訂單成立時間 ${order.title}`">
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
          {{ item.package_type }}
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
        <div class="p-col-8 p-lg-11">
          {{ order.payment_method }}
        </div>

        <div class="p-col-4 p-lg-1 p-text-bold">備註</div>
        <div class="p-col-8 p-lg-11">{{ order.note }}</div>
      </div>

      <div class="p-grid p-m-1 p-pl-2 p-ai-center">
        <div class="p-col-4 p-lg-1 p-text-bold">訂單狀態</div>
        <div class="p-col-8 p-lg-11">{{ order.status }}</div>
        <div class="p-col-4 p-lg-1 p-text-bold">付款狀態</div>
        <div class="p-col-8 p-lg-11">
          {{ order.payment_status }}
        </div>
        <div class="p-col-4 p-lg-1 p-text-bold">物流狀態</div>
        <div class="p-col-8 p-lg-11">
          {{ order.shipping_status }}
        </div>
      </div>
    </AccordionTab>
  </Accordion>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          title: "2022 / 01 / 07 下午 01 : 45",
          id: "1",
          items: [
            {
              id: "01",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 400,
              quantity: 1,
              package_type: "半磅",
            },
            {
              id: "02",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 40,
              quantity: 10,
              package_type: "耳掛",
            },
          ],
          note: "",
          payment_method: "貨到付款",
          payment_status: "未付款",
          shipping_info: {
            name: "kakas",
            phone_number: "0912123123",
            address: "地址......",
            email: "aaa@aaa.aaa",
            shipping_method: "宅配",
            shipping_fee: 100,
          },
          shipping_status: "處理中",
          status: "備貨中",
        },
        {
          title: "2022 / 01 / 08 下午 08 : 05",
          id: "2",
          items: [
            {
              id: "01",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 400,
              quantity: 1,
              package_type: "半磅",
            },
            {
              id: "02",
              name: "宏都拉斯 天堂產區 帕拉伊內瑪種 水洗處理",
              unit_price: 40,
              quantity: 10,
              package_type: "耳掛",
            },
          ],
          note: "",
          payment_method: "貨到付款",
          payment_status: "未付款",
          shipping_info: {
            name: "kakas",
            phone_number: "0912123123",
            address: "地址......",
            email: "aaa@aaa.aaa",
            shipping_method: "宅配",
            shipping_fee: 100,
          },
          shipping_status: "處理中",
          status: "備貨中",
        },
      ],
    };
  },
  methods: {
    caculateSubtotal(order) {
      let total = 0;
      order.items.forEach((item) => {
        total += item.unit_price * item.quantity;
      });
      return total;
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
      if (status === "pending") {
        return "處理中";
      }
      if (status === "confirmed") {
        return "已確認";
      }
      if (status === "finished") {
        return "已完成";
      }
      if (status === "canceled") {
        return "已取消";
      }
    },
    paymentStatusText(payment_status) {
      if (payment_status === "outstanding" || payment_status === "unpaid") {
        return "未付款";
      }
      if (payment_status === "failed") {
        return "付款失敗";
      }
      if (payment_status === "paid") {
        return "已付款";
      }
    },
    shippingStatusText(shipping_status) {
      if (shipping_status === "in_preparation") {
        return "備貨中";
      }
      if (shipping_status === "shipping") {
        return "已發貨";
      }
      if (shipping_status === "arrived") {
        return "已到達";
      }
      if (shipping_status === "picked_up") {
        return "已取貨";
      }
    },
  },
};
</script>
