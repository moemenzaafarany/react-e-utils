import { useRef } from "react";
//==============================< Ref
export const Ref = initValue => {
  const get = useRef(initValue);
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