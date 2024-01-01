"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefState = exports.Ref = void 0;
var _react = require("react");
var _state = require("./state");
//==============================< Ref
var Ref = exports.Ref = function Ref(initValue) {
  var get = (0, _react.useRef)(initValue);
  return {
    get value() {
      return get.current;
    },
    set value(value) {
      get.current = value;
    },
    get current() {
      return get.current;
    },
    set current(value) {
      get.current = value;
    }
  };
};

//==============================< stateRef
var RefState = exports.RefState = function RefState(initValue) {
  var state = (0, _state.State)(initValue);
  var ref = Ref(initValue);
  return {
    state: state,
    ref: ref,
    get value() {
      return ref.value;
    },
    set value(value) {
      ref.value = value;
      state.value = value;
    }
  };
};