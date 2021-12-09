<template>
  <div class="p-my-0 p-mx-auto p-p-4 wrap">
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>

<script>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 600px;
}
</style>
