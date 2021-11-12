<template>
  <div class="wrap">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  data() {
    return {};
  },
  components: { LoginForm },
};
</script>

<style lang="scss" scoped>
.wrap {
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 20px;
}
</style>
