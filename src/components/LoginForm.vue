<template>
  <TabMenu :model="items" @click.prevent="change"></TabMenu>

  <div v-if="register">
    <div class="p-fluid">
      <div class="p-field">
        <label for="name">姓名</label>
        <InputText id="name" type="text" v-model="personal_information.name" />
      </div>
      <div class="p-field">
        <label for="email">Email</label>
        <InputText
          id="email"
          type="text"
          v-model="personal_information.email"
        />
      </div>
      <div class="p-field">
        <label for="password">密碼</label>
        <InputText
          id="password"
          type="text"
          v-model="personal_information.password"
        />
      </div>
      <div class="p-field">
        <label for="sex">性別</label>
        <Dropdown
          id="sex"
          :options="gender"
          optionLabel="sex"
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
        <Dropdown
          id="way"
          :options="ways"
          optionLabel="way"
          v-model="personal_information.way"
        />
      </div>
      <div class="p-field">
        <label for="brewing">咖啡主要沖煮方式 ?</label>
        <Dropdown
          id="brewing"
          :options="brewing_methods"
          optionLabel="brewing"
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
      <div class="p-field">
        <Checkbox
          name="terms"
          value="agree"
          v-model="personal_information.terms"
        /><span>我同意<a href="#">網站服務條款及隱私政策</a></span>
      </div>

      <Button label="註冊" />
    </div>
  </div>

  <div v-if="login">
    <div class="p-fluid">
      <div class="p-field">
        <label for="email">Email</label>
        <InputText id="email" type="text" v-model="login_data.email" />
      </div>
      <div class="p-field">
        <label for="password">密碼</label>
        <InputText id="password" type="text" v-model="login_data.password" />
      </div>

      <Button label="登入" />
    </div>
    <a href="#">忘記密碼</a>
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
export default {
  data() {
    return {
      login: false,
      register: true,
      items: [{ label: "註冊會員" }, { label: "登入" }],
      gender: [{ sex: "男" }, { sex: "女" }, { sex: "不透露" }],
      ways: [
        { way: "FaceBook" },
        { way: "Google" },
        { way: "蝦皮" },
        { way: "親友" },
        { way: "百貨公司美食展" },
        { way: "其他" },
      ],
      brewing_methods: [
        { brewing: "手沖" },
        { brewing: "美式壺" },
        { brewing: "聰明濾杯" },
        { brewing: "全自動咖啡機" },
        { brewing: "半自動咖啡機" },
        { brewing: "其他" },
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
        terms: [],
      },
      login_data: {
        email: "",
        password: "",
      },
    };
  },
  components: { TabMenu, InputText, Dropdown, Calendar, Checkbox, Button },
  methods: {
    change(e) {
      if (e.target.innerText === "註冊會員") {
        this.register = true;
        this.login = false;
      } else {
        this.login = true;
        this.register = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.p-fluid {
  text-align: left;
  margin-top: 35px;
}
.p-button {
  margin-bottom: 10px;
}
</style>
