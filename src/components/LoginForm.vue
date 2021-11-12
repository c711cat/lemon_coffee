<template>
  <div class="ui big attached tabular menu">
    <a class="active item"> 註冊會員 </a>
    <a class="item"> 登入 </a>
  </div>
  <div class="ui big bottom attached segment">
    <h3>註冊 E-mail</h3>
    <form class="ui big form">
      <div class="field">
        <input type="text" name="name" placeholder="請輸入姓名" />
      </div>
      <div class="field">
        <input type="text" name="E-mail" placeholder="請輸入 E-mail" />
      </div>
      <div class="field">
        <input type="text" name="pass-word" placeholder="請設定密碼" />
      </div>

      <div class="field" @click="choose">
        <div class="ui dropdown selection">
          <input type="hidden" name="gender" />
          <i class="dropdown icon"></i>
          <div class="default text">性別</div>
          <div class="menu">
            <div
              class="item"
              :value="index"
              v-for="(sex, index) in gender"
              :key="sex"
            >
              {{ sex }}
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <input type="date" name="date" placeholder="請輸入生日" />
      </div>

      <div class="field" @click="choose">
        <div class="ui dropdown selection">
          <input type="hidden" />
          <i class="dropdown icon"></i>
          <div class="default text">哪裡認識 Lemon Coffee ?</div>
          <div class="menu">
            <div
              class="item"
              :value="index"
              v-for="(way, index) in ways"
              :key="way"
            >
              {{ way }}
            </div>
          </div>
        </div>
      </div>

      <div class="field" @click="choose">
        <div class="ui dropdown selection">
          <input type="hidden" />
          <i class="dropdown icon"></i>
          <div class="default text">咖啡主要沖煮方式 ?</div>
          <div class="menu">
            <div
              class="item"
              :value="index"
              v-for="(brew, index) in brewing_methods"
              :key="brew"
            >
              {{ brew }}
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <input type="text" name="phone" placeholder="推薦人手機號碼" />
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" />
          <label>我同意<a href="#">網站服務條款及隱私政策</a></label>
        </div>
      </div>
      <button class="ui button blue big" type="submit">註冊</button>
    </form>
  </div>
  <div v-if="false" class="ui big bottom attached segment">
    <h3>登入 E-mail</h3>
    <form class="ui big form">
      <div class="field">
        <input type="text" name="E-mail" placeholder="請輸入 E-mail" />
      </div>
      <div class="field">
        <input type="text" name="pass-word" placeholder="請輸入密碼" />
      </div>
      <button class="ui button blue big" type="submit">登入</button>
      <div class=""><a href="#">忘記密碼</a></div>
    </form>
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
    };
  },
  methods: {
    change() {},
    choose() {
      jQuery(".ui.dropdown").dropdown("set selected");
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  letter-spacing: 1px;
}
.ui.button.big {
  margin-bottom: 15px;
  width: fill-available;
}
.ui.checkbox {
  display: flex;
}
</style>
