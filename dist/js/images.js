"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eImageEditor = void 0;
var _type = require("./type");
var _str = require("./str");
var _list = require("./list");
var _file = require("./file");
var _class;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _canvas = /*#__PURE__*/new WeakMap();
var _context = /*#__PURE__*/new WeakMap();
var _source = /*#__PURE__*/new WeakMap();
var _output = /*#__PURE__*/new WeakMap();
var _edits = /*#__PURE__*/new WeakMap();
var _getSourceBlob = /*#__PURE__*/new WeakSet();
var _apply = /*#__PURE__*/new WeakSet();
var eImageEditor = exports.eImageEditor = /*#__PURE__*/function () {
  //========< empty const
  function eImageEditor(image) {
    _classCallCheck(this, eImageEditor);
    //========< apply changes
    _classPrivateMethodInitSpec(this, _apply);
    _classPrivateMethodInitSpec(this, _getSourceBlob);
    //========< image
    _classPrivateFieldInitSpec(this, _canvas, {
      writable: true,
      value: document.createElement("canvas")
    });
    _classPrivateFieldInitSpec(this, _context, {
      writable: true,
      value: _classPrivateFieldGet(this, _canvas).getContext("2d")
    });
    _classPrivateFieldInitSpec(this, _source, {
      writable: true,
      value: {
        image: null,
        blob: null,
        width: null,
        height: null,
        ratio: null,
        size: null
      }
    });
    _classPrivateFieldInitSpec(this, _output, {
      writable: true,
      value: {
        image: null,
        blob: null,
        width: null,
        height: null,
        ratio: null,
        size: null
      }
    });
    _classPrivateFieldInitSpec(this, _edits, {
      writable: true,
      value: {
        width: null,
        height: null,
        quality: null,
        rotation: null,
        t: null,
        b: null,
        l: null,
        r: null,
        x: null,
        y: null,
        w: null,
        h: null
      }
    });
    _classPrivateFieldGet(this, _source).image = image;
  }
  //========< set source
  _createClass(eImageEditor, [{
    key: "sourceData",
    get: function get() {
      return _classPrivateFieldGet(this, _source);
    }
  }, {
    key: "outputData",
    get: function get() {
      return _classPrivateFieldGet(this, _output);
    }
  }, {
    key: "setSource",
    value: function () {
      var _setSource = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(image) {
        var _this$constructor;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (_type.eType.image(image, "Image")) {
                _context2.next = 3;
                break;
              }
              throw "invalid image=".concat(_str.eStr.from(image));
            case 3:
              //
              _classPrivateFieldSet(this, _edits, {
                width: null,
                height: null,
                quality: null,
                rotation: null,
                t: null,
                b: null,
                l: null,
                r: null,
                x: null,
                y: null,
                w: null,
                h: null
              });
              //
              _classPrivateFieldGet(this, _source).image = image;
              _classPrivateFieldGet(this, _source).width = image.naturalWidth;
              _classPrivateFieldGet(this, _source).height = image.naturalHeight;
              _classPrivateFieldGet(this, _source).ratio = _classPrivateFieldGet(this, _source).width / _classPrivateFieldGet(this, _source).height;
              _context2.next = 10;
              return _classPrivateMethodGet(this, _getSourceBlob, _getSourceBlob2).call(this);
            case 10:
              _classPrivateFieldGet(this, _source).blob = _context2.sent;
              _classPrivateFieldGet(this, _source).size = _classPrivateFieldGet(this, _source).blob.size;
              //
              _context2.next = 14;
              return _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 14:
              _context2.next = 20;
              break;
            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, _context2.t0);
              return _context2.abrupt("return", undefined);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee, this, [[0, 16]]);
      }));
      function setSource(_x) {
        return _setSource.apply(this, arguments);
      }
      return setSource;
    }()
  }, {
    key: "setSourceFromFile",
    value: function () {
      var _setSourceFromFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(file) {
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = this;
              _context3.next = 3;
              return eImageEditor.getImageFromFile(file);
            case 3:
              _context3.t1 = _context3.sent;
              _context3.next = 6;
              return _context3.t0.setSource.call(_context3.t0, _context3.t1);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee2, this);
      }));
      function setSourceFromFile(_x2) {
        return _setSourceFromFile.apply(this, arguments);
      }
      return setSourceFromFile;
    }()
  }, {
    key: "setSourceFromUrl",
    value: function () {
      var _setSourceFromUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
        return _regeneratorRuntime().wrap(function _callee3$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = this;
              _context4.next = 3;
              return eImageEditor.getImageFromUrl(url);
            case 3:
              _context4.t1 = _context4.sent;
              _context4.next = 6;
              return _context4.t0.setSource.call(_context4.t0, _context4.t1);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee3, this);
      }));
      function setSourceFromUrl(_x3) {
        return _setSourceFromUrl.apply(this, arguments);
      }
      return setSourceFromUrl;
    }()
  }, {
    key: "displayCanvas",
    value:
    //========< display
    function displayCanvas(element) {
      element.append(_classPrivateFieldGet(this, _canvas));
    }
    //========< edits
  }, {
    key: "setWidth",
    value: function () {
      var _setWidth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(width) {
        var keepRatio,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              keepRatio = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;
              if (_type.eType.num(width)) _classPrivateFieldGet(this, _edits).width = width;else _classPrivateFieldGet(this, _edits).width = _classPrivateFieldGet(this, _source).width;
              if (keepRatio) _classPrivateFieldGet(this, _edits).height = _classPrivateFieldGet(this, _edits).width / _classPrivateFieldGet(this, _source).ratio;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee4, this);
      }));
      function setWidth(_x4) {
        return _setWidth.apply(this, arguments);
      }
      return setWidth;
    }()
  }, {
    key: "setHeight",
    value: function () {
      var _setHeight = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(height) {
        var keepRatio,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              keepRatio = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;
              if (_type.eType.num(height)) _classPrivateFieldGet(this, _edits).height = height;else _classPrivateFieldGet(this, _edits).height = _classPrivateFieldGet(this, _source).height;
              if (keepRatio) _classPrivateFieldGet(this, _edits).width = _classPrivateFieldGet(this, _edits).height * _classPrivateFieldGet(this, _source).ratio;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee5, this);
      }));
      function setHeight(_x5) {
        return _setHeight.apply(this, arguments);
      }
      return setHeight;
    }()
  }, {
    key: "setQuality",
    value: function () {
      var _setQuality = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(qlty) {
        return _regeneratorRuntime().wrap(function _callee6$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).quality = qlty / 100;
              if (_classPrivateFieldGet(this, _edits).quality === 1) _classPrivateFieldSet(this, _edits, _list.eList.removeKeyFromObj(_classPrivateFieldGet(this, _edits), "quality"));
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee6, this);
      }));
      function setQuality(_x6) {
        return _setQuality.apply(this, arguments);
      }
      return setQuality;
    }()
  }, {
    key: "setRotation",
    value: function () {
      var _setRotation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(rotation) {
        return _regeneratorRuntime().wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).rotation = rotation * (Math.PI / 180);
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee7, this);
      }));
      function setRotation(_x7) {
        return _setRotation.apply(this, arguments);
      }
      return setRotation;
    }()
  }, {
    key: "setZoom",
    value: function () {
      var _setZoom = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(x, y, width, height) {
        return _regeneratorRuntime().wrap(function _callee8$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).x = x;
              _classPrivateFieldGet(this, _edits).y = y;
              _classPrivateFieldGet(this, _edits).w = width;
              _classPrivateFieldGet(this, _edits).h = height;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee8, this);
      }));
      function setZoom(_x8, _x9, _x10, _x11) {
        return _setZoom.apply(this, arguments);
      }
      return setZoom;
    }()
  }, {
    key: "setPadding",
    value: function () {
      var _setPadding = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(t, b, l, r) {
        return _regeneratorRuntime().wrap(function _callee9$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).t = t;
              _classPrivateFieldGet(this, _edits).b = b;
              _classPrivateFieldGet(this, _edits).l = l;
              _classPrivateFieldGet(this, _edits).r = r;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee9, this);
      }));
      function setPadding(_x12, _x13, _x14, _x15) {
        return _setPadding.apply(this, arguments);
      }
      return setPadding;
    }()
  }, {
    key: "setPaddingT",
    value: function () {
      var _setPaddingT = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(t) {
        return _regeneratorRuntime().wrap(function _callee10$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).t = t;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee10, this);
      }));
      function setPaddingT(_x16) {
        return _setPaddingT.apply(this, arguments);
      }
      return setPaddingT;
    }()
  }, {
    key: "setPaddingB",
    value: function () {
      var _setPaddingB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(b) {
        return _regeneratorRuntime().wrap(function _callee11$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).b = b;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 2:
            case "end":
              return _context12.stop();
          }
        }, _callee11, this);
      }));
      function setPaddingB(_x17) {
        return _setPaddingB.apply(this, arguments);
      }
      return setPaddingB;
    }()
  }, {
    key: "setPaddingL",
    value: function () {
      var _setPaddingL = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(l) {
        return _regeneratorRuntime().wrap(function _callee12$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).l = l;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 2:
            case "end":
              return _context13.stop();
          }
        }, _callee12, this);
      }));
      function setPaddingL(_x18) {
        return _setPaddingL.apply(this, arguments);
      }
      return setPaddingL;
    }()
  }, {
    key: "setPaddingR",
    value: function () {
      var _setPaddingR = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(r) {
        return _regeneratorRuntime().wrap(function _callee13$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _classPrivateFieldGet(this, _edits).r = r;
              _classPrivateMethodGet(this, _apply, _apply2).call(this);
            case 2:
            case "end":
              return _context14.stop();
          }
        }, _callee13, this);
      }));
      function setPaddingR(_x19) {
        return _setPaddingR.apply(this, arguments);
      }
      return setPaddingR;
    }() //========< apply changes
  }, {
    key: "setIcon",
    value: function () {
      var _setIcon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var radius,
          quality,
          keepRatio,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              radius = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : 64;
              quality = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : 75;
              keepRatio = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : false;
              this.setQuality(quality);
              if (!keepRatio) {
                this.setWidth(radius, keepRatio);
                this.setHeight(radius, keepRatio);
              } else _classPrivateFieldGet(this, _source).ratio >= 1 ? this.setWidth(radius, keepRatio) : this.setHeight(radius, keepRatio);
            case 5:
            case "end":
              return _context15.stop();
          }
        }, _callee14, this);
      }));
      function setIcon() {
        return _setIcon.apply(this, arguments);
      }
      return setIcon;
    }()
  }, {
    key: "setThumbnail",
    value: function () {
      var _setThumbnail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var radius,
          quality,
          keepRatio,
          _args15 = arguments;
        return _regeneratorRuntime().wrap(function _callee15$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              radius = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : 225;
              quality = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : 75;
              keepRatio = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : false;
              this.setQuality(quality);
              if (!keepRatio) {
                this.setWidth(radius, keepRatio);
                this.setHeight(radius, keepRatio);
              } else _classPrivateFieldGet(this, _source).ratio >= 1 ? this.setWidth(radius, keepRatio) : this.setHeight(radius, keepRatio);
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee15, this);
      }));
      function setThumbnail() {
        return _setThumbnail.apply(this, arguments);
      }
      return setThumbnail;
    }()
  }, {
    key: "setBanner",
    value: function () {
      var _setBanner = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        var width,
          height,
          quality,
          keepRatio,
          _args16 = arguments;
        return _regeneratorRuntime().wrap(function _callee16$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              width = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : 800;
              height = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : 600;
              quality = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : 75;
              keepRatio = _args16.length > 3 && _args16[3] !== undefined ? _args16[3] : false;
              this.setQuality(quality);
              this.setWidth(width, keepRatio);
              this.setHeight(height, keepRatio);
            case 7:
            case "end":
              return _context17.stop();
          }
        }, _callee16, this);
      }));
      function setBanner() {
        return _setBanner.apply(this, arguments);
      }
      return setBanner;
    }()
  }, {
    key: "getAsFile",
    value:
    //========< apply changes
    function getAsFile() {
      var arr = _classPrivateFieldGet(this, _source).image.src.split("/");
      return new File([_classPrivateFieldGet(this, _output).blob], arr[arr.length - 1], {
        type: _classPrivateFieldGet(this, _output).blob.type,
        lastModified: new Date().getTime()
      });
    }
  }, {
    key: "getAsDataUrl",
    value: function () {
      var _getAsDataUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        return _regeneratorRuntime().wrap(function _callee17$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              _context18.next = 2;
              return _file.eFile.getContentAsDataURL(this.getAsFile());
            case 2:
              return _context18.abrupt("return", _context18.sent);
            case 3:
            case "end":
              return _context18.stop();
          }
        }, _callee17, this);
      }));
      function getAsDataUrl() {
        return _getAsDataUrl.apply(this, arguments);
      }
      return getAsDataUrl;
    }() //========< getImage async
  }], [{
    key: "getImageFromFile",
    value: function () {
      var _getImageFromFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(file) {
        var _this$constructor2;
        return _regeneratorRuntime().wrap(function _callee18$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _context19.prev = 0;
              if (_type.eType.file(file)) {
                _context19.next = 3;
                break;
              }
              throw "invalid file=".concat(_str.eStr.from(file));
            case 3:
              _context19.t0 = eImageEditor;
              _context19.next = 6;
              return _file.eFile.getContentAsDataURL(file);
            case 6:
              _context19.t1 = _context19.sent;
              _context19.next = 9;
              return _context19.t0.getImageFromUrl.call(_context19.t0, _context19.t1);
            case 9:
              return _context19.abrupt("return", _context19.sent);
            case 12:
              _context19.prev = 12;
              _context19.t2 = _context19["catch"](0);
              console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, _context19.t2);
              return _context19.abrupt("return", undefined);
            case 16:
            case "end":
              return _context19.stop();
          }
        }, _callee18, this, [[0, 12]]);
      }));
      function getImageFromFile(_x20) {
        return _getImageFromFile.apply(this, arguments);
      }
      return getImageFromFile;
    }()
  }, {
    key: "getImageFromUrl",
    value: function () {
      var _getImageFromUrl = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(url) {
        return _regeneratorRuntime().wrap(function _callee19$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              return _context20.abrupt("return", new Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                  return resolve(image);
                };
                image.onerror = function () {
                  return reject("error loading image");
                };
                image.src = url;
              }));
            case 1:
            case "end":
              return _context20.stop();
          }
        }, _callee19);
      }));
      function getImageFromUrl(_x21) {
        return _getImageFromUrl.apply(this, arguments);
      }
      return getImageFromUrl;
    }()
  }]);
  return eImageEditor;
}();
_class = eImageEditor;
function _getSourceBlob2() {
  return _getSourceBlob3.apply(this, arguments);
}
function _getSourceBlob3() {
  _getSourceBlob3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    var _this = this;
    return _regeneratorRuntime().wrap(function _callee21$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          return _context22.abrupt("return", new Promise(function (resolve) {
            _classPrivateFieldGet(_this, _canvas).width = _classPrivateFieldGet(_this, _source).width;
            _classPrivateFieldGet(_this, _canvas).height = _classPrivateFieldGet(_this, _source).height;
            _classPrivateFieldGet(_this, _context).globalCompositeOperation = "source-over";
            _classPrivateFieldGet(_this, _context).clearRect(0, 0, _classPrivateFieldGet(_this, _canvas).width, _classPrivateFieldGet(_this, _canvas).height);
            _classPrivateFieldGet(_this, _context).drawImage(_classPrivateFieldGet(_this, _source).image, 0, 0, _classPrivateFieldGet(_this, _canvas).width, _classPrivateFieldGet(_this, _canvas).height);
            _classPrivateFieldGet(_this, _canvas).toBlob( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(blob) {
                return _regeneratorRuntime().wrap(function _callee20$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      return _context21.abrupt("return", resolve(blob));
                    case 1:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee20);
              }));
              return function (_x22) {
                return _ref.apply(this, arguments);
              };
            }());
          }));
        case 1:
        case "end":
          return _context22.stop();
      }
    }, _callee21);
  }));
  return _getSourceBlob3.apply(this, arguments);
}
function _apply2() {
  return _apply3.apply(this, arguments);
}
function _apply3() {
  _apply3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
    var _this2 = this;
    return _regeneratorRuntime().wrap(function _callee25$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          return _context26.abrupt("return", new Promise(function (resolve) {
            var _classPrivateFieldGet2, _classPrivateFieldGet3;
            _classPrivateFieldSet(_this2, _context, _classPrivateFieldGet(_this2, _canvas).getContext("2d"));
            // new width and height
            var imageW = (_classPrivateFieldGet2 = _classPrivateFieldGet(_this2, _edits).width) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : _classPrivateFieldGet(_this2, _source).width;
            var imageH = (_classPrivateFieldGet3 = _classPrivateFieldGet(_this2, _edits).height) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : _classPrivateFieldGet(_this2, _source).height;
            //
            _classPrivateFieldGet(_this2, _canvas).width = imageW;
            _classPrivateFieldGet(_this2, _canvas).height = imageH;
            // 
            if (_classPrivateFieldGet(_this2, _edits).rotation) {
              var sinAngle = Math.sin(_classPrivateFieldGet(_this2, _edits).rotation);
              var cosAngle = Math.cos(_classPrivateFieldGet(_this2, _edits).rotation);
              _classPrivateFieldGet(_this2, _canvas).width = Math.abs(imageW * cosAngle) + Math.abs(imageH * sinAngle);
              _classPrivateFieldGet(_this2, _canvas).height = Math.abs(imageW * sinAngle) + Math.abs(imageH * cosAngle);
            }
            // set context shit
            _classPrivateFieldGet(_this2, _context).globalCompositeOperation = "source-over";
            // rotation 
            _classPrivateFieldGet(_this2, _context).translate(_classPrivateFieldGet(_this2, _canvas).width / 2, _classPrivateFieldGet(_this2, _canvas).height / 2);
            if (_classPrivateFieldGet(_this2, _edits).rotation) _classPrivateFieldGet(_this2, _context).rotate(_classPrivateFieldGet(_this2, _edits).rotation);
            // draw image
            _classPrivateFieldGet(_this2, _context).drawImage(_classPrivateFieldGet(_this2, _source).image, -(imageW / 2), -(imageH / 2), imageW, imageH);
            _classPrivateFieldGet(_this2, _canvas).toBlob( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(b1) {
                var _classPrivateFieldGet4, _classPrivateFieldGet5, _classPrivateFieldGet6, _classPrivateFieldGet7, _classPrivateFieldGet8, _classPrivateFieldGet9, _classPrivateFieldGet10, _classPrivateFieldGet11, _classPrivateFieldGet12, _classPrivateFieldGet13;
                var img1;
                return _regeneratorRuntime().wrap(function _callee24$(_context25) {
                  while (1) switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return _class.getImageFromUrl(URL.createObjectURL(b1));
                    case 2:
                      img1 = _context25.sent;
                      // reset
                      _classPrivateFieldGet(_this2, _canvas).width = (_classPrivateFieldGet4 = _classPrivateFieldGet(_this2, _edits).w) !== null && _classPrivateFieldGet4 !== void 0 ? _classPrivateFieldGet4 : _classPrivateFieldGet(_this2, _canvas).width + ((_classPrivateFieldGet5 = _classPrivateFieldGet(_this2, _edits).r) !== null && _classPrivateFieldGet5 !== void 0 ? _classPrivateFieldGet5 : 0) + ((_classPrivateFieldGet6 = _classPrivateFieldGet(_this2, _edits).l) !== null && _classPrivateFieldGet6 !== void 0 ? _classPrivateFieldGet6 : 0);
                      _classPrivateFieldGet(_this2, _canvas).height = (_classPrivateFieldGet7 = _classPrivateFieldGet(_this2, _edits).h) !== null && _classPrivateFieldGet7 !== void 0 ? _classPrivateFieldGet7 : _classPrivateFieldGet(_this2, _canvas).height + ((_classPrivateFieldGet8 = _classPrivateFieldGet(_this2, _edits).b) !== null && _classPrivateFieldGet8 !== void 0 ? _classPrivateFieldGet8 : 0) + ((_classPrivateFieldGet9 = _classPrivateFieldGet(_this2, _edits).t) !== null && _classPrivateFieldGet9 !== void 0 ? _classPrivateFieldGet9 : 0);
                      // redraw
                      _classPrivateFieldSet(_this2, _context, _classPrivateFieldGet(_this2, _canvas).getContext("2d"));
                      _classPrivateFieldGet(_this2, _context).globalCompositeOperation = "source-over";
                      _classPrivateFieldGet(_this2, _context).drawImage(img1, (_classPrivateFieldGet10 = -_classPrivateFieldGet(_this2, _edits).x) !== null && _classPrivateFieldGet10 !== void 0 ? _classPrivateFieldGet10 : (_classPrivateFieldGet11 = _classPrivateFieldGet(_this2, _edits).l) !== null && _classPrivateFieldGet11 !== void 0 ? _classPrivateFieldGet11 : 0, (_classPrivateFieldGet12 = -_classPrivateFieldGet(_this2, _edits).y) !== null && _classPrivateFieldGet12 !== void 0 ? _classPrivateFieldGet12 : (_classPrivateFieldGet13 = _classPrivateFieldGet(_this2, _edits).t) !== null && _classPrivateFieldGet13 !== void 0 ? _classPrivateFieldGet13 : 0, img1.naturalWidth, img1.naturalHeight);
                      _classPrivateFieldGet(_this2, _canvas).toBlob( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(b2) {
                          var img2;
                          return _regeneratorRuntime().wrap(function _callee23$(_context24) {
                            while (1) switch (_context24.prev = _context24.next) {
                              case 0:
                                _context24.next = 2;
                                return _class.getImageFromUrl(URL.createObjectURL(b2));
                              case 2:
                                img2 = _context24.sent;
                                _classPrivateFieldGet(_this2, _context).globalCompositeOperation = "source-atop";
                                _classPrivateFieldGet(_this2, _context).drawImage(img2, 0, 0, _classPrivateFieldGet(_this2, _canvas).width, _classPrivateFieldGet(_this2, _canvas).height);
                                _classPrivateFieldGet(_this2, _canvas).toBlob( /*#__PURE__*/function () {
                                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(blob) {
                                    return _regeneratorRuntime().wrap(function _callee22$(_context23) {
                                      while (1) switch (_context23.prev = _context23.next) {
                                        case 0:
                                          _context23.next = 2;
                                          return _class.getImageFromUrl(URL.createObjectURL(blob));
                                        case 2:
                                          _classPrivateFieldGet(_this2, _output).image = _context23.sent;
                                          _classPrivateFieldGet(_this2, _output).blob = blob;
                                          _classPrivateFieldGet(_this2, _output).width = _classPrivateFieldGet(_this2, _canvas).width;
                                          _classPrivateFieldGet(_this2, _output).height = _classPrivateFieldGet(_this2, _canvas).height;
                                          _classPrivateFieldGet(_this2, _output).ratio = _classPrivateFieldGet(_this2, _output).width / _classPrivateFieldGet(_this2, _output).height;
                                          _classPrivateFieldGet(_this2, _output).size = blob.size;
                                          resolve();
                                        case 9:
                                        case "end":
                                          return _context23.stop();
                                      }
                                    }, _callee22);
                                  }));
                                  return function (_x25) {
                                    return _ref4.apply(this, arguments);
                                  };
                                }(), _classPrivateFieldGet(_this2, _edits).quality ? "image/jpeg" : "image/png", _classPrivateFieldGet(_this2, _edits).quality);
                              case 6:
                              case "end":
                                return _context24.stop();
                            }
                          }, _callee23);
                        }));
                        return function (_x24) {
                          return _ref3.apply(this, arguments);
                        };
                      }(), _classPrivateFieldGet(_this2, _edits).quality ? "image/jpeg" : "image/png", _classPrivateFieldGet(_this2, _edits).quality);
                    case 9:
                    case "end":
                      return _context25.stop();
                  }
                }, _callee24);
              }));
              return function (_x23) {
                return _ref2.apply(this, arguments);
              };
            }());
          }));
        case 1:
        case "end":
          return _context26.stop();
      }
    }, _callee25);
  }));
  return _apply3.apply(this, arguments);
}