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
            @change="$emit('shipping-method', shipping_info.shipping_method)"
            v-model="shipping_info.shipping_method"
            :options="shipping_methods"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <div v-if="isHomeDelivery" class="p-col-4 p-lg-2 p-text-bold">
          收件地址
        </div>
        <div v-if="isHomeDelivery" class="p-col-8 p-lg-10">
          <InputText type="text" v-model="shipping_info.address" />
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">付款方式</div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="shipping_info.payment_method"
            :options="payment_methods"
            optionLabel="label"
            optionValue="value"
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
      shipping_methods: [{ label: "宅配", value: "home_delivery" }],
      payment_methods: [{ label: "貨到付款", value: "cash_on_delivery" }],
    };
  },
  methods: {
    getPersonalData() {
      if (localStorage.getItem("personalData")) {
        const personalData = JSON.parse(localStorage.getItem("personalData"));
        this.note = personalData.note;
        this.shipping_info = personalData.shipping_info;
        this.shippingMethod();
      }
    },
    toCheckout() {
      const buyer = { note: this.note, shipping_info: this.shipping_info };
      localStorage.setItem("personalData", JSON.stringify(buyer));
      this.$router.push("/checkout");
    },
    shippingMethod() {
      this.$emit("shipping-method", this.shipping_info.shipping_method);
    },
  },
  computed: {
    isHomeDelivery() {
      let homeDelivery = false;
      if (this.shipping_info.shipping_method === "home_delivery") {
        homeDelivery = true;
      }
      return homeDelivery;
    },
  },
  emits: ["shipping-method"],
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
