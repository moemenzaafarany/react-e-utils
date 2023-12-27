"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eTranslation = exports.eLocale = void 0;
var _list = require("./list");
var _dom = require("./dom");
var _storage = require("./storage");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _locales = /*#__PURE__*/new WeakMap();
var _locale = /*#__PURE__*/new WeakMap();
var _fillerTag = /*#__PURE__*/new WeakMap();
var _detectLang = /*#__PURE__*/new WeakSet();
var eTranslation = exports.eTranslation = /*#__PURE__*/function () {
  //========< contructor
  function eTranslation() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$fillerTag = _ref.fillerTag,
      fillerTag = _ref$fillerTag === void 0 ? null : _ref$fillerTag,
      _ref$autoDetect = _ref.autoDetect,
      autoDetect = _ref$autoDetect === void 0 ? true : _ref$autoDetect,
      _ref$defaultLocale = _ref.defaultLocale,
      defaultLocale = _ref$defaultLocale === void 0 ? "en" : _ref$defaultLocale;
    _classCallCheck(this, eTranslation);
    _classPrivateMethodInitSpec(this, _detectLang);
    _classPrivateFieldInitSpec(this, _locales, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _locale, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _fillerTag, {
      writable: true,
      value: null
    });
    try {
      var _this$locales, _this$locales2, _this$locales3;
      var _iterator = _createForOfIteratorHelper(locales),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var locale = _step.value;
          this.locales[locale.code] = locale;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _classPrivateFieldSet(this, _fillerTag, fillerTag);
      // locale
      _classPrivateFieldSet(this, _locale, (_this$locales = this.locales) === null || _this$locales === void 0 ? void 0 : _this$locales[_storage.eCookie.get("locale")]);
      // detect
      if (autoDetect === true) _classPrivateMethodGet(this, _detectLang, _detectLang2).call(this);
      // default
      if (!_classPrivateFieldGet(this, _locale)) _classPrivateFieldSet(this, _locale, (_this$locales2 = this.locales) === null || _this$locales2 === void 0 ? void 0 : _this$locales2[defaultLocale]);
      // fallback
      if (!_classPrivateFieldGet(this, _locale)) _classPrivateFieldSet(this, _locale, (_this$locales3 = this.locales) === null || _this$locales3 === void 0 ? void 0 : _this$locales3[Object.keys(this.locales)[0]]);
      // other shit
      this.setLocale(this.locale.code);
    } catch (err) {
      var _this$constructor;
      console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
      return undefined;
    }
  }
  _createClass(eTranslation, [{
    key: "locales",
    get: function get() {
      return _classPrivateFieldGet(this, _locales);
    }
  }, {
    key: "locale",
    get: function get() {
      return _classPrivateFieldGet(this, _locale);
    }
  }, {
    key: "setLocale",
    value:
    //========< set
    function setLocale(code) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$reloadPage = _ref2.reloadPage,
        reloadPage = _ref2$reloadPage === void 0 ? false : _ref2$reloadPage;
      try {
        var _this$locales4;
        if ((_this$locales4 = this.locales) !== null && _this$locales4 !== void 0 && _this$locales4[code]) {
          var _this$locales5;
          _classPrivateFieldSet(this, _locale, (_this$locales5 = this.locales) === null || _this$locales5 === void 0 ? void 0 : _this$locales5[code]);
          _dom.eDom.htmlLang = this.locale.code;
          _dom.eDom.htmlDir = this.locale.dir;
          _storage.eCookie.set("locale", this.locale.code);
          if (reloadPage) window.location.reload(false);
        }
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return undefined;
      }
    }
    //========< translate
  }, {
    key: "translate",
    value: function translate(key) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$fillers = _ref3.fillers,
        fillers = _ref3$fillers === void 0 ? null : _ref3$fillers,
        _ref3$altLocale = _ref3.altLocale,
        altLocale = _ref3$altLocale === void 0 ? null : _ref3$altLocale;
      try {
        var _this$locale, _this$locales$cc$tran, _this$locales6;
        var cc = altLocale !== null && altLocale !== void 0 ? altLocale : (_this$locale = this.locale) === null || _this$locale === void 0 ? void 0 : _this$locale.code;
        return (_this$locales$cc$tran = (_this$locales6 = this.locales) === null || _this$locales6 === void 0 || (_this$locales6 = _this$locales6[cc]) === null || _this$locales6 === void 0 ? void 0 : _this$locales6.translate(key, {
          fillers: fillers,
          fillerTag: _classPrivateFieldGet(this, _fillerTag)
        })) !== null && _this$locales$cc$tran !== void 0 ? _this$locales$cc$tran : "N/A";
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
  }]);
  return eTranslation;
}();
function _detectLang2() {
  var localesCodes = Object.keys(this.locales);
  if (!this.locale || !localesCodes.includes(this.locale.code)) {
    var _this$locales7, _this$locales8;
    var browser = (window.navigator.userLanguage || window.navigator.language).split("-")[0];
    if (localesCodes.includes(browser)) _classPrivateFieldSet(this, _locale, (_this$locales7 = this.locales) === null || _this$locales7 === void 0 ? void 0 : _this$locales7[browser]);else _classPrivateFieldSet(this, _locale, (_this$locales8 = this.locales) === null || _this$locales8 === void 0 ? void 0 : _this$locales8[localesCodes[0]]);
  }
}
var _code = /*#__PURE__*/new WeakMap();
var _dir = /*#__PURE__*/new WeakMap();
var _name = /*#__PURE__*/new WeakMap();
var _fonts = /*#__PURE__*/new WeakMap();
var _data = /*#__PURE__*/new WeakMap();
var eLocale = exports.eLocale = /*#__PURE__*/function () {
  // constructor
  function eLocale() {
    var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en";
    var dir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ltr";
    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "English";
    var fonts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ["sans-serif"];
    var data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    _classCallCheck(this, eLocale);
    // params
    _classPrivateFieldInitSpec(this, _code, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _dir, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _name, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _fonts, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _code, code);
    _classPrivateFieldSet(this, _dir, dir);
    _classPrivateFieldSet(this, _name, name);
    _classPrivateFieldSet(this, _fonts, fonts);
    _classPrivateFieldSet(this, _data, _list.eList.objFlatten(data, "."));
  }
  // translate
  _createClass(eLocale, [{
    key: "code",
    get: function get() {
      return _classPrivateFieldGet(this, _code);
    }
  }, {
    key: "dir",
    get: function get() {
      return _classPrivateFieldGet(this, _dir);
    }
  }, {
    key: "name",
    get: function get() {
      return _classPrivateFieldGet(this, _name);
    }
  }, {
    key: "fonts",
    get: function get() {
      return _classPrivateFieldGet(this, _fonts);
    }
  }, {
    key: "data",
    get: function get() {
      return _classPrivateFieldGet(this, _data);
    }
  }, {
    key: "translate",
    value: function translate(key) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$fillers = _ref4.fillers,
        fillers = _ref4$fillers === void 0 ? null : _ref4$fillers,
        _ref4$fillerTag = _ref4.fillerTag,
        fillerTag = _ref4$fillerTag === void 0 ? null : _ref4$fillerTag;
      try {
        var _this$data, _str;
        var str = (_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data[key];
        if (str && fillerTag && fillers) {
          var i = 0;
          while (str.includes(fillerTag)) {
            var _fillers$i;
            str = str.replace(fillerTag, (_fillers$i = fillers[i]) !== null && _fillers$i !== void 0 ? _fillers$i : "");
            i++;
          }
        }
        return (_str = str) !== null && _str !== void 0 ? _str : "N/A";
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return undefined;
      }
    }
  }]);
  return eLocale;
}();