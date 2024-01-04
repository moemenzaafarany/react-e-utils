/* eslint-disable no-unused-vars */
import eCreateContext from "./eCreateContext";
import eUseApiStoredState from "./eUseApiStoredState";

const CreateApiStoredContext = (
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
    processData = (data) => data,
  } = {}
) => {
  return eCreateContext(() => {
    const { value, waiting, call, recall } = eUseApiStoredState(caller, url, {
      autoCall,
      autoNS,

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

    return {
      get data() {
        return processData(value);
      },
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
        return recall;
      },
    };
  });
};

const eCreateApiStoredContext = CreateApiStoredContext;
export default eCreateApiStoredContext;
