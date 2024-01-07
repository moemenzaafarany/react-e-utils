import { useRef } from "react";

const Ref = (initValue) => {
  const ref = useRef(initValue);
  return {
    get value() {
      return ref.current;
    },
    set value(v) {
      ref.current = v;
    },
    get current() {
      return ref.current;
    },
    set current(v) {
      ref.current = v;
    },
  };
};
const eUseRef = Ref;
export default eUseRef;
