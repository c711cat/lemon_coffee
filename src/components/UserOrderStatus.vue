<template>
  <div
    v-if="orderStatus === 'canceled'"
    class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center"
  >
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 處理中 </strong>

    <i :class="pending_arrow_style" class="pi pi-arrow-right p-mx-1"></i>

    <strong :class="confirmed_style">已確認</strong>

    <i :class="confirmed_arrow_style" class="pi pi-arrow-right p-mx-1"></i>
    <Button
      :disabled="finishOrderBtn"
      @click="finished_order"
      v-if="finishedOrderBtn"
      label="完成訂單"
      class="
        p-button-raised p-button-success p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="!finishedOrderBtn" :class="finished_style">已完成</strong>
    <i
      v-if="current_status === 'finished'"
      class="pi pi-check-circle p-ml-1 success-color"
    >
    </i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_status: "pending",
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
    finished_order() {
      this.current_status = "finished";
      this.emitter.emit("update_order_status", this.current_status);
    },
  },
  computed: {
    finishedOrderBtn() {
      let btn = true;
      if (this.current_status === "confirmed") {
        btn = true;
      } else {
        btn = false;
      }
      return btn;
    },
    pending_arrow_style() {
      let color = "";
      if (
        this.current_status === "confirmed" ||
        this.current_status === "finished"
      ) {
        color = "arrow-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    confirmed_style() {
      let color = "";
      if (
        this.current_status === "confirmed" ||
        this.current_status === "finished"
      ) {
        color = "progress-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    confirmed_arrow_style() {
      let color = "";
      if (
        this.current_status === "confirmed" ||
        this.current_status === "finished"
      ) {
        color = "arrow-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    finished_style() {
      let color = "";
      if (this.current_status === "finished") {
        color = "success-color";
      } else {
        color = "disabled-color";
      }
      return color;
    },
    finishOrderBtn() {
      let btn = true;
      if (this.shippingStatus === "picked_up") {
        btn = false;
      } else {
        btn = true;
      }
      return btn;
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
