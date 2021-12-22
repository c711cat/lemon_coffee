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
import Cookies from "js-cookie";

export default {
  data() {
    return {
      login_data: {
        email: "",
        password: "",
      },
    };
  },
  inject: ["emitter"],
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}/users/sign_in`;
      axios
        .post(api, { user: this.login_data })
        .then((response) => {
          const token = response.headers.authorization;
          document.cookie = `lemonToken=${token}`;
          if (response.status === 201) {
            this.showSuccessToast("登入成功");
            this.getCart();
            history.back();
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
          }
        });
    },
    getCart() {
      const api = `${process.env.VUE_APP_API}/users/cart_items`;
      const headers = { Authorization: Cookies.get("lemonToken") };
      axios
        .get(api, { headers })
        .then((response) => {
          if (response.status === 200) {
            this.emitter.emit("cartBadge", response.data.length);
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.showErrorToast("請重新登入");
            this.$router.push("/entrance/login");
          }
        });
    },
    showErrorToast(text) {
      this.$toast.add({
        severity: "error",
        summary: text,
        life: 5000,
      });
    },
    showSuccessToast(text) {
      this.$toast.add({
        severity: "success",
        summary: text,
        life: 2000,
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
