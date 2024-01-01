"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBreakpoints = exports.initBreakpoints = exports.BreakpointsProvider = exports.BreakpointsContext = exports.BreakpointsConsumer = void 0;
var _react = require("react");
var _state = require("./state");
var _dom = require("../js/dom");
var _context = require("./context");
//==============================< State
var breakpoints = {
  sizes: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xx: 1440
  },
  devices: {
    mobile: 0,
    tablet: 640,
    laptop: 1024,
    desktop: 1440
  }
};
var BreakpointsContext = exports.BreakpointsContext = (0, _context.Context)(function () {
  var getCurrentSize = function getCurrentSize() {
    var size = window.innerWidth;
    if (size >= breakpoints.sizes.xx) return "xx";
    if (size >= breakpoints.sizes.xl) return "xl";
    if (size >= breakpoints.sizes.lg) return "lg";
    if (size >= breakpoints.sizes.md) return "md";
    if (size >= breakpoints.sizes.sm) return "sm";
    return "xs";
  };
  var getCurrentDevice = function getCurrentDevice() {
    var size = window.innerWidth;
    if (size >= breakpoints.devices.desktop) return "desktop";
    if (size >= breakpoints.devices.laptop) return "laptop";
    if (size >= breakpoints.devices.tablet) return "tablet";
    return "mobile";
  };
  var currentSize = (0, _state.State)(getCurrentSize());
  var currentDevice = (0, _state.State)(getCurrentDevice());
  (0, _react.useEffect)(function () {
    var cont = _dom.eDom.listenEvent(window, "resize", function () {
      var cs = getCurrentSize();
      if (cs !== currentSize.value) currentSize.value = cs;
      var cd = getCurrentDevice();
      if (cd !== currentDevice.value) currentDevice.value = cd;
    }, {
      capture: true
    });
    return function () {
      cont.abort();
    };
  }, []);
  var forSize = (0, _react.useCallback)(function (xs, sm, md, lg, xl, xx) {
    var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15;
    switch (currentSize.value) {
      case "xx":
        return (_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = xx !== null && xx !== void 0 ? xx : xl) !== null && _ref5 !== void 0 ? _ref5 : lg) !== null && _ref4 !== void 0 ? _ref4 : md) !== null && _ref3 !== void 0 ? _ref3 : sm) !== null && _ref2 !== void 0 ? _ref2 : xs) !== null && _ref !== void 0 ? _ref : null;
      case "xl":
        return (_ref6 = (_ref7 = (_ref8 = (_ref9 = xl !== null && xl !== void 0 ? xl : lg) !== null && _ref9 !== void 0 ? _ref9 : md) !== null && _ref8 !== void 0 ? _ref8 : sm) !== null && _ref7 !== void 0 ? _ref7 : xs) !== null && _ref6 !== void 0 ? _ref6 : null;
      case "lg":
        return (_ref10 = (_ref11 = (_ref12 = lg !== null && lg !== void 0 ? lg : md) !== null && _ref12 !== void 0 ? _ref12 : sm) !== null && _ref11 !== void 0 ? _ref11 : xs) !== null && _ref10 !== void 0 ? _ref10 : null;
      case "md":
        return (_ref13 = (_ref14 = md !== null && md !== void 0 ? md : sm) !== null && _ref14 !== void 0 ? _ref14 : xs) !== null && _ref13 !== void 0 ? _ref13 : null;
      case "sm":
        return (_ref15 = sm !== null && sm !== void 0 ? sm : xs) !== null && _ref15 !== void 0 ? _ref15 : null;
      default:
        return xs !== null && xs !== void 0 ? xs : null;
    }
  }, [currentSize]);
  var forDevice = (0, _react.useCallback)(function (mobile, tablet, laptop, desktop) {
    var _ref16, _ref17, _ref18, _ref19, _ref20, _ref21;
    switch (currentDevice.value) {
      case "desktop":
        return (_ref16 = (_ref17 = (_ref18 = desktop !== null && desktop !== void 0 ? desktop : laptop) !== null && _ref18 !== void 0 ? _ref18 : tablet) !== null && _ref17 !== void 0 ? _ref17 : mobile) !== null && _ref16 !== void 0 ? _ref16 : null;
      case "laptop":
        return (_ref19 = (_ref20 = laptop !== null && laptop !== void 0 ? laptop : tablet) !== null && _ref20 !== void 0 ? _ref20 : mobile) !== null && _ref19 !== void 0 ? _ref19 : null;
      case "tablet":
        return (_ref21 = tablet !== null && tablet !== void 0 ? tablet : mobile) !== null && _ref21 !== void 0 ? _ref21 : null;
      default:
        return mobile !== null && mobile !== void 0 ? mobile : null;
    }
  }, [currentDevice]);
  return {
    get sizeBreakpoints() {
      return breakpoints.sizes;
    },
    get deviceBreakpoints() {
      return breakpoints.devices;
    },
    get size() {
      return currentSize.value;
    },
    get device() {
      return currentDevice.value;
    },
    forSize: forSize,
    forDevice: forDevice
  };
});
var initBreakpoints = exports.initBreakpoints = function initBreakpoints() {
  var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref22$xs = _ref22.xs,
    xs = _ref22$xs === void 0 ? 0 : _ref22$xs,
    _ref22$sm = _ref22.sm,
    sm = _ref22$sm === void 0 ? 576 : _ref22$sm,
    _ref22$md = _ref22.md,
    md = _ref22$md === void 0 ? 768 : _ref22$md,
    _ref22$lg = _ref22.lg,
    lg = _ref22$lg === void 0 ? 992 : _ref22$lg,
    _ref22$xl = _ref22.xl,
    xl = _ref22$xl === void 0 ? 1200 : _ref22$xl,
    _ref22$xx = _ref22.xx,
    xx = _ref22$xx === void 0 ? 1440 : _ref22$xx,
    _ref22$mobile = _ref22.mobile,
    mobile = _ref22$mobile === void 0 ? 0 : _ref22$mobile,
    _ref22$tablet = _ref22.tablet,
    tablet = _ref22$tablet === void 0 ? 640 : _ref22$tablet,
    _ref22$laptop = _ref22.laptop,
    laptop = _ref22$laptop === void 0 ? 1024 : _ref22$laptop,
    _ref22$desktop = _ref22.desktop,
    desktop = _ref22$desktop === void 0 ? 1440 : _ref22$desktop;
  breakpoints.sizes = {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    xx: xx
  };
  breakpoints.devices = {
    mobile: mobile,
    tablet: tablet,
    laptop: laptop,
    desktop: desktop
  };
};
var useBreakpoints = exports.useBreakpoints = BreakpointsContext.Use;
var BreakpointsProvider = exports.BreakpointsProvider = BreakpointsContext.Provider;
var BreakpointsConsumer = exports.BreakpointsConsumer = BreakpointsContext.Consumer;