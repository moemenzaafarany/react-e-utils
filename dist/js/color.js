"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eColor = void 0;
var _type = require("./type");
var _str = require("./str");
var _num = require("./num");
function _defineAccessor(e, r, n, t) { var c = { configurable: !0, enumerable: !0 }; return c[e] = t, Object.defineProperty(r, n, c); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _r = /*#__PURE__*/new WeakMap();
var _g = /*#__PURE__*/new WeakMap();
var _b = /*#__PURE__*/new WeakMap();
var _o = /*#__PURE__*/new WeakMap();
var _brightness = /*#__PURE__*/new WeakMap();
var _hsl = /*#__PURE__*/new WeakMap();
var eColor = exports.eColor = /*#__PURE__*/function () {
  //========< variable & constructor
  function eColor(r, g, b, o) {
    _classCallCheck(this, eColor);
    //========< variable & constructor
    _classPrivateFieldInitSpec(this, _r, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _g, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _b, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _o, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _brightness, {
      writable: true,
      value: 0
    });
    //========< variable & constructor
    _classPrivateFieldInitSpec(this, _hsl, {
      writable: true,
      value: null
    });
    try {
      _classPrivateFieldSet(this, _r, r !== null && r !== void 0 ? r : 0);
      _classPrivateFieldSet(this, _g, g !== null && g !== void 0 ? g : 0);
      _classPrivateFieldSet(this, _b, b !== null && b !== void 0 ? b : 0);
      _classPrivateFieldSet(this, _o, o !== null && o !== void 0 ? o : 1);
      _classPrivateFieldSet(this, _brightness, (0.299 * _classPrivateFieldGet(this, _r) + 0.587 * _classPrivateFieldGet(this, _g) + 0.114 * _classPrivateFieldGet(this, _b)) / 255);
    } catch (err) {
      var _this$constructor;
      console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
      return undefined;
    }
  }
  //========< parse
  _createClass(eColor, [{
    key: "r",
    get: function get() {
      return _classPrivateFieldGet(this, _r);
    }
  }, {
    key: "g",
    get: function get() {
      return _classPrivateFieldGet(this, _g);
    }
  }, {
    key: "b",
    get: function get() {
      return _classPrivateFieldGet(this, _b);
    }
  }, {
    key: "o",
    get: function get() {
      return _classPrivateFieldGet(this, _o);
    }
  }, {
    key: "brightness",
    get: function get() {
      return _classPrivateFieldGet(this, _brightness);
    }
  }, {
    key: "avg",
    get: function get() {
      return (this.r + this.g + this.b) / 3;
    }
  }, {
    key: "hsl",
    get: function get() {
      if (!_classPrivateFieldGet(this, _hsl)) _classPrivateFieldSet(this, _hsl, eColor.RGBToHSL(_classPrivateFieldGet(this, _r), _classPrivateFieldGet(this, _g), _classPrivateFieldGet(this, _b)));
      return _classPrivateFieldGet(this, _hsl);
    }
  }, {
    key: "lighten",
    value:
    //========< brightness
    function lighten(perc) {
      try {
        if (_type.eType.empty(perc)) return this;
        return new eColor(_num.eNum.clamp(_classPrivateFieldGet(this, _r) + (255 - _classPrivateFieldGet(this, _r)) * perc, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _g) + (255 - _classPrivateFieldGet(this, _g)) * perc, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _b) + (255 - _classPrivateFieldGet(this, _b)) * perc, 0, 255), _classPrivateFieldGet(this, _o));
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return undefined;
      }
    }
  }, {
    key: "darken",
    value: function darken(perc) {
      try {
        if (_type.eType.empty(perc)) return this;
        return new eColor(_num.eNum.clamp(_classPrivateFieldGet(this, _r) - _classPrivateFieldGet(this, _r) * perc, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _g) - _classPrivateFieldGet(this, _g) * perc, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _b) - _classPrivateFieldGet(this, _b) * perc, 0, 255), _classPrivateFieldGet(this, _o));
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
    //========< opacity
  }, {
    key: "fadeOut",
    value: function fadeOut(perc) {
      try {
        return new eColor(_classPrivateFieldGet(this, _r), _classPrivateFieldGet(this, _g), _classPrivateFieldGet(this, _b), _num.eNum.clamp(_classPrivateFieldGet(this, _o) - perc, 0, 1));
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return undefined;
      }
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(perc) {
      try {
        return new eColor(_classPrivateFieldGet(this, _r), _classPrivateFieldGet(this, _g), _classPrivateFieldGet(this, _b), _num.eNum.clamp(_classPrivateFieldGet(this, _o) + perc, 0, 1));
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return undefined;
      }
    }
    //========<
  }, {
    key: "setBrightness",
    value: function setBrightness(percent) {
      try {
        if (_type.eType.empty(percent)) return this;
        var add = (percent - _classPrivateFieldGet(this, _brightness)) * 255;
        return new eColor(_num.eNum.clamp(_classPrivateFieldGet(this, _r) + add, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _g) + add, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _b) + add, 0, 255), _classPrivateFieldGet(this, _o));
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return undefined;
      }
    }
  }, {
    key: "addBrightness",
    value: function addBrightness(percent) {
      try {
        if (_type.eType.empty(percent)) return this;
        var add = (_classPrivateFieldGet(this, _brightness) + percent) * 255;
        return new eColor(_num.eNum.clamp(_classPrivateFieldGet(this, _r) + add, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _g) + add, 0, 255), _num.eNum.clamp(_classPrivateFieldGet(this, _b) + add, 0, 255), _classPrivateFieldGet(this, _o));
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return undefined;
      }
    }
    //========< opacity
  }, {
    key: "setOpacity",
    value: function setOpacity() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      try {
        return new eColor(_classPrivateFieldGet(this, _r), _classPrivateFieldGet(this, _g), _classPrivateFieldGet(this, _b), _num.eNum.clamp(o, 0, 1));
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return undefined;
      }
    }
  }, {
    key: "addOpacity",
    value: function addOpacity() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      try {
        return new eColor(_classPrivateFieldGet(this, _r), _classPrivateFieldGet(this, _g), _classPrivateFieldGet(this, _b), _num.eNum.clamp(_classPrivateFieldGet(this, _o) + o, 0, 1));
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return undefined;
      }
    }
    //========< check neigbors
  }, {
    key: "isNeighborColor",
    value: function isNeighborColor(color) {
      var tolerance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.12;
      try {
        color = eColor.parse(color);
        tolerance = tolerance * 255;
        return Math.abs(_classPrivateFieldGet(this, _r) - color.rgba[0]) <= tolerance && Math.abs(_classPrivateFieldGet(this, _g) - color.rgba[1]) <= tolerance && Math.abs(_classPrivateFieldGet(this, _b) - color.rgba[2]) <= tolerance;
      } catch (err) {
        var _this$constructor10;
        console.trace(this === null || this === void 0 || (_this$constructor10 = this.constructor) === null || _this$constructor10 === void 0 ? void 0 : _this$constructor10.name, err);
        return undefined;
      }
    }
    //========< get contrast
  }, {
    key: "getContrastColor",
    value: function getContrastColor() {
      return new eColor(255 - _classPrivateFieldGet(this, _r), 255 - _classPrivateFieldGet(this, _g), 255 - _classPrivateFieldGet(this, _b), _classPrivateFieldGet(this, _o));
    }
    //========< get text
  }, {
    key: "getTextColor",
    value: function getTextColor() {
      var c = _classPrivateFieldGet(this, _brightness) < 0.5 ? 255 : 0;
      return new eColor(c, c, c, _classPrivateFieldGet(this, _o));
    }
    //========< hue to color
  }, {
    key: "hueToColor",
    value: function hueToColor(perc, color) {
      try {
        if (!_type.eType.num(perc) || !_type.eType.eColor(color)) throw "invalid perc=".concat(_str.eStr.from(perc), "|color=").concat(_str.eStr.from(color));
        var mHSL = this.hsl;
        var cHSL = color.hsl;
        var dH = Math.abs(cHSL.h - mHSL.h) * perc;
        var dS = Math.abs(cHSL.s - mHSL.s) * perc;
        var dL = Math.abs(cHSL.l - mHSL.l) * perc;
        var rgb = eColor.HSLtoRGB(_num.eNum.stepTo(mHSL.h, dH, cHSL.h), _num.eNum.stepTo(mHSL.s, dS, cHSL.s), _num.eNum.stepTo(mHSL.l, dL, cHSL.l));
        return new eColor(rgb.r, rgb.g, rgb.b, _classPrivateFieldGet(this, _o));
      } catch (err) {
        var _this$constructor11;
        console.trace(this === null || this === void 0 || (_this$constructor11 = this.constructor) === null || _this$constructor11 === void 0 ? void 0 : _this$constructor11.name, err);
        return null;
      }
    }
    //========< get text
  }, {
    key: "scaleToColor",
    value: function scaleToColor(perc, color) {
      try {
        if (!_type.eType.num(perc) || !_type.eType.eColor(color)) throw "invalid perc=".concat(_str.eStr.from(perc), "|color=").concat(_str.eStr.from(color));
        return new eColor(Math.round(this.r + perc * (color.r - this.r)), Math.round(this.g + perc * (color.g - this.g)), Math.round(this.b + perc * (color.b - this.b)), this.o);
      } catch (err) {
        var _this$constructor12;
        console.trace(this === null || this === void 0 || (_this$constructor12 = this.constructor) === null || _this$constructor12 === void 0 ? void 0 : _this$constructor12.name, err);
        return null;
      }
    }
    //========< to string format
  }, {
    key: "getHEX",
    get: function get() {
      try {
        return "#".concat(_str.eStr.pad(_classPrivateFieldGet(this, _r).toString(16), 2)).concat(_str.eStr.pad(_classPrivateFieldGet(this, _g).toString(16), 2)).concat(_str.eStr.pad(_classPrivateFieldGet(this, _b).toString(16), 2));
      } catch (err) {
        var _this$constructor13;
        console.trace(this === null || this === void 0 || (_this$constructor13 = this.constructor) === null || _this$constructor13 === void 0 ? void 0 : _this$constructor13.name, err);
        return undefined;
      }
    }
  }, {
    key: "getHEXA",
    get: function get() {
      try {
        return "#".concat(_str.eStr.pad(_classPrivateFieldGet(this, _o).toString(16), 2)).concat(_str.eStr.pad(_classPrivateFieldGet(this, _r).toString(16), 2)).concat(_str.eStr.pad(_classPrivateFieldGet(this, _g).toString(16), 2)).concat(_str.eStr.pad(_classPrivateFieldGet(this, _b).toString(16), 2));
      } catch (err) {
        var _this$constructor14;
        console.trace(this === null || this === void 0 || (_this$constructor14 = this.constructor) === null || _this$constructor14 === void 0 ? void 0 : _this$constructor14.name, err);
        return undefined;
      }
    }
  }, {
    key: "getRGB",
    get: function get() {
      try {
        return "rgb(".concat(_classPrivateFieldGet(this, _r), ",").concat(_classPrivateFieldGet(this, _g), ",").concat(_classPrivateFieldGet(this, _b), ")");
      } catch (err) {
        var _this$constructor15;
        console.trace(this === null || this === void 0 || (_this$constructor15 = this.constructor) === null || _this$constructor15 === void 0 ? void 0 : _this$constructor15.name, err);
        return undefined;
      }
    }
  }, {
    key: "getRGBA",
    get: function get() {
      try {
        return "rgba(".concat(_classPrivateFieldGet(this, _r), ",").concat(_classPrivateFieldGet(this, _g), ",").concat(_classPrivateFieldGet(this, _b), ",").concat(_classPrivateFieldGet(this, _o), ")");
      } catch (err) {
        var _this$constructor16;
        console.trace(this === null || this === void 0 || (_this$constructor16 = this.constructor) === null || _this$constructor16 === void 0 ? void 0 : _this$constructor16.name, err);
        return undefined;
      }
    }
    //========< RGBToHSL
  }], [{
    key: "parse",
    value: function parse(color) {
      try {
        var _eColor$colors, _color, _color2, _color3, _color4, _color5, _color6;
        if (_type.eType.eColor(color)) return color;
        var obj = [0, 0, 0, 1];
        // # F f f f
        if ((_eColor$colors = eColor.colors) !== null && _eColor$colors !== void 0 && _eColor$colors[color]) return eColor.colors[color];else if ((_color = color) !== null && _color !== void 0 && _color.match(/^#([a-f0-9]{3})$/i)) {
          // #f0f
          obj[0] = parseInt(color.substr(1, 1) + color.substr(1, 1), 16);
          obj[1] = parseInt(color.substr(2, 1) + color.substr(2, 1), 16);
          obj[2] = parseInt(color.substr(3, 1) + color.substr(3, 1), 16);
        } else if ((_color2 = color) !== null && _color2 !== void 0 && _color2.match(/^#([a-f]){1}([a-f0-9]{3})$/i)) {
          // #ef0f
          obj[0] = parseInt(color.substr(2, 1) + color.substr(2, 1), 16);
          obj[1] = parseInt(color.substr(3, 1) + color.substr(3, 1), 16);
          obj[2] = parseInt(color.substr(4, 1) + color.substr(4, 1), 16);
          obj[3] = parseInt(color.substr(1, 1) + color.substr(1, 1), 16) / 255;
        } else if ((_color3 = color) !== null && _color3 !== void 0 && _color3.match(/^#([a-f0-9]{6})$/i)) {
          // #ff00ff
          obj[0] = parseInt(color.substr(1, 2), 16);
          obj[1] = parseInt(color.substr(3, 2), 16);
          obj[2] = parseInt(color.substr(5, 2), 16);
        } else if ((_color4 = color) !== null && _color4 !== void 0 && _color4.match(/^#([a-f]){2}([a-f0-9]{6})$/i)) {
          // #eeff00ff
          obj[0] = parseInt(color.substr(3, 2), 16);
          obj[1] = parseInt(color.substr(5, 2), 16);
          obj[2] = parseInt(color.substr(7, 2), 16);
          obj[3] = parseInt(color.substr(1, 2), 16) / 255;
        } else if ((_color5 = color) !== null && _color5 !== void 0 && _color5.match(/^rgb\(([0-9 .]+),([0-9 .]+),([0-9 .]+)\)$/i)) {
          // rgb(255,0,255)
          color = color.substr(4, color.length - 5).split(",");
          obj[0] = _num.eNum.clamp(parseFloat(color[0]), 0, 255);
          obj[1] = _num.eNum.clamp(parseFloat(color[1]), 0, 255);
          obj[2] = _num.eNum.clamp(parseFloat(color[2]), 0, 255);
        } else if ((_color6 = color) !== null && _color6 !== void 0 && _color6.match(/^rgba\(([0-9 .]+),([0-9 .]+),([0-9 .]+),([0-9 .]+)\)$/i)) {
          // rgba(255,0,255,100)
          color = color.substr(5, color.length - 6).split(",");
          obj[0] = _num.eNum.clamp(parseFloat(color[0]), 0, 255);
          obj[1] = _num.eNum.clamp(parseFloat(color[1]), 0, 255);
          obj[2] = _num.eNum.clamp(parseFloat(color[2]), 0, 255);
          obj[3] = _num.eNum.clamp(parseFloat(color[3]), 0, 1);
        } else throw "unkown color format!";
        return new eColor(obj[0], obj[1], obj[2], obj[3]);
      } catch (err) {
        var _this$constructor17;
        console.trace(this === null || this === void 0 || (_this$constructor17 = this.constructor) === null || _this$constructor17 === void 0 ? void 0 : _this$constructor17.name, err);
        return undefined;
      }
    }
  }, {
    key: "RGBToHSL",
    value: function RGBToHSL(r, g, b) {
      try {
        var min,
          max,
          i,
          l,
          s,
          maxcolor,
          h,
          rgb = [];
        rgb[0] = r / 255;
        rgb[1] = g / 255;
        rgb[2] = b / 255;
        min = rgb[0];
        max = rgb[0];
        maxcolor = 0;
        for (i = 0; i < rgb.length - 1; i++) {
          if (rgb[i + 1] <= min) {
            min = rgb[i + 1];
          }
          if (rgb[i + 1] >= max) {
            max = rgb[i + 1];
            maxcolor = i + 1;
          }
        }
        if (maxcolor === 0) h = (rgb[1] - rgb[2]) / (max - min);
        if (maxcolor === 1) h = 2 + (rgb[2] - rgb[0]) / (max - min);
        if (maxcolor === 2) h = 4 + (rgb[0] - rgb[1]) / (max - min);
        if (isNaN(h)) h = 0;
        h = h * 60;
        if (h < 0) h = h + 360;
        l = (min + max) / 2;
        if (min === max) {
          s = 0;
        } else {
          if (l < 0.5) s = (max - min) / (max + min);else s = (max - min) / (2 - max - min);
        }
        s = s * 100;
        l = l * 100;
        return {
          h: _num.eNum.round(_num.eNum.clamp(h, 0, 360)),
          s: _num.eNum.round(_num.eNum.clamp(s, 0, 100), 1),
          l: _num.eNum.round(_num.eNum.clamp(l, 0, 100), 1)
        };
      } catch (err) {
        var _this$constructor18;
        console.trace(this === null || this === void 0 || (_this$constructor18 = this.constructor) === null || _this$constructor18 === void 0 ? void 0 : _this$constructor18.name, err);
        return undefined;
      }
    }
    //========< HSLtoRGB
  }, {
    key: "HSLtoRGB",
    value: function HSLtoRGB(hue, sat, light) {
      try {
        if (sat > 1) sat = sat / 100;
        if (light > 1) light = light / 100;
        var t1, t2, r, g, b;
        hue = hue / 60;
        if (light <= 0.5) {
          t2 = light * (sat + 1);
        } else {
          t2 = light + sat - light * sat;
        }
        t1 = light * 2 - t2;
        r = hueToRgb(t1, t2, hue + 2) * 255;
        g = hueToRgb(t1, t2, hue) * 255;
        b = hueToRgb(t1, t2, hue - 2) * 255;
        return {
          r: _num.eNum.round(_num.eNum.clamp(r, 0, 255), 2),
          g: _num.eNum.round(_num.eNum.clamp(g, 0, 255), 2),
          b: _num.eNum.round(_num.eNum.clamp(b, 0, 255), 2)
        };
      } catch (err) {
        var _this$constructor19;
        console.trace(this === null || this === void 0 || (_this$constructor19 = this.constructor) === null || _this$constructor19 === void 0 ? void 0 : _this$constructor19.name, err);
        return undefined;
      }
      function hueToRgb(t1, t2, hue) {
        if (hue < 0) hue += 6;
        if (hue >= 6) hue -= 6;
        if (hue < 1) return (t2 - t1) * hue + t1;else if (hue < 3) return t2;else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;else return t1;
      }
    }
    //========< generate colors
  }, {
    key: "generateColorList",
    value: function generateColorList() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$saturation = _ref.saturation,
        saturation = _ref$saturation === void 0 ? 100 : _ref$saturation,
        _ref$lightness = _ref.lightness,
        lightness = _ref$lightness === void 0 ? 50 : _ref$lightness;
      try {
        var colors = [];
        for (var i = 0; i < count; i++) colors.push(eColor.indexColor(i, saturation, lightness, count));
        return colors;
      } catch (err) {
        var _this$constructor20;
        console.trace(this === null || this === void 0 || (_this$constructor20 = this.constructor) === null || _this$constructor20 === void 0 ? void 0 : _this$constructor20.name, err);
        return null;
      }
    }
  }, {
    key: "indexColor",
    value: function indexColor(index) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$saturation = _ref2.saturation,
        saturation = _ref2$saturation === void 0 ? 100 : _ref2$saturation,
        _ref2$lightness = _ref2.lightness,
        lightness = _ref2$lightness === void 0 ? 50 : _ref2$lightness,
        _ref2$colors = _ref2.colors,
        colors = _ref2$colors === void 0 ? 10 : _ref2$colors;
      try {
        if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
        var rgb = eColor.HSLtoRGB(index * (360 / colors) % 360, saturation, lightness);
        return new eColor(rgb.r, rgb.g, rgb.b);
      } catch (err) {
        var _this$constructor21;
        console.trace(this === null || this === void 0 || (_this$constructor21 = this.constructor) === null || _this$constructor21 === void 0 ? void 0 : _this$constructor21.name, err);
        return null;
      }
    }
    //========< scale
  }, {
    key: "scaleColors",
    value: function scaleColors(perc, stops, colors, o) {
      try {
        if (!_type.eType.num(perc) || !_type.eType.arr(stops) || !_type.eType.arr(colors) || stops.length !== colors.length) throw "invalid perc=".concat(_str.eStr.from(perc), "|stops=").concat(_str.eStr.from(stops), "|colors=").concat(_str.eStr.from(colors));
        for (var i = 0; i < stops.length; i++) {
          var _stops, _colors;
          var cS = stops[i];
          var cC = eColor.parse(colors[i]);
          var nS = (_stops = stops[i + 1]) !== null && _stops !== void 0 ? _stops : 1;
          var nC = eColor.parse((_colors = colors[i + 1]) !== null && _colors !== void 0 ? _colors : cC);
          if (cS <= perc && perc < nS) return cC.setOpacity(o).scaleToColor((perc - cS) / (nS - cS), nC);
        }
        if (perc <= Math.min.apply(Math, _toConsumableArray(stops))) return eColor.parse(colors[0]).setOpacity(o);else return eColor.parse(colors[colors.length - 1]).setOpacity(o);
      } catch (err) {
        var _this$constructor22;
        console.trace(this === null || this === void 0 || (_this$constructor22 = this.constructor) === null || _this$constructor22 === void 0 ? void 0 : _this$constructor22.name, err);
        return null;
      }
    }
    // presets
  }, {
    key: "scaleHeatColors",
    value: function scaleHeatColors(perc, firstColors, o) {
      try {
        if (!_type.eType.num(perc)) throw "invalid perc=".concat(_str.eStr.from(perc));
        var colors = eColor.heatColorsScaleData.colors;
        if (firstColors) {
          colors.shift();
          colors = [firstColors].concat(_toConsumableArray(colors));
        }
        return eColor.scaleColors(perc, eColor.heatColorsScaleData.stops, colors, o);
      } catch (err) {
        var _this$constructor23;
        console.trace(this === null || this === void 0 || (_this$constructor23 = this.constructor) === null || _this$constructor23 === void 0 ? void 0 : _this$constructor23.name, err);
        return null;
      }
    }
    //========< scale
  }, {
    key: "listColorsScale",
    value: function listColorsScale(length, stops, colors, o) {
      try {
        if (!_type.eType.num(length) || !_type.eType.arr(stops) || !_type.eType.arr(colors) || stops.length !== colors.length) throw "invalid length=".concat(_str.eStr.from(length), "|stops=").concat(_str.eStr.from(stops), "|colors=").concat(_str.eStr.from(colors));
        var min = Math.min.apply(Math, _toConsumableArray(stops));
        var max = Math.max.apply(Math, _toConsumableArray(stops));
        var per = (max - min) / length;
        var list = [];
        for (var i = min; i <= max; i += per) list.push(eColor.scaleColors(i, stops, colors, o));
        return list;
      } catch (err) {
        var _this$constructor24;
        console.trace(this === null || this === void 0 || (_this$constructor24 = this.constructor) === null || _this$constructor24 === void 0 ? void 0 : _this$constructor24.name, err);
        return null;
      }
    }
    // presets
  }, {
    key: "listHeatColors",
    value: function listHeatColors(length, firstColors, o) {
      try {
        if (!_type.eType.num(length)) throw "invalid length=".concat(_str.eStr.from(length));
        var colors = eColor.heatColorsScaleData.colors;
        if (firstColors) {
          colors.shift();
          colors = [firstColors].concat(_toConsumableArray(colors));
        }
        return eColor.listColorsScale(length, eColor.heatColorsScaleData.stops, colors, o);
      } catch (err) {
        var _this$constructor25;
        console.trace(this === null || this === void 0 || (_this$constructor25 = this.constructor) === null || _this$constructor25 === void 0 ? void 0 : _this$constructor25.name, err);
        return null;
      }
    }
    //========< scales
  }, {
    key: "heatColorsScaleData",
    get: function get() {
      return {
        stops: [0, 0.15, 0.35, 0.65, 0.9, 1],
        colors: [eColor.colors.steelblue, eColor.colors.darkred, eColor.colors.red, eColor.colors.orange, eColor.colors.yellow, eColor.colors.white]
      };
    }
    //========< some colors
  }, {
    key: "colors",
    get: function get() {
      var _ref3;
      return _ref3 = {
        light: eColor.parse("#eee"),
        dark: eColor.parse("#333"),
        black: eColor.colors.black,
        error: eColor.colors.red,
        warning: eColor.colors.orangered,
        alert: eColor.colors.teal,
        info: eColor.parse("#0066cc"),
        success: eColor.colors.green,
        get transparent() {
          return new eColor(255, 255, 255, 0);
        }
      }, _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "light", function () {
        return new eColor(238, 238, 238, 0);
      }), "dark", function () {
        return new eColor(51, 51, 51, 0);
      }), "error", function () {
        return new eColor(220, 53, 69, 0);
      }), "danger", function () {
        return new eColor(220, 53, 69, 0);
      }), "warning", function () {
        return new eColor(255, 193, 7, 0);
      }), "warn", function () {
        return new eColor(255, 193, 7, 0);
      }), "success", function () {
        return new eColor(40, 167, 69, 0);
      }), "alert", function () {
        return new eColor(23, 162, 184, 0);
      }), "info", function () {
        return new eColor(23, 162, 184, 0);
      }), "aliceblue", function () {
        return new eColor(240, 248, 255);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "antiquewhite", function () {
        return new eColor(250, 235, 215);
      }), "aqua", function () {
        return new eColor(0, 255, 255);
      }), "aquamarine", function () {
        return new eColor(127, 255, 212);
      }), "azure", function () {
        return new eColor(240, 255, 255);
      }), "beige", function () {
        return new eColor(245, 245, 220);
      }), "bisque", function () {
        return new eColor(255, 228, 196);
      }), "black", function () {
        return new eColor(0, 0, 0);
      }), "blanchedalmond", function () {
        return new eColor(255, 235, 205);
      }), "blue", function () {
        return new eColor(0, 0, 255);
      }), "blueviolet", function () {
        return new eColor(138, 43, 226);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "brown", function () {
        return new eColor(165, 42, 42);
      }), "burlywood", function () {
        return new eColor(222, 184, 135);
      }), "cadetblue", function () {
        return new eColor(95, 158, 160);
      }), "chartreuse", function () {
        return new eColor(127, 255, 0);
      }), "chocolate", function () {
        return new eColor(210, 105, 30);
      }), "coral", function () {
        return new eColor(255, 127, 80);
      }), "cornflowerblue", function () {
        return new eColor(100, 149, 237);
      }), "cornsilk", function () {
        return new eColor(255, 248, 220);
      }), "crimson", function () {
        return new eColor(220, 20, 60);
      }), "cyan", function () {
        return new eColor(0, 255, 255);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "darkblue", function () {
        return new eColor(0, 0, 139);
      }), "darkcyan", function () {
        return new eColor(0, 139, 139);
      }), "darkgoldenrod", function () {
        return new eColor(184, 134, 11);
      }), "darkgray", function () {
        return new eColor(169, 169, 169);
      }), "darkgreen", function () {
        return new eColor(0, 100, 0);
      }), "darkkhaki", function () {
        return new eColor(189, 183, 107);
      }), "darkmagenta", function () {
        return new eColor(139, 0, 139);
      }), "darkolivegreen", function () {
        return new eColor(85, 107, 47);
      }), "darkorange", function () {
        return new eColor(255, 140, 0);
      }), "darkorchid", function () {
        return new eColor(153, 50, 204);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "darkred", function () {
        return new eColor(139, 0, 0);
      }), "darksalmon", function () {
        return new eColor(233, 150, 122);
      }), "darkseagreen", function () {
        return new eColor(143, 188, 143);
      }), "darkslateblue", function () {
        return new eColor(72, 61, 139);
      }), "darkslategray", function () {
        return new eColor(47, 79, 79);
      }), "darkturquoise", function () {
        return new eColor(0, 206, 209);
      }), "darkviolet", function () {
        return new eColor(148, 0, 211);
      }), "deeppink", function () {
        return new eColor(255, 20, 147);
      }), "deepskyblue", function () {
        return new eColor(0, 191, 255);
      }), "dimgray", function () {
        return new eColor(105, 105, 105);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "dodgerblue", function () {
        return new eColor(30, 144, 255);
      }), "firebrick", function () {
        return new eColor(178, 34, 34);
      }), "floralwhite", function () {
        return new eColor(255, 250, 240);
      }), "forestgreen", function () {
        return new eColor(34, 139, 34);
      }), "fuchsia", function () {
        return new eColor(255, 0, 255);
      }), "gainsboro", function () {
        return new eColor(220, 220, 220);
      }), "ghostwhite", function () {
        return new eColor(248, 248, 255);
      }), "gold", function () {
        return new eColor(255, 215, 0);
      }), "goldenrod", function () {
        return new eColor(218, 165, 32);
      }), "gray", function () {
        return new eColor(128, 128, 128);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "green", function () {
        return new eColor(0, 128, 0);
      }), "greenyellow", function () {
        return new eColor(173, 255, 47);
      }), "honeydew", function () {
        return new eColor(240, 255, 240);
      }), "hotpink", function () {
        return new eColor(255, 105, 180);
      }), "indianred", function () {
        return new eColor(205, 92, 92);
      }), "indigo", function () {
        return new eColor(75, 0, 130);
      }), "ivory", function () {
        return new eColor(255, 255, 240);
      }), "khaki", function () {
        return new eColor(240, 230, 140);
      }), "lavender", function () {
        return new eColor(230, 230, 250);
      }), "lavenderblush", function () {
        return new eColor(255, 240, 245);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "lawngreen", function () {
        return new eColor(124, 252, 0);
      }), "lemonchiffon", function () {
        return new eColor(255, 250, 205);
      }), "lightblue", function () {
        return new eColor(173, 216, 230);
      }), "lightcoral", function () {
        return new eColor(240, 128, 128);
      }), "lightcyan", function () {
        return new eColor(224, 255, 255);
      }), "lightgoldenrodyellow", function () {
        return new eColor(250, 250, 210);
      }), "lightgrey", function () {
        return new eColor(211, 211, 211);
      }), "lightgreen", function () {
        return new eColor(144, 238, 144);
      }), "lightpink", function () {
        return new eColor(255, 182, 193);
      }), "lightsalmon", function () {
        return new eColor(255, 160, 122);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "lightseagreen", function () {
        return new eColor(32, 178, 170);
      }), "lightskyblue", function () {
        return new eColor(135, 206, 250);
      }), "lightslategray", function () {
        return new eColor(119, 136, 153);
      }), "lightsteelblue", function () {
        return new eColor(176, 196, 222);
      }), "lightyellow", function () {
        return new eColor(255, 255, 224);
      }), "lime", function () {
        return new eColor(0, 255, 0);
      }), "limegreen", function () {
        return new eColor(50, 205, 50);
      }), "linen", function () {
        return new eColor(250, 240, 230);
      }), "magenta", function () {
        return new eColor(255, 0, 255);
      }), "maroon", function () {
        return new eColor(128, 0, 0);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "mediumaquamarine", function () {
        return new eColor(102, 205, 170);
      }), "mediumblue", function () {
        return new eColor(0, 0, 205);
      }), "mediumorchid", function () {
        return new eColor(186, 85, 211);
      }), "mediumpurple", function () {
        return new eColor(147, 112, 216);
      }), "mediumseagreen", function () {
        return new eColor(60, 179, 113);
      }), "mediumslateblue", function () {
        return new eColor(123, 104, 238);
      }), "mediumspringgreen", function () {
        return new eColor(0, 250, 154);
      }), "mediumturquoise", function () {
        return new eColor(72, 209, 204);
      }), "mediumvioletred", function () {
        return new eColor(199, 21, 133);
      }), "midnightblue", function () {
        return new eColor(25, 25, 112);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "mintcream", function () {
        return new eColor(245, 255, 250);
      }), "mistyrose", function () {
        return new eColor(255, 228, 225);
      }), "moccasin", function () {
        return new eColor(255, 228, 181);
      }), "navajowhite", function () {
        return new eColor(255, 222, 173);
      }), "navy", function () {
        return new eColor(0, 0, 128);
      }), "oldlace", function () {
        return new eColor(253, 245, 230);
      }), "olive", function () {
        return new eColor(128, 128, 0);
      }), "olivedrab", function () {
        return new eColor(107, 142, 35);
      }), "orange", function () {
        return new eColor(255, 165, 0);
      }), "orangered", function () {
        return new eColor(255, 69, 0);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "orchid", function () {
        return new eColor(218, 112, 214);
      }), "palegoldenrod", function () {
        return new eColor(238, 232, 170);
      }), "palegreen", function () {
        return new eColor(152, 251, 152);
      }), "paleturquoise", function () {
        return new eColor(175, 238, 238);
      }), "palevioletred", function () {
        return new eColor(216, 112, 147);
      }), "papayawhip", function () {
        return new eColor(255, 239, 213);
      }), "peachpuff", function () {
        return new eColor(255, 218, 185);
      }), "peru", function () {
        return new eColor(205, 133, 63);
      }), "pink", function () {
        return new eColor(255, 192, 203);
      }), "plum", function () {
        return new eColor(221, 160, 221);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "powderblue", function () {
        return new eColor(176, 224, 230);
      }), "purple", function () {
        return new eColor(128, 0, 128);
      }), "rebeccapurple", function () {
        return new eColor(102, 51, 153);
      }), "red", function () {
        return new eColor(255, 0, 0);
      }), "rosybrown", function () {
        return new eColor(188, 143, 143);
      }), "royalblue", function () {
        return new eColor(65, 105, 225);
      }), "saddlebrown", function () {
        return new eColor(139, 69, 19);
      }), "salmon", function () {
        return new eColor(250, 128, 114);
      }), "sandybrown", function () {
        return new eColor(244, 164, 96);
      }), "seagreen", function () {
        return new eColor(46, 139, 87);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "seashell", function () {
        return new eColor(255, 245, 238);
      }), "sienna", function () {
        return new eColor(160, 82, 45);
      }), "silver", function () {
        return new eColor(192, 192, 192);
      }), "skyblue", function () {
        return new eColor(135, 206, 235);
      }), "slateblue", function () {
        return new eColor(106, 90, 205);
      }), "slategray", function () {
        return new eColor(112, 128, 144);
      }), "snow", function () {
        return new eColor(255, 250, 250);
      }), "springgreen", function () {
        return new eColor(0, 255, 127);
      }), "steelblue", function () {
        return new eColor(70, 130, 180);
      }), "tan", function () {
        return new eColor(210, 180, 140);
      }), _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _defineAccessor("get", _ref3, "teal", function () {
        return new eColor(0, 128, 128);
      }), "thistle", function () {
        return new eColor(216, 191, 216);
      }), "tomato", function () {
        return new eColor(255, 99, 71);
      }), "turquoise", function () {
        return new eColor(64, 224, 208);
      }), "violet", function () {
        return new eColor(238, 130, 238);
      }), "wheat", function () {
        return new eColor(245, 222, 179);
      }), "white", function () {
        return new eColor(255, 255, 255);
      }), "whitesmoke", function () {
        return new eColor(245, 245, 245);
      }), "yellow", function () {
        return new eColor(255, 255, 0);
      }), "yellowgreen", function () {
        return new eColor(154, 205, 50);
      });
    }
  }]);
  return eColor;
}();