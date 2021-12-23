<template>
  <div class="divider p-pl-3">
    <h4>收件人資料</h4>
  </div>

  <div class="p-grid nested-grid p-m-1 p-pl-2">
    <div class="p-col-12 p-lg-7">
      <div class="p-grid p-fluid p-ai-center">
        <div class="p-col-4 p-lg-2 p-text-bold">姓名</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.required.name" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">電話</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.required.phone_number" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">Email</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.required.email" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">送貨方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="buyer.required.delivery_method"
            :options="delivery_methods"
          />
        </div>

        <div
          v-if="buyer.required.delivery_method === '宅配'"
          class="p-col-4 p-lg-2 p-text-bold"
        >
          收件地址
        </div>
        <div
          v-if="buyer.required.delivery_method === '宅配'"
          class="p-col-8 p-lg-10"
        >
          <InputText type="text" v-model="buyer.required.address" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">付款方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="buyer.required.payment_method"
            :options="payment_methods"
          />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">備註</div>
        <div class="p-col-8 p-lg-10">
          <Textarea
            :autoResize="true"
            v-model="buyer.message"
            rows="5"
            cols="30"
          />
        </div>
      </div>
    </div>
    <router-link
      to="/checkout"
      class="p-grid p-ai-end p-jc-end p-col-12 p-lg-5 p-pb-3 p-m-0 link-content"
    >
      <Button
        class="p-button-lg p-button-info p-button-raised"
        label="前往結帳"
      ></Button>
    </router-link>
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
          address: "",
        },
        message: "",
      },
      delivery_methods: ["宅配"],
      payment_methods: ["貨到付款"],
    };
  },
};
</script>

<style lang="scss" scoped>
.divider {
  border-bottom: 1px solid rgb(235, 233, 233);
}

.link-content {
  text-decoration: none;
}
</style>
