/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import eUseState from "./eUseState";
import eList from "../js/eList";

const ApiStoredState = (
  caller,
  url,
  {
    autoCall = true,
    autoNS = true,

    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = null,
    responseType = null,
    onBefore = null,
    onAfter = null,
    namespace = "",
    storage = "session",

    onSuccess = ({ message, data }) => {},
    onError = ({ message, data }) => {},
  } = {}
) => {
  const getNamespace = (namespace, bodyData) => {
    if (!autoNS) {
      return namespace;
    } else {
      return `${namespace}:${eList.objToUrlData(bodyData ?? {})}`;
    }
  };

  const ns = eUseState(getNamespace(namespace, bodyData));
  const value = eUseState(caller.checkStored(url, ns.value)?.data ?? null);
  const waiting = eUseState(!value.value && autoCall);

  const call = async ({
    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = null,
    responseType = null,
    onBefore = null,
    onAfter = null,
    namespace = "",
    storage = "session",

    onSuccess = ({ message, data }) => {},
    onError = ({ message, data }) => {},
  } = {}) => {
    waiting.value = true;
    value.value = null;
    setTimeout(async () => {
      let r = await caller.call(url, {
        method,
        headers,
        urlData,
        bodyData,
        ...(bodyDataType && bodyDataType),
        ...(responseType && responseType),
        ...(onBefore && onBefore),
        ...(onAfter && onAfter),
        namespace: getNamespace(namespace, bodyData),
        storage,
      });
      waiting.value = false;
      ns.value = getNamespace(namespace, bodyData);
      if (r.success === false) {
        // console.log(r.message, r.data);
        if (onError) onError(r);
        else {
          alert(r.message);
        }
        return false;
      } else {
        value.value = r.data;
        if (onSuccess) onSuccess(r);
        return r.data;
      }
    }, 10);
  };

  // auto call api
  useEffect(() => {
    if (autoCall === true && !value.value) {
      call({
        method,
        headers,
        urlData,
        bodyData,
        bodyDataType,
        responseType,
        onBefore,
        onAfter,
        namespace,
        storage,
        onSuccess,
        onError,
      });
    }
    // eslint-disable-next-line
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
    get namespace() {
      return ns.value;
    },
    set namespace(value) {
      ns.value = value;
    },
    get call() {
      return call;
    },
    get recall() {
      return () =>
        call({
          method,
          headers,
          urlData,
          bodyData,
          bodyDataType,
          responseType,
          onBefore,
          onAfter,
          namespace,
          storage,
          onSuccess,
          onError,
        });
    },
  };
};
const eUseApiStoredState = ApiStoredState;
export default eUseApiStoredState;
