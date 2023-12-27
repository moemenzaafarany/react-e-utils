"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiProviders = exports.Context = void 0;
exports.TranslationContext = TranslationContext;
var _react = _interopRequireWildcard(require("react"));
var _translation = require("../js/translation");
var _type = require("../js/type");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//==============================< Context
var Context = exports.Context = function Context() {
  var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var Context = /*#__PURE__*/(0, _react.createContext)({});
  return {
    Context: Context,
    Use: function Use() {
      var ctx = (0, _react.useContext)(Context);
      if (!ctx) {
        throw new Error("context must be within a provider!");
      }
      return ctx;
    },
    Provider: function Provider(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
        value: func(),
        children: children
      });
    },
    Consumer: function Consumer() {
      var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (obj) {};
      return /*#__PURE__*/_react["default"].createElement(Context.Consumer, {
        children: child
      });
    }
  };
};
//==============================< Translation
function TranslationContext() {
  var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$fillerTag = _ref2.fillerTag,
    fillerTag = _ref2$fillerTag === void 0 ? null : _ref2$fillerTag,
    _ref2$autoDetect = _ref2.autoDetect,
    autoDetect = _ref2$autoDetect === void 0 ? true : _ref2$autoDetect,
    _ref2$defaultLocale = _ref2.defaultLocale,
    defaultLocale = _ref2$defaultLocale === void 0 ? "en" : _ref2$defaultLocale;
  var translation = new _translation.eTranslation(locales, {
    fillerTag: fillerTag,
    autoDetect: autoDetect,
    defaultLocale: defaultLocale
  });
  return Context(function () {
    var _fonts$value;
    var locale = State(translation.locale.code);
    var dir = State(translation.locale.dir);
    var fonts = State(translation.locale.fonts);
    var locales = State(translation.locales);
    var setLocale = function setLocale(newLocale) {
      translation.setLocale(newLocale, {
        reloadPage: false
      });
      locale.value = translation.locale.code;
      dir.value = translation.locale.dir;
      fonts.value = translation.locale.fonts;
      locales.value = translation.locales;
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
      locale: locale.value,
      dir: dir.value,
      fonts: fonts.value,
      fontfamily: (_fonts$value = fonts.value) === null || _fonts$value === void 0 ? void 0 : _fonts$value.join(","),
      locales: locales.value,
      setLocale: setLocale,
      forLocale: forLocale,
      forDir: forDir,
      t: translation.translate.bind(translation)
    };
  });
}
//==============================< multi provider
var MultiProviders = exports.MultiProviders = function MultiProviders(_ref3) {
  var _ref3$providers = _ref3.providers,
    providers = _ref3$providers === void 0 ? [{
      provider: null,
      props: null
    }] : _ref3$providers,
    children = _ref3.children;
  var child = /*#__PURE__*/_react["default"].createElement(MultiProvidersChild, {
    children: children
  });
  var provds = providers.reverse().reduceRight(function (accumulated, obj) {
    if (_type.eType.obj(obj)) {
      return /*#__PURE__*/_react["default"].createElement(obj.provider, obj.props, accumulated);
    }
    return accumulated;
  }, child);
  return provds;
};
var MultiProvidersChild = function MultiProvidersChild(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};