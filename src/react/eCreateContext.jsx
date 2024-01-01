import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

const CreateContext = (func = () => {}) => {
  const Context = createContext({});
  const Use = () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error("context must be within a provider!");
    }
    return ctx;
  };
  const Provider = ({ children }) => {
    return <Context.Provider value={func()}>{children}</Context.Provider>;
  };
  Provider.propTypes = {
    children: PropTypes.element.isRequired,
  };
  const Consumer = (child = () => {}) => {
    return <Context.Consumer>{child}</Context.Consumer>;
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
    get Consumer() {
      return Consumer;
    },
  };
};

const eCreateContext = CreateContext;
export default eCreateContext;
