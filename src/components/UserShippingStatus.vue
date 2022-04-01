<template>
  <div
    v-if="orderStatus === 'canceled'"
    class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center"
  >
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 備貨中 </strong>

    <i :class="inPreparationArrowStyle" class="pi pi-arrow-right p-mx-1"></i>

    <strong :class="inPreparationStyle"> 已發貨 </strong>

    <i :class="shippingArrowStyle" class="pi pi-arrow-right p-mx-1"></i>

    <strong :class="arrivedStyle"> 已到達 </strong>

    <i :class="arrivedArrowStyle" class="pi pi-arrow-right p-mx-1"></i>

    <strong :class="pickedUpStyle"> 已取貨 </strong>
    <i v-if="pickedUp" class="pi pi-check-circle success-color p-ml-1"> </i>
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
  computed: {
    inPreparation() {
      return this.shippingStatus === "in_preparation";
    },
    shipping() {
      return this.shippingStatus === "shipping";
    },
    arrived() {
      return this.shippingStatus === "arrived";
    },
    pickedUp() {
      return this.shippingStatus === "picked_up";
    },

    inPreparationArrowStyle() {
      if (this.shipping || this.arrived || this.pickedUp) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    inPreparationStyle() {
      if (this.shipping || this.arrived || this.pickedUp) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    arrivedStyle() {
      if (this.arrived || this.pickedUp) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    shippingArrowStyle() {
      if (this.arrived || this.pickedUp) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    arrivedArrowStyle() {
      if (this.pickedUp) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    pickedUpStyle() {
      if (this.pickedUp) {
        return "success-color";
      } else {
        return "disabled-color";
      }
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
