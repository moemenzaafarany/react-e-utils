import { useCallback } from "react";
import eCreateContext from "../hooks/eCreateContext";
import eUseState from "../hooks/eUseState";
import eTranslation from "../js/eTranslation";
//==============================< State
const translation = {
  instance: null,
};
const eTranslationModel = eCreateContext(() => {
  const locale = eUseState(translation?.instance?.locale.code);
  const dir = eUseState(translation?.instance?.locale.dir);
  const fonts = eUseState(translation?.instance?.locale.fonts);
  const locales = eUseState(translation?.instance?.locales);

  const setLocale = (newLocale) => {
    translation?.instance?.setLocale(newLocale, { reloadPage: false });
    locale.value = translation?.instance?.locale.code;
    dir.value = translation?.instance?.locale.dir;
    fonts.value = translation?.instance?.locale.fonts;
    locales.value = translation?.instance?.locales;
  };

  const forLocale = useCallback(
    (options, fallback) => {
      if (options?.[locale.value]) {
        return options?.[locale.value];
      }
      return fallback;
    },
    [locale.value]
  );

  const forDir = useCallback(
    (ltr, rtl) => {
      return dir.value === "rtl" ? rtl : ltr;
    },
    [dir.value]
  );

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
    get t() {
      return translation?.instance?.translate.bind(translation?.instance);
    },
  };
});
export const eInitTranslation = (
  locales = [],
  { fillerTag = null, autoDetect = true, defaultLocale = "en" } = {}
) => {
  translation.instance = new eTranslation(locales, {
    fillerTag,
    autoDetect,
    defaultLocale,
  });
};
export const eTranslationContext = eTranslationModel.Context;
export const eTranslationProviderProps = eTranslationModel.ProviderProps;
const eUseTranslation = eTranslationModel.Use;
export default eUseTranslation;
