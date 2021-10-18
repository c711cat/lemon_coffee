<template>
  <div class="add-product-wrap">
    <h4 class="ui dividing header">新增產品</h4>
    <div class="ui form">
      <div class="fields">
        <div class="ten wide field">
          <label>產品名稱</label>
          <input
            class="input-body"
            type="text"
            placeholder="請輸入產品名稱"
            v-model="product.name"
          />
        </div>
        <div class="two wide field">
          <label for="roast">烘焙度</label>
          <select id="roast" v-model="product.roast">
            <option value="" disabled>請選擇烘焙度</option>
            <option :value="item" v-for="item in [1, 2, 3, 4, 5]" :key="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>半磅價格</label>
          <input
            type="number"
            placeholder="請輸入半磅價格"
            min="0"
            v-model="product.half_pound_price"
          />
        </div>
        <div class="four wide field">
          <label>一磅價格</label>
          <input
            type="number"
            placeholder="請輸入一磅價格"
            min="0"
            v-model="product.one_pound_price"
          />
        </div>
        <div class="four wide field">
          <label>耳掛價格</label>
          <input
            type="number"
            placeholder="請輸入耳掛價格"
            min="0"
            v-model="product.drip_bag_price"
          />
        </div>
      </div>
    </div>
    <div class="ui form">
      <div class="fields">
        <div class="four wide field">
          <label>風味 1 </label>
          <input
            type="text"
            placeholder="請輸入風味"
            v-model="product.flavor[0]"
          />
        </div>
        <div class="four wide field">
          <label>風味 2 </label>
          <input
            type="text"
            placeholder="請輸入風味"
            v-model="product.flavor[1]"
          />
        </div>
        <div class="four wide field">
          <label>風味 3 </label>
          <input
            type="text"
            placeholder="請輸入風味"
            v-model="product.flavor[2]"
          />
        </div>
      </div>
    </div>
    <h4 class="ui dividing header"></h4>
    <div class="btn-container">
      <button class="ui primary button">送出</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        name: "",
        half_pound_price: "",
        one_pound_price: "",
        drip_bag_price: "",
        roast: "",
        flavor: [],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.add-product-wrap {
  max-width: 1200px;
  margin: 50px 25px;
  text-align: left;
  letter-spacing: 1.3px;
}
.fields {
  justify-content: center;
}
.ui.dividing.header {
  margin-bottom: 30px;
}
.form .fields:last-child .field {
  margin-bottom: 10px;
}
.btn-container {
  display: flex;
  flex-direction: row-reverse;
  margin-top: -15px;
}
</style>
