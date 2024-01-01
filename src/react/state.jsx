import { useEffect, useState } from "react";
//==============================< State
export const State = (initValue) => {
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
//==============================< cookie State
export function AsyncState(func = async () => null, autoRun = false) {
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

  // auto run
  useEffect(() => {
    if (autoRun === true) run();
  }, []);

  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    get waiting() {
      return getW;
    },
    set waiting(value) {
      getW(value);
    },
    run: run,
  };
}
