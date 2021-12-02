<template>
  <div class="p-fluid">
    <div class="p-field">
      <label for="email">Email</label>
      <InputText id="email" type="text" v-model="login_data.user.email" />
    </div>
    <div class="p-field">
      <label for="password">密碼</label>
      <InputText
        id="password"
        type="password"
        v-model="login_data.user.password"
      />
    </div>
    <Button label="登入" @click.prevent="login" />
  </div>
  <div class="p-field a-container">
    <a href="#">忘記密碼</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      login_data: {
        user: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}/users/sign_in`;
      axios.post(api, this.login_data).then((response) => {
        console.log(response);
        if (response.status === 201) {
          this.$router.push("/beanlist");
          this.$toast.add({
            severity: "success",
            summary: "登入成功",
            life: 5000,
          });
        }
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
</style>
