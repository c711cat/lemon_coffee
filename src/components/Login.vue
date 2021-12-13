<template>
  <div class="p-mx-auto p-mt-5 p-p-4 wrap">
    <div class="p-fluid">
      <div class="p-field">
        <label for="email">Email</label>
        <InputText id="email" type="text" v-model="login_data.email" />
      </div>
      <div class="p-field">
        <label for="password">密碼</label>
        <InputText
          id="password"
          type="password"
          v-model="login_data.password"
        />
      </div>
      <Button label="登入" @click.prevent="login" />
    </div>
    <div class="p-field a-container">
      <a href="#">忘記密碼</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login_data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}/users/sign_in`;
      axios
        .post(api, { user: this.login_data })
        .then((response) => {
          const token = response.headers.authorization;
          document.cookie = `lemonToken=${token}`;
          this.$toast.add({
            severity: "success",
            summary: "登入成功",
            life: 2000,
          });
          history.back();
        })
        .catch(() => {
          this.$toast.add({
            severity: "error",
            summary: "登入失敗",
            life: 2000,
          });
        });
    },
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

.wrap {
  max-width: 600px;
}
</style>
