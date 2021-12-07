<template>
  <div class="p-grid">
    <h3 class="p-col-12">{{ product.name }}</h3>
    <div class="p-col-12">
      <SelectButton
        v-model="product.type"
        :options="typeOfOptions"
        class="selected"
      />
    </div>
    <div class="p-col-fixes p-fluid p-ml-2" style="width: 202px">
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
        name: "瓜地馬拉 阿卡特南果 聖塔費麗莎莊園 藍鑽 水洗",
        qty: 1,
        type: "半磅",
      },
      typeOfOptions: ["耳掛", "半磅", "一磅"],
    };
  },
};
</script>
