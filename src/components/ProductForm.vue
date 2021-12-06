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
      },
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
      console.log("qq");
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
