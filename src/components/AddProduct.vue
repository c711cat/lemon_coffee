<template>
  <div class="add-product-wrap">
    <h1 class="main-title">新增產品</h1>
    <div class="add-product-wrap-container">
      <div class="field-content">
        <label class="label-title">產品名稱 </label>
        <input
          class="input-body"
          type="text"
          placeholder="請輸入產品名稱"
          v-model="product.name"
        />
      </div>
      <div class="field-content">
        <label class="label-title"> 半磅價格</label>
        <input
          class="input-body"
          type="number"
          placeholder="請輸入半磅價格"
          min="0"
          v-model="product.half_pound_price"
        />
      </div>
      <div class="field-content">
        <label class="label-title"> 一磅價格 </label>
        <input
          class="input-body"
          type="number"
          placeholder="請輸入一磅價格"
          min="0"
          v-model="product.one_pound_price"
        />
      </div>
      <div class="field-content">
        <label class="label-title"> 耳掛價格 </label>
        <input
          class="input-body"
          type="number"
          placeholder="請輸入耳掛價格"
          min="0"
          v-model="product.drip_bag_price"
        />
      </div>
      <div class="field-content">
        <label for="roast" class="label-title"> 烘焙度 </label>
        <select
          class="input-body"
          name="roast"
          id="roast"
          v-model="product.roast"
        >
          <option class="input-body" value="" disabled>請選擇烘焙度</option>
          <option
            class="input-body"
            :value="item"
            v-for="item in [1, 2, 3, 4, 5]"
            :key="item"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="field-content">
        <label class="label-title">風味 1 </label
        ><input
          class="input-body"
          type="text"
          placeholder="請輸入風味"
          v-model="product.flavor[0]"
        />
      </div>
      <div class="field-content">
        <label class="label-title">風味 2 </label
        ><input
          class="input-body"
          type="text"
          placeholder="請輸入風味"
          v-model="product.flavor[1]"
        />
      </div>
      <div class="field-content">
        <label class="label-title">風味 3 </label
        ><input
          class="input-body"
          type="text"
          placeholder="請輸入風味"
          v-model="product.flavor[2]"
        />
      </div>
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
* {
  box-sizing: border-box;
  font-family: system-ui;
}
.add-product-wrap {
  max-width: 1200px;
  padding-top: 30px;
}
.add-product-wrap-container {
  width: 50%;
  text-align: left;
  margin: 0 auto;
}
.main-title {
  color: #5b5b5b;
  font-size: 18px;
  margin-bottom: 30px;
}
.field-content {
  margin-bottom: 20px;
}
.label-title {
  width: 100px;
  display: inline-block;
  color: #666666;
}
.input-body {
  width: 80%;
  border: 1px solid #ddd;
  color: #555555;
  height: 50px;
  padding: 6px 12px;
  font-size: 15px;
}
</style>
