export class eTranslation {
  #locales = {};
  get locales() {
    return this.#locales;
  }
  #locale;
  get locale() {
    return this.#locale;
  }
  #fillerTag = null;
  //========< contructor
  constructor(locales = [], {
    fillerTag = null,
    autoDetect = true,
    defaultLocale = "en"
  } = {}) {
    try {
      for (let locale of locales) {
        this.locales[locale.code] = locale;
      }
      this.#fillerTag = fillerTag;
      // locale
      this.#locale = this.locales?.[eCookie.get("locale")];
      // detect
      if (autoDetect === true) this.#detectLang();
      // default
      if (!this.#locale) this.#locale = this.locales?.[defaultLocale];
      // fallback
      if (!this.#locale) this.#locale = this.locales?.[Object.keys(this.locales)[0]];
      // other shit
      this.setLocale(this.locale.code);
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return undefined;
    }
  }
  #detectLang() {
    var localesCodes = Object.keys(this.locales);
    if (!this.locale || !localesCodes.includes(this.locale.code)) {
      var browser = (window.navigator.userLanguage || window.navigator.language).split("-")[0];
      if (localesCodes.includes(browser)) this.#locale = this.locales?.[browser];else this.#locale = this.locales?.[localesCodes[0]];
    }
  }
  //========< set
  setLocale(code, {
    reloadPage = false
  } = {}) {
    try {
      if (this.locales?.[code]) {
        this.#locale = this.locales?.[code];
        eDom.htmlLang = this.locale.code;
        eDom.htmlDir = this.locale.dir;
        eCookie.set("locale", this.locale.code);
        if (reloadPage) window.location.reload(false);
      }
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return undefined;
    }
  }
  //========< translate
  translate(key, {
    fillers = null,
    altLocale = null
  } = {}) {
    try {
      var cc = altLocale ?? this.locale?.code;
      return this.locales?.[cc]?.translate(key, {
        fillers: fillers,
        fillerTag: this.#fillerTag
      }) ?? "N/A";
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return undefined;
    }
  }
}
export class eLocale {
  // params
  #code;
  get code() {
    return this.#code;
  }
  #dir;
  get dir() {
    return this.#dir;
  }
  #name;
  get name() {
    return this.#name;
  }
  #fonts;
  get fonts() {
    return this.#fonts;
  }
  #data;
  get data() {
    return this.#data;
  }
  // constructor
  constructor(code = "en", dir = "ltr", name = "English", fonts = ["sans-serif"], data = {}) {
    this.#code = code;
    this.#dir = dir;
    this.#name = name;
    this.#fonts = fonts;
    this.#data = eList.objFlatten(data, ".");
  }
  // translate
  translate(key, {
    fillers = null,
    fillerTag = null
  } = {}) {
    try {
      var str = this.data?.[key];
      if (str && fillerTag && fillers) {
        var i = 0;
        while (str.includes(fillerTag)) {
          str = str.replace(fillerTag, fillers[i] ?? "");
          i++;
        }
      }
      return str ?? "N/A";
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return undefined;
    }
  }
}