<template>
  <Loading v-if="isLoading" />
  <div v-else class="p-my-0 p-mx-auto p-p-4 wrap">
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  data() {
    return {
      items: [
        {
          label: "註冊會員",
          to: "/entrance/register",
        },
        {
          label: "登入",
          to: "/entrance/login",
        },
      ],
      isLoading: false,
    };
  },
  components: { Loading },
  inject: ["emitter"],
  created() {
    this.emitter.on("openEntranceLoadingProgressSpinner", () => {
      this.isLoading = true;
    });
    this.emitter.on("closeEntranceLoadingProgressSpinner", () => {
      this.isLoading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 600px;
}
</style>
