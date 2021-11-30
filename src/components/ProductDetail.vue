<template>
  <div class="p-grid">
    <h3 class="p-lg-12">豆子名稱</h3>
    <div class="p-lg-12">
      <Button label="耳掛"></Button>
      <Button label="半磅"></Button>
      <Button label="一磅"></Button>
    </div>
    <div class="p-lg-12">
      <input
        type="number"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonClass="p-button-outlined p-button-secondary"
        decrementButtonClass="p-button-outlined p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
      />
      <InputNumber
        class="input-btn"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        incrementButtonClass="p-button-outlined p-button-secondary"
        decrementButtonClass="p-button-outlined p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .input-btn:hover {
//   border-color: #2196f3;
//   box-shadow: 0 0 0 0.2rem #a6d5fa;
// }
input:focus {
  border-color: none;
  box-shadow: none;
}
</style>
