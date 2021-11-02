<template>
  <div class="ui right visible wide sidebar inverted vertical menu">
    <div class="header-container inner-wrap">
      <h3 class="ui aligned header inner-wrap name-status-unit-price-container">
        購物車清單
      </h3>
      <div class="close-body"><i class="times icon"></i></div>
    </div>

    <div
      class="ui grid inner-wrap inner-wrap-up"
      v-for="item in cart_list.products"
      :key="item.id"
    >
      <div class="one wide computer one wide tablet one wide mobile column">
        <div class="icon-container">
          <i class="trash alternate outline icon"></i>
        </div>
      </div>
      <div class="six wide computer six wide tablet six wide mobile column">
        <div class="img-container">
          <img :src="item.img" />
        </div>
      </div>
      <div
        class="seven wide computer seven wide tablet seven wide mobile column"
      >
        <div class="name-status-unit-price-container">
          <div>{{ item.name }}</div>
          <div>{{ item.status }}</div>
        </div>
      </div>
      <div
        class="seven wide computer seven wide tablet seven wide mobile column"
      >
        <div class="name-status-unit-price-container">
          <span>NT$ {{ item.unit_price }} / {{ item.unit }}</span>
        </div>
      </div>
      <div
        class="three wide computer three wide tablet three wide mobile column"
      >
        <div class="ui input input-body">
          <input
            class="input-body"
            type="number"
            min="1"
            v-model.number="item.qty"
          />
        </div>
      </div>
      <div class="six wide computer six wide tablet six wide mobile column">
        <div class="item-subtotal-container">
          <div>
            <del class="del-text" v-if="item.origin_price"
              >NT$ {{ item.origin_price }}</del
            >
          </div>
          <div>
            <span class="item-subtotal">NT$ {{ item.subtotal }}</span>
          </div>
          <div>
            <span class="discount-span" v-if="item.discount_content">{{
              item.discount_content
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ui grid inner-wrap inner-wrap-down">
      <div class="six wide computer six wide tablet six wide mobile column">
        <div class="inner-wrap-down-first-row-left">
          <div class="discount-body">優惠</div>
          <div class="over-thousand-body">滿 NT$ 1000 免運費</div>
        </div>
      </div>
      <div class="ten wide computer ten wide tablet ten wide mobile column">
        <div class="inner-wrap-down-first-row-right">
          <span class="calculate-detail-text">小計</span>
          <span class="calculate-detail-num">NT$ {{ cart_list.subtotal }}</span>
        </div>
      </div>
    </div>
    <div class="ui grid inner-wrap inner-wrap-down">
      <div
        class="
          fifteen
          wide
          computer
          sixteen
          wide
          tablet
          sixteen
          wide
          mobile
          column
        "
      >
        <div class="after-first-row">
          <span class="calculate-detail-text">多件優惠</span>
          <span class="calculate-detail-num"
            >- NT$ {{ cart_list.buy_more_discount }}</span
          >
        </div>
        <div class="after-first-row">
          <span class="calculate-detail-text">運費</span>
          <span class="calculate-detail-num"
            >NT$ {{ cart_list.freight_cost }}</span
          >
        </div>
        <div class="after-first-row">
          <span class="calculate-detail-text">滿千免運</span>
          <del class="calculate-detail-num"
            >NT$ {{ cart_list.thousand_free_shipping }}</del
          >
        </div>
        <div class="after-first-row final-total">
          <span class="calculate-detail-text">總付款金額</span>
          <span class="calculate-detail-num"
            >NT$ {{ cart_list.final_total }}</span
          >
        </div>
      </div>
    </div>
    <div><button class="ui basic button">訂單結帳</button></div>
  </div>
  <div class="dimmed pusher">頂端橫排放Menu</div>
</template>
<script>
export default {
  data() {
    return {
      cart_list: {
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
        subtotal: 3490,
        buy_more_discount: 600,
        thousand_free_shipping: 100,
        freight_cost: 100,
        final_total: 2890,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.ui.menu {
  background: #fff;
  flex-direction: unset;
  padding: 25px 0px 0px 10px;
}

.ui.basic.button {
  width: 85%;
  padding: 15px 0px;
  margin-bottom: 15px;
}

.inner-wrap {
  width: 95%;
  margin: 0px auto;
}

.inner-wrap-up {
  border-bottom: 1px solid #cecece;
  justify-content: space-evenly;
}

.header-container {
  display: flex;
  width: 95%;
  border-bottom: 1px solid #cecece;
}

.header {
  line-height: 2.3;
  padding-left: 18px;
}

.close-body {
  display: flex;
  align-items: center;
}

.times.icon {
  font-size: 18px;
  cursor: pointer;
}

.times.icon:hover {
  color: #db2828;
}

.icon-container {
  height: 100%;
  font-size: 21px;
  color: #cecece;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon-container:hover {
  color: #db2828;
}

.input-body {
  max-width: 73px;
}

.img-container {
  width: 105px;
  display: flex;
}

.name-status-unit-price-container {
  text-align: left;
}

.item-subtotal-container {
  text-align: right;
}

.del-text {
  color: #888;
}

.discount-span {
  color: #db2828;
}

.inner-wrap-down {
  justify-content: center;
}

.inner-wrap-down-first-row-left {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.inner-wrap-down-first-row-right {
  display: flex;
  justify-content: flex-end;
  text-align: right;
}

.discount-body {
  width: 60px;
  height: 25px;
  background: #db2828;
  color: #fff;
  font-size: 15px;
  font-weight: bolder;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
}

.over-thousand-body {
  font-size: 15px;
  font-weight: bolder;
  color: #db2828;
  text-align: left;
}

.calculate-detail-text {
  width: 100px;
}

.calculate-detail-num {
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
