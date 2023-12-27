"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eTimer = exports.eTimeout = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _interval = /*#__PURE__*/new WeakMap();
var _startTime = /*#__PURE__*/new WeakMap();
var _duration = /*#__PURE__*/new WeakMap();
var _callback = /*#__PURE__*/new WeakMap();
var eTimer = exports.eTimer = /*#__PURE__*/function () {
  function eTimer() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (time) {};
    _classCallCheck(this, eTimer);
    _classPrivateFieldInitSpec(this, _interval, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _startTime, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _duration, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _callback, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _duration, duration);
    _classPrivateFieldSet(this, _callback, callback);
  }
  _createClass(eTimer, [{
    key: "start",
    value: function start() {
      var _this = this;
      _classPrivateFieldSet(this, _startTime, performance.now());
      clearInterval(_classPrivateFieldGet(this, _interval));
      _classPrivateFieldGet(this, _callback).call(this, performance.now() - _classPrivateFieldGet(this, _startTime));
      _classPrivateFieldSet(this, _interval, setInterval(function () {
        return _classPrivateFieldGet(_this, _callback).call(_this, performance.now() - _classPrivateFieldGet(_this, _startTime));
      }, _classPrivateFieldGet(this, _duration)));
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(_classPrivateFieldGet(this, _interval));
    }
  }]);
  return eTimer;
}();
var _timeout = /*#__PURE__*/new WeakMap();
var _startTime2 = /*#__PURE__*/new WeakMap();
var _duration2 = /*#__PURE__*/new WeakMap();
var _callback2 = /*#__PURE__*/new WeakMap();
var eTimeout = exports.eTimeout = /*#__PURE__*/function () {
  function eTimeout() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (time) {};
    _classCallCheck(this, eTimeout);
    _classPrivateFieldInitSpec(this, _timeout, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _startTime2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _duration2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _callback2, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _duration2, duration);
    _classPrivateFieldSet(this, _callback2, callback);
  }
  _createClass(eTimeout, [{
    key: "start",
    value: function start() {
      var _this2 = this;
      _classPrivateFieldSet(this, _startTime2, performance.now());
      clearTimeout(_classPrivateFieldGet(this, _timeout));
      _classPrivateFieldSet(this, _timeout, setTimeout(function () {
        return _classPrivateFieldGet(_this2, _callback2).call(_this2, performance.now() - _classPrivateFieldGet(_this2, _startTime2));
      }, _classPrivateFieldGet(this, _duration2)));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(_classPrivateFieldGet(this, _timeout));
    }
  }]);
  return eTimeout;
}();