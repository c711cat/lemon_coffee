<template>
  <div class="wrap">
    <h3 class="ui aligned header">購物車清單</h3>
    <div class="ui grid inner-wrap" v-for="item in products" :key="item.id">
      <div class="one wide computer one wide tablet one wide mobile column">
        <div class="icon-container">
          <i class="trash alternate outline icon"></i>
        </div>
      </div>
      <div class="two wide computer two wide tablet six wide mobile column">
        <div class="img-container">
          <img :src="item.img" />
        </div>
      </div>
      <div
        class="three wide computer three wide tablet seven wide mobile column"
      >
        <div class="name-status-container">
          <div>{{ item.name }}</div>
          <div>{{ item.status }}</div>
        </div>
      </div>
      <div class="two wide computer two wide tablet six wide mobile column">
        <div class="unit-price-container">
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
      <div class="two wide computer two wide tablet six wide mobile column">
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
// * {
//   border: 1px solid black;
// }

.wrap {
  max-width: 1200px;
  margin: 55px auto;
}

.inner-wrap {
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #cecece;
  justify-content: space-evenly;
}

.header {
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #cecece;
  line-height: 2.3;
  text-align: left;
  padding-left: 18px;
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
  max-width: 80px;
}

.img-container {
  width: 105px;
  display: flex;
}

.name-status-container {
  text-align: left;
}

.unit-price-container {
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
</style>
