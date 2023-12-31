"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = exports.initTranslation = exports.TranslationProvider = exports.TranslationContext = exports.TranslationConsumer = void 0;
var _state = require("./state");
var _translation = require("../js/translation");
var _context = require("./context");
//==============================< State
var translation = {
  instance: null
};
var TranslationContext = exports.TranslationContext = (0, _context.Context)(function () {
  var _translation$instance, _translation$instance2, _translation$instance3, _translation$instance4, _translation$instance10;
  var locale = (0, _state.State)(translation === null || translation === void 0 || (_translation$instance = translation.instance) === null || _translation$instance === void 0 ? void 0 : _translation$instance.locale.code);
  var dir = (0, _state.State)(translation === null || translation === void 0 || (_translation$instance2 = translation.instance) === null || _translation$instance2 === void 0 ? void 0 : _translation$instance2.locale.dir);
  var fonts = (0, _state.State)(translation === null || translation === void 0 || (_translation$instance3 = translation.instance) === null || _translation$instance3 === void 0 ? void 0 : _translation$instance3.locale.fonts);
  var locales = (0, _state.State)(translation === null || translation === void 0 || (_translation$instance4 = translation.instance) === null || _translation$instance4 === void 0 ? void 0 : _translation$instance4.locales);
  var setLocale = function setLocale(newLocale) {
    var _translation$instance5, _translation$instance6, _translation$instance7, _translation$instance8, _translation$instance9;
    translation === null || translation === void 0 || (_translation$instance5 = translation.instance) === null || _translation$instance5 === void 0 || _translation$instance5.setLocale(newLocale, {
      reloadPage: false
    });
    locale.value = translation === null || translation === void 0 || (_translation$instance6 = translation.instance) === null || _translation$instance6 === void 0 ? void 0 : _translation$instance6.locale.code;
    dir.value = translation === null || translation === void 0 || (_translation$instance7 = translation.instance) === null || _translation$instance7 === void 0 ? void 0 : _translation$instance7.locale.dir;
    fonts.value = translation === null || translation === void 0 || (_translation$instance8 = translation.instance) === null || _translation$instance8 === void 0 ? void 0 : _translation$instance8.locale.fonts;
    locales.value = translation === null || translation === void 0 || (_translation$instance9 = translation.instance) === null || _translation$instance9 === void 0 ? void 0 : _translation$instance9.locales;
  };
  var forLocale = function forLocale(options, fallback) {
    if (options !== null && options !== void 0 && options[locale.value]) {
      return options === null || options === void 0 ? void 0 : options[locale.value];
    }
    return fallback;
  };
  var forDir = function forDir(ltr, rtl) {
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
      var _fonts$value;
      return (_fonts$value = fonts.value) === null || _fonts$value === void 0 ? void 0 : _fonts$value.join(",");
    },
    get locales() {
      return locales.value;
    },
    setLocale: setLocale,
    forLocale: forLocale,
    forDir: forDir,
    t: translation === null || translation === void 0 || (_translation$instance10 = translation.instance) === null || _translation$instance10 === void 0 ? void 0 : _translation$instance10.translate.bind(translation === null || translation === void 0 ? void 0 : translation.instance)
  };
});
var initTranslation = exports.initTranslation = function initTranslation() {
  var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$fillerTag = _ref.fillerTag,
    fillerTag = _ref$fillerTag === void 0 ? null : _ref$fillerTag,
    _ref$autoDetect = _ref.autoDetect,
    autoDetect = _ref$autoDetect === void 0 ? true : _ref$autoDetect,
    _ref$defaultLocale = _ref.defaultLocale,
    defaultLocale = _ref$defaultLocale === void 0 ? "en" : _ref$defaultLocale;
  translation.instance = new _translation.eTranslation(locales, {
    fillerTag: fillerTag,
    autoDetect: autoDetect,
    defaultLocale: defaultLocale
  });
};
var useTranslation = exports.useTranslation = TranslationContext.Use;
var TranslationProvider = exports.TranslationProvider = TranslationContext.Provider;
var TranslationConsumer = exports.TranslationConsumer = TranslationContext.Consumer;