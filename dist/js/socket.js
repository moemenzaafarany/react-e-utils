"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eSocketServer = void 0;
var _class;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _socket = /*#__PURE__*/new WeakMap();
var _secure = /*#__PURE__*/new WeakMap();
var _host = /*#__PURE__*/new WeakMap();
var _port = /*#__PURE__*/new WeakMap();
var _filepath = /*#__PURE__*/new WeakMap();
var _onMessage = /*#__PURE__*/new WeakMap();
var _onStateChange = /*#__PURE__*/new WeakMap();
var _url = /*#__PURE__*/new WeakMap();
var _state2 = /*#__PURE__*/new WeakMap();
var _connected2 = /*#__PURE__*/new WeakMap();
var _error2 = /*#__PURE__*/new WeakMap();
var _setState = /*#__PURE__*/new WeakSet();
/* eslint-disable no-unused-vars */
var eSocketServer = exports.eSocketServer = /*#__PURE__*/function () {
  //========< public
  function eSocketServer(_ref) {
    var _ref$secure = _ref.secure,
      secure = _ref$secure === void 0 ? false : _ref$secure,
      _ref$host = _ref.host,
      host = _ref$host === void 0 ? null : _ref$host,
      _ref$port = _ref.port,
      port = _ref$port === void 0 ? null : _ref$port,
      _ref$filepath = _ref.filepath,
      filepath = _ref$filepath === void 0 ? null : _ref$filepath,
      _ref$onMessage = _ref.onMessage,
      onMessage = _ref$onMessage === void 0 ? function (_data) {} : _ref$onMessage,
      _ref$onStateChange = _ref.onStateChange,
      onStateChange = _ref$onStateChange === void 0 ? function (_state, _stateText, _connected, _error) {} : _ref$onStateChange;
    _classCallCheck(this, eSocketServer);
    _classPrivateMethodInitSpec(this, _setState);
    //========<
    _classPrivateFieldInitSpec(this, _socket, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _secure, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _host, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _port, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _filepath, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onMessage, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onStateChange, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _url, {
      writable: true,
      value: null
    });
    //
    _classPrivateFieldInitSpec(this, _state2, {
      writable: true,
      value: 0
    });
    _classPrivateFieldInitSpec(this, _connected2, {
      writable: true,
      value: false
    });
    _classPrivateFieldInitSpec(this, _error2, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _secure, secure);
    _classPrivateFieldSet(this, _host, host);
    _classPrivateFieldSet(this, _port, port);
    _classPrivateFieldSet(this, _filepath, filepath);
    _classPrivateFieldSet(this, _onMessage, onMessage);
    _classPrivateFieldSet(this, _onStateChange, onStateChange);
    this.connect();
  }
  _createClass(eSocketServer, [{
    key: "connect",
    value: function connect() {
      var _this = this;
      // close first
      this.close();
      // reopen
      _classPrivateFieldSet(this, _url, "".concat(_classPrivateFieldGet(this, _secure) === true ? "wss" : "ws", "://").concat(_classPrivateFieldGet(this, _host)).concat(_classPrivateFieldGet(this, _port) ? ":".concat(_classPrivateFieldGet(this, _port)) : "").concat(_classPrivateFieldGet(this, _filepath) ? "/".concat(_classPrivateFieldGet(this, _filepath)) : ""));
      _classPrivateFieldSet(this, _socket, new WebSocket(_classPrivateFieldGet(this, _url)));
      _classPrivateMethodGet(this, _setState, _setState2).call(this);
      _classPrivateFieldGet(this, _socket).onopen = function () {
        _classPrivateMethodGet(_this, _setState, _setState2).call(_this);
      };
      _classPrivateFieldGet(this, _socket).onerror = function () {
        _classPrivateMethodGet(_this, _setState, _setState2).call(_this);
      };
      _classPrivateFieldGet(this, _socket).onclose = function () {
        _classPrivateMethodGet(_this, _setState, _setState2).call(_this);
      };
      _classPrivateFieldGet(this, _socket).onmessage = function (evt) {
        _classPrivateMethodGet(_this, _setState, _setState2).call(_this);
        if (_classPrivateFieldGet(_this, _onMessage)) _classPrivateFieldGet(_this, _onMessage).call(_this, evt.data);
      };
    }
  }, {
    key: "send",
    value: function send(data) {
      if (_classPrivateFieldGet(this, _socket) && _classPrivateFieldGet(this, _connected2)) {
        _classPrivateFieldGet(this, _socket).send(data);
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (_classPrivateFieldGet(this, _socket) && _classPrivateFieldGet(this, _connected2)) {
        _classPrivateFieldGet(this, _socket).close();
      }
    }
  }]);
  return eSocketServer;
}();
_class = eSocketServer;
function _setState2(error) {
  _classPrivateFieldSet(this, _state2, _classPrivateFieldGet(this, _socket).readyState);
  _classPrivateFieldSet(this, _connected2, _classPrivateFieldGet(this, _state2) === 1);
  _classPrivateFieldSet(this, _error2, error);
  //
  if (_classPrivateFieldGet(this, _onStateChange)) _classPrivateFieldGet(this, _onStateChange).call(this, _classPrivateFieldGet(this, _state2), _classStaticPrivateFieldSpecGet(_class, _class, _states)[_classPrivateFieldGet(this, _state2)], _classPrivateFieldGet(this, _connected2), _classPrivateFieldGet(this, _error2));
}
//========<
var _states = {
  writable: true,
  value: {
    0: "connecting",
    1: "connected",
    2: "closing",
    3: "closed"
  }
};