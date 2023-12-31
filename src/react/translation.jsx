import { State } from "./state";
import { eTranslation } from "../js/translation";
import { Context } from "./context";
//==============================< State
const translation = {
  instance: null,
};
export const TranslationContext = Context(() => {
  const locale = State(translation?.instance?.locale.code);
  const dir = State(translation?.instance?.locale.dir);
  const fonts = State(translation?.instance?.locale.fonts);
  const locales = State(translation?.instance?.locales);

  const setLocale = (newLocale) => {
    translation?.instance?.setLocale(newLocale, { reloadPage: false });
    locale.value = translation?.instance?.locale.code;
    dir.value = translation?.instance?.locale.dir;
    fonts.value = translation?.instance?.locale.fonts;
    locales.value = translation?.instance?.locales;
  };

  const forLocale = (options, fallback) => {
    if (options?.[locale.value]) {
      return options?.[locale.value];
    }
    return fallback;
  };

  const forDir = (ltr, rtl) => {
    return dir.value === "rtl" ? rtl : ltr;
  };

  return {
    get locale() {
      return locale.value;
    },
    get dir() {
      return dir.value;
    },
    get fonts() {
      return fonts.value;
    },
    get fontfamily() {
      return fonts.value?.join(",");
    },
    get locales() {
      return locales.value;
    },
    setLocale,
    forLocale,
    forDir,
    t: translation?.instance?.translate.bind(translation?.instance),
  };
});
export const initTranslation = (
  locales = [],
  { fillerTag = null, autoDetect = true, defaultLocale = "en" } = {}
) => {
  translation.instance = new eTranslation(locales, {
    fillerTag,
    autoDetect,
    defaultLocale,
  });
};
export const useTranslation = TranslationContext.Use;
export const TranslationProvider = TranslationContext.Provider;
export const TranslationConsumer = TranslationContext.Consumer;
