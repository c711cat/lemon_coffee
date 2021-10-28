<template>
  <div class="cart-list-wrap">
    <span class="list-title">購物車清單</span>
    <div class="cart-warp" v-for="item in products" :key="item.id">
      <div class="cart-list-left">
        <div class="icon-container">
          <i class="trash alternate outline icon"></i>
        </div>
        <div class="img-container">
          <img :src="item.img" />
        </div>
        <div class="item-text-container">
          <div class="text-left">
            <div>{{ item.name }}</div>
            <div>{{ item.status }}</div>
          </div>
          <div>
            <div class="unit-price-container">
              <span class="unit-price"
                >NT$ {{ item.unit_price }} / {{ item.unit }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <input
          class="input-body"
          type="number"
          min="1"
          v-model.number="item.qty"
        />
      </div>
      <div class="cart-list-right">
        <div>
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
  border: 1px solid black;
}
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
}
.cart-warp {
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #cecece;
}
.icon-container {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 23px;
  cursor: pointer;
}
.icon-container:hover {
  color: #db2828;
}
.img-container {
  width: 105px;
  height: 130px;
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.cart-list-left {
  display: flex;
  text-align: left;
}
.cart-list-right {
  // width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
}
.item-text-container {
  max-width: 450px;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.text-left {
  width: 200px;
  margin-right: 30px;
}
.unit-price {
  display: inline-block;
  width: 100px;
}
.input-body {
  max-width: 60px;
  text-align: center;
  // margin-left: 78px;
  // margin-right: 35px;
}
.del-text {
  text-align: right;

  width: 100px;
  color: #888;
  display: inline-block;
}
.subtotal {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.discount-content {
  width: 100px;
  text-align: right;
  display: inline-block;
  color: #db2828;
}
</style>
