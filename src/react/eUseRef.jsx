import { useRef } from "react";

const Ref = (initValue) => {
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
const eUseRef = Ref;
export default eUseRef;
