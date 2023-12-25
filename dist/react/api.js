import { useEffect, useState } from "react";
import { eList } from "./core/my-js";
import { ApisEB } from "../configs/apis";
import { createEContext } from "./core/my-react";

// functions
export const useEApiCall = (caller, url, {
  method = "POST",
  headers = {},
  urlData = {},
  bodyData = {},
  bodyDataType = null,
  responseType = null,
  onBefore = null,
  onAfter = null,
  onSuccess = ({
    message,
    data
  }) => {},
  onError = ({
    message,
    data
  }) => {}
} = {}) => {
  return async () => {
    let r = await caller.call(url, {
      method,
      headers,
      urlData,
      bodyData,
      ...(bodyDataType && bodyDataType),
      ...(responseType && responseType),
      ...(onBefore && onBefore),
      ...(onAfter && onAfter)
    });
    if (r.success === false) {
      console.log(r.message, r.data);
      if (onError) onError(r);else {
        alert(r.message);
      }
      return false;
    } else {
      if (onSuccess) onSuccess(r);
      return r.data;
    }
  };
};
export const useEApiCallStored = (caller, url, {
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
  onSuccess = ({
    message,
    data
  }) => {},
  onError = ({
    message,
    data
  }) => {}
} = {}) => {
  return async () => {
    let r = await caller.callStored(url, {
      method,
      headers,
      urlData,
      bodyData,
      ...(bodyDataType && bodyDataType),
      ...(responseType && responseType),
      ...(onBefore && onBefore),
      ...(onAfter && onAfter),
      namespace,
      storage
    });
    if (r.success === false) {
      console.log(r.message, r.data);
      if (onError) onError(r);else {
        alert(r.message);
      }
      return false;
    } else {
      if (onSuccess) onSuccess(r);
      return r.data;
    }
  };
};
// states
export const useEApiState = (caller, url, {
  autoCall = true,
  method = "POST",
  headers = {},
  urlData = {},
  bodyData = {},
  bodyDataType = null,
  responseType = null,
  onBefore = null,
  onAfter = null,
  onSuccess = ({
    message,
    data
  }) => {},
  onError = ({
    message,
    data
  }) => {}
} = {}) => {
  const [getW, setW] = useState(autoCall);
  const [getV, setV] = useState(null);
  const call = async ({
    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = null,
    responseType = null,
    onBefore = null,
    onAfter = null,
    onSuccess = ({
      message,
      data
    }) => {},
    onError = ({
      message,
      data
    }) => {}
  } = {}) => {
    setW(true);
    setV(null);
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
        namespace,
        storage
      });
      setW(false);
      if (r.success === false) {
        console.log(r.message, r.data);
        if (onError) onError(r);else {
          alert(r.message);
        }
        return false;
      } else {
        setV(r.data);
        if (onSuccess) onSuccess(r);
        return r.data;
      }
    }, 10);
  };

  // auto call api
  useEffect(() => {
    if (autoCall === true && !getV) {
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
        onError
      });
    }
    // eslint-disable-next-line
  }, []);
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
      return value;
    },
    get waiting() {
      return getW;
    },
    set waiting(value) {
      setW(value);
      return value;
    },
    call: call,
    recall: () => call({
      method,
      headers,
      urlData,
      bodyData,
      bodyDataType,
      responseType,
      onBefore,
      onAfter,
      onSuccess,
      onError
    })
  };
};
export const useEApiStoredState = (caller, url, {
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
  onSuccess = ({
    message,
    data
  }) => {},
  onError = ({
    message,
    data
  }) => {}
} = {}) => {
  const getNamespace = (namespace, bodyData) => {
    if (!autoNS) {
      return namespace;
    } else {
      return `${namespace}:${eList.objToUrlData(bodyData ?? {})}`;
    }
  };
  const [getN, setN] = useState(getNamespace(namespace, bodyData));
  const [getV, setV] = useState(ApisEB.checkStored(url, getN)?.data ?? null);
  const [getW, setW] = useState(getV === null && autoCall);
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
    onSuccess = ({
      message,
      data
    }) => {},
    onError = ({
      message,
      data
    }) => {}
  } = {}) => {
    setW(true);
    setV(null);
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
        storage
      });
      setW(false);
      setN(getNamespace(namespace, bodyData));
      if (r.success === false) {
        console.log(r.message, r.data);
        if (onError) onError(r);else {
          alert(r.message);
        }
        return false;
      } else {
        setV(r.data);
        if (onSuccess) onSuccess(r);
        return r.data;
      }
    }, 10);
  };

  // auto call api
  useEffect(() => {
    if (autoCall === true && !getV) {
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
        onError
      });
    }
    // eslint-disable-next-line
  }, []);
  return {
    get value() {
      return getV;
    },
    set value(value) {
      setV(value);
      return value;
    },
    get waiting() {
      return getW;
    },
    set waiting(value) {
      setW(value);
      return value;
    },
    get namespace() {
      return getN;
    },
    set namespace(value) {
      setN(value);
      return value;
    },
    call: call,
    recall: () => call({
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
      onError
    })
  };
};
// context
export function createEApiContext(caller, url, {
  autoCall = true,
  method = "POST",
  headers = {},
  urlData = {},
  bodyData = {},
  bodyDataType = null,
  responseType = null,
  onBefore = null,
  onAfter = null,
  onSuccess = ({
    message,
    data
  }) => {},
  onError = ({
    message,
    data
  }) => {},
  processData = data => data
} = {}) {
  return createEContext(() => {
    const {
      value,
      waiting,
      call,
      recall
    } = useEApiState(caller, url, {
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
      onError
    });
    return {
      get data() {
        return processData(value);
      },
      value,
      waiting,
      call,
      recall
    };
  });
}
export function createEApiStoredContext(caller, url, {
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
  onSuccess = ({
    message,
    data
  }) => {},
  onError = ({
    message,
    data
  }) => {},
  processData = data => data
} = {}) {
  return createEContext(() => {
    const {
      value,
      waiting,
      call,
      recall
    } = useEApiStoredState(caller, url, {
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
      onError
    });
    return {
      get data() {
        return processData(value);
      },
      value,
      waiting,
      call,
      recall
    };
  });
}