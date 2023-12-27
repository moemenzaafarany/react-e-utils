"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiContext = ApiContext;
exports.ApiState = void 0;
exports.ApiStoredContext = ApiStoredContext;
exports.ApiStoredState = void 0;
var _react = require("react");
var _context5 = require("./context");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// states
var ApiState = exports.ApiState = function ApiState(caller, url) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$autoCall = _ref.autoCall,
    autoCall = _ref$autoCall === void 0 ? true : _ref$autoCall,
    _ref$method = _ref.method,
    method = _ref$method === void 0 ? "POST" : _ref$method,
    _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? {} : _ref$headers,
    _ref$urlData = _ref.urlData,
    urlData = _ref$urlData === void 0 ? {} : _ref$urlData,
    _ref$bodyData = _ref.bodyData,
    bodyData = _ref$bodyData === void 0 ? {} : _ref$bodyData,
    _ref$bodyDataType = _ref.bodyDataType,
    bodyDataType = _ref$bodyDataType === void 0 ? null : _ref$bodyDataType,
    _ref$responseType = _ref.responseType,
    responseType = _ref$responseType === void 0 ? null : _ref$responseType,
    _ref$onBefore = _ref.onBefore,
    onBefore = _ref$onBefore === void 0 ? null : _ref$onBefore,
    _ref$onAfter = _ref.onAfter,
    onAfter = _ref$onAfter === void 0 ? null : _ref$onAfter,
    _ref$onSuccess = _ref.onSuccess,
    onSuccess = _ref$onSuccess === void 0 ? function (_ref2) {
      var message = _ref2.message,
        data = _ref2.data;
    } : _ref$onSuccess,
    _ref$onError = _ref.onError,
    onError = _ref$onError === void 0 ? function (_ref3) {
      var message = _ref3.message,
        data = _ref3.data;
    } : _ref$onError;
  var _useState = (0, _react.useState)(autoCall),
    _useState2 = _slicedToArray(_useState, 2),
    getW = _useState2[0],
    setW = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    getV = _useState4[0],
    setV = _useState4[1];
  var call = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _ref5,
        _ref5$method,
        method,
        _ref5$headers,
        headers,
        _ref5$urlData,
        urlData,
        _ref5$bodyData,
        bodyData,
        _ref5$bodyDataType,
        bodyDataType,
        _ref5$responseType,
        responseType,
        _ref5$onBefore,
        onBefore,
        _ref5$onAfter,
        onAfter,
        _ref5$onSuccess,
        onSuccess,
        _ref5$onError,
        onError,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _ref5 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, _ref5$method = _ref5.method, method = _ref5$method === void 0 ? "POST" : _ref5$method, _ref5$headers = _ref5.headers, headers = _ref5$headers === void 0 ? {} : _ref5$headers, _ref5$urlData = _ref5.urlData, urlData = _ref5$urlData === void 0 ? {} : _ref5$urlData, _ref5$bodyData = _ref5.bodyData, bodyData = _ref5$bodyData === void 0 ? {} : _ref5$bodyData, _ref5$bodyDataType = _ref5.bodyDataType, bodyDataType = _ref5$bodyDataType === void 0 ? null : _ref5$bodyDataType, _ref5$responseType = _ref5.responseType, responseType = _ref5$responseType === void 0 ? null : _ref5$responseType, _ref5$onBefore = _ref5.onBefore, onBefore = _ref5$onBefore === void 0 ? null : _ref5$onBefore, _ref5$onAfter = _ref5.onAfter, onAfter = _ref5$onAfter === void 0 ? null : _ref5$onAfter, _ref5$onSuccess = _ref5.onSuccess, onSuccess = _ref5$onSuccess === void 0 ? function (_ref6) {
              var message = _ref6.message,
                data = _ref6.data;
            } : _ref5$onSuccess, _ref5$onError = _ref5.onError, onError = _ref5$onError === void 0 ? function (_ref7) {
              var message = _ref7.message,
                data = _ref7.data;
            } : _ref5$onError;
            setW(true);
            setV(null);
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var r;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return caller.call(url, _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
                      method: method,
                      headers: headers,
                      urlData: urlData,
                      bodyData: bodyData
                    }, bodyDataType && bodyDataType), responseType && responseType), onBefore && onBefore), onAfter && onAfter), {}, {
                      namespace: namespace,
                      storage: storage
                    }));
                  case 2:
                    r = _context.sent;
                    setW(false);
                    if (!(r.success === false)) {
                      _context.next = 10;
                      break;
                    }
                    console.log(r.message, r.data);
                    if (onError) onError(r);else {
                      alert(r.message);
                    }
                    return _context.abrupt("return", false);
                  case 10:
                    setV(r.data);
                    if (onSuccess) onSuccess(r);
                    return _context.abrupt("return", r.data);
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })), 10);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function call() {
      return _ref4.apply(this, arguments);
    };
  }();

  // auto call api
  (0, _react.useEffect)(function () {
    if (autoCall === true && !getV) {
      call({
        method: method,
        headers: headers,
        urlData: urlData,
        bodyData: bodyData,
        bodyDataType: bodyDataType,
        responseType: responseType,
        onBefore: onBefore,
        onAfter: onAfter,
        onSuccess: onSuccess,
        onError: onError
      });
    }
    // eslint-disable-next-line
  }, []);
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
      return value;
    },
    get waiting() {
      return getW;
    },
    set waiting(value) {
      setW(value);
      return value;
    },
    call: call,
    recall: function recall() {
      return call({
        method: method,
        headers: headers,
        urlData: urlData,
        bodyData: bodyData,
        bodyDataType: bodyDataType,
        responseType: responseType,
        onBefore: onBefore,
        onAfter: onAfter,
        onSuccess: onSuccess,
        onError: onError
      });
    }
  };
};
var ApiStoredState = exports.ApiStoredState = function ApiStoredState(caller, url) {
  var _ApisEB$checkStored$d, _ApisEB$checkStored;
  var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref9$autoCall = _ref9.autoCall,
    autoCall = _ref9$autoCall === void 0 ? true : _ref9$autoCall,
    _ref9$autoNS = _ref9.autoNS,
    autoNS = _ref9$autoNS === void 0 ? true : _ref9$autoNS,
    _ref9$method = _ref9.method,
    method = _ref9$method === void 0 ? "POST" : _ref9$method,
    _ref9$headers = _ref9.headers,
    headers = _ref9$headers === void 0 ? {} : _ref9$headers,
    _ref9$urlData = _ref9.urlData,
    urlData = _ref9$urlData === void 0 ? {} : _ref9$urlData,
    _ref9$bodyData = _ref9.bodyData,
    bodyData = _ref9$bodyData === void 0 ? {} : _ref9$bodyData,
    _ref9$bodyDataType = _ref9.bodyDataType,
    bodyDataType = _ref9$bodyDataType === void 0 ? null : _ref9$bodyDataType,
    _ref9$responseType = _ref9.responseType,
    responseType = _ref9$responseType === void 0 ? null : _ref9$responseType,
    _ref9$onBefore = _ref9.onBefore,
    onBefore = _ref9$onBefore === void 0 ? null : _ref9$onBefore,
    _ref9$onAfter = _ref9.onAfter,
    onAfter = _ref9$onAfter === void 0 ? null : _ref9$onAfter,
    _ref9$namespace = _ref9.namespace,
    namespace = _ref9$namespace === void 0 ? "" : _ref9$namespace,
    _ref9$storage = _ref9.storage,
    storage = _ref9$storage === void 0 ? "session" : _ref9$storage,
    _ref9$onSuccess = _ref9.onSuccess,
    onSuccess = _ref9$onSuccess === void 0 ? function (_ref10) {
      var message = _ref10.message,
        data = _ref10.data;
    } : _ref9$onSuccess,
    _ref9$onError = _ref9.onError,
    onError = _ref9$onError === void 0 ? function (_ref11) {
      var message = _ref11.message,
        data = _ref11.data;
    } : _ref9$onError;
  var getNamespace = function getNamespace(namespace, bodyData) {
    if (!autoNS) {
      return namespace;
    } else {
      return "".concat(namespace, ":").concat(eList.objToUrlData(bodyData !== null && bodyData !== void 0 ? bodyData : {}));
    }
  };
  var _useState5 = (0, _react.useState)(getNamespace(namespace, bodyData)),
    _useState6 = _slicedToArray(_useState5, 2),
    getN = _useState6[0],
    setN = _useState6[1];
  var _useState7 = (0, _react.useState)((_ApisEB$checkStored$d = (_ApisEB$checkStored = ApisEB.checkStored(url, getN)) === null || _ApisEB$checkStored === void 0 ? void 0 : _ApisEB$checkStored.data) !== null && _ApisEB$checkStored$d !== void 0 ? _ApisEB$checkStored$d : null),
    _useState8 = _slicedToArray(_useState7, 2),
    getV = _useState8[0],
    setV = _useState8[1];
  var _useState9 = (0, _react.useState)(getV === null && autoCall),
    _useState10 = _slicedToArray(_useState9, 2),
    getW = _useState10[0],
    setW = _useState10[1];
  var call = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _ref13,
        _ref13$method,
        method,
        _ref13$headers,
        headers,
        _ref13$urlData,
        urlData,
        _ref13$bodyData,
        bodyData,
        _ref13$bodyDataType,
        bodyDataType,
        _ref13$responseType,
        responseType,
        _ref13$onBefore,
        onBefore,
        _ref13$onAfter,
        onAfter,
        _ref13$namespace,
        namespace,
        _ref13$storage,
        storage,
        _ref13$onSuccess,
        onSuccess,
        _ref13$onError,
        onError,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _ref13 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, _ref13$method = _ref13.method, method = _ref13$method === void 0 ? "POST" : _ref13$method, _ref13$headers = _ref13.headers, headers = _ref13$headers === void 0 ? {} : _ref13$headers, _ref13$urlData = _ref13.urlData, urlData = _ref13$urlData === void 0 ? {} : _ref13$urlData, _ref13$bodyData = _ref13.bodyData, bodyData = _ref13$bodyData === void 0 ? {} : _ref13$bodyData, _ref13$bodyDataType = _ref13.bodyDataType, bodyDataType = _ref13$bodyDataType === void 0 ? null : _ref13$bodyDataType, _ref13$responseType = _ref13.responseType, responseType = _ref13$responseType === void 0 ? null : _ref13$responseType, _ref13$onBefore = _ref13.onBefore, onBefore = _ref13$onBefore === void 0 ? null : _ref13$onBefore, _ref13$onAfter = _ref13.onAfter, onAfter = _ref13$onAfter === void 0 ? null : _ref13$onAfter, _ref13$namespace = _ref13.namespace, namespace = _ref13$namespace === void 0 ? "" : _ref13$namespace, _ref13$storage = _ref13.storage, storage = _ref13$storage === void 0 ? "session" : _ref13$storage, _ref13$onSuccess = _ref13.onSuccess, onSuccess = _ref13$onSuccess === void 0 ? function (_ref14) {
              var message = _ref14.message,
                data = _ref14.data;
            } : _ref13$onSuccess, _ref13$onError = _ref13.onError, onError = _ref13$onError === void 0 ? function (_ref15) {
              var message = _ref15.message,
                data = _ref15.data;
            } : _ref13$onError;
            setW(true);
            setV(null);
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var r;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return caller.call(url, _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
                      method: method,
                      headers: headers,
                      urlData: urlData,
                      bodyData: bodyData
                    }, bodyDataType && bodyDataType), responseType && responseType), onBefore && onBefore), onAfter && onAfter), {}, {
                      namespace: getNamespace(namespace, bodyData),
                      storage: storage
                    }));
                  case 2:
                    r = _context3.sent;
                    setW(false);
                    setN(getNamespace(namespace, bodyData));
                    if (!(r.success === false)) {
                      _context3.next = 11;
                      break;
                    }
                    console.log(r.message, r.data);
                    if (onError) onError(r);else {
                      alert(r.message);
                    }
                    return _context3.abrupt("return", false);
                  case 11:
                    setV(r.data);
                    if (onSuccess) onSuccess(r);
                    return _context3.abrupt("return", r.data);
                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            })), 10);
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function call() {
      return _ref12.apply(this, arguments);
    };
  }();

  // auto call api
  (0, _react.useEffect)(function () {
    if (autoCall === true && !getV) {
      call({
        method: method,
        headers: headers,
        urlData: urlData,
        bodyData: bodyData,
        bodyDataType: bodyDataType,
        responseType: responseType,
        onBefore: onBefore,
        onAfter: onAfter,
        namespace: namespace,
        storage: storage,
        onSuccess: onSuccess,
        onError: onError
      });
    }
    // eslint-disable-next-line
  }, []);
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
      return value;
    },
    get waiting() {
      return getW;
    },
    set waiting(value) {
      setW(value);
      return value;
    },
    get namespace() {
      return getN;
    },
    set namespace(value) {
      setN(value);
      return value;
    },
    call: call,
    recall: function recall() {
      return call({
        method: method,
        headers: headers,
        urlData: urlData,
        bodyData: bodyData,
        bodyDataType: bodyDataType,
        responseType: responseType,
        onBefore: onBefore,
        onAfter: onAfter,
        namespace: namespace,
        storage: storage,
        onSuccess: onSuccess,
        onError: onError
      });
    }
  };
};
// context
function ApiContext(caller, url) {
  var _ref17 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref17$autoCall = _ref17.autoCall,
    autoCall = _ref17$autoCall === void 0 ? true : _ref17$autoCall,
    _ref17$method = _ref17.method,
    method = _ref17$method === void 0 ? "POST" : _ref17$method,
    _ref17$headers = _ref17.headers,
    headers = _ref17$headers === void 0 ? {} : _ref17$headers,
    _ref17$urlData = _ref17.urlData,
    urlData = _ref17$urlData === void 0 ? {} : _ref17$urlData,
    _ref17$bodyData = _ref17.bodyData,
    bodyData = _ref17$bodyData === void 0 ? {} : _ref17$bodyData,
    _ref17$bodyDataType = _ref17.bodyDataType,
    bodyDataType = _ref17$bodyDataType === void 0 ? null : _ref17$bodyDataType,
    _ref17$responseType = _ref17.responseType,
    responseType = _ref17$responseType === void 0 ? null : _ref17$responseType,
    _ref17$onBefore = _ref17.onBefore,
    onBefore = _ref17$onBefore === void 0 ? null : _ref17$onBefore,
    _ref17$onAfter = _ref17.onAfter,
    onAfter = _ref17$onAfter === void 0 ? null : _ref17$onAfter,
    _ref17$onSuccess = _ref17.onSuccess,
    onSuccess = _ref17$onSuccess === void 0 ? function (_ref18) {
      var message = _ref18.message,
        data = _ref18.data;
    } : _ref17$onSuccess,
    _ref17$onError = _ref17.onError,
    onError = _ref17$onError === void 0 ? function (_ref19) {
      var message = _ref19.message,
        data = _ref19.data;
    } : _ref17$onError,
    _ref17$processData = _ref17.processData,
    processData = _ref17$processData === void 0 ? function (data) {
      return data;
    } : _ref17$processData;
  return (0, _context5.Context)(function () {
    var _ApiState = ApiState(caller, url, {
        autoCall: autoCall,
        method: method,
        headers: headers,
        urlData: urlData,
        bodyData: bodyData,
        bodyDataType: bodyDataType,
        responseType: responseType,
        onBefore: onBefore,
        onAfter: onAfter,
        onSuccess: onSuccess,
        onError: onError
      }),
      value = _ApiState.value,
      waiting = _ApiState.waiting,
      call = _ApiState.call,
      recall = _ApiState.recall;
    return {
      get data() {
        return processData(value);
      },
      value: value,
      waiting: waiting,
      call: call,
      recall: recall
    };
  });
}
function ApiStoredContext(caller, url) {
  var _ref20 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref20$autoCall = _ref20.autoCall,
    autoCall = _ref20$autoCall === void 0 ? true : _ref20$autoCall,
    _ref20$autoNS = _ref20.autoNS,
    autoNS = _ref20$autoNS === void 0 ? true : _ref20$autoNS,
    _ref20$method = _ref20.method,
    method = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    headers = _ref20$headers === void 0 ? {} : _ref20$headers,
    _ref20$urlData = _ref20.urlData,
    urlData = _ref20$urlData === void 0 ? {} : _ref20$urlData,
    _ref20$bodyData = _ref20.bodyData,
    bodyData = _ref20$bodyData === void 0 ? {} : _ref20$bodyData,
    _ref20$bodyDataType = _ref20.bodyDataType,
    bodyDataType = _ref20$bodyDataType === void 0 ? null : _ref20$bodyDataType,
    _ref20$responseType = _ref20.responseType,
    responseType = _ref20$responseType === void 0 ? null : _ref20$responseType,
    _ref20$onBefore = _ref20.onBefore,
    onBefore = _ref20$onBefore === void 0 ? null : _ref20$onBefore,
    _ref20$onAfter = _ref20.onAfter,
    onAfter = _ref20$onAfter === void 0 ? null : _ref20$onAfter,
    _ref20$namespace = _ref20.namespace,
    namespace = _ref20$namespace === void 0 ? "" : _ref20$namespace,
    _ref20$storage = _ref20.storage,
    storage = _ref20$storage === void 0 ? "session" : _ref20$storage,
    _ref20$onSuccess = _ref20.onSuccess,
    onSuccess = _ref20$onSuccess === void 0 ? function (_ref21) {
      var message = _ref21.message,
        data = _ref21.data;
    } : _ref20$onSuccess,
    _ref20$onError = _ref20.onError,
    onError = _ref20$onError === void 0 ? function (_ref22) {
      var message = _ref22.message,
        data = _ref22.data;
    } : _ref20$onError,
    _ref20$processData = _ref20.processData,
    processData = _ref20$processData === void 0 ? function (data) {
      return data;
    } : _ref20$processData;
  return (0, _context5.Context)(function () {
    var _ApiStoredState = ApiStoredState(caller, url, {
        autoCall: autoCall,
        autoNS: autoNS,
        method: method,
        headers: headers,
        urlData: urlData,
        bodyData: bodyData,
        bodyDataType: bodyDataType,
        responseType: responseType,
        onBefore: onBefore,
        onAfter: onAfter,
        namespace: namespace,
        storage: storage,
        onSuccess: onSuccess,
        onError: onError
      }),
      value = _ApiStoredState.value,
      waiting = _ApiStoredState.waiting,
      call = _ApiStoredState.call,
      recall = _ApiStoredState.recall;
    return {
      get data() {
        return processData(value);
      },
      value: value,
      waiting: waiting,
      call: call,
      recall: recall
    };
  });
}