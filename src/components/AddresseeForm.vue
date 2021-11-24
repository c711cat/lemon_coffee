<template>
  <div class="divider title"><h4>收件人資料</h4></div>
  <div class="p-grid nested-grid form">
    <div class="p-col-12 p-lg-7 form-left">
      <div class="p-grid p-fluid vertical-direction">
        <div class="p-col-3 p-lg-2 field-title"><p>姓名</p></div>
        <div class="p-col-9 p-lg-10">
          <InputText type="text" v-model="buyer.required.name" />
        </div>

        <div class="p-col-3 p-lg-2 field-title"><p>電話</p></div>
        <div class="p-col-9 p-lg-10">
          <InputText type="text" v-model="buyer.required.phone_number" />
        </div>

        <div class="p-col-3 p-lg-2 field-title"><p>Email</p></div>
        <div class="p-col-9 p-lg-10">
          <InputText type="text" v-model="buyer.required.email" />
        </div>

        <div class="p-col-3 p-lg-2 field-title"><p>送貨方式</p></div>
        <div class="p-col-9 p-lg-10">
          <InputText type="text" v-model="buyer.required.delivery_method" />
        </div>

        <div class="p-col-3 p-lg-2 field-title"><p>付款方式</p></div>
        <div class="p-col-9 p-lg-10">
          <InputText type="text" v-model="buyer.required.payment_method" />
        </div>

        <div class="p-col-3 p-lg-2 field-title"><p>付款方式</p></div>
        <div class="p-col-9 p-lg-10">
          <InputText type="text" v-model="buyer.message" />
        </div>
      </div>
    </div>

    <div class="p-grid p-ai-end p-jc-end p-col-12 p-lg-4 checkout-btn">
      <Button class="p-button-lg" label="前往結帳"></Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buyer: {
        required: {
          name: "",
          phone_number: "",
          email: "",
          delivery_method: "",
          payment_method: "",
        },
        message: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  border: 1px solid black;
}

.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.p-grid.nested-grid {
  margin: 0px;
}

.title {
  padding-left: 15px;
}

.vertical-direction.p-grid.p-fluid {
  align-items: center;
}
.form.p-grid.nested-grid {
  margin: 15px;
}
.checkout-btn {
  padding-bottom: 20px;
}
.field-title {
  font-weight: bolder;
}
</style>
