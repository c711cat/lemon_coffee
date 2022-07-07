<template>
  <div v-if="canceled" class="p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center">
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-10 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 處理中 </strong>

    <i class="pi pi-arrow-right p-mx-1"></i>

    <Button
      @click.prevent="confirm_order"
      v-if="the_order['may_confirm?']"
      label="確認訂單"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />
    <strong v-else class="progress-color"> 已確認 </strong>

    <i :class="finished_arrow_style" class="pi pi-arrow-right p-mx-1"> </i>

    <strong :class="finished_text_style">已完成</strong>
    <i v-if="finished" class="pi pi-check-circle p-ml-1 success-color"> </i>
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
      typeof: Object,
    },
  },
  inject: ["emitter"],
  methods: {
    confirm_order() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.the_order.id}/status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { status: "confirmed" };
      axios
        .put(api, data, { headers })
        .then((response) => {
          this.the_order = response.data;
          this.emitter.emit("updateOrderAllStatus");
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
    finished_arrow_style() {
      if (this.finished) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    finished_text_style() {
      if (this.finished) {
        return "success-color";
      } else {
        return "disabled-color";
      }
    },
    finished() {
      return this.the_order.status === "finished";
    },
    canceled() {
      return this.the_order.status === "canceled";
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
