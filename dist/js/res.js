"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eSuccess = exports.eRes = exports.eError = void 0;
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
var _success = /*#__PURE__*/new WeakMap();
var _message = /*#__PURE__*/new WeakMap();
var _data = /*#__PURE__*/new WeakMap();
var eRes = exports.eRes = /*#__PURE__*/function () {
  //========< constructors
  function eRes() {
    var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, eRes);
    //========< private variables
    _classPrivateFieldInitSpec(this, _success, {
      writable: true,
      value: true
    });
    _classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _data, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _success, success);
    _classPrivateFieldSet(this, _message, message ? message.toString() : null);
    _classPrivateFieldSet(this, _data, data);
  }
  _createClass(eRes, [{
    key: "success",
    get:
    //========< getters
    function get() {
      return _classPrivateFieldGet(this, _success);
    }
  }, {
    key: "message",
    get: function get() {
      return _classPrivateFieldGet(this, _message);
    }
  }, {
    key: "data",
    get: function get() {
      return _classPrivateFieldGet(this, _data);
    }
  }], [{
    key: "success",
    value: function success(message, data) {
      return new eRes(true, message, data);
    }
  }, {
    key: "error",
    value: function error(message, data) {
      return new eRes(false, message, data);
    }
  }]);
  return eRes;
}();
var eSuccess = exports.eSuccess = eRes.success;
var eError = exports.eError = eRes.error;