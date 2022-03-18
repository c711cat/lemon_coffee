<template>
  <strong :style="color(shippingStatus)">{{
    shippingStatusText(shippingStatus)
  }}</strong>
</template>

<script>
export default {
  props: {
    shippingStatus: {
      type: String,
      require: true,
    },
  },
  methods: {
    shippingStatusText(shipping_status) {
      switch (shipping_status) {
        case "in_preparation":
          return "備貨中";
        case "shipping":
          return "已發貨";
        case "arrived":
          return "已到達";
        case "picked_up":
          return "已取貨";
      }
    },
    color(status) {
      switch (status) {
        case "in_preparation":
        case "shipping":
        case "arrived":
          return "color: #0288d1";
        case "picked_up":
          return "color: #689f38";
      }
    },
  },
};
</script>
