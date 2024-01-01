"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eUrl = exports.eSessionStorage = exports.eLocaleStorage = exports.eCookie = void 0;
var _type = require("./type");
var _str = require("./str");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var eUrl = exports.eUrl = /*#__PURE__*/function () {
  function eUrl() {
    _classCallCheck(this, eUrl);
  }
  _createClass(eUrl, null, [{
    key: "getUrl",
    value:
    // url
    function getUrl(href, hashPath) {
      try {
        var _url$href;
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        return {
          base: (_url$href = url.href) === null || _url$href === void 0 ? void 0 : _url$href.split("?")[0],
          href: url.href,
          params: eUrl.getParams(url.href),
          hash: eUrl.getHash(url.href),
          hashValues: _type.eType.str(hashPath) ? eUrl.getHashValues(hashPath, url.href) : null
        };
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return undefined;
      }
    }
  }, {
    key: "setUrl",
    value: function setUrl() {
      var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var _ref = arguments.length > 1 ? arguments[1] : undefined,
        _ref$params = _ref.params,
        params = _ref$params === void 0 ? {} : _ref$params,
        _ref$hashPath = _ref.hashPath,
        hashPath = _ref$hashPath === void 0 ? "" : _ref$hashPath,
        _ref$hashValues = _ref.hashValues,
        hashValues = _ref$hashValues === void 0 ? {} : _ref$hashValues;
      try {
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        if (_type.eType.obj(params)) url.href = eUrl.setParams(params, url.href);else url.href = eUrl.clearParams(url.href);
        if (_type.eType.str(hashPath)) url.href = eUrl.setHash(hashPath, hashValues, url.href);else url.href = eUrl.clearHash(url.href);
        return url.href;
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return undefined;
      }
    }

    // params
  }, {
    key: "getParam",
    value: function getParam(name, href) {
      try {
        if (!_type.eType.str(name)) throw "invalid name=".concat(_str.eStr.from(name));
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        return url.searchParams.get(name);
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
  }, {
    key: "getParams",
    value: function getParams(href) {
      try {
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        var list = {};
        var _iterator = _createForOfIteratorHelper(url.searchParams.keys()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            if (key.indexOf("[]") > -1) list[key.replace("[]", "")] = url.searchParams.getAll(key);else list[key] = url.searchParams.get(key);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return list;
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return undefined;
      }
    }
  }, {
    key: "setParam",
    value: function setParam(name, value, href) {
      try {
        if (!_type.eType.str(name)) throw "invalid name=".concat(_str.eStr.from(name));
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        url.searchParams.set(name, value);
        return url.href;
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return false;
      }
    }
  }, {
    key: "setParams",
    value: function setParams() {
      var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var href = arguments.length > 1 ? arguments[1] : undefined;
      try {
        if (!_type.eType.obj(object)) throw "invalid object=".concat(_str.eStr.from(object));
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        url.search = "";
        for (var k in object) {
          var val = object[k];
          if (_type.eType.arr(val)) {
            var _iterator2 = _createForOfIteratorHelper(val),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var v = _step2.value;
                url.searchParams.append("".concat(k, "[]"), v);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            url.searchParams.set("".concat(k), val);
          }
        }
        return url.href;
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return undefined;
      }
    }
  }, {
    key: "delParam",
    value: function delParam(name, href) {
      try {
        if (!_type.eType.str(name)) throw "invalid name=".concat(_str.eStr.from(name));
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        url.searchParams["delete"](name);
        return url.href;
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return false;
      }
    }
  }, {
    key: "clearParams",
    value: function clearParams(href) {
      try {
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        url.search = "";
        return url.href;
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return false;
      }
    }

    // hash
  }, {
    key: "getHash",
    value: function getHash(href) {
      try {
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        if (!url.hash) return null;
        return url.hash.slice(1);
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return undefined;
      }
    }
  }, {
    key: "getHashValues",
    value: function getHashValues(pattern, href) {
      // "path like section1 section/:id"
      try {
        if (eUrl.matchHash(pattern, href)) {
          var hash = eUrl.getHash(href);
          var hashs = hash.split("/");
          var list = {};
          var sections = pattern.split("/");
          for (var i in sections) {
            var v = sections[i];
            if (v.indexOf(":") === 0) {
              v = v.slice(1);
              list[v] = hashs[i];
            }
          }
          return list;
        }
        return {};
      } catch (err) {
        var _this$constructor10;
        console.trace(this === null || this === void 0 || (_this$constructor10 = this.constructor) === null || _this$constructor10 === void 0 ? void 0 : _this$constructor10.name, err);
        return undefined;
      }
    }
  }, {
    key: "matchHash",
    value: function matchHash(pattern, href) {
      try {
        if (!_type.eType.str(pattern)) throw "invalid pattern=".concat(_str.eStr.from(pattern));
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        if (!url.hash) return {};
        var sections = pattern.split("/");
        for (var i in sections) {
          var v = sections[i];
          if (v.indexOf(":") === 0) {
            v = v.slice(1);
            sections[i] = "([^\\/](.*)|)";
          }
        }
        var regex = new RegExp("\\^".concat(sections.join('\\/'), "\\$"), "i");
        var hash = url.hash.slice(1);
        return hash.match(regex);
      } catch (err) {
        var _this$constructor11;
        console.trace(this === null || this === void 0 || (_this$constructor11 = this.constructor) === null || _this$constructor11 === void 0 ? void 0 : _this$constructor11.name, err);
        return undefined;
      }
    }
  }, {
    key: "setHash",
    value: function setHash(path) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var href = arguments.length > 2 ? arguments[2] : undefined;
      // "path like section1 section/:id"
      try {
        if (!_type.eType.str(path)) throw "invalid path=".concat(_str.eStr.from(path));
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        url.hash = !path ? "" : "#".concat(!_type.eType.obj(values) ? path : eUrl.hashParams(path, values));
        return url.href;
      } catch (err) {
        var _this$constructor12;
        console.trace(this === null || this === void 0 || (_this$constructor12 = this.constructor) === null || _this$constructor12 === void 0 ? void 0 : _this$constructor12.name, err);
        return false;
      }
    }
  }, {
    key: "clearHash",
    value: function clearHash(href) {
      try {
        var url = new URL(href !== null && href !== void 0 ? href : window.location.href);
        url.hash = "";
        return url.href;
      } catch (err) {
        var _this$constructor13;
        console.trace(this === null || this === void 0 || (_this$constructor13 = this.constructor) === null || _this$constructor13 === void 0 ? void 0 : _this$constructor13.name, err);
        return false;
      }
    }
  }, {
    key: "hashParams",
    value: function hashParams(path) {
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // "path section/:id,"
      try {
        if (!_type.eType.str(path) || !_type.eType.obj(values)) throw "invalid path=".concat(_str.eStr.from(path), "|values=").concat(_str.eStr.from(values));
        var paths = path.split("/");
        for (var i in paths) {
          var v = paths[i];
          if (v.indexOf(":") === 0) {
            var _values$v;
            v = v.slice(1);
            paths[i] = (_values$v = values[v]) !== null && _values$v !== void 0 ? _values$v : "";
          }
        }
        return paths.join("/");
      } catch (err) {
        var _this$constructor14;
        console.trace(this === null || this === void 0 || (_this$constructor14 = this.constructor) === null || _this$constructor14 === void 0 ? void 0 : _this$constructor14.name, err);
        return null;
      }
    }

    // apply
  }, {
    key: "apply",
    value: function apply(href) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var pushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      try {
        if (pushState !== true) window.history.replaceState(data, null, href);else window.history.pushState(data, null, href);
        return true;
      } catch (err) {
        var _this$constructor15;
        console.trace(this === null || this === void 0 || (_this$constructor15 = this.constructor) === null || _this$constructor15 === void 0 ? void 0 : _this$constructor15.name, err);
        return false;
      }
    }
  }]);
  return eUrl;
}();
var eCookie = exports.eCookie = /*#__PURE__*/function () {
  function eCookie() {
    _classCallCheck(this, eCookie);
  }
  _createClass(eCookie, null, [{
    key: "enabled",
    get: function get() {
      return navigator.cookieEnabled;
    }
  }, {
    key: "get",
    value: function get(name) {
      try {
        if (!_type.eType.str(name)) return false;
        var value = null;
        var list = decodeURIComponent(document.cookie).split(";");
        // separate
        var map = {};
        var _iterator3 = _createForOfIteratorHelper(list),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var str = _step3.value;
            var pair = str.trim().split("=");
            var val = pair.join("=").split("".concat(pair[0], "="))[1];
            if (Object.prototype.hasOwnProperty.call(map, pair[0])) {
              if (!_type.eType.arr(map[pair[0]])) map[pair[0]] = [map[pair[0]]];
              map[pair[0]].push(val);
            } else {
              map[pair[0]] = val;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        value = map[name];
        // decode
        value = _str.eStr.storageDecode(value);
        return value;
      } catch (err) {
        var _this$constructor16;
        console.trace(this === null || this === void 0 || (_this$constructor16 = this.constructor) === null || _this$constructor16 === void 0 ? void 0 : _this$constructor16.name, err);
        return undefined;
      }
    }
  }, {
    key: "set",
    value: function set(name, value) {
      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref2$expireHours = _ref2.expireHours,
        expireHours = _ref2$expireHours === void 0 ? 24 * 7 : _ref2$expireHours;
      try {
        if (!_type.eType.str(name)) return false;
        // expire
        var expire = "";
        if (_type.eType.num(expireHours)) {
          expire = new Date(Date.now() + expireHours * 3600000).toUTCString();
          expire = "expires=".concat(expire, ";");
        }
        // encode
        value = _str.eStr.storageEncode(value);
        // set
        document.cookie = "".concat(name, "=").concat(value, ";").concat(expire, "path=/;");
        return true;
      } catch (err) {
        var _this$constructor17;
        console.trace(this === null || this === void 0 || (_this$constructor17 = this.constructor) === null || _this$constructor17 === void 0 ? void 0 : _this$constructor17.name, err);
        return false;
      }
    }
  }, {
    key: "del",
    value: function del(name) {
      try {
        if (!_type.eType.str(name)) return false;
        document.cookie = "".concat(name, "=", null, ";expires=").concat(new Date(Date.now() / 2).toUTCString(), ";path=/");
        return true;
      } catch (err) {
        var _this$constructor18;
        console.trace(this === null || this === void 0 || (_this$constructor18 = this.constructor) === null || _this$constructor18 === void 0 ? void 0 : _this$constructor18.name, err);
        return false;
      }
    }
  }]);
  return eCookie;
}();
var eSessionStorage = exports.eSessionStorage = /*#__PURE__*/function () {
  function eSessionStorage() {
    _classCallCheck(this, eSessionStorage);
  }
  _createClass(eSessionStorage, null, [{
    key: "enabled",
    get: function get() {
      try {
        var key = "__MZ_Storage_Test__";
        sessionStorage.setItem(key, null);
        sessionStorage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      try {
        if (!_type.eType.str(name)) return false;
        var value = sessionStorage.getItem(name);
        // decode
        value = _str.eStr.storageDecode(value);
        return value;
      } catch (err) {
        var _this$constructor19;
        console.trace(this === null || this === void 0 || (_this$constructor19 = this.constructor) === null || _this$constructor19 === void 0 ? void 0 : _this$constructor19.name, err);
        return undefined;
      }
    }
  }, {
    key: "set",
    value: function set(name, value) {
      try {
        if (!_type.eType.str(name)) return false;
        // encode
        value = _str.eStr.storageEncode(value);
        // set
        sessionStorage.setItem(name, value);
        return true;
      } catch (err) {
        var _this$constructor20;
        console.trace(this === null || this === void 0 || (_this$constructor20 = this.constructor) === null || _this$constructor20 === void 0 ? void 0 : _this$constructor20.name, err);
        return false;
      }
    }
  }, {
    key: "del",
    value: function del(name) {
      try {
        if (!_type.eType.str(name)) return false;
        sessionStorage.removeItem(name);
        return true;
      } catch (err) {
        var _this$constructor21;
        console.trace(this === null || this === void 0 || (_this$constructor21 = this.constructor) === null || _this$constructor21 === void 0 ? void 0 : _this$constructor21.name, err);
        return false;
      }
    }
  }]);
  return eSessionStorage;
}();
var eLocaleStorage = exports.eLocaleStorage = /*#__PURE__*/function () {
  function eLocaleStorage() {
    _classCallCheck(this, eLocaleStorage);
  }
  _createClass(eLocaleStorage, null, [{
    key: "enabled",
    get: function get() {
      try {
        var key = "__MZ_Storage_Test__";
        localStorage.setItem(key, null);
        localStorage.removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    }
  }, {
    key: "get",
    value: function get(name) {
      try {
        if (!_type.eType.str(name)) return false;
        var value = localStorage.getItem(name);
        // decode
        value = _str.eStr.storageDecode(value);
        return value;
      } catch (err) {
        var _this$constructor22;
        console.trace(this === null || this === void 0 || (_this$constructor22 = this.constructor) === null || _this$constructor22 === void 0 ? void 0 : _this$constructor22.name, err);
        return undefined;
      }
    }
  }, {
    key: "set",
    value: function set(name, value) {
      try {
        if (!_type.eType.str(name)) return false;
        // encode
        value = _str.eStr.storageEncode(value);
        // set
        localStorage.setItem(name, value);
        return true;
      } catch (err) {
        var _this$constructor23;
        console.trace(this === null || this === void 0 || (_this$constructor23 = this.constructor) === null || _this$constructor23 === void 0 ? void 0 : _this$constructor23.name, err);
        return false;
      }
    }
  }, {
    key: "del",
    value: function del(name) {
      try {
        if (!_type.eType.str(name)) return false;
        localStorage.removeItem(name);
        return true;
      } catch (err) {
        var _this$constructor24;
        console.trace(this === null || this === void 0 || (_this$constructor24 = this.constructor) === null || _this$constructor24 === void 0 ? void 0 : _this$constructor24.name, err);
        return false;
      }
    }
  }]);
  return eLocaleStorage;
}();