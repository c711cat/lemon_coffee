<template>
  <div class="p-fluid">
    <div class="p-field">
      <label for="name">姓名</label>
      <InputText id="name" type="text" v-model="personal_information.name" />
    </div>
    <div class="p-field">
      <label for="email">Email</label>
      <InputText id="email" type="text" v-model="personal_information.email" />
    </div>
    <div class="p-field">
      <label for="password">密碼</label>
      <InputText
        id="password"
        type="password"
        v-model="personal_information.password"
      />
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
    <div class="p-field">
      <Checkbox
        name="terms"
        value="agree"
        v-model="personal_information.terms"
      />
      <span class="span-body"
        >我同意<a href="#">網站服務條款及隱私政策</a>
      </span>
    </div>
    <Button label="註冊" />
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        terms: [],
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

.span-body {
  margin-left: 10px;
}
</style>
