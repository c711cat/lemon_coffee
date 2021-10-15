<template>
  <div class="roast-wrap">
    <div class="level-title">{{ roastText }}</div>
    <div v-for="i in [1, 2, 3, 4, 5]" :key="i">
      <div class="round" :style="roundStyle(i)" />
    </div>
  </div>
</template>

<script>
const ROAST_DATA = {
  1: { TEXT: "淺焙", COLOR: "#e1d8d6" },
  2: { TEXT: "中淺焙", COLOR: "#c3b1ab" },
  3: { TEXT: "中焙", COLOR: "#a58a82" },
  4: { TEXT: "中深焙", COLOR: "#886358" },
  5: { TEXT: "深焙", COLOR: "#6b3c2e" },
};

export default {
  props: {
    roast: {
      type: Number,
      require: true,
    },
  },
  computed: {
    roastText() {
      return ROAST_DATA[this.roast].TEXT;
    },
    roastColor() {
      return ROAST_DATA[this.roast].COLOR;
    },
  },
  methods: {
    roundStyle(index) {
      if (index <= this.roast) {
        return { "background-color": this.roastColor };
      } else {
        return { border: `solid 1px ${this.roastColor}` };
      }
    },
  },
};
</script>

<style scoped lang="scss">
.level-title {
  width: 57px;
  text-align: left;
}

.roast-wrap {
  display: flex;
  align-items: center;
  min-width: 74%;
  padding-top: 10px;
}

.round {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 7px;
}
</style>
