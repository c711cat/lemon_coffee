<template>
  <strong :style="color(orderStatus)">{{
    orderStatusText(orderStatus)
  }}</strong>
</template>

<script>
export default {
  props: {
    orderStatus: {
      type: String,
      require: true,
    },
  },
  methods: {
    orderStatusText(status) {
      switch (status) {
        case "pending":
          return "處理中";
        case "confirmed":
          return "已確認";
        case "finished":
          return "已完成";
        case "canceled":
          return "已取消";
      }
    },
    color(status) {
      switch (status) {
        case "pending":
        case "confirmed":
          return "color: #0288d1";
        case "finished":
          return "color: #689f38";
        case "canceled":
          return "color: d3282f";
      }
    },
  },
};
</script>
