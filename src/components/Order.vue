<template>order</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      order: {},
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}/users/orders/${this.$route.params.id}`;
      const headers = { Authorization: Cookies.get("lemonToken") };

      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            this.order = { ...response.data };
            console.log(this.order);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            console.log(error.response);
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
            this.emitter.emit("changeCartBadgeCount", 0);
          }
        });
    },
    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
