<template>
  <Button
    :class="isTop ? 'goTopAfter' : ''"
    @click.prevent="goTop"
    icon="pi pi-arrow-up"
    class="p-button-rounded p-button-warning goTop"
  />
</template>

<script>
export default {
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    handScroll() {
      if (window.pageYOffset > 200) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    goTop() {
      document.documentElement.scrollTop = 0;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handScroll);
  },
};
</script>

<style lang="scss" scoped>
.goTop {
  position: fixed;
  z-index: 10;
  right: 40px;
  bottom: -40px;
  transition: 0.5s ease-in-out;
}

.goTopAfter {
  transition: 0.8s ease-in-out;
  bottom: 40px;
}
</style>
