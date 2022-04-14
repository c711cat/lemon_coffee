<template>
  <form @submit.prevent="register(!v$.$invalid)" class="p-fluid p-mb-4">
    <div class="p-field p-mt-6">
      <label
        for="name"
        :class="{
          'p-error': v$.personal_information.name.$invalid && submitted,
        }"
        >姓名
      </label>
      <InputText
        id="name"
        type="text"
        v-model="v$.personal_information.name.$model"
        :class="{
          'p-invalid': v$.personal_information.name.$invalid && submitted,
        }"
      />
      <small
        v-if="
          (v$.personal_information.name.$invalid && submitted) ||
          v$.personal_information.name.$pending.$response
        "
        class="p-error"
        >{{
          v$.personal_information.name.required.$message.replace(
            "Value",
            "姓名"
          )
        }}
      </small>
    </div>

    <div class="p-field">
      <label
        for="email"
        :class="{
          'p-error': v$.personal_information.email.$invalid && submitted,
        }"
        >Email
      </label>
      <InputText
        id="email"
        type="text"
        v-model="v$.personal_information.email.$model"
        :class="{
          'p-invalid': v$.personal_information.email.$invalid && submitted,
        }"
      />
      <small
        v-if="
          (v$.personal_information.email.$invalid && submitted) ||
          v$.personal_information.email.$pending.$response
        "
        class="p-error"
        >{{
          v$.personal_information.email.required.$message.replace(
            "Value",
            "電子信箱"
          )
        }}
      </small>
    </div>

    <div class="p-field">
      <label
        for="password"
        :class="{
          'p-error': v$.personal_information.password.$invalid && submitted,
        }"
        >密碼
      </label>
      <InputText
        id="password"
        type="password"
        v-model="v$.personal_information.password.$model"
        placeholder="6 碼以上英數皆可，注意英文大小寫"
        :class="{
          'p-invalid': v$.personal_information.password.$invalid && submitted,
        }"
      />
      <small
        v-if="
          (v$.personal_information.password.$invalid && submitted) ||
          v$.personal_information.password.$pending.$response
        "
        class="p-error"
        >{{
          v$.personal_information.password.minLength.$message.replace(
            "Password",
            "密碼"
          )
        }}
      </small>
    </div>
    <div class="p-field">
      <label for="sex">性別</label>
      <Dropdown
        id="sex"
        :options="gender"
        v-model="personal_information.gender"
      />
    </div>
    <div class="p-field">
      <label for="birthday">生日</label>
      <Calendar
        dateFormat="yy.mm.dd"
        id="birthday"
        :showIcon="true"
        v-model="personal_information.birthday"
      />
    </div>
    <div class="p-field">
      <label for="way">哪裡認識 Lemon Coffee ?</label>
      <Dropdown id="way" :options="ways" v-model="personal_information.way" />
    </div>
    <div class="p-field">
      <label for="brewing">咖啡主要沖煮方式 ?</label>
      <Dropdown
        id="brewing"
        :options="brewing_methods"
        v-model="personal_information.brewing_method"
      />
    </div>
    <div class="p-field">
      <label for="referrer">推薦人手機號碼</label>
      <InputText
        id="referrer"
        type="text"
        v-model="personal_information.referrer_cellphone"
      />
    </div>
    <Button type="submit" label="註冊" />
  </form>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@/utils/i18n-validators.js";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      submitted: false,
      gender: ["男", "女", "不透露"],
      ways: ["FaceBook", "Google", "蝦皮", "親友", "百貨公司美食展", "其他"],
      brewing_methods: [
        "手沖",
        "美式壺",
        "聰明濾杯",
        "全自動咖啡機",
        "半自動咖啡機",
        "其他",
      ],
      personal_information: {
        name: "",
        email: "",
        password: "",
        gender: "",
        birthday: "",
        way: "",
        brewing_method: "",
        referrer_cellphone: "",
      },
    };
  },
  validations() {
    return {
      personal_information: {
        name: { required },
        email: { required },
        password: { required, minLength: minLength(6) },
      },
    };
  },
  inject: ["emitter"],
  methods: {
    register(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }

      const api = `${process.env.VUE_APP_API}/users`;
      this.emitter.emit("openEntranceLoadingProgressSpinner");
      axios
        .post(api, {
          user: {
            email: this.personal_information.email,
            password: this.personal_information.password,
          },
        })
        .then(() => {
          this.$toast.add({
            severity: "success",
            summary: "註冊成功",
            life: 2000,
          });
          this.$router.push("/entrance/login");
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.$toast.add({
              severity: "error",
              summary: "註冊失敗",
              detail: "此 email 已經被使用",
              life: 3000,
            });
          } else {
            this.$toast.add({
              severity: "error",
              summary: "註冊失敗",
              life: 2000,
            });
          }
        })
        .finally(() => {
          this.emitter.emit("closeEntranceLoadingProgressSpinner");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.p-button {
  margin-bottom: 10px;
}

.span-body {
  margin-left: 10px;
}
</style>
