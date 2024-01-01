import { useState } from "react";

const State = (initValue) => {
  const [getV, setV] = useState(initValue);
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
  };
};
const eUseState = State;
export default eUseState;
