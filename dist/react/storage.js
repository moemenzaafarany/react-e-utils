"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CookieState = CookieState;
exports.LocaleStorageState = LocaleStorageState;
exports.SessionStorageState = SessionStorageState;
var _react = require("react");
var _storage = require("../js/storage");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//==============================< cookie State
function CookieState(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$fallback = _ref.fallback,
    fallback = _ref$fallback === void 0 ? null : _ref$fallback,
    _ref$expireHours = _ref.expireHours,
    expireHours = _ref$expireHours === void 0 ? 24 * 7 : _ref$expireHours;
  var key = "c:".concat(name);
  var _useState = (0, _react.useState)(function () {
      var _eCookie$get;
      return (_eCookie$get = _storage.eCookie.get(key)) !== null && _eCookie$get !== void 0 ? _eCookie$get : fallback;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    getV = _useState2[0],
    setV = _useState2[1];
  (0, _react.useLayoutEffect)(function () {
    save(getV);
    // eslint-disable-next-line
  }, [getV]);
  var save = function save(value) {
    if (value) {
      _storage.eCookie.set(key, value, {
        expireHours: expireHours
      });
    } else {
      _storage.eCookie.del(key);
    }
  };
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    save: save
  };
}
//==============================< session storage State
function SessionStorageState(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$fallback = _ref2.fallback,
    fallback = _ref2$fallback === void 0 ? null : _ref2$fallback;
  var key = "ss:".concat(name);
  var _useState3 = (0, _react.useState)(function () {
      var _eSessionStorage$get;
      return (_eSessionStorage$get = _storage.eSessionStorage.get(key)) !== null && _eSessionStorage$get !== void 0 ? _eSessionStorage$get : fallback;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    getV = _useState4[0],
    setV = _useState4[1];
  (0, _react.useLayoutEffect)(function () {
    save(getV);
    // eslint-disable-next-line
  }, [getV]);
  var save = function save(value) {
    if (value) {
      _storage.eSessionStorage.set(key, value);
    } else {
      _storage.eSessionStorage.del(key);
    }
  };
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    save: save
  };
}
//==============================< locale storage State
function LocaleStorageState(name) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref3$fallback = _ref3.fallback,
    fallback = _ref3$fallback === void 0 ? null : _ref3$fallback;
  var key = "ls:".concat(name);
  var _useState5 = (0, _react.useState)(function () {
      var _eLocaleStorage$get;
      return (_eLocaleStorage$get = _storage.eLocaleStorage.get(key)) !== null && _eLocaleStorage$get !== void 0 ? _eLocaleStorage$get : fallback;
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    getV = _useState6[0],
    setV = _useState6[1];
  (0, _react.useLayoutEffect)(function () {
    save(getV);
    // eslint-disable-next-line
  }, [getV]);
  var save = function save(value) {
    if (value) {
      _storage.eLocaleStorage.set(key, value);
    } else {
      _storage.eLocaleStorage.del(key);
    }
  };
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    save: save
  };
}