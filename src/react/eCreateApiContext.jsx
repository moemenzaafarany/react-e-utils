/* eslint-disable no-unused-vars */
import eCreateContext from "./eCreateContext";
import eUseApiState from "./eUseApiState";

const CreateApiContext = (
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
    processData = (data) => data,
  } = {}
) => {
  return eCreateContext(() => {
    const { value, waiting, call, recall } = eUseApiState(caller, url, {
      autoCall,

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

const eCreateApiContext = CreateApiContext;
export default eCreateApiContext;
