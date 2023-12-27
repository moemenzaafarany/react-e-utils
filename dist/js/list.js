"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eList = void 0;
var _type = require("./type");
var _str = require("./str");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var eList = exports.eList = /*#__PURE__*/function () {
  function eList() {
    _classCallCheck(this, eList);
  }
  _createClass(eList, null, [{
    key: "findIndex",
    value:
    //=======< array
    function findIndex(array) {
      var findCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value) {};
      try {
        if (!_type.eType.arr(array) || !_type.eType.func(findCondition)) throw "invalid array=".concat(_str.eStr.from(array), "|findCondition=").concat(_str.eStr.from(findCondition));
        for (var index in array) {
          if (findCondition(index, array[index]) === true) return index;
        }
        return null;
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return null;
      }
    }
  }, {
    key: "findInArr",
    value: function findInArr(array) {
      var findCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value) {};
      var i = eList.findIndex(array, findCondition);
      if (!i) return null;
      return array[i];
    }
  }, {
    key: "findAllInArr",
    value: function findAllInArr(array) {
      var findCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value) {};
      try {
        if (!_type.eType.arr(array) || !_type.eType.func(findCondition)) throw "invalid array=".concat(_str.eStr.from(array), "|findCondition=").concat(_str.eStr.from(findCondition));
        var list = [];
        for (var index in array) {
          if (findCondition(index, array[index]) === true) list.push(array[index]);
        }
        return list;
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return null;
      }
    }
  }, {
    key: "sortArr",
    value: function sortArr(array) {
      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var processValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (value) {
        return value;
      };
      try {
        if (!_type.eType.arr(array) && _type.eType.func(processValue)) throw "invalid array=".concat(_str.eStr.from(array), "|processValue=").concat(_str.eStr.from(processValue));
        reverse = reverse === true ? -1 : 1;
        return array.sort(function (a, b) {
          // process
          a = processValue(a);
          b = processValue(b);
          // sort
          if (a < b) return -1 * reverse;
          if (a > b) return 1 * reverse;
          return 0;
        });
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
  }, {
    key: "removeIndexFromArr",
    value: function removeIndexFromArr(array, index) {
      try {
        if (!_type.eType.arr(array) || !_type.eType.num(parseInt(index))) throw "invalid array=".concat(_str.eStr.from(array), "|index=").concat(_str.eStr.from(index));
        array.splice(parseInt(index), 1);
        return array;
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return array;
      }
    }
  }, {
    key: "removeValueFromArr",
    value: function removeValueFromArr(array, value) {
      try {
        if (!_type.eType.arr(array)) throw "invalid array=".concat(_str.eStr.from(array));
        var index = array.indexOf(value);
        if (index > -1) array.splice(index, 1);
        return array;
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return array;
      }
    }
  }, {
    key: "arrToStringTable",
    value: function arrToStringTable(array) {
      var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        id: "id",
        name: function name(o) {
          return o["name2"];
        }
      };
      var rowSep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "\r\n";
      var colSep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "\t";
      try {
        if (!_type.eType.arr(array) && !_type.eType.obj(columns)) throw "invalid array=".concat(_str.eStr.from(array), "|columns=").concat(_str.eStr.from(columns));
        // strings
        var head = "";
        var body = "";
        // append head
        for (var k in columns) {
          if (head) head += colSep;
          head += k;
        }
        head += rowSep;
        // append body
        for (var i in array) {
          var obj = array[i];
          var row = "";
          for (var _k in columns) {
            var _columns$_k, _obj$columns$_k;
            if (row) row += colSep;
            if (_type.eType.func(columns[_k])) row += (_columns$_k = columns[_k](obj)) !== null && _columns$_k !== void 0 ? _columns$_k : " ";else row += (_obj$columns$_k = obj[columns[_k]]) !== null && _obj$columns$_k !== void 0 ? _obj$columns$_k : " ";
          }
          body += row + rowSep;
        }
        return head + body;
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return undefined;
      }
    }
  }, {
    key: "arrUnique",
    value: function arrUnique(array) {
      var cleanEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      try {
        if (!_type.eType.arr(array)) throw "invalid array=".concat(_str.eStr.from(array));
        var arr = [];
        var _iterator = _createForOfIteratorHelper(array),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var v = _step.value;
            if (!arr.includes(v)) arr.push(v);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (cleanEmpty === true) arr = eList.arrClean(arr);
        return arr;
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return undefined;
      }
    }
  }, {
    key: "arrClean",
    value: function arrClean(array) {
      var removeCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value) {
        return _type.eType.empty(value);
      };
      try {
        if (!_type.eType.arr(array) && _type.eType.func(removeCondition)) throw "invalid array=".concat(_str.eStr.from(array), "|removeCondition=").concat(_str.eStr.from(removeCondition));
        for (var k in array) {
          if (removeCondition(k, array[k]) === true) delete array[k];
        }
        return array;
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return undefined;
      }
    }
  }, {
    key: "arrToFormData",
    value: function arrToFormData(array) {
      try {
        if (!_type.eType.arr(array)) throw "invalid array=".concat(_str.eStr.from(array));
        var fd = new FormData();
        var _iterator2 = _createForOfIteratorHelper(array),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var obj = _step2.value;
            for (var k in obj) {
              fd.append("".concat(k, "[]"), obj[k]);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return fd;
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return undefined;
      }
    }
  }, {
    key: "generateArray",
    value: function generateArray(length) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, array) {
        return null;
      };
      try {
        if (!_type.eType.num(length) || !_type.eType.func(callback)) return [];
        var array = [];
        for (var index = 0; index < length; index++) {
          var v = callback(index, array);
          if (v) array.push(v);
        }
        return array;
      } catch (err) {
        var _this$constructor10;
        console.trace(this === null || this === void 0 || (_this$constructor10 = this.constructor) === null || _this$constructor10 === void 0 ? void 0 : _this$constructor10.name, err);
        return undefined;
      }
    }
  }, {
    key: "toArray",
    value: function toArray(data) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value, array) {
        return null;
      };
      try {
        if (!_type.eType.arr(data) && !_type.eType.obj(data) || !_type.eType.func(callback)) return [];
        var array = [];
        for (var k in data) {
          var v = callback(k, data[k], array);
          if (v) array.push(v);
        }
        return array;
      } catch (err) {
        var _this$constructor11;
        console.trace(this === null || this === void 0 || (_this$constructor11 = this.constructor) === null || _this$constructor11 === void 0 ? void 0 : _this$constructor11.name, err);
        return undefined;
      }
    }
  }, {
    key: "arrCountIf",
    value: function arrCountIf(array) {
      var condition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (key, value) {
        return null;
      };
      try {
        if (!_type.eType.arr(array) || !_type.eType.func(condition)) return 0;
        var i = 0;
        for (var k in array) {
          if (condition(k, array[k])) i++;
        }
        return i;
      } catch (err) {
        var _this$constructor12;
        console.trace(this === null || this === void 0 || (_this$constructor12 = this.constructor) === null || _this$constructor12 === void 0 ? void 0 : _this$constructor12.name, err);
        return undefined;
      }
    }
  }, {
    key: "arrMatchValues",
    value: function arrMatchValues(array1, array2) {
      var withIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      try {
        if (!_type.eType.arr(array1) || !_type.eType.arr(array2)) return false;
        if (array1.length !== array2.length) return false;
        var match = true;
        for (var i in array1) {
          if (withIndex && array1[i] !== array2[i] || !withIndex && !array2.includes(array1[i])) match = false;
        }
        return match;
      } catch (err) {
        var _this$constructor13;
        console.trace(this === null || this === void 0 || (_this$constructor13 = this.constructor) === null || _this$constructor13 === void 0 ? void 0 : _this$constructor13.name, err);
        return undefined;
      }
    }
  }, {
    key: "arrToTree",
    value: function arrToTree(array, childrenKey, parentKey, childKey, matchValue) {
      try {
        if (!_type.eType.arr(array)) throw "invalid array=".concat(_str.eStr.from(array));
        // new arr
        var arr = [];
        // get key of arr/obj
        for (var i in array) {
          // easy access
          var obj = array[i];
          // check if in parent
          if (obj[childKey] === matchValue) {
            // if in parent get children of current
            var arr2 = eList.arrToTree(array, childrenKey, parentKey, childKey, obj[parentKey]);
            if (arr2.length > 0) obj[childrenKey] = arr2;
            // push onto big tree after finding Children
            arr.push(obj);
          }
        }
        // return arr
        return arr;
      } catch (err) {
        var _this$constructor14;
        console.trace(this === null || this === void 0 || (_this$constructor14 = this.constructor) === null || _this$constructor14 === void 0 ? void 0 : _this$constructor14.name, err);
        return undefined;
      }
    }
    //=======< object
  }, {
    key: "findKey",
    value: function findKey(object) {
      var findCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (key, value) {};
      try {
        if (!_type.eType.obj(object) || !_type.eType.func(findCondition)) throw "invalid object=".concat(_str.eStr.from(object), "|findCondition=").concat(_str.eStr.from(findCondition));
        for (var key in object) {
          if (findCondition(key, object[key]) === true) return key;
        }
        return null;
      } catch (err) {
        var _this$constructor15;
        console.trace(this === null || this === void 0 || (_this$constructor15 = this.constructor) === null || _this$constructor15 === void 0 ? void 0 : _this$constructor15.name, err);
        return null;
      }
    }
  }, {
    key: "findInObj",
    value: function findInObj(object) {
      var findCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value) {};
      var k = eList.findKey(object, findCondition);
      if (!k) return null;
      return object[k];
    }
  }, {
    key: "findAllInObj",
    value: function findAllInObj(object) {
      var findCondition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (key, value) {};
      try {
        if (!_type.eType.obj(object) || !_type.eType.func(findCondition)) throw "invalid object=".concat(_str.eStr.from(object), "|findCondition=").concat(_str.eStr.from(findCondition));
        var list = {};
        for (var key in object) {
          if (findCondition(key, object[key]) === true) list[key] = object[key];
        }
        return list;
      } catch (err) {
        var _this$constructor16;
        console.trace(this === null || this === void 0 || (_this$constructor16 = this.constructor) === null || _this$constructor16 === void 0 ? void 0 : _this$constructor16.name, err);
        return null;
      }
    }
  }, {
    key: "removeKeyFromObj",
    value: function removeKeyFromObj(object, key) {
      try {
        if (!_type.eType.obj(object) || !_type.eType.str(key)) throw "invalid object=".concat(_str.eStr.from(object), "|key=").concat(_str.eStr.from(key));
        delete object[key];
        return object;
      } catch (err) {
        var _this$constructor17;
        console.trace(this === null || this === void 0 || (_this$constructor17 = this.constructor) === null || _this$constructor17 === void 0 ? void 0 : _this$constructor17.name, err);
        return object;
      }
    }
  }, {
    key: "keysOfObj",
    value: function keysOfObj(object) {
      try {
        if (!_type.eType.multi(object, [_type.eType.obj, _type.eType["class"]])) throw "invalid object=".concat(_str.eStr.from(object));
        return Object.keys(object);
      } catch (err) {
        var _this$constructor18;
        console.trace(this === null || this === void 0 || (_this$constructor18 = this.constructor) === null || _this$constructor18 === void 0 ? void 0 : _this$constructor18.name, err);
        return null;
      }
    }
  }, {
    key: "valuesOfObj",
    value: function valuesOfObj(object) {
      try {
        if (!_type.eType.multi(object, [_type.eType.obj, _type.eType["class"]])) throw "invalid object=".concat(_str.eStr.from(object));
        return Object.values(object);
      } catch (err) {
        var _this$constructor19;
        console.trace(this === null || this === void 0 || (_this$constructor19 = this.constructor) === null || _this$constructor19 === void 0 ? void 0 : _this$constructor19.name, err);
        return null;
      }
    }
  }, {
    key: "lenOfObj",
    value: function lenOfObj(object) {
      try {
        if (!_type.eType.multi(object, [_type.eType.obj, _type.eType["class"]])) throw "invalid object=".concat(_str.eStr.from(object));
        return Object.keys(object).length;
      } catch (err) {
        var _this$constructor20;
        console.trace(this === null || this === void 0 || (_this$constructor20 = this.constructor) === null || _this$constructor20 === void 0 ? void 0 : _this$constructor20.name, err);
        return null;
      }
    }
  }, {
    key: "objToFormData",
    value: function objToFormData(object) {
      try {
        if (!_type.eType.obj(object)) throw "invalid object=".concat(_str.eStr.from(object));
        var fd = new FormData();
        for (var k in object) {
          var val = object[k];
          if (_type.eType.arr(val)) {
            var _iterator3 = _createForOfIteratorHelper(val),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var v = _step3.value;
                fd.append("".concat(k, "[]"), v);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else {
            fd.append("".concat(k), val);
          }
        }
        return fd;
      } catch (err) {
        var _this$constructor21;
        console.trace(this === null || this === void 0 || (_this$constructor21 = this.constructor) === null || _this$constructor21 === void 0 ? void 0 : _this$constructor21.name, err);
        return undefined;
      }
    }
  }, {
    key: "objToUrlData",
    value: function objToUrlData(object) {
      try {
        if (!_type.eType.obj(object)) throw "invalid object=".concat(_str.eStr.from(object));
        var fd = [];
        for (var k in object) {
          var val = object[k];
          if (_type.eType.arr(val)) {
            var _iterator4 = _createForOfIteratorHelper(val),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var v = _step4.value;
                fd.push("".concat(encodeURIComponent(k), "[]=").concat(encodeURIComponent(v)));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          } else {
            fd.push("".concat(encodeURIComponent(k), "=").concat(encodeURIComponent(val)));
          }
        }
        return fd.join("&");
      } catch (err) {
        var _this$constructor22;
        console.trace(this === null || this === void 0 || (_this$constructor22 = this.constructor) === null || _this$constructor22 === void 0 ? void 0 : _this$constructor22.name, err);
        return undefined;
      }
    }
  }, {
    key: "objFlatten",
    value: function objFlatten(object) {
      var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
      var parentKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      try {
        if (!_type.eType.obj(object)) throw "invalid object=".concat(_str.eStr.from(object));
        var obj = {};
        // loop data
        // get key of arr/obj
        for (var k in object) {
          // check if in parent
          if (_type.eType.obj(object[k])) {
            obj = _objectSpread(_objectSpread({}, obj), eList.objFlatten(object[k], sep, k));
          } else {
            var n = k;
            if (parentKey) n = "".concat(parentKey).concat(sep).concat(n);
            obj[n] = object[k];
          }
        }
        // return arr
        return obj;
      } catch (err) {
        var _this$constructor23;
        console.trace(this === null || this === void 0 || (_this$constructor23 = this.constructor) === null || _this$constructor23 === void 0 ? void 0 : _this$constructor23.name, err);
        return undefined;
      }
    }
  }, {
    key: "formDataToObj",
    value: function formDataToObj(formData) {
      try {
        if (!_type.eType.formData(formData)) throw "invalid object=".concat(_str.eStr.from(formData));
        var list = {};
        var _iterator5 = _createForOfIteratorHelper(formData.keys()),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var key = _step5.value;
            if (key.indexOf("[]") > -1) list[key.replace("[]", "")] = formData.getAll(key);else list[key] = formData.get(key);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return list;
      } catch (err) {
        var _this$constructor24;
        console.trace(this === null || this === void 0 || (_this$constructor24 = this.constructor) === null || _this$constructor24 === void 0 ? void 0 : _this$constructor24.name, err);
        return undefined;
      }
    }
  }, {
    key: "toObject",
    value: function toObject(data) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (index, value, object) {
        return null;
      };
      try {
        if (!_type.eType.arr(data) && !_type.eType.obj(data) || !_type.eType.func(callback)) return [];
        var object = {};
        for (var k in data) {
          var v = callback(k, data[k], object);
          if (_type.eType.obj(v)) {
            object = _objectSpread(_objectSpread({}, object), v);
          }
        }
        return object;
      } catch (err) {
        var _this$constructor25;
        console.trace(this === null || this === void 0 || (_this$constructor25 = this.constructor) === null || _this$constructor25 === void 0 ? void 0 : _this$constructor25.name, err);
        return undefined;
      }
    }
    //=======< both
  }, {
    key: "forEach",
    value: function forEach(data, result) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (key, value, result) {
        return null;
      };
      try {
        if (!_type.eType.arr(data) && !_type.eType.obj(data) || !_type.eType.func(callback)) return [];
        for (var k in data) {
          callback(k, data[k], result);
        }
        return result;
      } catch (err) {
        var _this$constructor26;
        console.trace(this === null || this === void 0 || (_this$constructor26 = this.constructor) === null || _this$constructor26 === void 0 ? void 0 : _this$constructor26.name, err);
        return undefined;
      }
    }
  }, {
    key: "crawl",
    value: function crawl(array, keys) {
      var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      try {
        if (!_type.eType.multi(array, [_type.eType.arr, _type.eType.obj]) && !_type.eType.arr(keys)) return fallback;
        var v = array.hasOwnProperty(keys[0]) ? array[keys[0]] : null;
        for (var i = 1; i < keys.length; i++) {
          if (v && v.hasOwnProperty(keys[i])) {
            v = v[keys[i]];
          } else v = null;
        }
        return !_type.eType["null"](v) ? v : fallback;
      } catch (err) {
        var _this$constructor27;
        console.trace(this === null || this === void 0 || (_this$constructor27 = this.constructor) === null || _this$constructor27 === void 0 ? void 0 : _this$constructor27.name, err);
        return undefined;
      }
    }
  }]);
  return eList;
}();