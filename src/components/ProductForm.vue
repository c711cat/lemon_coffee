<template>
  <h3 v-if="editItem.id" class="title">編輯產品</h3>
  <h3 v-else class="title">新增產品</h3>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-field p-col-12 p-md-8">
      <label>產品名稱</label>
      <InputText type="text" v-model="product.name" />
    </div>

    <div class="p-field p-col-12 p-md-4">
      <label>烘焙度</label>
      <Dropdown v-model="product.roast" :options="[1, 2, 3, 4, 5]" />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>國家</label>
      <Dropdown
        v-model="product.country"
        :options="countries"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>產區</label>
      <Dropdown v-model="product.area" :options="areas" :editable="true" />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>品種</label>
      <Dropdown
        v-model="product.variety"
        :options="varieties"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>處理法</label>
      <Dropdown
        v-model="product.processing_method"
        :options="processing_method"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-4">
      <label>半磅價格</label>
      <InputNumber showButtons :min="0" v-model="product.half_pound_price" />
    </div>

    <div class="p-field p-col-12 p-md-4">
      <label>一磅價格</label>
      <InputNumber showButtons :min="0" v-model="product.one_pound_price" />
    </div>

    <div class="p-field p-col-12 p-md-4">
      <label>耳掛價格</label>
      <InputNumber showButtons :min="0" v-model="product.drip_bag_price" />
    </div>

    <div class="p-field p-col-12 p-md-4">
      <label>代表性風味 1</label>
      <InputText type="text" v-model="product.flavor[0]" />
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label>代表性風味 2</label>
      <InputText type="text" v-model="product.flavor[1]" />
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label>代表性風味 3</label>
      <InputText type="text" v-model="product.flavor[2]" />
    </div>

    <div class="p-field p-col-12 p-md-12">
      <label>風味描述</label>
      <Textarea
        v-model="product.description"
        :autoResize="true"
        rows="5"
        cols="30"
      />
    </div>

    <div class="p-field p-col-12 p-md-2 p-md-offset-10">
      <Button label="送出" @click="onSubmit(this.product)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        roast: "",
        country: "",
        area: "",
        variety: "",
        processing_method: "",
        half_pound_price: 0,
        one_pound_price: 0,
        drip_bag_price: 0,
        flavor: [],
        description: "",
      },
      countries: [
        "印尼",
        "巴西",
        "肯亞",
        "尼加拉瓜",
        "薩爾瓦多",
        "瓜地馬拉",
        "宏都拉斯",
        "衣索比亞",
        "哥倫比亞",
        "哥斯大黎加",
        "巴布亞新幾內亞",
        "手動填入",
      ],
      areas: [
        "肯亞",
        "林東省",
        "龐貝村",
        "耶加雪菲",
        "天堂產區",
        "聖荷西莊園",
        "遊樂園莊園",
        "奇邁爾莊園",
        "格比亞多莊園",
        "阿拉斯加莊園",
        "聖塔費麗莎莊園",
        "魔魔拉單一莊園",
        "山塔那小農協會",
        "手動填入",
      ],
      varieties: [
        "波旁種",
        "橘波旁",
        "黃波旁",
        "鐵比卡",
        "卡度艾",
        "原生種",
        "阿拉比卡",
        "混合品種",
        "帕拉伊內瑪種",
        "SL 28",
        "手動填入",
      ],

      processing_method: [
        "水洗",
        "日曬",
        "去果皮日曬",
        "蜜處理",
        "黃蜜處理",
        "濕剝處理",
        "手動填入",
      ],
    };
  },
  props: {
    editItem: {
      typeof: Object,
      default() {
        return {};
      },
    },
    onSubmit: {
      typeof: Function,
      required: true,
    },
  },
  watch: {
    editItem() {
      this.product = { ...this.editItem };
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.p-fluid.p-formgrid.p-grid {
  max-width: 1000px;
  margin: 30px auto;
  text-align: left;
}

.p-button {
  margin-top: 20px;
}
</style>
