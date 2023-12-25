import { createContext, useContext } from "react";
//==============================< Context
export const CreateEContext = (func = () => {}) => {
  const Context = /*#__PURE__*/createContext({});
  return {
    Context: Context,
    Use: () => {
      const ctx = useContext(Context);
      if (!ctx) {
        throw new Error("context must be within a provider!");
      }
      return ctx;
    },
    Provider: p => {
      return /*#__PURE__*/React.createElement(Context.Provider, {
        value: func(),
        children: p.children
      });
    },
    Consumer: (child = obj => {}) => {
      return /*#__PURE__*/React.createElement(Context.Consumer, {
        children: child
      });
    }
  };
};
//==============================< Translation
export function createTranslationContext(translation) {
  return Context(() => {
    const locale = State(translation.locale.code);
    const dir = State(translation.locale.dir);
    const fonts = State(translation.locale.fonts);
    const locales = State(translation.locales);
    const setLocale = newLocale => {
      translation.setLocale(newLocale, {
        reloadPage: false
      });
      locale.value = translation.locale.code;
      dir.value = translation.locale.dir;
      fonts.value = translation.locale.fonts;
      locales.value = translation.locales;
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
      locale: locale.value,
      dir: dir.value,
      fonts: fonts.value,
      fontfamily: fonts.value?.join(","),
      locales: locales.value,
      setLocale,
      forLocale,
      forDir,
      t: translation.translate.bind(translation)
    };
  });
}