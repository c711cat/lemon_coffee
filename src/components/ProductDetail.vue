<template>
  <div class="p-grid">
    <h3 class="p-col-12">{{ product.name }}</h3>
    <div class="p-col-12">
      <Button
        label="耳掛"
        class="p-button-outlined p-button-info p-mr-4 purchase-type"
      ></Button>
      <Button
        label="半磅"
        class="p-button-outlined p-button-info p-mr-4 purchase-type"
      ></Button>
      <Button
        label="一磅"
        class="p-button-outlined p-button-info p-mr-4 purchase-type"
      ></Button>
    </div>
    <div class="p-col-12">
      <InputNumber
        v-model="product.qty"
        class="p-inputtext-sm"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonClass="p-button-outlined p-button-info"
        decrementButtonClass="p-button-outlined p-button-info"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
      />
    </div>
    <div class="p-col-12">
      <Button label="加入購物車" class="p-button-info p-col-12 p-lg-4"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 5,
        name: "瓜地馬拉 阿卡特南果 聖塔費麗莎莊園 藍鑽 水洗",
        qty: 1,
        type: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.purchase-type:focus {
  background-color: #0288d1;
  color: #fff;
}
</style>
