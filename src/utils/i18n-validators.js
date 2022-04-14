import * as validators from "@vuelidate/validators";
import i18n from "./i18n";

// or import { createI18nMessage } from '@vuelidate/validators'
const { createI18nMessage } = validators;

// Create your i18n message instance. Used for vue-i18n@9
const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });

// wrap each validator.
export const required = withI18nMessage(validators.required);
export const minLength = withI18nMessage(validators.minLength, {
  withArguments: true,
});
export const maxLength = withI18nMessage(validators.maxLength(10));
