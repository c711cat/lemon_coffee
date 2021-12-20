<template>
  <div class="wrap p-my-0 p-mx-auto p-p-2">
    <div class="divider p-pl-3">
      <h4>訂單成立時間 2021/12/20 18:45</h4>
    </div>
    <div
      class="p-grid p-m-0 p-py-3 divider p-ai-center p-jc-between"
      v-for="(item, index) in cartItems"
      :key="index"
    >
      <div class="p-col-12 p-lg-5 p-pl-3">
        {{ item.product_name }}<br />
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
          <div class="p-col-5 p-lg-3">$ 37750</div>

          <div class="p-col-7 p-lg-9 p-pr-0">運費</div>
          <div class="p-col-5 p-lg-3">$ 0</div>

          <div class="p-col-7 p-lg-9 p-text-bold checkout-price p-pr-0">
            總付款金額
          </div>
          <div class="p-col-5 p-lg-3 p-text-bold checkout-price">$ 37750</div>
        </div>
      </div>
    </div>

    <div class="divider p-pl-3">
      <h4>收件人資料</h4>
    </div>

    <div class="p-grid nested-grid p-m-1 p-pl-2">
      <div class="p-col-12 p-lg-7">
        <div class="p-grid p-fluid p-ai-center">
          <div class="p-col-4 p-lg-2 p-text-bold">姓名</div>
          <div class="p-col-8 p-lg-10">{{ buyer.required.name }}</div>

          <div class="p-col-4 p-lg-2 p-text-bold">電話</div>
          <div class="p-col-8 p-lg-10">{{ buyer.required.phone_number }}</div>

          <div class="p-col-4 p-lg-2 p-text-bold">Email</div>
          <div class="p-col-8 p-lg-10">{{ buyer.required.email }}</div>

          <div class="p-col-4 p-lg-2 p-text-bold">送貨方式</div>
          <div class="p-col-8 p-lg-10">
            {{ buyer.required.delivery_method }}
          </div>

          <div
            v-if="buyer.required.delivery_method === '宅配'"
            class="p-col-4 p-lg-2 p-text-bold"
          >
            收件地址
          </div>
          <div
            v-if="buyer.required.delivery_method === '宅配'"
            class="p-col-8 p-lg-10"
          >
            {{ buyer.required.address }}
          </div>

          <div class="p-col-4 p-lg-2 p-text-bold">付款方式</div>
          <div class="p-col-8 p-lg-10">{{ buyer.required.payment_method }}</div>

          <div class="p-col-4 p-lg-2 p-text-bold">備註</div>
          <div class="p-col-8 p-lg-10">{{ buyer.message }}</div>
        </div>
      </div>

      <div class="p-grid p-ai-end p-jc-end p-col-12 p-lg-5 p-pb-3 p-m-0">
        <Button
          class="p-button-lg p-button-raised p-button-danger"
          label="結帳"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        {
          product_id: 4,
          quantity: 3,
          package_type: "half_pound",
          product_name: "巴布亞新幾內亞 奇邁爾莊園 珍珠圓豆",
          unit_price: 400,
          product_image_url:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          product_id: 10,
          quantity: 3,
          package_type: "half_pound",
          product_name: "耶家雪菲 水洗 西達摩 班莎 龐貝村 G1",
          unit_price: 450,
          product_image_url:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          product_id: 3,
          quantity: 88,
          package_type: "half_pound",
          product_name: "哥倫比亞 娜玲瓏 山塔那小農協會 水洗",
          unit_price: 400,
          product_image_url:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
      ],
      buyer: {
        required: {
          name: "jgpoegjpeor",
          phone_number: "0912345678",
          email: "abc@abc.abc",
          delivery_method: "宅配",
          payment_method: "貨到付款",
          address: "地址1236877",
        },
        message: "無",
      },
    };
  },
  methods: {
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
  color: #0288d1;
}
</style>
