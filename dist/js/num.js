"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eNum = void 0;
var _type = require("./type");
var _str = require("./str");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var eNum = exports.eNum = /*#__PURE__*/function () {
  function eNum() {
    _classCallCheck(this, eNum);
  }
  _createClass(eNum, null, [{
    key: "parse",
    value: function parse(value) {
      try {
        return Number(value);
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return null;
      }
    }
  }, {
    key: "loop",
    value: function loop(value, step, min, max) {
      try {
        if (!_type.eType.num(value) || !_type.eType.num(step) || !_type.eType.num(min) || !_type.eType.num(max)) throw "invalid value=".concat(_str.eStr.from(value), "|step=").concat(_str.eStr.from(step), "|min=").concat(_str.eStr.from(min), "|max=").concat(_str.eStr.from(max));
        value = value + step;
        if (value > max) {
          value -= max - min + 1;
        } else if (value < min) {
          value += max - min + 1;
        }
        return value;
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return NaN;
      }
    }
  }, {
    key: "clamp",
    value: function clamp(value, min, max) {
      try {
        if (!_type.eType.num(value) || !_type.eType.num(min) || !_type.eType.num(max)) throw "invalid value=".concat(_str.eStr.from(value), "|min=").concat(_str.eStr.from(min), "|max=").concat(_str.eStr.from(max));
        return Math.min(max, Math.max(value, min));
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return NaN;
      }
    }
  }, {
    key: "stepTo",
    value: function stepTo(value, step, dest) {
      try {
        if (!_type.eType.num(value) || !_type.eType.num(step) || !_type.eType.num(dest)) throw "invalid value=".concat(_str.eStr.from(value), "|step=").concat(_str.eStr.from(step), "|dest=").concat(_str.eStr.from(dest));
        if (value > dest) {
          // step down
          value -= step;
          if (value < dest) value = dest;
        } else {
          // step up
          value += step;
          if (value > dest) value = dest;
        }
        return value;
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return NaN;
      }
    }
  }, {
    key: "easeTo",
    value: function easeTo(value, dest) {
      var multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var round = arguments.length > 3 ? arguments[3] : undefined;
      try {
        if (!_type.eType.num(value) || !_type.eType.num(dest) || !_type.eType.num(multiplier)) throw "invalid value=".concat(value, "|dest=").concat(dest, "|multiplier=").concat(multiplier);
        var nv = value + (dest - value) * multiplier;
        if (round) return eNum.round(nv, round);
        return nv;
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return NaN;
      }
    }
  }, {
    key: "percent",
    value: function percent(value, max) {
      var multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      try {
        if (!_type.eType.num(value) || !_type.eType.num(max) || !_type.eType.num(multiplier)) throw "invalid value=".concat(_str.eStr.from(value), "|max=").concat(_str.eStr.from(max), "|multiplier=").concat(_str.eStr.from(multiplier));
        return value / max * multiplier;
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return NaN;
      }
    }
  }, {
    key: "fromPercent",
    value: function fromPercent(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var multiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
      try {
        if (!_type.eType.num(value) || !_type.eType.num(min) || !_type.eType.num(max) || !_type.eType.num(multiplier)) throw "invalid value=".concat(value, "|min=").concat(min, "|max=").concat(max, "|multiplier=").concat(multiplier);
        return (max - min) * (value / multiplier);
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return NaN;
      }
    }
  }, {
    key: "round",
    value: function round(value) {
      var percision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      try {
        if (!_type.eType.num(value) || !_type.eType.num(percision)) throw "invalid value=".concat(_str.eStr.from(value), "|percision=").concat(_str.eStr.from(percision));
        return +parseFloat(value).toFixed(percision);
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return NaN;
      }
    }
  }, {
    key: "random",
    value: function random() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      try {
        if (!_type.eType.num(min) || !_type.eType.num(max)) throw "invalid min=".concat(_str.eStr.from(min), "|max=").concat(_str.eStr.from(max));
        return Math.random() * (max - min) + min;
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return NaN;
      }
    }
  }, {
    key: "readable",
    value: function readable(value) {
      var percision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ",";
      var persistentPercision = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      try {
        var _num$, _num$2;
        if (!_type.eType.num(value) || !_type.eType.num(percision, true) || !_type.eType.str(seperator) || !_type.eType.bool(persistentPercision)) throw "invalid value=".concat(_str.eStr.from(value), "|percision=").concat(_str.eStr.from(percision), "|seperator=").concat(_str.eStr.from(seperator), "|persistentPercision=").concat(_str.eStr.from(persistentPercision));
        //
        var num = Math.abs(eNum.round(value, percision)).toString().split(".");
        var str = (_num$ = num[0]) !== null && _num$ !== void 0 ? _num$ : "0";
        var dec = (_num$2 = num[1]) !== null && _num$2 !== void 0 ? _num$2 : "0";
        var res = "";
        //
        if (str.length > 3) {
          var arr = [];
          for (var i = str.length; i > 0; i = i - 3) arr.push(str.slice(i - 3 < 0 ? 0 : i - 3, i));
          arr = arr.reverse();
          //
          res = arr.join(seperator);
        } else res = str;
        // add sign
        if (Math.sign(value) < 0) res = "-".concat(res);
        // add decimals
        if (percision > 0 || persistentPercision) {
          var perc = dec;
          if (persistentPercision) perc = _str.eStr.padRight(dec, percision, "0");
          res = "".concat(res, ".").concat(perc);
        }
        //
        return res.toString();
      } catch (err) {
        var _this$constructor10;
        console.trace(this === null || this === void 0 || (_this$constructor10 = this.constructor) === null || _this$constructor10 === void 0 ? void 0 : _this$constructor10.name, err);
        return NaN;
      }
    }
  }]);
  return eNum;
}();