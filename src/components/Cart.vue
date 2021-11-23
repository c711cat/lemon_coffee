<template>
  <div class="wrap">
    <div class="divider title"><h4>購物車清單</h4></div>
    <div
      class="p-grid nested-grid divider"
      v-for="item in products"
      :key="item.id"
    >
      <div class="p-col-1.5 p-lg-1 trash-container">
        <div class="box">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-text p-button-danger"
          >
          </Button>
        </div>
      </div>
      <div class="p-col-10">
        <div class="p-grid p-fluid p-jc-around">
          <div class="p-col-3 p-lg-1">
            <div class="box">
              <img :src="item.image" class="product-image" />
            </div>
          </div>
          <div class="p-col-9 p-lg-5">
            <div class="box">
              {{ item.name }}<br />
              {{ item.status }}<br />
              {{ item.unit }}
            </div>
          </div>
          <div class="p-col-3 p-lg-1">
            <div class="box unit-price">$ {{ item.price }}</div>
          </div>
          <div class="p-col-fixed" style="width: 110px">
            <div class="box">
              <InputNumber
                v-model="item.qty"
                :min="1"
                showButtons
                incrementButtonClass="p-button-info"
                decrementButtonClass="p-button-info"
              />
            </div>
          </div>
          <div class="p-col-4 p-lg-2">
            <div class="box subtotal-container unit-price">
              <div class="discount-content" v-if="item.discount">
                {{ item.discount }}
              </div>
              <del class="del-content" v-if="item.discount"
                >$ {{ item.price * item.qty }}</del
              >
              <div v-if="item.sale_price">$ {{ item.sale_price }}</div>

              <div v-else>$ {{ item.price * item.qty }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productService: null,
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
// * {
//   border: 1px solid black;
// }
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}

.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.p-grid.nested-grid {
  margin: 0px;
}

.title {
  padding-left: 15px;
}

.trash-container {
  padding-top: 23px;
  text-align: center;
}

.product-image {
  width: 60px;
}

.box {
  padding-top: 1rem;
}

.box.subtotal-container {
  text-align: right;
  line-height: 1.5;
}

.unit-price {
  padding-top: 18px;
}

.del-content {
  color: #999;
}

.discount-content {
  color: #db2828;
}
</style>
