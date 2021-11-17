<template>
  <div class="p-fluid">
    <div class="p-field">
      <label for="email">Email</label>
      <InputText id="email" type="text" v-model="login_data.email" />
    </div>
    <div class="p-field">
      <label for="password">密碼</label>
      <InputText id="password" type="password" v-model="login_data.password" />
    </div>
    <Button label="登入" />
  </div>
  <a class="a-body" href="#">忘記密碼</a>
</template>

<script>
export default {
  data() {
    return {
      login_data: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.p-fluid {
  text-align: left;
}

.p-button {
  margin-bottom: 10px;
}
</style>
