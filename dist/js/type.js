"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eType = void 0;
var _res = require("./res");
var _date = require("./date");
var _color = require("./color");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var eType = exports.eType = /*#__PURE__*/function () {
  function eType() {
    _classCallCheck(this, eType);
  }
  _createClass(eType, null, [{
    key: "multi",
    value: function multi(value, types) {
      var canBeNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value)) {
        for (var t in types) {
          if (eType.func(t)) {
            if (t(value)) return true;
          } else if (eType.str(t) && eType !== null && eType !== void 0 && eType[t]) {
            if (eType !== null && eType !== void 0 && eType[t](value)) return true;
          }
        }
        return true;
      }
      return false;
    }
  }, {
    key: "of",
    value: function of(value) {
      if (eType["null"](value)) return _typeof(value);
      return value.constructor.name;
    }
  }, {
    key: "null",
    value: function _null(value) {
      if ([null, undefined, NaN].includes(value)) return true;
      return false;
    }
  }, {
    key: "empty",
    value: function empty(value) {
      if ([null, undefined, NaN, "", {}, []].includes(value)) return true;
      return false;
    }
  }, {
    key: "str",
    value: function str(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && typeof value === "string" && value.constructor.name === "String") return true;
      return false;
    }
  }, {
    key: "num",
    value: function num(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && typeof value === "number" && value.constructor.name === "Number") return true;
      return false;
    }
  }, {
    key: "bool",
    value: function bool(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && typeof value === "boolean" && value.constructor.name === "Boolean") return true;
      return false;
    }
  }, {
    key: "arr",
    value: function arr(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value.constructor.name === "Array") return true;
      return false;
    }
  }, {
    key: "obj",
    value: function obj(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value.constructor.name === "Object") return true;
      return false;
    }
  }, {
    key: "func",
    value: function func(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && typeof value === "function" && ["AsyncFunction", "Function"].includes(value.constructor.name)) return true;
      return false;
    }
  }, {
    key: "class",
    value: function _class(value, className) {
      var canBeNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && (!className || className && value.constructor.name === className)) return true;
      return false;
    }
  }, {
    key: "file",
    value: function file(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value.constructor.name === "File") return true;
      return false;
    }
  }, {
    key: "blob",
    value: function blob(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value.constructor.name === "Blob" && value instanceof Blob) return true;
      return false;
    }
  }, {
    key: "image",
    value: function image(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof Image) return true;
      return false;
    }
  }, {
    key: "formData",
    value: function formData(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof FormData) return true;
      return false;
    }
  }, {
    key: "node",
    value: function node(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof Node) return true;
      return false;
    }
  }, {
    key: "element",
    value: function element(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof HTMLElement) return true;
      return false;
    }
    // e shit
  }, {
    key: "eRes",
    value: function eRes(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof _res.eRes) return true;
      return false;
    }
  }, {
    key: "eDate",
    value: function eDate(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof _date.eDate) return true;
      return false;
    }
  }, {
    key: "eColor",
    value: function eColor(value) {
      var canBeNull = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (canBeNull && eType["null"](value) || !eType["null"](value) && _typeof(value) === "object" && value instanceof _color.eColor) return true;
      return false;
    }
  }]);
  return eType;
}();