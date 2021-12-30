<template>
  <div class="divider p-pl-3">
    <h4>收件人資料</h4>
  </div>

  <div class="p-grid nested-grid p-m-1 p-pl-2">
    <div class="p-col-12 p-lg-7">
      <div class="p-grid p-fluid p-ai-center">
        <div class="p-col-4 p-lg-2 p-text-bold">姓名</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.name" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">電話</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.phone_number" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">Email</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.email" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">送貨方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="buyer.shipping_method"
            :options="shipping_methods"
          />
        </div>

        <div
          v-if="buyer.shipping_method === '宅配'"
          class="p-col-4 p-lg-2 p-text-bold"
        >
          收件地址
        </div>
        <div v-if="buyer.shipping_method === '宅配'" class="p-col-8 p-lg-10">
          <InputText type="text" v-model="buyer.address" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">付款方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown v-model="buyer.payment_method" :options="payment_methods" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">備註</div>
        <div class="p-col-8 p-lg-10">
          <Textarea
            :autoResize="true"
            v-model="buyer.note"
            rows="5"
            cols="30"
          />
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
      buyer: {
        name: "",
        phone_number: "",
        email: "",
        shipping_method: "",
        payment_method: "",
        address: "",
        note: "",
      },
      shipping_methods: ["宅配"],
      payment_methods: ["貨到付款"],
    };
  },
  methods: {
    getPersonalData() {
      if (localStorage.getItem("personalData")) {
        this.buyer = JSON.parse(localStorage.getItem("personalData"));
      }
    },
    toCheckout() {
      localStorage.setItem("personalData", JSON.stringify(this.buyer));
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
