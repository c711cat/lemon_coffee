<template>
  <div v-if="canceled" class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="cancel-color"> 已取消 </strong>
  </div>
  <div v-else class="p-col-12 p-lg-11 p-d-flex p-jc-start p-ai-center">
    <strong class="progress-color"> 備貨中 </strong>

    <i class="pi pi-arrow-right p-mx-1"></i>
    <Button
      @click="confirm_shipped"
      v-if="the_order['may_to_shipping?']"
      label="確認發貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong
      v-if="
        the_order['may_to_arrived?'] ||
        the_order['may_to_picked_up?'] ||
        the_order['may_finish?']
      "
      class="progress-color"
    >
      已發貨
    </strong>

    <i class="pi pi-arrow-right p-mx-1" :class="shipping_arrow_style"></i>

    <Button
      @click="confirm_arrived"
      v-if="the_order['may_to_arrived?']"
      label="確認到達"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-2 p-px-2
      "
      style="width: 100px"
    />
    <strong
      v-if="
        the_order['may_to_shipping?'] ||
        the_order['may_to_picked_up?'] ||
        the_order['may_finish?']
      "
      :class="arrived_style"
    >
      已到達
    </strong>

    <i class="pi pi-arrow-right p-mx-1" :class="arrived_arrow_style"></i>

    <Button
      @click="confirm_picked_up"
      v-if="the_order['may_to_picked_up?']"
      label="確認取貨"
      class="
        p-button-raised p-button-info p-button-sm p-lg-fixed p-col-3 p-px-2
      "
      style="width: 100px"
    />

    <strong
      v-if="
        the_order['may_to_shipping?'] ||
        the_order['may_to_arrived?'] ||
        the_order['may_finish?']
      "
      :class="picked_up_style"
    >
      已取貨
    </strong>
    <i
      v-if="the_order['may_finish?']"
      class="pi pi-check-circle success-color p-ml-1"
    >
    </i>
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
      default() {
        return;
      },
    },
  },

  inject: ["emitter"],
  methods: {
    confirm_shipped() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.the_order.id}/shipping_status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { shipping_status: "shipping" };
      axios
        .put(api, data, { headers })
        .then((response) => {
          this.the_order = response.data;
          this.emitter.emit("updateOrderAllStatus");
          this.emitter.emit("updateCancelBtnStatus", this.the_order.id);
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
    confirm_arrived() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.the_order.id}/shipping_status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { shipping_status: "arrived" };
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
    confirm_picked_up() {
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.the_order.id}/shipping_status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { shipping_status: "picked_up" };
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
    in_preparation() {
      return this.the_order.shipping_status === "in_preparation";
    },
    arrived_style() {
      if (
        this.the_order["may_to_picked_up?"] ||
        this.the_order["may_finish?"]
      ) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    shipping_arrow_style() {
      if (
        this.the_order["may_to_arrived?"] ||
        this.the_order["may_to_picked_up?"] ||
        this.the_order["may_finish?"]
      ) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    arrived_arrow_style() {
      if (
        this.the_order["may_to_picked_up?"] ||
        this.the_order["may_finish?"]
      ) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    picked_up_style() {
      if (this.the_order["may_finish?"]) {
        return "success-color";
      } else {
        return "disabled-color";
      }
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
