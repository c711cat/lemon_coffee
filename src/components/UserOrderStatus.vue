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
      :disabled="!the_order['may_finish?']"
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
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      the_order: {},
    };
  },
  props: {
    orderData: {
      type: Object,
    },
  },
  inject: ["emitter"],
  methods: {
    finishedOrder() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.the_order.id}/status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { status: "finished" };
      axios
        .put(api, data, { headers })
        .then((response) => {
          this.the_order = response.data;
          this.emitter.emit("updateUserOrderAllStatus");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove("lemonToken");
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
    pending() {
      return this.the_order.status === "pending";
    },
    confirmed() {
      return this.the_order.status === "confirmed";
    },
    pickedUp() {
      return this.the_order.shipping_status === "picked_up";
    },
    finished() {
      return this.the_order.status === "finished";
    },
    canceled() {
      return this.the_order.status === "canceled";
    },
    paid() {
      return this.the_order.payment_status === "paid";
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
  watch: {
    orderData() {
      this.the_order = { ...this.orderData };
    },
  },
  mounted() {
    this.the_order = { ...this.orderData };
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
