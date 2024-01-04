import { useEffect } from "react";
import eUseState from "./eUseState";

const AsyncState = (func = async () => null, autoRun = false) => {
  const waiting = eUseState(false);
  const value = eUseState(null);

  const run = async (params) => {
    waiting.value = true;
    value.value = null;
    return await new Promise((resolve) => {
      setTimeout(async () => {
        try {
          let r = await func(params);
          resolve(r);
          value.value = r;
          waiting.value = false;
        } catch (e) {
          resolve(null);
          waiting.value = false;
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
      return value.value;
    },
    set value(value) {
      value.value = value;
    },
    get waiting() {
      return waiting.value;
    },
    set waiting(value) {
      waiting.value = value;
    },
    get run() {
      return run;
    },
  };
};
const eUseAsyncState = AsyncState;
export default eUseAsyncState;
