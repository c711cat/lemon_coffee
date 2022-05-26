import { createI18n } from "vue-i18n";

const messages = {
  "zh-TW": {
    validations: {
      required: "必填",
      minLength: "Password須為 6 碼以上英數皆可，注意英文大小寫",
      minValue: "Number最低為 1，不可為零 或 負數",
    },
  },
};

const i18n = createI18n({
  locale: "zh-TW", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

export default i18n;
