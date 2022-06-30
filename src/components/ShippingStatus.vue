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
    <i v-if="picked_up" class="pi pi-check-circle success-color p-ml-1"> </i>
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
      const api = `${process.env.VUE_APP_API}/admin/orders/${this.the_order.id}/shipping_status`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      const data = { shipping_status: "shipping" };
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
      this.emitter.emit("update_shipping_status", "picked_up");
    },
  },
  computed: {
    in_preparation() {
      return this.the_order.shipping_status === "in_preparation";
    },
    shipping() {
      return this.the_order.shipping_status === "shipping";
    },
    arrived() {
      return this.the_order.shipping_status === "arrived";
    },
    picked_up() {
      return this.the_order.shipping_status === "picked_up";
    },
    arrived_style() {
      if (this.arrived || this.picked_up) {
        return "progress-color";
      } else {
        return "disabled-color";
      }
    },
    shipping_arrow_style() {
      if (this.shipping || this.arrived || this.picked_up) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    arrived_arrow_style() {
      if (this.arrived || this.picked_up) {
        return "arrow-color";
      } else {
        return "disabled-color";
      }
    },
    picked_up_style() {
      if (this.picked_up) {
        return "success-color";
      } else {
        return "disabled-color";
      }
    },
    canceled() {
      return this.orderStatus === "canceled";
    },
  },
  watch: {
    orderData() {
      this.the_order = { ...this.orderData };
      console.log(this.the_order);
    },
  },
  mounted() {
    this.the_order = { ...this.orderData };
    console.log(this.the_order);
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
