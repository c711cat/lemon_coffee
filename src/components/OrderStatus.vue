<template>
  <div v-if="canceled" class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 處理中 </strong>

    <i class="pi pi-arrow-right p-mx-1"></i>

    <Button
      @click="confirm_order"
      v-if="pending"
      label="確認訂單"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />
    <strong v-if="confirmed" class="progress-color">已確認</strong>

    <i :class="finished_arrow_style" class="pi pi-arrow-right p-mx-1"> </i>

    <strong :class="finished_text_style">已完成</strong>
    <i v-if="finished" class="pi pi-check-circle p-ml-1 success-color"> </i>
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
    orderStatus: {
      type: String,
      default() {
        return;
      },
    },
  },

  inject: ["emitter"],
  methods: {
    confirm_order() {
      this.current_status = "confirmed";
      this.emitter.emit("update_order_status", this.current_status);
    },
  },
  computed: {
    pending() {
      let btn = true;
      if (this.orderStatus === "pending") {
        btn = true;
      } else {
        btn = false;
      }
      return btn;
    },
    confirmed() {
      if (this.orderStatus === "confirmed" || this.orderStatus === "finished") {
        return true;
      } else {
        return false;
      }
    },
    finished_arrow_style() {
      if (this.orderStatus === "finished") {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    finished_text_style() {
      if (this.orderStatus === "finished") {
        return "success-color";
      } else {
        return "disabled-color";
      }
    },
    finished() {
      if (this.orderStatus === "finished") {
        return true;
      } else {
        return false;
      }
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
