<template>
  <div v-if="canceled" class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 備貨中 </strong>

    <i class="pi pi-arrow-right p-mx-1"></i>
    <Button
      @click="confirm_shipped"
      v-if="in_preparation"
      label="確認發貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="shipping || arrived || picked_up" class="progress-color">
      已發貨
    </strong>

    <i class="pi pi-arrow-right p-mx-1" :class="shipping_arrow_style"></i>

    <Button
      @click="confirm_arrived"
      v-if="shipping"
      label="確認到達"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong
      v-if="in_preparation || arrived || picked_up"
      :class="arrived_style"
    >
      已到達
    </strong>

    <i class="pi pi-arrow-right p-mx-1" :class="arrived_arrow_style"></i>

    <Button
      @click="confirm_picked_up"
      v-if="arrived"
      label="確認取貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />

    <strong
      v-if="in_preparation || shipping || picked_up"
      :class="picked_up_style"
    >
      已取貨
    </strong>
    <i v-if="picked_up_icon" class="pi pi-check-circle success-color p-ml-1">
    </i>
  </div>
</template>

<script>
export default {
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
      this.emitter.emit("update_shipping_status", "shipping");
    },
    confirm_arrived() {
      this.emitter.emit("update_shipping_status", "arrived");
    },
    confirm_picked_up() {
      this.emitter.emit("update_shipping_status", "picked_up");
    },
  },
  computed: {
    in_preparation() {
      return this.shippingStatus === "in_preparation";
    },
    shipping() {
      return this.shippingStatus === "shipping";
    },
    arrived() {
      return this.shippingStatus === "arrived";
    },
    
    arrived_style() {
      if (
        this.shippingStatus === "arrived" ||
        this.shippingStatus === "picked_up"
      ) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    shipping_arrow_style() {
      if (
        this.shippingStatus === "shipping" ||
        this.shippingStatus === "arrived" ||
        this.shippingStatus === "picked_up"
      ) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    arrived_arrow_style() {
      if (
        this.shippingStatus === "arrived" ||
        this.shippingStatus === "picked_up"
      ) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    picked_up() {
      return this.shippingStatus === "picked_up";
    },
    picked_up_style() {
      if (this.shippingStatus === "picked_up") {
        return "success-color";
      } else {
        return "disabled-color";
      }
    },
    picked_up_icon() {
      return this.shippingStatus === "picked_up";
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
