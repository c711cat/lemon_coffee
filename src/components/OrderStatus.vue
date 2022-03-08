<template>
  <strong :style="pending"> 處理中 </strong>

  <i class="pi pi-arrow-right p-mx-1"></i>

  <Button
    @click="confirm_order"
    v-if="confirm_order_btn"
    label="確認訂單"
    class="p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2"
    style="width: 100px"
  />
  <strong v-if="!confirm_order_btn" :style="confirmed">已確認</strong>

  <i :style="confirmed_arrow" class="pi pi-arrow-right p-mx-1"></i>

  <strong :style="finished">已完成</strong>
  <i
    v-if="current_status === 'finished'"
    class="pi pi-check-circle p-ml-1 success-color"
  >
  </i>
</template>

<script>
export default {
  data() {
    return {
      current_status: "",
      pending: "color: #0288d1",
      confirm_order_btn: true,
      confirmed: "color: #0288d1",
      confirmed_arrow: "color: #ccc",
      finished: "color: #ccc",
    };
  },
  methods: {
    confirm_order() {
      this.current_status = "confirmed";
      this.confirm_order_btn = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.success-color {
  color: #689f38;
}
</style>
