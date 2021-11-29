<template>
  <div class="divider p-pl-2">
    <h4 class="p-mb-2 p-mt-0">購物車清單</h4>
  </div>

  <div
    class="p-grid nested-grid divider"
    v-for="item in products"
    :key="item.id"
  >
    <div class="p-col-2 p-lg-2 p-text-center p-p-0">
      <Button
        icon="pi pi-trash"
        class="p-button-rounded p-button-text p-button-danger p-mt-5"
      />
    </div>

    <div class="p-col-10 p-lg-10">
      <div class="p-grid p-fluid">
        <div class="p-col-fixed p-pl-0" style="width: 60px">
          <img :src="item.image" class="product-image p-mt-2" />
        </div>

        <div class="p-col-fixed p-mt-2 p-ml-3 p-pl-0" style="width: 160px">
          {{ item.name }}<br />
          {{ item.status }}<br />
          {{ item.unit }}
        </div>

        <div class="p-col-fixed p-pl-0" style="width: 64px">
          $ {{ item.price }}
        </div>

        <div class="p-col-fixed p-pr-0 p-pl-1 p-pt-0" style="width: 88px">
          <InputNumber
            class=""
            v-model="item.qty"
            :min="1"
            showButtons
            incrementButtonClass="p-button-info"
            decrementButtonClass="p-button-info"
          />
        </div>

        <div
          class="p-col-fixed p-text-right p-pt-2 subtotal-container p-pr-0"
          style="width: 80px"
        >
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
    </div>
  </div>

  <div class="p-grid nested-grid p-mt-1 p-pl-1">
    <div class="p-col-3 p-lg-3">
      <div class="p-grid discount-container">
        <div class="p-col-10 p-lg-10 p-text-center p-mr-2 discount-mark">
          優惠
        </div>
        <div class="p-col-12 p-lg-12 discount-content p-pl-0">
          滿 $1000 免運費
        </div>
      </div>
    </div>

    <div class="p-col-9 p-lg-9">
      <div class="p-grid p-text-right p-ai-center">
        <div class="p-col-6 p-lg-6 p-pr-0">小計</div>
        <div class="p-col-6 p-lg-6 p-pr-4">$ {{ price_detail.subtotal }}</div>

        <div
          v-if="price_detail.buy_more_discount"
          class="p-col-6 p-lg-6 p-pr-0"
        >
          多件優惠
        </div>
        <div
          v-if="price_detail.buy_more_discount"
          class="p-col-6 p-lg-6 p-pr-4"
        >
          - $ {{ price_detail.buy_more_discount }}
        </div>

        <div v-if="price_detail.freight_cost" class="p-col-6 p-lg-6 p-pr-0">
          運費
        </div>
        <div v-if="price_detail.freight_cost" class="p-col-6 p-lg-6 p-pr-4">
          $ {{ price_detail.freight_cost }}
        </div>

        <div v-if="price_detail.free_shipping" class="p-col-6 p-lg-6 p-pr-0">
          滿千免運
        </div>
        <div v-if="price_detail.free_shipping" class="p-col-6 p-lg-6 p-pr-4">
          <del>$ {{ price_detail.free_shipping }}</del>
        </div>

        <div class="p-col-6 p-lg-6 p-text-bold checkout-price p-pr-0">
          總付款金額
        </div>
        <div class="p-col-6 p-lg-6 p-text-bold checkout-price p-pr-4">
          $ {{ price_detail.total_payment_price }}
        </div>
      </div>
    </div>
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
          unit: "一包",
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
