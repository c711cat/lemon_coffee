<template>
  <div
    v-if="current_status === 'canceled'"
    class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center"
  >
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
    <strong v-if="!shippingBtn" class="progress-color"> 已發貨 </strong>

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
    <strong v-if="!arrivedBtn" :class="arrived_style"> 已到達 </strong>

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

    <strong v-if="!pickedUpBtn" :class="picked_up_style"> 已取貨 </strong>
    <i
      v-if="current_status === 'picked_up'"
      class="pi pi-check-circle success-color p-ml-1"
    >
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
      let btn = true;
      if (this.shippingStatus === "in_preparation") {
        btn = true;
      } else {
        btn = false;
      }
      return btn;
    },
    arrivedBtn() {
      let btn = false;
      if (this.current_status === "shipping") {
        btn = true;
      } else {
        btn = false;
      }
      return btn;
    },
    pickedUpBtn() {
      let btn = false;
      if (this.current_status === "arrived") {
        btn = true;
      } else {
        btn = false;
      }
      return btn;
    },
    arrived_style() {
      let color = "";
      if (
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      ) {
        color = "progress-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    shipping_arrow_style() {
      let color = "";
      if (
        this.current_status === "shipping" ||
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      ) {
        color = "arrow-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    arrived_arrow_style() {
      let color = "";
      if (
        this.current_status === "arrived" ||
        this.current_status === "picked_up"
      ) {
        color = "arrow-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    picked_up_style() {
      let color = "";
      if (this.current_status === "picked_up") {
        color = "success-color";
      } else {
        color = "disabled-color";
      }
      return color;
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
