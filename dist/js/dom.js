"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eDom = exports.e$All = exports.e$ = void 0;
var _type = require("./type");
var _str = require("./str");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable no-unused-vars */
var eDom = exports.eDom = /*#__PURE__*/function () {
  function eDom() {
    _classCallCheck(this, eDom);
  }
  _createClass(eDom, null, [{
    key: "html",
    get:
    //========< dom elements
    function get() {
      return document.documentElement;
    }
  }, {
    key: "htmlLang",
    get: function get() {
      var _eDom$html$getAttribu;
      return (_eDom$html$getAttribu = eDom.html.getAttribute("lang")) !== null && _eDom$html$getAttribu !== void 0 ? _eDom$html$getAttribu : "en";
    },
    set: function set(v) {
      eDom.html.setAttribute("lang", v);
    }
  }, {
    key: "htmlDir",
    get: function get() {
      var _eDom$html$getAttribu2;
      return (_eDom$html$getAttribu2 = eDom.html.getAttribute("dir")) !== null && _eDom$html$getAttribu2 !== void 0 ? _eDom$html$getAttribu2 : "ltr";
    },
    set: function set(v) {
      eDom.html.setAttribute("dir", v);
    }
  }, {
    key: "head",
    get: function get() {
      return document.head;
    }
  }, {
    key: "body",
    get: function get() {
      return document.body;
    }
    //========< selector
  }, {
    key: "$",
    value: function $() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$parent = _ref.parent,
        parent = _ref$parent === void 0 ? document : _ref$parent,
        _ref$action = _ref.action,
        action = _ref$action === void 0 ? null : _ref$action;
      try {
        var el = parent.querySelector(query);
        if (_type.eType.func(action)) action(el);
        return el;
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return undefined;
      }
    }
  }, {
    key: "$All",
    value: function $All() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$parent = _ref2.parent,
        parent = _ref2$parent === void 0 ? document : _ref2$parent,
        _ref2$action = _ref2.action,
        action = _ref2$action === void 0 ? null : _ref2$action;
      try {
        var els = parent.querySelectorAll(query);
        if (_type.eType.func(action)) els.forEach(function (el) {
          return action(el);
        });
        return els;
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return undefined;
      }
    }
  }, {
    key: "strToElement",
    value: function strToElement(query) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
      try {
        if (_type.eType.element(query)) return query;
        if (!_type.eType.str(query)) return null;
        return parent.querySelector(query);
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
    //========< events
  }, {
    key: "eventPreventDefault",
    value: function eventPreventDefault() {
      var runInstead = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_event, _target) {};
      return function (event) {
        if (event !== null && event !== void 0 && event.preventDefault) event === null || event === void 0 || event.preventDefault();
        if (event !== null && event !== void 0 && event.stopImmediatePropagation) event === null || event === void 0 || event.stopImmediatePropagation();
        if (runInstead) runInstead(event, event.target);
        return false;
      };
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(element) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        detail = _ref3.detail,
        _ref3$bubbles = _ref3.bubbles,
        bubbles = _ref3$bubbles === void 0 ? true : _ref3$bubbles,
        _ref3$cancelable = _ref3.cancelable,
        cancelable = _ref3$cancelable === void 0 ? false : _ref3$cancelable,
        _ref3$composed = _ref3.composed,
        composed = _ref3$composed === void 0 ? false : _ref3$composed;
      try {
        // isn't win, doc, el
        if (!_type.eType.element(element) && window !== element && document !== element) throw "invalid element=".concat(_str.eStr.from(element));
        // do
        return element.dispatchEvent(detail ? new CustomEvent(event, {
          detail: detail,
          bubbles: bubbles,
          cancelable: cancelable,
          composed: composed
        }) : new Event(event, {
          detail: detail,
          bubbles: bubbles,
          cancelable: cancelable,
          composed: composed
        }));
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return undefined;
      }
    }
  }, {
    key: "dispatchEvents",
    value: function dispatchEvents(element) {
      var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        detail = _ref4.detail,
        _ref4$bubbles = _ref4.bubbles,
        bubbles = _ref4$bubbles === void 0 ? true : _ref4$bubbles,
        _ref4$cancelable = _ref4.cancelable,
        cancelable = _ref4$cancelable === void 0 ? false : _ref4$cancelable,
        _ref4$composed = _ref4.composed,
        composed = _ref4$composed === void 0 ? false : _ref4$composed;
      try {
        // isn't win, doc, el
        if (!_type.eType.element(element) && window !== element && document !== element || !_type.eType.obj(events)) throw "invalid element=".concat(_str.eStr.from(element), "|events=").concat(_str.eStr.from(events));
        // do
        var dispatches = {};
        var _iterator = _createForOfIteratorHelper(events),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var eventName = _step.value;
            dispatches[eventName] = dispatchEvent(element.eventName, detail, bubbles, cancelable, composed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return dispatches;
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return undefined;
      }
    }
  }, {
    key: "listenEvent",
    value: function listenEvent(element) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_evt, _eventName) {};
      var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref5$preventDefault = _ref5.preventDefault,
        preventDefault = _ref5$preventDefault === void 0 ? false : _ref5$preventDefault,
        _ref5$capture = _ref5.capture,
        capture = _ref5$capture === void 0 ? false : _ref5$capture,
        _ref5$once = _ref5.once,
        once = _ref5$once === void 0 ? false : _ref5$once,
        _ref5$passive = _ref5.passive,
        passive = _ref5$passive === void 0 ? false : _ref5$passive;
      try {
        // isn't win, doc, el
        if (!_type.eType.element(element) && window !== element && document !== element || !_type.eType.func(callback)) throw "invalid element=".concat(_str.eStr.from(element), "|callback=").concat(_str.eStr.from(callback));

        // do
        var controller = new AbortController();
        element.addEventListener(event, function (evt) {
          if (preventDefault) eDom.eventPreventDefault(function (evt) {
            return callback(evt, event);
          })(evt);else callback(evt, event);
        }, {
          capture: capture,
          once: once,
          passive: passive,
          signal: controller.signal
        });
        return controller;
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return undefined;
      }
    }
  }, {
    key: "listenEvents",
    value: function listenEvents(element) {
      var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref6$preventDefault = _ref6.preventDefault,
        preventDefault = _ref6$preventDefault === void 0 ? false : _ref6$preventDefault,
        _ref6$capture = _ref6.capture,
        capture = _ref6$capture === void 0 ? false : _ref6$capture,
        _ref6$once = _ref6.once,
        once = _ref6$once === void 0 ? false : _ref6$once,
        _ref6$passive = _ref6.passive,
        passive = _ref6$passive === void 0 ? false : _ref6$passive;
      try {
        // isn't win, doc, el
        if (!_type.eType.element(element) && window !== element && document !== element || !_type.eType.obj(events)) throw "invalid element=".concat(_str.eStr.from(element), "|events=").concat(_str.eStr.from(events));
        // do
        var controllers = {};
        for (var eventName in events) {
          if (_type.eType.func(events[eventName])) controllers[eventName] = eDom.listenEvent(element, eventName, events[eventName], preventDefault, capture, once, passive);
        }
        return controllers;
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return undefined;
      }
    }
    //========< find Dom
  }, {
    key: "findFirstParent",
    value: function findFirstParent(element, query) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        while (element.parentNode) {
          if (element.parentNode.matches(query)) return element.parentNode;else return eDom.findFirstParent(element.parentNode, query);
        }
        return null;
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return undefined;
      }
    }
  }, {
    key: "findFirstChild",
    value: function findFirstChild(element, query) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        for (var _i = 0, _Array$from = Array.from(element.children); _i < _Array$from.length; _i++) {
          var childNode = _Array$from[_i];
          if (_type.eType.element(childNode) && childNode.matches(query)) return childNode;
          return eDom.findFirstChild(childNode, query);
        }
        return null;
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return undefined;
      }
    }
    //========< manipulate dom
  }, {
    key: "appendSampleToElement",
    value: function appendSampleToElement(element, sample, _ref7) {
      var _ref7$outputEl = _ref7.outputEl,
        outputEl = _ref7$outputEl === void 0 ? function (_el) {} : _ref7$outputEl,
        _ref7$sampleEl = _ref7.sampleEl,
        sampleEl = _ref7$sampleEl === void 0 ? function (_el) {} : _ref7$sampleEl,
        _ref7$childEls = _ref7.childEls,
        childEls = _ref7$childEls === void 0 ? {} : _ref7$childEls;
      try {
        if (!_type.eType.element(element) || !_type.eType.element(sample)) throw "invalid element=".concat(_str.eStr.from(element), "|sample=").concat(_str.eStr.from(element));
        if (outputEl) {
          try {
            outputEl(element);
          } catch (err) {
            var _this$constructor10;
            console.trace(this === null || this === void 0 || (_this$constructor10 = this.constructor) === null || _this$constructor10 === void 0 ? void 0 : _this$constructor10.name, err);
          }
        }
        var clone = eDom.populateElement(sample.cloneNode(true), sampleEl, childEls);
        if (clone) element.append(clone);
        return true;
      } catch (err) {
        var _this$constructor11;
        console.trace(this === null || this === void 0 || (_this$constructor11 = this.constructor) === null || _this$constructor11 === void 0 ? void 0 : _this$constructor11.name, err);
        return undefined;
      }
    }
  }, {
    key: "populateElement",
    value: function populateElement(element, _ref8) {
      var _this = this;
      var _ref8$parentEl = _ref8.parentEl,
        parentEl = _ref8$parentEl === void 0 ? function (_el) {} : _ref8$parentEl,
        _ref8$childEls = _ref8.childEls,
        childEls = _ref8$childEls === void 0 ? {} : _ref8$childEls;
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (parentEl) {
          try {
            parentEl(element);
          } catch (err) {
            var _this$constructor12;
            console.trace(this === null || this === void 0 || (_this$constructor12 = this.constructor) === null || _this$constructor12 === void 0 ? void 0 : _this$constructor12.name, err);
          }
        }
        var _loop = function _loop(k) {
          element.querySelectorAll(k).forEach(function (el) {
            try {
              childEls[k](el);
            } catch (err) {
              var _this$constructor13;
              console.trace(_this === null || _this === void 0 || (_this$constructor13 = _this.constructor) === null || _this$constructor13 === void 0 ? void 0 : _this$constructor13.name, err);
            }
          });
        };
        for (var k in childEls) {
          _loop(k);
        }
        return element;
      } catch (err) {
        var _this$constructor14;
        console.trace(this === null || this === void 0 || (_this$constructor14 = this.constructor) === null || _this$constructor14 === void 0 ? void 0 : _this$constructor14.name, err);
        return undefined;
      }
    }
    //========< manipulate Classes
  }, {
    key: "hasClasses",
    value: function hasClasses(element, classes) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(classes)) classes = [classes];
        var match = true;
        var _iterator2 = _createForOfIteratorHelper(classes),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var val = _step2.value;
            if (!element.classList.contains(val)) match = false;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return match;
      } catch (err) {
        var _this$constructor15;
        console.trace(this === null || this === void 0 || (_this$constructor15 = this.constructor) === null || _this$constructor15 === void 0 ? void 0 : _this$constructor15.name, err);
        return false;
      }
    }
  }, {
    key: "addClasses",
    value: function addClasses(element, classes) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(classes)) classes = [classes];
        var _iterator3 = _createForOfIteratorHelper(classes),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var val = _step3.value;
            if (val) element.classList.add(val);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return true;
      } catch (err) {
        var _this$constructor16;
        console.trace(this === null || this === void 0 || (_this$constructor16 = this.constructor) === null || _this$constructor16 === void 0 ? void 0 : _this$constructor16.name, err);
        return false;
      }
    }
  }, {
    key: "addClassName",
    value: function addClassName(element, className) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        var classes = className.split(" ");
        var _iterator4 = _createForOfIteratorHelper(classes),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var val = _step4.value;
            if (val) element.classList.add(val);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return true;
      } catch (err) {
        var _this$constructor17;
        console.trace(this === null || this === void 0 || (_this$constructor17 = this.constructor) === null || _this$constructor17 === void 0 ? void 0 : _this$constructor17.name, err);
        return false;
      }
    }
  }, {
    key: "delClasses",
    value: function delClasses(element, classes) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(classes)) classes = [classes];
        var _iterator5 = _createForOfIteratorHelper(classes),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var val = _step5.value;
            element.classList.remove(val);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return true;
      } catch (err) {
        var _this$constructor18;
        console.trace(this === null || this === void 0 || (_this$constructor18 = this.constructor) === null || _this$constructor18 === void 0 ? void 0 : _this$constructor18.name, err);
        return false;
      }
    }
    //========< manipulate Attributes
  }, {
    key: "hasAttrs",
    value: function hasAttrs(element, attrs) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(attrs)) attrs = [attrs];
        var match = true;
        var _iterator6 = _createForOfIteratorHelper(attrs),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var val = _step6.value;
            if (!element.hasAttribute(val)) match = false;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return match;
      } catch (err) {
        var _this$constructor19;
        console.trace(this === null || this === void 0 || (_this$constructor19 = this.constructor) === null || _this$constructor19 === void 0 ? void 0 : _this$constructor19.name, err);
        return false;
      }
    }
  }, {
    key: "getAttrs",
    value: function getAttrs(element, attrs) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(attrs)) attrs = [attrs];
        var obj = {};
        var _iterator7 = _createForOfIteratorHelper(attrs),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var val = _step7.value;
            obj[val] = element.getAttribute(val);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return obj;
      } catch (err) {
        var _this$constructor20;
        console.trace(this === null || this === void 0 || (_this$constructor20 = this.constructor) === null || _this$constructor20 === void 0 ? void 0 : _this$constructor20.name, err);
        return false;
      }
    }
  }, {
    key: "setAttrs",
    value: function setAttrs(element) {
      var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      try {
        if (!_type.eType.element(element) && !_type.eType.obj(attrs)) throw "invalid element=".concat(_str.eStr.from(element), "|attrs=").concat(_str.eStr.from(attrs));
        for (var key in attrs) element.setAttribute(key, attrs[key]);
        return true;
      } catch (err) {
        var _this$constructor21;
        console.trace(this === null || this === void 0 || (_this$constructor21 = this.constructor) === null || _this$constructor21 === void 0 ? void 0 : _this$constructor21.name, err);
        return false;
      }
    }
  }, {
    key: "delAttrs",
    value: function delAttrs(element, attrs) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(attrs)) attrs = [attrs];
        var _iterator8 = _createForOfIteratorHelper(attrs),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var val = _step8.value;
            element.removeAttribute(val);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return true;
      } catch (err) {
        var _this$constructor22;
        console.trace(this === null || this === void 0 || (_this$constructor22 = this.constructor) === null || _this$constructor22 === void 0 ? void 0 : _this$constructor22.name, err);
        return false;
      }
    }
    //========< manipulate properties
  }, {
    key: "hasProps",
    value: function hasProps(element, props) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(props)) props = [props];
        var match = true;
        var _iterator9 = _createForOfIteratorHelper(props),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var val = _step9.value;
            if (!Object.prototype.hasOwnProperty.call(element, val)) match = false;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        return match;
      } catch (err) {
        var _this$constructor23;
        console.trace(this === null || this === void 0 || (_this$constructor23 = this.constructor) === null || _this$constructor23 === void 0 ? void 0 : _this$constructor23.name, err);
        return false;
      }
    }
  }, {
    key: "getProps",
    value: function getProps(element, props) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(props)) props = [props];
        var obj = {};
        var _iterator10 = _createForOfIteratorHelper(props),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var val = _step10.value;
            obj[val] = element[val];
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        return obj;
      } catch (err) {
        var _this$constructor24;
        console.trace(this === null || this === void 0 || (_this$constructor24 = this.constructor) === null || _this$constructor24 === void 0 ? void 0 : _this$constructor24.name, err);
        return false;
      }
    }
  }, {
    key: "setProps",
    value: function setProps(element) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      try {
        if (!_type.eType.element(element) && !_type.eType.obj(props)) throw "invalid element=".concat(_str.eStr.from(element));
        for (var key in props) element[key] = props[key];
        return true;
      } catch (err) {
        var _this$constructor25;
        console.trace(this === null || this === void 0 || (_this$constructor25 = this.constructor) === null || _this$constructor25 === void 0 ? void 0 : _this$constructor25.name, err);
        return false;
      }
    }
  }, {
    key: "delProps",
    value: function delProps(element, props) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(props)) props = [props];
        var _iterator11 = _createForOfIteratorHelper(props),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var val = _step11.value;
            delete element[val];
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return true;
      } catch (err) {
        var _this$constructor26;
        console.trace(this === null || this === void 0 || (_this$constructor26 = this.constructor) === null || _this$constructor26 === void 0 ? void 0 : _this$constructor26.name, err);
        return false;
      }
    }
    //========< manipulate datasets
  }, {
    key: "hasDatasets",
    value: function hasDatasets(element, datasets) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(datasets)) datasets = [datasets];
        var match = true;
        var _iterator12 = _createForOfIteratorHelper(datasets),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var val = _step12.value;
            if (!Object.prototype.hasOwnProperty.call(element.dataset, val)) match = false;
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        return match;
      } catch (err) {
        var _this$constructor27;
        console.trace(this === null || this === void 0 || (_this$constructor27 = this.constructor) === null || _this$constructor27 === void 0 ? void 0 : _this$constructor27.name, err);
        return false;
      }
    }
  }, {
    key: "getDatasets",
    value: function getDatasets(element, datasets) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(datasets)) datasets = [datasets];
        var obj = {};
        var _iterator13 = _createForOfIteratorHelper(datasets),
          _step13;
        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var val = _step13.value;
            obj[val] = element.dataset[val];
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
        return obj;
      } catch (err) {
        var _this$constructor28;
        console.trace(this === null || this === void 0 || (_this$constructor28 = this.constructor) === null || _this$constructor28 === void 0 ? void 0 : _this$constructor28.name, err);
        return false;
      }
    }
  }, {
    key: "setDatasets",
    value: function setDatasets(element) {
      var datasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      try {
        if (!_type.eType.element(element) && !_type.eType.obj(datasets)) throw "invalid element=".concat(_str.eStr.from(element), "|datasets=").concat(_str.eStr.from(datasets));
        for (var key in datasets) element.dataset[key] = datasets[key];
        return true;
      } catch (err) {
        var _this$constructor29;
        console.trace(this === null || this === void 0 || (_this$constructor29 = this.constructor) === null || _this$constructor29 === void 0 ? void 0 : _this$constructor29.name, err);
        return false;
      }
    }
  }, {
    key: "delDatasets",
    value: function delDatasets(element, datasets) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(datasets)) datasets = [datasets];
        var _iterator14 = _createForOfIteratorHelper(datasets),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var val = _step14.value;
            delete element.dataset[val];
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        return true;
      } catch (err) {
        var _this$constructor30;
        console.trace(this === null || this === void 0 || (_this$constructor30 = this.constructor) === null || _this$constructor30 === void 0 ? void 0 : _this$constructor30.name, err);
        return false;
      }
    }
    //========< manipulate styles
  }, {
    key: "hasStyles",
    value: function hasStyles(element, styles) {
      var computed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(styles)) styles = [styles];
        var compStyles = !computed ? element.style : getComputedStyle(element);
        var match = true;
        var _iterator15 = _createForOfIteratorHelper(styles),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var val = _step15.value;
            if (!compStyles[val]) match = false;
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        return match;
      } catch (err) {
        var _this$constructor31;
        console.trace(this === null || this === void 0 || (_this$constructor31 = this.constructor) === null || _this$constructor31 === void 0 ? void 0 : _this$constructor31.name, err);
        return false;
      }
    }
  }, {
    key: "getStyles",
    value: function getStyles(element, styles) {
      var computed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(styles)) styles = [styles];
        var compStyles = !computed ? element.style : getComputedStyle(element);
        var obj = {};
        var _iterator16 = _createForOfIteratorHelper(styles),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var val = _step16.value;
            obj[val] = compStyles[val];
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        return obj;
      } catch (err) {
        var _this$constructor32;
        console.trace(this === null || this === void 0 || (_this$constructor32 = this.constructor) === null || _this$constructor32 === void 0 ? void 0 : _this$constructor32.name, err);
        return false;
      }
    }
  }, {
    key: "getStyle",
    value: function getStyle(element, style) {
      var computed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      try {
        var _eDom$getStyles;
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        return (_eDom$getStyles = eDom.getStyles(element, style, computed)) === null || _eDom$getStyles === void 0 ? void 0 : _eDom$getStyles[style];
      } catch (err) {
        var _this$constructor33;
        console.trace(this === null || this === void 0 || (_this$constructor33 = this.constructor) === null || _this$constructor33 === void 0 ? void 0 : _this$constructor33.name, err);
        return false;
      }
    }
  }, {
    key: "setStyles",
    value: function setStyles(element) {
      var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      try {
        if (!_type.eType.element(element) && !_type.eType.obj(styles)) throw "invalid element=".concat(_str.eStr.from(element), "|styles=").concat(_str.eStr.from(styles));
        for (var key in styles) {
          if (Object.prototype.hasOwnProperty.call(element.style, key)) element.style[key] = styles[key];else element.style.setProperty(key, styles[key]);
        }
        return true;
      } catch (err) {
        var _this$constructor34;
        console.trace(this === null || this === void 0 || (_this$constructor34 = this.constructor) === null || _this$constructor34 === void 0 ? void 0 : _this$constructor34.name, err);
        return false;
      }
    }
  }, {
    key: "addStyleName",
    value: function addStyleName(element, styleName) {
      try {
        var _element$getAttribute;
        if (!_type.eType.element(element) && !_type.eType.str(styleName)) throw "invalid element=".concat(_str.eStr.from(element), "|styleName=").concat(_str.eStr.from(styleName));
        if (styleName) element.setAttribute("style", ((_element$getAttribute = element.getAttribute("style")) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : "") + styleName);
        return true;
      } catch (err) {
        var _this$constructor35;
        console.trace(this === null || this === void 0 || (_this$constructor35 = this.constructor) === null || _this$constructor35 === void 0 ? void 0 : _this$constructor35.name, err);
        return false;
      }
    }
  }, {
    key: "delStyles",
    value: function delStyles(element, styles) {
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        if (!_type.eType.arr(styles)) styles = [styles];
        var _iterator17 = _createForOfIteratorHelper(styles),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var val = _step17.value;
            element.style[val] = null;
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        return true;
      } catch (err) {
        var _this$constructor36;
        console.trace(this === null || this === void 0 || (_this$constructor36 = this.constructor) === null || _this$constructor36 === void 0 ? void 0 : _this$constructor36.name, err);
        return false;
      }
    }
    //========< manipulate styles
  }, {
    key: "elParent",
    value: function elParent(element) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      try {
        if (!_type.eType.element(element)) throw "invalid element=".concat(_str.eStr.from(element));
        for (var i = 0; i < level; i++) {
          if (element.parentElement) element = element.parentElement;
        }
        return element;
      } catch (err) {
        var _this$constructor37;
        console.trace(this === null || this === void 0 || (_this$constructor37 = this.constructor) === null || _this$constructor37 === void 0 ? void 0 : _this$constructor37.name, err);
        return false;
      }
    }
  }]);
  return eDom;
}();
var e$ = exports.e$ = eDom.$;
var e$All = exports.e$All = eDom.$All;