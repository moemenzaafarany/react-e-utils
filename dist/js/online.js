"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eOnline = void 0;
var _type = require("./type");
var _str = require("./str");
var _dom = require("./dom");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable no-unused-vars */
var eOnline = exports.eOnline = /*#__PURE__*/function () {
  function eOnline() {
    _classCallCheck(this, eOnline);
  }
  _createClass(eOnline, null, [{
    key: "online",
    get: function get() {
      return window.navigator.onLine;
    }
  }, {
    key: "type",
    get: function get() {
      return navigator.connection.effectiveType;
    }
  }, {
    key: "dataSaver",
    get: function get() {
      return navigator.connection.saveData;
    }
  }, {
    key: "subscribe",
    value: function subscribe() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_online) {};
      try {
        if (!_type.eType.func(callback)) {
          throw "invalid callback=".concat(_str.eStr.from(callback));
        }
        var abortOnline = _dom.eDom.listenEvent(window, "online", function () {
          callback(true);
        }, {
          capture: true
        });
        var abortOffline = _dom.eDom.listenEvent(window, "offline", function () {
          callback(false);
        }, {
          capture: true
        });
        return function () {
          abortOnline.abort();
          abortOffline.abort();
        };
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return NaN;
      }
    }
  }]);
  return eOnline;
}();
(function () {
  "use strict";

  _dom.eDom.listenEvent(window, "online", function (event) {
    console.log("online", event);
  }, {
    capture: true
  });
  _dom.eDom.listenEvent(window, "offline", function (event) {
    console.log("offline", event);
  }, {
    capture: true
  });
})();