import { createElement, createContext, useCallback, useContext } from "react";

const CreateContext = (value = () => {}) => {
  const Context = createContext(undefined);
  const Use = () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error("context must be within a provider!");
    }
    return ctx;
  };
  const Provider = ({ children }) => {
    return createElement(Context.Provider, { value: value() }, children);
  };
  return {
    get Context() {
      return Context;
    },
    get Use() {
      return Use;
    },
    get Provider() {
      return Provider;
    },
  };
};

const eCreateContext = CreateContext;
export default eCreateContext;
