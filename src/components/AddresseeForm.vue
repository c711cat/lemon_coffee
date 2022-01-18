<template>
  <div class="divider p-pl-3">
    <h4>收件人資料</h4>
  </div>

  <div class="p-grid nested-grid p-m-1 p-pl-2">
    <div class="p-col-12 p-lg-7">
      <div class="p-grid p-fluid p-ai-center">
        <div class="p-col-4 p-lg-2 p-text-bold">姓名</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="shipping_info.name" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">電話</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="shipping_info.phone_number" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">Email</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="shipping_info.email" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">送貨方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="shipping_info.shipping_method"
            :options="shipping_methods"
          />
        </div>

        <div
          v-if="shipping_info.shipping_method === '宅配'"
          class="p-col-4 p-lg-2 p-text-bold"
        >
          收件地址
        </div>
        <div
          v-if="shipping_info.shipping_method === '宅配'"
          class="p-col-8 p-lg-10"
        >
          <InputText type="text" v-model="shipping_info.address" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">付款方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="shipping_info.payment_method"
            :options="payment_methods"
          />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">備註</div>
        <div class="p-col-8 p-lg-10">
          <Textarea :autoResize="true" v-model="note" rows="5" cols="30" />
        </div>
      </div>
    </div>
    <div
      class="p-grid p-ai-end p-jc-end p-col-12 p-lg-5 p-pb-3 p-m-0 link-content"
    >
      <Button
        @click.prevent="toCheckout"
        class="p-button-lg p-button-info p-button-raised"
        label="去買單"
      >
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: "",
      shipping_info: {
        name: "",
        phone_number: "",
        address: "",
        email: "",
        shipping_method: "",
      },
      shipping_methods: ["宅配"],
      payment_methods: ["貨到付款"],
    };
  },
  methods: {
    getPersonalData() {
      if (localStorage.getItem("personalData")) {
        this.note = JSON.parse(localStorage.getItem("personalData")).note;
        this.shipping_info = JSON.parse(
          localStorage.getItem("personalData")
        ).shipping_info;
      }
    },
    toCheckout() {
      const buyer = { note: this.note, shipping_info: this.shipping_info };
      if (buyer.shipping_info.shipping_method === "宅配") {
        buyer.shipping_info.shipping_method = "home_delivery";
      }
      if (buyer.shipping_info.payment_method === "貨到付款") {
        buyer.shipping_info.payment_method = "cash_on_delivery";
      }
      localStorage.setItem("personalData", JSON.stringify(buyer));
      this.$router.push("/checkout");
    },
  },
  created() {
    this.getPersonalData();
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
