import { useLayoutEffect, useState } from "react";
import { eCookie, eLocaleStorage, eSessionStorage } from "../js/storage";
//==============================< cookie State
export function CookieState(
  name,
  { fallback = null, expireHours = 24 * 7 } = {}
) {
  const key = `c:${name}`;
  const [getV, setV] = useState(() => eCookie.get(key) ?? fallback);

  useLayoutEffect(() => {
    save(getV);
    // eslint-disable-next-line
  }, [getV]);

  const save = (value) => {
    if (value) {
      eCookie.set(key, value, { expireHours: expireHours });
    } else {
      eCookie.del(key);
    }
  };

  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    save,
  };
}
//==============================< session storage State
export function SessionStorageState(name, { fallback = null } = {}) {
  const key = `ss:${name}`;
  const [getV, setV] = useState(() => eSessionStorage.get(key) ?? fallback);

  useLayoutEffect(() => {
    save(getV);
    // eslint-disable-next-line
  }, [getV]);

  const save = (value) => {
    if (value) {
      eSessionStorage.set(key, value);
    } else {
      eSessionStorage.del(key);
    }
  };

  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    save,
  };
}
//==============================< locale storage State
export function LocaleStorageState(name, { fallback = null } = {}) {
  const key = `ls:${name}`;
  const [getV, setV] = useState(() => eLocaleStorage.get(key) ?? fallback);

  useLayoutEffect(() => {
    save(getV);
    // eslint-disable-next-line
  }, [getV]);

  const save = (value) => {
    if (value) {
      eLocaleStorage.set(key, value);
    } else {
      eLocaleStorage.del(key);
    }
  };

  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
    },
    save,
  };
}
