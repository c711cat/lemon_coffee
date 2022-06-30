<template>
  <div v-if="canceled" class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="cancel-color"> 已取消 </strong>
  </div>

  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 處理中 </strong>
    <i :class="pendingAndConfirmedArrowStyle" class="pi pi-arrow-right p-mx-1">
    </i>
    <strong :class="confirmedStyle">已確認</strong>
    <i :class="pendingAndConfirmedArrowStyle" class="pi pi-arrow-right p-mx-1">
    </i>
    <Button
      :disabled="!(pickedUp && paid)"
      @click="finishedOrder"
      v-if="confirmed"
      label="完成訂單"
      class="
        p-button-raised p-button-success p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="pending || finished" :class="finishedStyle">已完成</strong>
    <i v-if="finished" class="pi pi-check-circle p-ml-1 success-color"></i>
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
    paymentStatus: {
      type: String,
      default() {
        return;
      },
    },
  },
  inject: ["emitter"],
  methods: {
    finishedOrder() {
      
    },
  },
  computed: {
    pending() {
      return this.orderStatus === "pending";
    },
    confirmed() {
      return this.orderStatus === "confirmed";
    },
    pickedUp() {
      return this.shippingStatus === "picked_up";
    },
    finished() {
      return this.orderStatus === "finished";
    },
    canceled() {
      return this.orderStatus === "canceled";
    },
    paid() {
      return this.paymentStatus === "paid";
    },
    pendingAndConfirmedArrowStyle() {
      if (this.confirmed || this.finished) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    confirmedStyle() {
      if (this.confirmed || this.finished) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    finishedStyle() {
      if (this.finished) {
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
