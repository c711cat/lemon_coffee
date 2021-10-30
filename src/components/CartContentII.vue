<template>
  <div class="ui grid cart-list-wrap">
    <span class="list-title">購物車清單</span>
    <div class="inner-warp" v-for="item in products" :key="item.id">
      <div
        class="
          three
          wide
          computer
          nine
          wide
          tablet
          two
          wide
          mobile
          column
          icon-container
        "
      >
        <i class="trash alternate outline icon"></i>
      </div>
      <div class="img-container">
        <img :src="item.img" />
      </div>
      <div class="item-text-container">
        <div class="name-status-container">
          <div>{{ item.name }}</div>
          <div>{{ item.status }}</div>
        </div>

        <div class="unit-price-container">
          <div>
            <span class="unit-price"
              >NT$ {{ item.unit_price }} / {{ item.unit }}</span
            >
          </div>

          <div>
            <input
              class="input-body"
              type="number"
              min="1"
              v-model.number="item.qty"
            />
          </div>
        </div>
      </div>
      <div class="subtotal-container">
        <div>
          <del class="del-text" v-if="item.origin_price"
            >NT$ {{ item.origin_price }}</del
          >
        </div>
        <div>
          <span class="subtotal">NT$ {{ item.subtotal }}</span>
        </div>
        <div>
          <span class="discount-content" v-if="item.discount_content">{{
            item.discount_content
          }}</span>
        </div>
      </div>
    </div>
    <div class="total-price-wrap">
      <div class="subtotal-first-row">
        <div class="first-row-left">
          <div class="discount-body">優惠</div>
          <span class="over-thousand-span">滿 NT$ 1000 免運費</span>
        </div>
        <div class="first-row-right">
          <span class="subtotal-text">小計</span
          ><span class="subtotal-num">NT$ 3490</span>
        </div>
      </div>

      <div class="after-first-row">
        <span class="subtotal-text">多件優惠</span>
        <span class="subtotal-num">- NT$ 600</span>
      </div>
      <div class="after-first-row">
        <span class="subtotal-text">運費</span>
        <span class="subtotal-num">NT$ 100</span>
      </div>
      <div class="after-first-row">
        <span class="subtotal-text">滿千免運</span>
        <del class="subtotal-num">NT$ 100</del>
      </div>
      <div class="after-first-row final-total">
        <span class="subtotal-text">總付款金額</span>
        <span class="subtotal-num">NT$ 2890</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "耶家雪菲 日曬 古吉 夏奇索 魔魔拉單一莊園 G1",
          img: "https://images.unsplash.com/photo-1562051036-e0eea191d42f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGNvZmZlZSUyMGJlYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
          status: "原豆-不磨粉",
          unit_price: 450,
          unit: "半磅",
          qty: 1,
          subtotal: 450,
        },
        {
          id: 2,
          name: "肯亞 AA FAQ 159 批次",
          img: "https://images.unsplash.com/photo-1537887467160-cf9f4a2b29c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQ4fHxjb2ZmZWUlMjBkcmlwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
          status: "耳掛",
          unit_price: 40,
          unit: "包",
          qty: 40,
          subtotal: 1000,
          origin_price: 1600,
          discount_content: "多件優惠",
        },
        {
          id: 3,
          name: "哥倫比亞 娜玲瓏 山塔那小農協會 水洗",
          img: "https://images.unsplash.com/photo-1517881426553-5d7d3abfbabf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExNXx8Y29mZmVlJTIwZHJpcGJhZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60",
          status: "原豆-不磨粉",
          unit_price: 720,
          unit: "一磅",
          qty: 2,
          subtotal: 1440,
          origin_price: "",
          more_discount: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
// * {
//   border: 1px solid black;
// }
.cart-list-wrap {
  max-width: 955px;
  height: auto;
  margin: 50px auto;
}
.list-title {
  display: inline-block;
  width: 100%;
  text-align: left;
  line-height: 2.3;
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 1px;
  color: #444;
  padding-left: 10px;
  border-bottom: 1px solid #cecece;
  margin: 0 20px;
}
.inner-warp {
  width: 90%;
  height: auto;
  margin: 0 20px;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #cecece;
  text-align: left;
  justify-content: space-between;
  align-items: center;
}
.icon-container {
  display: inline-flex;
  align-items: center;
  font-size: 23px;
  cursor: pointer;
  color: #cecece;
}
.icon-container:hover {
  color: #db2828;
}
.img-container {
  width: 105px;
  height: 130px;
  display: flex;
  align-items: center;
  margin-right: inherit;
}

.item-text-container {
  display: flex;
  flex-wrap: wrap;
}
.name-status-container {
  width: 150px;
  margin-right: 20px;
}
.subtotal-container {
  margin-left: -38px;
}
.unit-price-container {
  display: flex;
  flex-wrap: wrap;
}
.input-body {
  max-width: 60px;
  text-align: center;
}
.del-text {
  text-align: right;
  width: 75px;
  color: #888;
  display: inline-block;
}
.subtotal {
  display: inline-block;
  width: 75px;
  text-align: right;
}
.discount-content {
  width: 75px;
  text-align: right;
  display: inline-block;
  color: #db2828;
}
//下方結帳區塊
.total-price-wrap {
  width: 100%;
  margin: 0 20px;
  padding: 10px;
}
.subtotal-first-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.first-row-left {
  width: 220px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.discount-body {
  width: 70px;
  height: 30px;
  background: #db2828;
  color: #fff;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.over-thousand-span {
  display: inline-block;
  max-width: 150px;
  font-size: 16px;
  font-weight: bolder;
  color: #db2828;
}
.first-row-right {
  display: flex;
  justify-content: space-between;
  text-align: right;
}
.subtotal-text {
  width: 100px;
}
.subtotal-num {
  width: 90px;
}
.after-first-row {
  display: flex;
  justify-content: flex-end;
  text-align: right;
}
.final-total {
  font-weight: bolder;
  font-size: 16px;
  color: #337ab7;
  line-height: 2.3;
}
</style>
