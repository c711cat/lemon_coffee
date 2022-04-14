<template>
  <div class="divider p-pl-3">
    <h4>收件人資料</h4>
  </div>

  <form
    @submit.prevent="toCheckout(!v$.$invalid)"
    class="p-grid nested-grid p-m-1 p-pl-2"
  >
    <div class="p-col-12 p-lg-7">
      <div class="p-grid p-fluid p-ai-center">
        <div
          class="p-col-4 p-lg-2 p-text-bold"
          :class="{
            'p-error': v$.shipping_info.name.$invalid && submitted,
          }"
        >
          姓名
        </div>
        <div class="p-col-8 p-lg-10">
          <InputText
            type="text"
            v-model="v$.shipping_info.name.$model"
            :class="{
              'p-invalid': v$.shipping_info.name.$invalid && submitted,
            }"
          />
          <small
            v-if="
              (v$.shipping_info.name.$invalid && submitted) ||
              v$.shipping_info.name.$pending.$response
            "
            class="p-error"
            >{{
              v$.shipping_info.name.required.$message.replace("Value", "姓名")
            }}
          </small>
        </div>

        <div
          class="p-col-4 p-lg-2 p-text-bold"
          :class="{
            'p-error': v$.shipping_info.name.$invalid && submitted,
          }"
        >
          電話
        </div>
        <div class="p-col-8 p-lg-10">
          <InputText
            type="text"
            v-model="v$.shipping_info.phone_number.$model"
            :class="{
              'p-invalid': v$.shipping_info.phone_number.$invalid && submitted,
            }"
          />
          <small
            v-if="
              (v$.shipping_info.phone_number.$invalid && submitted) ||
              v$.shipping_info.phone_number.$pending.$response
            "
            class="p-error"
            >{{
              v$.shipping_info.phone_number.required.$message.replace(
                "Value",
                "電話"
              )
            }}
          </small>
        </div>

        <div class="p-col-4 p-lg-2 p-text-bold">Email</div>
        <div class="p-col-8 p-lg-10">
          <InputText type="text" v-model="shipping_info.email" />
        </div>

        <div
          class="p-col-4 p-lg-2 p-text-bold"
          :class="{
            'p-error': v$.shipping_info.shipping_method.$invalid && submitted,
          }"
        >
          送貨方式
        </div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            @change="emitShippingMethod"
            v-model="v$.shipping_info.shipping_method.$model"
            :options="shipping_methods"
            optionLabel="label"
            optionValue="value"
            :class="{
              'p-invalid':
                v$.shipping_info.shipping_method.$invalid && submitted,
            }"
          />
          <small
            v-if="
              (v$.shipping_info.shipping_method.$invalid && submitted) ||
              v$.shipping_info.shipping_method.$pending.$response
            "
            class="p-error"
            >{{
              v$.shipping_info.shipping_method.required.$message.replace(
                "Value",
                "送貨方式"
              )
            }}
          </small>
        </div>

        <div
          v-if="isHomeDelivery"
          class="p-col-4 p-lg-2 p-text-bold"
          :class="{
            'p-error': v$.shipping_info.address.$invalid && submitted,
          }"
        >
          收件地址
        </div>
        <div v-if="isHomeDelivery" class="p-col-8 p-lg-10">
          <InputText
            type="text"
            v-model="v$.shipping_info.address.$model"
            :class="{
              'p-invalid': v$.shipping_info.address.$invalid && submitted,
            }"
          />
          <small
            v-if="
              (v$.shipping_info.address.$invalid && submitted) ||
              v$.shipping_info.address.$pending.$response
            "
            class="p-error"
            >{{
              v$.shipping_info.address.required.$message.replace(
                "Value",
                "收件地址"
              )
            }}
          </small>
        </div>

        <div
          class="p-col-4 p-lg-2 p-text-bold"
          :class="{
            'p-error': v$.shipping_info.payment_method.$invalid && submitted,
          }"
        >
          付款方式
        </div>
        <div class="p-col-8 p-lg-10">
          <Dropdown
            v-model="v$.shipping_info.payment_method.$model"
            :options="payment_methods"
            optionLabel="label"
            optionValue="value"
            :class="{
              'p-invalid':
                v$.shipping_info.payment_method.$invalid && submitted,
            }"
          />
          <small
            v-if="
              (v$.shipping_info.payment_method.$invalid && submitted) ||
              v$.shipping_info.payment_method.$pending.$response
            "
            class="p-error"
            >{{
              v$.shipping_info.payment_method.required.$message.replace(
                "Value",
                "付款方式"
              )
            }}
          </small>
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
        type="submit"
        class="p-button-lg p-button-info p-button-raised"
        label="去買單"
      >
      </Button>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@/utils/i18n-validators.js";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      submitted: false,
      note: "",
      shipping_info: {
        name: "",
        phone_number: "",
        address: "",
        email: "",
        shipping_method: "",
        payment_method: "",
      },
      shipping_methods: [{ label: "宅配", value: "home_delivery" }],
      payment_methods: [{ label: "貨到付款", value: "cash_on_delivery" }],
    };
  },
  validations() {
    return {
      shipping_info: {
        name: { required },
        phone_number: { required },
        address: { required },
        shipping_method: { required },
        payment_method: { required },
      },
    };
  },
  inject: ["emitter"],
  methods: {
    getPersonalData() {
      if (localStorage.getItem("personalData")) {
        const personalData = JSON.parse(localStorage.getItem("personalData"));
        this.note = personalData.note;
        this.shipping_info = personalData.shipping_info;
        this.emitShippingMethod();
      }
    },
    toCheckout(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }

      const buyer = { note: this.note, shipping_info: this.shipping_info };
      localStorage.setItem("personalData", JSON.stringify(buyer));
      this.$router.push("/checkout");
    },
    emitShippingMethod() {
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
