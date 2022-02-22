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
      <label>風味1</label>
      <InputText type="text" v-model="product.flavor[0]" />
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label>風味2</label>
      <InputText type="text" v-model="product.flavor[1]" />
    </div>
    <div class="p-field p-col-12 p-md-4">
      <label>風味3</label>
      <InputText type="text" v-model="product.flavor[2]" />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>國家</label>
      <Dropdown
        v-model="product.country"
        :options="countries"
        optionLabel="name"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>產區</label>
      <Dropdown
        v-model="product.area"
        :options="areas"
        optionLabel="name"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>品種</label>
      <Dropdown
        v-model="product.variety"
        :options="varieties"
        optionLabel="name"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-3">
      <label>處理法</label>
      <Dropdown
        v-model="product.approach"
        :options="approaches"
        optionLabel="name"
        :editable="true"
      />
    </div>

    <div class="p-field p-col-12 p-md-12">
      <label>風味描述</label>
      <Textarea
        v-model="product.discription"
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
        half_pound_price: 0,
        one_pound_price: 0,
        drip_bag_price: 0,
        roast: "",
        flavor: [],
        country: "",
        area: "",
        variety: "",
        approach: "",
        discription: "",
      },
      countries: [
        { name: "印尼" },
        { name: "巴西" },
        { name: "肯亞" },
        { name: "尼加拉瓜" },
        { name: "薩爾瓦多" },
        { name: "瓜地馬拉" },
        { name: "宏都拉斯" },
        { name: "衣索比亞" },
        { name: "哥倫比亞" },
        { name: "哥斯大黎加" },
        { name: "巴布亞新幾內亞" },
        { name: "手動填入" },
      ],
      areas: [
        { name: "肯亞" },
        { name: "林東省" },
        { name: "龐貝村" },
        { name: "耶加雪菲" },
        { name: "天堂產區" },
        { name: "聖荷西莊園" },
        { name: "遊樂園莊園" },
        { name: "奇邁爾莊園" },
        { name: "格比亞多莊園" },
        { name: "阿拉斯加莊園" },
        { name: "聖塔費麗莎莊園" },
        { name: "魔魔拉單一莊園" },
        { name: "山塔那小農協會" },
        { name: "手動填入" },
      ],
      varieties: [
        { name: "波旁種" },
        { name: "橘波旁" },
        { name: "黃波旁" },
        { name: "鐵比卡" },
        { name: "卡度艾" },
        { name: "原生種" },
        { name: "阿拉比卡" },
        { name: "混合品種" },
        { name: "帕拉伊內瑪種" },
        { name: "SL 28" },
        { name: "手動填入" },
      ],

      approaches: [
        { name: "水洗" },
        { name: "日曬" },
        { name: "去果皮日曬" },
        { name: "蜜處理" },
        { name: "黃蜜處理" },
        { name: "濕剝處理" },
        { name: "手動填入" },
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
