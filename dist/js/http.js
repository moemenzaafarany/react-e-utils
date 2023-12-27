"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eHttpRequest = exports.eApiCaller = void 0;
var _type = require("./type");
var _num = require("./num");
var _list = require("./list");
var _storage = require("./storage");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _states = /*#__PURE__*/new WeakMap();
var _request = /*#__PURE__*/new WeakMap();
var _method = /*#__PURE__*/new WeakMap();
var _address = /*#__PURE__*/new WeakMap();
var _headers = /*#__PURE__*/new WeakMap();
var _urlData = /*#__PURE__*/new WeakMap();
var _bodyData = /*#__PURE__*/new WeakMap();
var _responseType = /*#__PURE__*/new WeakMap();
var _onStateChange = /*#__PURE__*/new WeakMap();
var _upload = /*#__PURE__*/new WeakMap();
var _download = /*#__PURE__*/new WeakMap();
var _uploadCalc = /*#__PURE__*/new WeakSet();
var _downloadCalc = /*#__PURE__*/new WeakSet();
var _setState = /*#__PURE__*/new WeakSet();
var eHttpRequest = exports.eHttpRequest = /*#__PURE__*/function () {
  //========< public
  function eHttpRequest() {
    var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? null : _ref$headers,
      _ref$urlData = _ref.urlData,
      urlData = _ref$urlData === void 0 ? null : _ref$urlData,
      _ref$bodyData = _ref.bodyData,
      bodyData = _ref$bodyData === void 0 ? null : _ref$bodyData,
      _ref$responseType = _ref.responseType,
      responseType = _ref$responseType === void 0 ? null : _ref$responseType,
      _ref$onStateChange = _ref.onStateChange,
      onStateChange = _ref$onStateChange === void 0 ? null : _ref$onStateChange;
    _classCallCheck(this, eHttpRequest);
    _classPrivateMethodInitSpec(this, _setState);
    _classPrivateMethodInitSpec(this, _downloadCalc);
    //========< private
    _classPrivateMethodInitSpec(this, _uploadCalc);
    //========< private static
    _classPrivateFieldInitSpec(this, _states, {
      writable: true,
      value: {
        0: "unsent",
        1: "opened",
        2: "uploading",
        3: "processing",
        4: "downloading",
        5: "completed"
      }
    });
    //========< private variables
    _classPrivateFieldInitSpec(this, _request, {
      writable: true,
      value: new XMLHttpRequest()
    });
    _classPrivateFieldInitSpec(this, _method, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _address, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _headers, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _urlData, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _bodyData, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _responseType, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onStateChange, {
      writable: true,
      value: null
    });
    //
    _defineProperty(this, "httpCode", null);
    _defineProperty(this, "state", null);
    _defineProperty(this, "stateText", null);
    _defineProperty(this, "error", null);
    _defineProperty(this, "response", null);
    //========< stats
    _defineProperty(this, "stats", {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    });
    //========< upload
    _classPrivateFieldInitSpec(this, _upload, {
      writable: true,
      value: {
        start: null,
        total: 0,
        loaded: 0,
        time: 0,
        duration: 0,
        percentage: 0,
        speed: 0,
        estimate: 0
      }
    });
    //========< download
    _classPrivateFieldInitSpec(this, _download, {
      writable: true,
      value: {
        start: null,
        total: 0,
        loaded: 0,
        time: 0,
        duration: 0,
        percentage: 0,
        speed: 0,
        estimate: 0
      }
    });
    _classPrivateFieldSet(this, _method, method);
    _classPrivateFieldSet(this, _address, address);
    _classPrivateFieldSet(this, _headers, headers);
    _classPrivateFieldSet(this, _urlData, urlData);
    _classPrivateFieldSet(this, _bodyData, bodyData);
    _classPrivateFieldSet(this, _responseType, responseType);
    _classPrivateFieldSet(this, _onStateChange, onStateChange);
    // encode url data
    if (_classPrivateFieldGet(this, _urlData)) {
      var query = "?";
      for (var key in _classPrivateFieldGet(this, _urlData)) query += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(_classPrivateFieldGet(this, _urlData)[key]), "&");
      _classPrivateFieldSet(this, _address, _classPrivateFieldGet(this, _address) + query);
    }
    // setState
    _classPrivateMethodGet(this, _setState, _setState2).call(this, 0, null);
  }
  _createClass(eHttpRequest, [{
    key: "send",
    value: function () {
      var _send = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve) {
                try {
                  // request
                  // response type
                  if (_classPrivateFieldGet(_this, _responseType)) _classPrivateFieldGet(_this, _request).responseType = _classPrivateFieldGet(_this, _responseType);
                  // this.#request.timeout = 4000;
                  _classPrivateFieldGet(_this, _request).open(_classPrivateFieldGet(_this, _method), _classPrivateFieldGet(_this, _address), true
                  // this.#requestUsername,
                  // this.#requestPassword
                  );
                  // 
                  if (_classPrivateFieldGet(_this, _headers)) {
                    for (var key in _classPrivateFieldGet(_this, _headers)) {
                      _classPrivateFieldGet(_this, _request).setRequestHeader(key, _classPrivateFieldGet(_this, _headers)[key]);
                    }
                  }
                  // onloadstart
                  _classPrivateFieldGet(_this, _request).onloadstart = function (event) {
                    return _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 1, null);
                  };
                  // upload onloadstart
                  _classPrivateFieldGet(_this, _request).upload.onloadstart = function (event) {
                    if (_classPrivateFieldGet(_this, _onStateChange)) _classPrivateMethodGet(_this, _uploadCalc, _uploadCalc2).call(_this, event.total, event.loaded);
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 2, null);
                  };
                  // upload onprogress
                  _classPrivateFieldGet(_this, _request).upload.onprogress = function (event) {
                    if (_classPrivateFieldGet(_this, _onStateChange)) _classPrivateMethodGet(_this, _uploadCalc, _uploadCalc2).call(_this, event.total, event.loaded);
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 2, null);
                  };
                  // upload onload
                  _classPrivateFieldGet(_this, _request).upload.onloadend = function (event) {
                    if (_classPrivateFieldGet(_this, _onStateChange)) _classPrivateMethodGet(_this, _uploadCalc, _uploadCalc2).call(_this, event.total, event.loaded);
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 3, null);
                  };
                  // onprogress
                  _classPrivateFieldGet(_this, _request).onprogress = function (event) {
                    if (_classPrivateFieldGet(_this, _onStateChange)) _classPrivateMethodGet(_this, _downloadCalc, _downloadCalc2).call(_this, event.total, event.loaded);
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 4, null);
                  };
                  // onload
                  _classPrivateFieldGet(_this, _request).onloadend = function (event) {
                    if (_classPrivateFieldGet(_this, _onStateChange)) _classPrivateMethodGet(_this, _downloadCalc, _downloadCalc2).call(_this, event.total, event.loaded);
                    _this.response = _classPrivateFieldGet(_this, _request).response;
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 5, null);
                    resolve(_this);
                  };
                  // ontimeout
                  _classPrivateFieldGet(_this, _request).ontimeout = function (event) {
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 5, "timeout");
                    resolve(_this);
                  };
                  // onabort
                  _classPrivateFieldGet(_this, _request).onabort = function (event) {
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 5, "aborted");
                    resolve(_this);
                  };
                  // onerror
                  _classPrivateFieldGet(_this, _request).onerror = function (event) {
                    _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 5, "failed");
                    resolve(_this);
                  };
                  // send
                  _classPrivateFieldGet(_this, _request).send(_classPrivateFieldGet(_this, _bodyData));
                } catch (e) {
                  _classPrivateMethodGet(_this, _setState, _setState2).call(_this, 5, e);
                }
              });
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function send() {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }]);
  return eHttpRequest;
}();
function _uploadCalc2(total, loaded) {
  if (!_classPrivateFieldGet(this, _upload).start) _classPrivateFieldGet(this, _upload).start = performance.now();
  _classPrivateFieldGet(this, _upload).total = total;
  _classPrivateFieldGet(this, _upload).loaded = loaded;
  _classPrivateFieldGet(this, _upload).duration = performance.now() - _classPrivateFieldGet(this, _upload).start;
  if (this.state !== 2) {
    _classPrivateFieldGet(this, _upload).speed = 0;
    _classPrivateFieldGet(this, _upload).estimate = 0;
  } else {
    _classPrivateFieldGet(this, _upload).percentage = _num.eNum.round(_classPrivateFieldGet(this, _upload).loaded / _classPrivateFieldGet(this, _upload).total * 100, 2);
    _classPrivateFieldGet(this, _upload).speed = _num.eNum.round(_classPrivateFieldGet(this, _upload).loaded / _classPrivateFieldGet(this, _upload).duration, 2);
    _classPrivateFieldGet(this, _upload).estimate = _num.eNum.round((_classPrivateFieldGet(this, _upload).total - _classPrivateFieldGet(this, _upload).loaded) / _classPrivateFieldGet(this, _upload).speed, 2);
  }
}
function _downloadCalc2(total, loaded) {
  if (!_classPrivateFieldGet(this, _download).start) _classPrivateFieldGet(this, _download).start = performance.now();
  _classPrivateFieldGet(this, _download).total = total;
  _classPrivateFieldGet(this, _download).loaded = loaded;
  _classPrivateFieldGet(this, _download).duration = performance.now() - _classPrivateFieldGet(this, _download).start;
  if (this.state !== 4) {
    _classPrivateFieldGet(this, _download).speed = 0;
    _classPrivateFieldGet(this, _download).estimate = 0;
  } else {
    _classPrivateFieldGet(this, _download).percentage = _num.eNum.round(_classPrivateFieldGet(this, _download).loaded / _classPrivateFieldGet(this, _download).total * 100, 2);
    _classPrivateFieldGet(this, _download).speed = _num.eNum.round(_classPrivateFieldGet(this, _download).loaded / _classPrivateFieldGet(this, _download).duration, 2);
    _classPrivateFieldGet(this, _download).estimate = _num.eNum.round((_classPrivateFieldGet(this, _download).total - _classPrivateFieldGet(this, _download).loaded) / _classPrivateFieldGet(this, _download).speed, 2);
  }
}
function _setState2(state) {
  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  this.httpCode = _classPrivateFieldGet(this, _request).status;
  this.state = state;
  this.stateText = _classPrivateFieldGet(this, _states)[state];
  this.error = error;
  //
  if (!this.stats[state]) {
    var _this$stats;
    this.stats[state] = performance.now();
    if (state > 0) this.stats[state - 1] = this.stats[state] - ((_this$stats = this.stats[state - 1]) !== null && _this$stats !== void 0 ? _this$stats : 0);
  }
  //
  if (_classPrivateFieldGet(this, _onStateChange)) _classPrivateFieldGet(this, _onStateChange).call(this, this);
}
var _baseUrl = /*#__PURE__*/new WeakMap();
var _defaultHeaders = /*#__PURE__*/new WeakMap();
var _defaultUrlData = /*#__PURE__*/new WeakMap();
var _defaultBodyData = /*#__PURE__*/new WeakMap();
var _bodyDataType = /*#__PURE__*/new WeakMap();
var _responseHandler = /*#__PURE__*/new WeakMap();
var _responseType2 = /*#__PURE__*/new WeakMap();
var _onBefore = /*#__PURE__*/new WeakMap();
var _onAfter = /*#__PURE__*/new WeakMap();
var eApiCaller = exports.eApiCaller = /*#__PURE__*/function () {
  //========< public
  function eApiCaller() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$defaultUrlData = _ref2.defaultUrlData,
      defaultUrlData = _ref2$defaultUrlData === void 0 ? {} : _ref2$defaultUrlData,
      _ref2$defaultBodyData = _ref2.defaultBodyData,
      defaultBodyData = _ref2$defaultBodyData === void 0 ? {} : _ref2$defaultBodyData,
      _ref2$defaultHeaders = _ref2.defaultHeaders,
      defaultHeaders = _ref2$defaultHeaders === void 0 ? {} : _ref2$defaultHeaders,
      _ref2$bodyDataType = _ref2.bodyDataType,
      bodyDataType = _ref2$bodyDataType === void 0 ? "json" : _ref2$bodyDataType,
      _ref2$responseHandler = _ref2.responseHandler,
      responseHandler = _ref2$responseHandler === void 0 ? function (request) {
        return eSuccess(null, null);
      } : _ref2$responseHandler,
      _ref2$responseType = _ref2.responseType,
      responseType = _ref2$responseType === void 0 ? "json" : _ref2$responseType,
      _ref2$onBefore = _ref2.onBefore,
      onBefore = _ref2$onBefore === void 0 ? function () {} : _ref2$onBefore,
      _ref2$onAfter = _ref2.onAfter,
      onAfter = _ref2$onAfter === void 0 ? function () {} : _ref2$onAfter;
    _classCallCheck(this, eApiCaller);
    //========< private variables
    _classPrivateFieldInitSpec(this, _baseUrl, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _defaultHeaders, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _defaultUrlData, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _defaultBodyData, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _bodyDataType, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _responseHandler, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _responseType2, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onBefore, {
      writable: true,
      value: null
    });
    _classPrivateFieldInitSpec(this, _onAfter, {
      writable: true,
      value: null
    });
    _classPrivateFieldSet(this, _baseUrl, baseUrl);
    _classPrivateFieldSet(this, _defaultHeaders, defaultHeaders !== null && defaultHeaders !== void 0 ? defaultHeaders : {});
    _classPrivateFieldSet(this, _defaultUrlData, defaultUrlData !== null && defaultUrlData !== void 0 ? defaultUrlData : {});
    _classPrivateFieldSet(this, _defaultBodyData, defaultBodyData !== null && defaultBodyData !== void 0 ? defaultBodyData : {});
    _classPrivateFieldSet(this, _bodyDataType, bodyDataType);
    _classPrivateFieldSet(this, _responseHandler, responseHandler);
    _classPrivateFieldSet(this, _responseType2, responseType);
    _classPrivateFieldSet(this, _onBefore, onBefore);
    _classPrivateFieldSet(this, _onAfter, onAfter);
  }
  //========< public
  _createClass(eApiCaller, [{
    key: "baseUrl",
    get: function get() {
      return _classPrivateFieldGet(this, _baseUrl);
    }
  }, {
    key: "call",
    value: function () {
      var _call = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
        var _ref3,
          _ref3$method,
          method,
          _ref3$headers,
          headers,
          _ref3$urlData,
          urlData,
          _ref3$bodyData,
          bodyData,
          _ref3$bodyDataType,
          bodyDataType,
          _ref3$responseType,
          responseType,
          _ref3$onBefore,
          onBefore,
          _ref3$onAfter,
          onAfter,
          request,
          _this$constructor,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _ref3 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, _ref3$method = _ref3.method, method = _ref3$method === void 0 ? "POST" : _ref3$method, _ref3$headers = _ref3.headers, headers = _ref3$headers === void 0 ? {} : _ref3$headers, _ref3$urlData = _ref3.urlData, urlData = _ref3$urlData === void 0 ? {} : _ref3$urlData, _ref3$bodyData = _ref3.bodyData, bodyData = _ref3$bodyData === void 0 ? {} : _ref3$bodyData, _ref3$bodyDataType = _ref3.bodyDataType, bodyDataType = _ref3$bodyDataType === void 0 ? _classPrivateFieldGet(this, _bodyDataType) : _ref3$bodyDataType, _ref3$responseType = _ref3.responseType, responseType = _ref3$responseType === void 0 ? _classPrivateFieldGet(this, _responseType2) : _ref3$responseType, _ref3$onBefore = _ref3.onBefore, onBefore = _ref3$onBefore === void 0 ? _classPrivateFieldGet(this, _onBefore) : _ref3$onBefore, _ref3$onAfter = _ref3.onAfter, onAfter = _ref3$onAfter === void 0 ? _classPrivateFieldGet(this, _onAfter) : _ref3$onAfter;
              _context2.prev = 1;
              // before
              if (_type.eType.func(onBefore)) onBefore();
              // add default headers
              if (!_type.eType.obj(headers)) headers = {};
              headers = _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _defaultHeaders)), headers);
              // add default url data
              if (!_type.eType.obj(urlData)) urlData = {};
              urlData = _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _defaultUrlData)), urlData);
              urlData = _list.eList.objToUrlData(urlData);
              if (urlData) urlData = "?".concat(urlData);
              // add body data
              if (_type.eType.formData(bodyData)) {
                bodyData = _list.eList.formDataToObj(bodyData);
              }
              if (!_type.eType.obj(bodyData)) {
                bodyData = {};
              }
              bodyData = _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _defaultBodyData)), bodyData);
              _context2.t0 = bodyDataType;
              _context2.next = _context2.t0 === "formdata" ? 15 : 17;
              break;
            case 15:
              bodyData = _list.eList.objToFormData(bodyData);
              return _context2.abrupt("break", 19);
            case 17:
              bodyData = JSON.stringify();
              return _context2.abrupt("break", 19);
            case 19:
              // xhr
              request = new eHttpRequest(method, _classPrivateFieldGet(this, _baseUrl) + url + urlData, {
                headers: headers,
                responseType: responseType,
                bodyData: bodyData
              }); // await response
              _context2.next = 22;
              return request.send();
            case 22:
              // after
              if (_type.eType.func(onAfter)) onAfter();
              // return
              return _context2.abrupt("return", _classPrivateFieldGet(this, _responseHandler).call(this, request));
            case 26:
              _context2.prev = 26;
              _context2.t1 = _context2["catch"](1);
              console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, _context2.t1);
              return _context2.abrupt("return", null);
            case 30:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 26]]);
      }));
      function call(_x) {
        return _call.apply(this, arguments);
      }
      return call;
    }() //========< public
  }, {
    key: "callStored",
    value: function () {
      var _callStored = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
        var _ref4,
          _ref4$method,
          method,
          _ref4$headers,
          headers,
          _ref4$urlData,
          urlData,
          _ref4$bodyData,
          bodyData,
          _ref4$bodyDataType,
          bodyDataType,
          _ref4$responseType,
          responseType,
          _ref4$onBefore,
          onBefore,
          _ref4$onAfter,
          onAfter,
          _ref4$namespace,
          namespace,
          _ref4$storage,
          storage,
          name,
          res,
          r,
          _this$constructor2,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _ref4 = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {}, _ref4$method = _ref4.method, method = _ref4$method === void 0 ? "POST" : _ref4$method, _ref4$headers = _ref4.headers, headers = _ref4$headers === void 0 ? {} : _ref4$headers, _ref4$urlData = _ref4.urlData, urlData = _ref4$urlData === void 0 ? {} : _ref4$urlData, _ref4$bodyData = _ref4.bodyData, bodyData = _ref4$bodyData === void 0 ? {} : _ref4$bodyData, _ref4$bodyDataType = _ref4.bodyDataType, bodyDataType = _ref4$bodyDataType === void 0 ? _classPrivateFieldGet(this, _bodyDataType) : _ref4$bodyDataType, _ref4$responseType = _ref4.responseType, responseType = _ref4$responseType === void 0 ? _classPrivateFieldGet(this, _responseType2) : _ref4$responseType, _ref4$onBefore = _ref4.onBefore, onBefore = _ref4$onBefore === void 0 ? _classPrivateFieldGet(this, _onBefore) : _ref4$onBefore, _ref4$onAfter = _ref4.onAfter, onAfter = _ref4$onAfter === void 0 ? _classPrivateFieldGet(this, _onAfter) : _ref4$onAfter, _ref4$namespace = _ref4.namespace, namespace = _ref4$namespace === void 0 ? "" : _ref4$namespace, _ref4$storage = _ref4.storage, storage = _ref4$storage === void 0 ? "session" : _ref4$storage;
              _context3.prev = 1;
              name = "".concat(_classPrivateFieldGet(this, _baseUrl)).concat(url).concat(namespace && ":".concat(namespace)); // check data exists
              if (storage === "locale") res = _storage.eLocaleStorage.get(name);else res = _storage.eSessionStorage.get(name);
              if (!res) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return", eSuccess(res.message, res.data));
            case 6:
              _context3.next = 8;
              return this.call(url, {
                method: method,
                headers: headers,
                urlData: urlData,
                bodyData: bodyData,
                bodyDataType: bodyDataType,
                responseType: responseType,
                onBefore: onBefore,
                onAfter: onAfter
              });
            case 8:
              r = _context3.sent;
              if (!(r.success === false)) {
                _context3.next = 13;
                break;
              }
              return _context3.abrupt("return", r);
            case 13:
              // success save
              if (storage === "locale") {
                _storage.eLocaleStorage.set(name, {
                  message: r.message,
                  data: r.data
                });
              } else {
                _storage.eSessionStorage.set(name, {
                  message: r.message,
                  data: r.data
                });
              }
              return _context3.abrupt("return", eSuccess(r.message, r.data));
            case 15:
              _context3.next = 21;
              break;
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](1);
              console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, _context3.t0);
              return _context3.abrupt("return", null);
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[1, 17]]);
      }));
      function callStored(_x2) {
        return _callStored.apply(this, arguments);
      }
      return callStored;
    }() //========< public
  }, {
    key: "checkStored",
    value: function checkStored(url) {
      var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "session";
      try {
        var name = "".concat(namespace, ":").concat(_classPrivateFieldGet(this, _baseUrl)).concat(url);
        if (storage === "locale") return _storage.eLocaleStorage.get(name);else return _storage.eSessionStorage.get(name);
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return null;
      }
    }
  }]);
  return eApiCaller;
}();