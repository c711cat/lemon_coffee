<template>
  <div class="divider p-pl-2">
    <h4 class="p-mb-2 p-mt-0">購物車清單</h4>
  </div>

  <div
    class="p-grid divider p-m-0 p-pt-3 p-jc-between p-ai-center"
    v-for="item in products"
    :key="item.id"
  >
    <Button
      icon="pi pi-trash"
      class="p-col-fixed p-ml-2 p-button-rounded p-button-text p-button-danger"
      style="width: 30px"
    />

    <img :src="item.image" class="product-image p-col-3 p-p-0" />

    <div class="p-col-8 p-pl-3">
      {{ item.name }}<br />
      {{ item.status }}<br />
    </div>

    <div class="p-col-fixed p-pl-3" style="width: 125px">
      $ {{ item.price }} / {{ item.unit }}
    </div>

    <div class="p-fluid p-col-fixed p-p-0 p-my-3" style="width: 129px">
      <InputNumber
        class="p-inputtext-sm"
        v-model="item.qty"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        incrementButtonClass="p-button-info"
        decrementButtonClass="p-button-info"
      />
    </div>

    <div class="p-col-3 p-text-right subtotal-container p-px-1">
      <div class="discount-content" v-if="item.discount">
        {{ item.discount }}
      </div>

      <del class="del-content" v-if="item.discount"
        >$ {{ item.price * item.qty }}
      </del>

      <div v-if="item.sale_price">$ {{ item.sale_price }}</div>

      <div v-else>$ {{ item.price * item.qty }}</div>
    </div>
  </div>

  <div class="p-grid nested-grid p-jc-between p-mx-0 p-my-2 p-p-0">
    <div class="p-col-3 p-ml-2">
      <div class="p-grid discount-container">
        <div class="p-col-10 p-text-center p-mr-2 discount-mark">優惠</div>
        <div class="p-col-12 discount-content p-pl-0">滿 $1000 免運費</div>
      </div>
    </div>

    <div class="p-col-8">
      <div class="p-grid p-text-right p-ai-center p-jc-end">
        <div class="p-col-6 p-pr-0">小計</div>
        <div class="p-col-5 p-pr-1">$ {{ price_detail.subtotal }}</div>

        <div v-if="price_detail.buy_more_discount" class="p-col-6 p-pr-0">
          多件優惠
        </div>
        <div v-if="price_detail.buy_more_discount" class="p-col-5 p-pr-1">
          - $ {{ price_detail.buy_more_discount }}
        </div>

        <div v-if="price_detail.freight_cost" class="p-col-6 p-pr-0">運費</div>
        <div v-if="price_detail.freight_cost" class="p-col-5 p-pr-1">
          $ {{ price_detail.freight_cost }}
        </div>

        <div v-if="price_detail.free_shipping" class="p-col-6 p-pr-0">
          滿千免運
        </div>
        <div v-if="price_detail.free_shipping" class="p-col-5 p-pr-1">
          <del>$ {{ price_detail.free_shipping }}</del>
        </div>

        <div class="p-col-6 p-text-bold checkout-price p-pr-0">總付款金額</div>
        <div class="p-col-5 p-text-bold checkout-price p-pr-1">
          $ {{ price_detail.total_payment_price }}
        </div>
      </div>
    </div>

    <Button
      label="訂單結帳"
      class="p-button-info p-button-raised p-col-12"
    ></Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price_detail: {
        subtotal: 3490,
        buy_more_discount: 600,
        freight_cost: 100,
        free_shipping: 100,
        total_payment_price: 2890,
      },
      products: [
        {
          id: 1,
          name: "耶家雪菲 日曬 古吉 夏奇索 魔魔拉單一莊園 G1",
          image:
            "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          status: "原豆-不磨粉",
          unit: "半磅",
          price: 450,
          qty: 1,
        },
        {
          id: 2,
          name: "肯亞 AA FAQ 159 批次",
          image:
            "https://images.unsplash.com/photo-1584736286179-e3d10ebcdc3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGNvZmZlZSUyMGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          status: "耳掛",
          unit: "包",
          price: 40,
          qty: 40,
          discount: "多件優惠",
          sale_price: 1000,
        },
        {
          id: 3,
          name: "哥倫比亞 娜玲瓏 山塔那小農協會 水洗",
          image:
            "https://images.unsplash.com/photo-1563873915107-12674ca562df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
          status: "磨粉",
          unit: "一磅",
          price: 720,
          qty: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid black;
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
</style>
