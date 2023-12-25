import { useState } from "react";
//==============================< State
export const useEState = (initValue) => {
  const [getV, setV] = useState(initValue);
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
      return value;
    },
  };
};
//==============================< cookie State
export function useEAsyncState(func = async () => null) {
  const [getW, setW] = useState(false);
  const [getV, setV] = useState(null);

  const run = async (params) => {
    setW(true);
    setV(null);
    return await new Promise((resolve) => {
      setTimeout(async () => {
        try {
          let r = await func(params);
          resolve(r);
          setV(r);
          setW(false);
        } catch (e) {
          resolve(null);
          setW(false);
        }
      }, 10);
    });
  };

  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
      return value;
    },
    get waiting() {
      return getW;
    },
    set waiting(value) {
      getW(value);
      return value;
    },
    run: run,
  };
}
