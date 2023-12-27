"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ref = void 0;
var _react = require("react");
//==============================< Ref
var Ref = exports.Ref = function Ref(initValue) {
  var get = (0, _react.useRef)(initValue);
  return {
    get value() {
      return get.current;
    },
    set value(value) {
      get.current = value;
      return get.current;
    },
    get current() {
      return get.current;
    },
    set current(value) {
      get.current = value;
      return get.current;
    }
  };
};