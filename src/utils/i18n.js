import { createI18n } from "vue-i18n";

const messages = {
  "zh-TW": {
    validations: {
      required: "Value不可為空",
      minLength: "...",
      maxLength: "..",
    },
  },
};

const i18n = createI18n({
  locale: "zh-TW", // set locale
  fallbackLocale: "en", // set fallback locale
  messages,
});

export default i18n;
