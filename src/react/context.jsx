import React from "react";
import { createContext, useContext } from "react";
import { eTranslation } from "../js/translation";
import { eType } from "../js/type";
import { State } from "./state";

//==============================< Context
export const Context = (func = () => {}) => {
  const CTX = createContext({});
  const Use = () => {
    const ctx = useContext(CTX);

    if (!ctx) {
      throw new Error("context must be within a provider!");
    }

    return ctx;
  };
  const Provider = ({ children }) => {
    return <CTX.Provider value={func()}>{children}</CTX.Provider>;
  };
  const Consumer = (child = () => {}) => {
    return <CTX.Consumer>{child}</CTX.Consumer>;
  };
  return {
    Context: CTX,
    Use: Use,
    Provider: Provider,
    Consumer: Consumer,
  };
};
//==============================< Translation
export function TranslationContext(
  locales = [],
  { fillerTag = null, autoDetect = true, defaultLocale = "en" } = {}
) {
  const translation = new eTranslation(locales, {
    fillerTag,
    autoDetect,
    defaultLocale,
  });

  return Context(() => {
    const locale = State(translation.locale.code);
    const dir = State(translation.locale.dir);
    const fonts = State(translation.locale.fonts);
    const locales = State(translation.locales);

    const setLocale = (newLocale) => {
      translation.setLocale(newLocale, { reloadPage: false });
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
      t: translation.translate.bind(translation),
    };
  });
}
//==============================< multi provider
export const MultiProviders = ({
  providers = [{ provider: null, props: null }],
  children,
}) => {
  // eslint-disable-next-line react/no-children-prop
  const child = <MultiProvidersChild children={children} />;
  const provds = providers.reverse().reduceRight((accumulated, obj) => {
    if (eType.obj(obj)) {
      return <obj.provider {...obj.props}>{accumulated}</obj.provider>;
    }
    return accumulated;
  }, child);

  return provds;
};
const MultiProvidersChild = ({ children }) => {
  return <>{children}</>;
};
