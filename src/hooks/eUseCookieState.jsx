import { useLayoutEffect } from "react";
import eCookie from "../js/eCookie";
import eUseState from "./eUseState";

const CookieState = (name, { fallback = null, expireHours = 24 * 7 } = {}) => {
  const key = `${name}`;
  const value = eUseState(() => eCookie.get(key) ?? fallback);

  useLayoutEffect(() => {
    save(value.value);
  }, [value.value]);

  const save = (value) => {
    if (value) {
      eCookie.set(key, value, { expireHours: expireHours });
    } else {
      eCookie.del(key);
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
const eUseCookieState = CookieState;
export default eUseCookieState;
