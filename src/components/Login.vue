<template>
  <div class="p-fluid">
    <div class="p-field">
      <label for="email">Email</label>
      <InputText id="email" type="text" v-model="email" />
    </div>
    <div class="p-field">
      <label for="password">密碼</label>
      <InputText id="password" type="password" v-model="password" />
    </div>
    <Button label="登入" />
  </div>
  <div class="p-field a-container">
    <a href="#">忘記密碼</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.p-button {
  margin-bottom: 10px;
}

.a-container {
  text-align: center;
}
</style>
