import React from "react";
import { createContext, useContext } from "react";
import { eTranslation } from "../js/translation";
import { eType } from "../js/type";

//==============================< Context
export const createEContext = (func = () => {}) => {
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
export function createETranslationContext(locales = [], {
  fillerTag = null,
  autoDetect = true,
  defaultLocale = "en"
} = {}) {
  const translation = new eTranslation(locales, {
    fillerTag,
    autoDetect,
    defaultLocale
  });
  return createEContext(() => {
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
//==============================< multi provider
export const MultiEProviders = ({
  providers = [{
    provider: null,
    props: null
  }],
  children
}) => {
  const child = /*#__PURE__*/React.createElement(MultiEProvidersChild, {
    children: children
  });
  const provds = providers.reverse().reduceRight((accumulated, obj) => {
    if (eType.obj(obj)) {
      return /*#__PURE__*/React.createElement(obj.provider, obj.props, accumulated);
    }
    return accumulated;
  }, child);
  return provds;
};
const MultiEProvidersChild = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};