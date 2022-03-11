<template>
  <div
    v-if="current_status !== 'canceled'"
    class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center"
  >
    <strong :style="in_preparation"> 備貨中 </strong>

    <i class="pi pi-arrow-right p-mx-1"></i>
    <Button
      @click="confirm_shipped"
      v-if="shipping_btn"
      label="確認發貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="!shipping_btn" :style="shipped"> 已發貨 </strong>

    <i class="pi pi-arrow-right p-mx-1" :style="shipping_arrow"></i>

    <Button
      @click="confirm_arrived"
      v-if="arrived_btn"
      label="確認到達"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="!arrived_btn" :style="arrived"> 已到達 </strong>

    <i class="pi pi-arrow-right p-mx-1" :style="arrived_arrow"></i>

    <Button
      @click="confirm_picked_up"
      v-if="picked_up_btn"
      label="確認取貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />

    <strong v-if="!picked_up_btn" :style="picked_up"> 已取貨 </strong>
    <i
      v-if="current_status === 'picked_up'"
      class="pi pi-check-circle success-color p-ml-1"
    >
    </i>
  </div>
  <div
    v-if="current_status === 'canceled'"
    class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center"
  >
    <strong class="cancel-color"> 已取消 </strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_status: "",
      in_preparation: "color: #0288d1",
      shipping_btn: true,
      shipped: "color: #0288d1",
      shipping_arrow: "color: #ccc",
      arrived: "color: #ccc",
      arrived_btn: false,
      arrived_arrow: "color: #ccc",
      picked_up: "color: #ccc",
      picked_up_btn: false,
    };
  },
  props: {
    orderStatus: {
      type: String,
      default() {
        return;
      },
    },
  },
  watch: {
    orderStatus() {
      this.current_status = this.orderStatus;
    },
  },
  inject: ["emitter"],
  methods: {
    confirm_shipped() {
      this.current_status = "shipping";
      this.shipping_btn = false;
      this.arrived_btn = true;
      this.shipping_arrow = "color: none";
      this.emitter.emit("update_shipping_status", this.current_status);
    },
    confirm_arrived() {
      this.current_status = "arrived";
      this.shipping_btn = false;
      this.arrived_btn = false;
      this.picked_up_btn = true;
      this.shipping_arrow = "color: none";
      this.arrived_arrow = "color: none";
      this.arrived = "color: #0288d1";
      this.emitter.emit("update_shipping_status", this.current_status);
    },
    confirm_picked_up() {
      this.current_status = "picked_up";
      this.shipping_btn = false;
      this.arrived_btn = false;
      this.picked_up_btn = false;
      this.shipping_arrow = "color: none";
      this.arrived_arrow = "color: none";
      this.arrived = "color: #0288d1";
      this.picked_up = "color: #689f38";
      this.emitter.emit("update_shipping_status", this.current_status);
    },
  },
};
</script>

<style lang="scss" scoped>
.success-color {
  color: #689f38;
}

.cancel-color {
  color: #d32f2f;
}
</style>
