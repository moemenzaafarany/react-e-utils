"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eStr = void 0;
var _type = require("./type");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var eStr = exports.eStr = /*#__PURE__*/function () {
  function eStr() {
    _classCallCheck(this, eStr);
  }
  _createClass(eStr, null, [{
    key: "pad",
    value: function pad(value, length) {
      var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      var left = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      try {
        if (_type.eType["null"](value) || !_type.eType.num(length) || !_type.eType.str(padChar) || !_type.eType.bool(left)) throw "invalid value=".concat(eStr.from(value), "|length=").concat(eStr.from(length), "|padChar=").concat(eStr.from(padChar), "|left=").concat(eStr.from(left));
        value = value.toString();
        var rep = eStr.repeat(padChar || "0", Math.abs(length) - value.length);
        if (left) return rep + value;else return value + rep;
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return undefined;
      }
    }
  }, {
    key: "padLeft",
    value: function padLeft(value, length) {
      var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      return eStr.pad(value, length, padChar, true);
    }
  }, {
    key: "padRight",
    value: function padRight(value, length) {
      var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      return eStr.pad(value, length, padChar, false);
    }
  }, {
    key: "repeat",
    value: function repeat(value, count) {
      try {
        if (_type.eType["null"](value) || !_type.eType.num(count)) throw "invalid value=".concat(eStr.from(value), "|count=").concat(eStr.from(count));
        value = value.toString();
        var str = "";
        for (var i = 0; i < count; i++) str += value;
        return str;
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return undefined;
      }
    }
  }, {
    key: "indent",
    value: function indent(count) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "&#160;";
      try {
        return eStr.repeat(value, count);
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
  }, {
    key: "size",
    value: function size(text) {
      try {
        // text
        text = eStr.from(text);
        // calc
        return new TextEncoder().encode(text).byteLength;
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return undefined;
      }
    }
  }, {
    key: "copyToClipboard",
    value: function copyToClipboard(str) {
      var alertText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Data copied to clipboard";
      try {
        navigator.clipboard.writeText(str);
        if (alertText) alert(alertText);
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return undefined;
      }
    }
  }, {
    key: "from",
    value: function from(v) {
      var _v;
      if (!v) return "";
      if (_type.eType.arr(v) || _type.eType.obj(v)) v = JSON.stringify(v);
      if (_type.eType.multi(v, ["str", "num", "bool"])) v = "".concat(v);
      if (_type.eType["class"](v) === "object") v = (_v = v) === null || _v === void 0 || (_v = _v.constructor) === null || _v === void 0 ? void 0 : _v.name;
      return "".concat(v);
    }

    // to hex and back
  }, {
    key: "str2hex",
    value: function str2hex(str) {
      try {
        var hex = '';
        for (var i = 0; i < str.length; i++) {
          hex += str.charCodeAt(i).toString(16);
        }
        return hex;
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return null;
      }
    }
  }, {
    key: "hex2str",
    value: function hex2str(hex) {
      try {
        var str = '';
        for (var i = 0; i < hex.length; i += 2) {
          str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        }
        return str;
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return null;
      }
    }
  }, {
    key: "storageEncode",
    value: function storageEncode(value) {
      try {
        if (!value) return null;
        var json = _type.eType.arr(value) || _type.eType.obj(value);
        if (value) {
          if (json) value = JSON.stringify(value);
          // value = encodeURIComponent(value);
        }
        return JSON.stringify({
          j: json,
          v: value
        });
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return null;
      }
    }
  }, {
    key: "storageDecode",
    value: function storageDecode(value) {
      try {
        if (!value) return null;
        var data = JSON.parse(value);
        var json = data.j;
        value = data.v;
        if (value) {
          // value = decodeURIComponent(value);
          if (json) value = JSON.parse(value);
        }
        return value;
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return null;
      }
    }
  }]);
  return eStr;
}();