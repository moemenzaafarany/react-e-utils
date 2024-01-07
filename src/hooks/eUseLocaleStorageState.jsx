import { useLayoutEffect } from "react";
import eUseState from "./eUseState";
import eLocaleStorage from "../js/eLocaleStorage";

const LocaleStorageState = (
  name,
  { fallback = null, expireHours = 24 * 7 } = {}
) => {
  const key = `${name}`;
  const value = eUseState(() => eLocaleStorage.get(key) ?? fallback);

  useLayoutEffect(() => {
    save(value.value);
  }, [value.value]);

  const save = (value) => {
    if (value) {
      eLocaleStorage.set(key, value, { expireHours: expireHours });
    } else {
      eLocaleStorage.del(key);
    }
  };

  return {
    get value() {
      return value.value;
    },
    set value(v) {
      value.value = v;
    },
    get save() {
      return save;
    },
  };
};
const eUseLocaleStorageState = LocaleStorageState;
export default eUseLocaleStorageState;
