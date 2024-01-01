"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eSwitchIf = exports.eStopConsole = exports.eMultiIf = exports.eGetBrowser = void 0;
var _eType = _interopRequireDefault(require("./eType"));
var _eStr = _interopRequireDefault(require("./eStr"));
var _this = void 0;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var eGetBrowser = exports.eGetBrowser = function eGetBrowser() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (userAgent.match(/edg/i)) return "edge";else if (userAgent.match(/opr\//i)) return "opera";else if (userAgent.match(/safari/i)) return "safari";else if (userAgent.match(/firefox|fxios/i)) return "firefox";else if (userAgent.match(/chrome|chromium|crios/i)) return "chrome";
  return undefined;
};
var eStopConsole = exports.eStopConsole = function eStopConsole() {
  // eslint-disable-next-line no-debugger
  setInterval(function () {
    debugger;
  }, 500);
};
var eSwitchIf = exports.eSwitchIf = function eSwitchIf() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var cases = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["1", "2"];
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ["a", "b"];
  try {
    if (!_eType["default"].arr(cases)) throw "invalid cases=".concat(_eStr["default"].from(cases), "|values=").concat(_eStr["default"].from(values));
    for (var i in cases) {
      if (value === cases[i]) return values[i];
    }
    return defaultValue;
  } catch (err) {
    var _this$constructor;
    console.trace(_this === null || _this === void 0 || (_this$constructor = _this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
    return undefined;
  }
};
var eMultiIf = exports.eMultiIf = function eMultiIf(defaultValue) {
  var ifs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  try {
    if (!_eType["default"].arr(ifs)) throw "invalid ifs=".concat(_eStr["default"].from(ifs), "|values=").concat(_eStr["default"].from(values));
    for (var i in ifs) {
      if (ifs[i]() === true) return values[i];
    }
    return defaultValue;
  } catch (err) {
    var _this$constructor2;
    console.trace(_this === null || _this === void 0 || (_this$constructor2 = _this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
    return undefined;
  }
};