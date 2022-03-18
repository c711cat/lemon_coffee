<template>
  <strong :style="color(paymentStatus)">{{
    paymentStatusText(paymentStatus)
  }}</strong>
</template>

<script>
export default {
  props: {
    paymentStatus: {
      type: String,
      require: true,
    },
  },
  methods: {
    paymentStatusText(payment_status) {
      switch (payment_status) {
        case "outstanding":
        case "unpaid":
          return "未付款";
        case "paid":
          return "已付款";
        case "failed":
          return "付款失敗";
      }
    },
    color(status) {
      switch (status) {
        case "outstanding":
        case "unpaid":
          return "color: #0288d1";
        case "paid":
          return "color: #689f38";
        case "failed":
          return "color: d3282f";
      }
    },
  },
};
</script>
