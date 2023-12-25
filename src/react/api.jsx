import { useEffect, useState } from "react";
import { eList } from "./core/my-js";
import { ApisEB } from "../configs/apis";
import { Context } from "./core/my-react";

export const useEApiCall = (
  caller,
  url,
  {
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
  return async () => {
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
    if (r.success === false) {
      console.log(r.message, r.data);
      if (onError) onError(r);
      else {
        alert(r.message);
      }
      return false;
    } else {
      if (onSuccess) onSuccess(r);
      return r.data;
    }
  };
};
export const useEApiCallStored = (
  caller,
  url,
  {
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
      storage,
    });
    if (r.success === false) {
      console.log(r.message, r.data);
      if (onError) onError(r);
      else {
        alert(r.message);
      }
      return false;
    } else {
      if (onSuccess) onSuccess(r);
      return r.data;
    }
  };
};

export const useEApiState = (
  url,
  {
    bodyData,
    autoCall = true,
    onSuccess = ({ message, data }) => {},
    onError = ({ message, data }) => {},
  } = {}
) => {
  const [getW, setW] = useState(autoCall);
  const [getV, setV] = useState(null);

  const callApi = async (
    bd,
    {
      onSuccess = ({ message, data }) => {},
      onError = ({ message, data }) => {},
    } = {}
  ) => {
    setW(true);
    setV(null);
    setTimeout(async () => {
      let r = await ApisEB.call(url, {
        method: "POST",
        bodyData: bd,
      });
      setW(false);
      if (r.success === false) {
        console.log(r.message, r.data);
        if (onError) onError(r);
        else {
          alert(r.message);
        }
      } else {
        setV(r.data);
        if (onSuccess) onSuccess(r);
      }
    }, 10);
  };

  // auto call api
  useEffect(() => {
    if (autoCall === true && !getV) {
      callApi(bodyData, { onSuccess, onError });
    }
    // eslint-disable-next-line
  }, []);

  return {
    get value() {
      return getV;
    },
    get waiting() {
      return getW;
    },
    callApi: callApi,
    recallApi: () => callApi(bodyData, { onSuccess, onError }),
  };
};
export const useEApiStoredState = (
  url,
  {
    bodyData,
    namespace = "",
    autoNS = true,
    autoCall = true,
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

  const [getN, setN] = useState(getNamespace(namespace, bodyData));
  const [getV, setV] = useState(ApisEB.checkStored(url, getN)?.data ?? null);
  const [getW, setW] = useState(getV === null && autoCall);

  const callApi = async (
    bd,
    {
      ns = namespace,
      onSuccess = ({ message, data }) => {},
      onError = ({ message, data }) => {},
    } = {}
  ) => {
    setW(true);
    setV(null);
    setTimeout(async () => {
      setN(getNamespace(ns, bd));
      let r = await ApisEB.callStored(url, {
        method: "POST",
        bodyData: bd,
        namespace: getN,
      });
      setW(false);
      if (r.success === false) {
        console.log(r.message, r.data);
        if (onError) onError(r);
        else {
          alert(r.message);
        }
      } else {
        setV(r.data);
        if (onSuccess) onSuccess(r);
      }
    }, 10);
  };

  // auto call api
  useEffect(() => {
    if (autoCall === true && !getV) {
      callApi(bodyData, { ns: namespace, onSuccess, onError });
    }
    // eslint-disable-next-line
  }, []);

  return {
    get value() {
      return getV;
    },
    get waiting() {
      return getW;
    },
    get namespace() {
      return getN;
    },
    callApi: callApi,
    recallApi: () => callApi(bodyData, { ns: namespace, onSuccess, onError }),
  };
};

export function createApiStoredContext(
  url,
  handleData = (data) => data,
  { bodyData, namespace = "", autoNS = true, autoCall = true } = {}
) {
  return Context(() => {
    const getNamespace = (namespace, bodyData) => {
      if (!autoNS) {
        return namespace;
      } else {
        return `${namespace}:${eList.objToUrlData(bodyData ?? {})}`;
      }
    };

    const [getN, setN] = useState(getNamespace(namespace, bodyData));
    const [getW, setW] = useState(autoCall);
    const [getV, setV] = useState(ApisEB.checkStored(url, getN)?.data ?? null);

    const callApi = (bd, ns = namespace) => {
      setW(true);
      setV(null);
      setTimeout(async () => {
        setN(getNamespace(ns, bd));
        let r = await ApisEB.callStored(url, {
          method: "POST",
          bodyData: bd,
          namespace: getN,
        });
        setW(false);
        if (r.success === false) {
          console.log(r.message, r.data);
          alert(r.message);
        } else {
          setV(r.data);
        }
      }, 10);
    };

    // auto call api
    useEffect(() => {
      if (autoCall === true && !getV) {
        callApi(bodyData, namespace);
      }
      // eslint-disable-next-line
    }, []);

    return {
      get data() {
        return handleData(getV);
      },
      get value() {
        return getV;
      },
      get waiting() {
        return getW;
      },
      get namespace() {
        return getN;
      },
      callApi: callApi,
    };
  });
}
export function createApiContext(
  url,
  handleData = (data) => data,
  { bodyData, autoCall = true } = {}
) {
  return Context(() => {
    const [getW, setW] = useState(autoCall);
    const [getV, setV] = useState(null);

    const callApi = (bd) => {
      setW(true);
      setV(null);
      setTimeout(async () => {
        let r = await ApisEB.call(url, {
          method: "POST",
          bodyData: bd,
        });
        setW(false);
        if (r.success === false) {
          console.log(r.message, r.data);
          alert(r.message);
        } else {
          setV(r.data);
        }
      }, 10);
    };

    // auto call api
    useEffect(() => {
      if (autoCall === true && !getV) {
        callApi(bodyData);
      }
      // eslint-disable-next-line
    }, []);

    return {
      get data() {
        return handleData(getV);
      },
      get value() {
        return getV;
      },
      get waiting() {
        return getW;
      },
      callApi: callApi,
    };
  });
}
