/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import eUseState from "./eUseState";

const ApiState = (
  caller,
  url,
  {
    autoCall = true,

    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = null,
    responseType = null,
    onBefore = null,
    onAfter = null,

    onSuccess = ({ message, data }) => {},
    onError = ({ message, data }) => {},
  } = {}
) => {
  const waiting = eUseState(autoCall);
  const value = eUseState(null);

  const call = async ({
    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = null,
    responseType = null,
    onBefore = null,
    onAfter = null,

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
      });
      waiting.value = false;
      if (r.success === false) {
        //console.log(r.message, r.data);
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
          onSuccess,
          onError,
        });
    },
  };
};
const eUseApiState = ApiState;
export default eUseApiState;
