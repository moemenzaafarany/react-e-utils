import { useRef } from "react";
import { State } from "./state";
//==============================< Ref
export const Ref = (initValue) => {
  const get = useRef(initValue);
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
    },
  };
};

//==============================< stateRef
export const RefState = (initValue) => {
  const state = State(initValue);
  const ref = Ref(initValue);

  return {
    state,
    ref,
    get value() {
      return ref.value;
    },
    set value(value) {
      ref.value = value;
      state.value = value;
    },
  };
};
