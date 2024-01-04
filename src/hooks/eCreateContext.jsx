import { createContext, useContext } from "react";

const CreateContext = (func = () => {}) => {
  const Context = createContext({});
  const Use = () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error("context must be within a provider!");
    }
    return ctx;
  };
  return {
    get Context() {
      return Context;
    },
    get Use() {
      return Use;
    },
    get ProviderProps() {
      return { value: func() };
    },
  };
};

const eCreateContext = CreateContext;
export default eCreateContext;
