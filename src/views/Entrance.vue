<template>
  <div class="wrap">
    <TabMenu :model="items" />
    <div class="inner-wrap"><router-view /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "註冊會員",
          to: "/navbar/entrance/register",
        },
        {
          label: "登入",
          to: "/navbar/entrance/login",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.inner-wrap {
  margin-top: 35px;
}
</style>
