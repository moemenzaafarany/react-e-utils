import { useLayoutEffect } from "react";
import eUseState from "./eUseState";
import eSessionStorage from "../js/eSessionStorage";

const SessionStorageState = (
  name,
  { fallback = null, expireHours = 24 * 7 } = {}
) => {
  const key = `${name}`;
  const value = eUseState(() => eSessionStorage.get(key) ?? fallback);

  useLayoutEffect(() => {
    save(value.value);
  }, [value.value]);

  const save = (value) => {
    if (value) {
      eSessionStorage.set(key, value, { expireHours: expireHours });
    } else {
      eSessionStorage.del(key);
    }
  };

  return {
    get value() {
      return value.value;
    },
    set value(value) {
      value.value = value;
    },
    get save() {
      return save;
    },
  };
};
const eUseSessionStorageState = SessionStorageState;
export default eUseSessionStorageState;
