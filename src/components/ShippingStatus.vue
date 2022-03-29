<template>
  <div v-if="canceled" class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 備貨中 </strong>

    <i class="pi pi-arrow-right p-mx-1"></i>
    <Button
      @click="confirm_shipped"
      v-if="shippingBtn"
      label="確認發貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="shipping" class="progress-color"> 已發貨 </strong>

    <i class="pi pi-arrow-right p-mx-1" :class="shipping_arrow_style"></i>

    <Button
      @click="confirm_arrived"
      v-if="arrivedBtn"
      label="確認到達"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="arrived" :class="arrived_style"> 已到達 </strong>

    <i class="pi pi-arrow-right p-mx-1" :class="arrived_arrow_style"></i>

    <Button
      @click="confirm_picked_up"
      v-if="pickedUpBtn"
      label="確認取貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />

    <strong v-if="picked_up" :class="picked_up_style"> 已取貨 </strong>
    <i v-if="picked_up_icon" class="pi pi-check-circle success-color p-ml-1">
    </i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_status: "in_preparation",
    };
  },
  props: {
    shippingStatus: {
      type: String,
      default() {
        return;
      },
    },
    orderStatus: {
      type: String,
      default() {
        return;
      },
    },
  },

  inject: ["emitter"],
  methods: {
    confirm_shipped() {
      this.current_status = "shipping";
      this.emitter.emit("update_shipping_status", this.current_status);
    },
    confirm_arrived() {
      this.current_status = "arrived";
      this.emitter.emit("update_shipping_status", this.current_status);
    },
    confirm_picked_up() {
      this.current_status = "picked_up";
      this.emitter.emit("update_shipping_status", this.current_status);
    },
  },
  computed: {
    shippingBtn() {
      return this.shippingStatus === "in_preparation";
    },
    shipping() {
      return (
        this.current_status === "shipping" ||
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      );
    },
    arrived() {
      return (
        this.current_status === "in_preparation" ||
        this.current_status === "arrived" ||
        this.picked_up
      );
    },
    arrivedBtn() {
      return this.current_status === "shipping";
    },
    pickedUpBtn() {
      return this.current_status === "arrived";
    },
    arrived_style() {
      if (
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      ) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    shipping_arrow_style() {
      if (
        this.current_status === "shipping" ||
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      ) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    arrived_arrow_style() {
      if (
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      ) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    picked_up() {
      return (
        this.current_status === "in_preparation" ||
        this.current_status === "shipping" ||
        this.current_status === "picked_up"
      );
    },
    picked_up_style() {
      if (this.current_status === "picked_up") {
        return "success-color";
      } else {
        return "disabled-color";
      }
    },
    picked_up_icon() {
      return this.current_status === "picked_up";
    },
    canceled() {
      return this.orderStatus === "canceled";
    },
  },
};
</script>

<style lang="scss" scoped>
.disabled-color {
  color: #ccc;
}

.progress-color {
  color: #0288d1;
}

.success-color {
  color: #689f38;
}

.cancel-color {
  color: #d32f2f;
}

.arrow-color {
  color: none;
}
</style>
