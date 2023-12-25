import { eType } from "./type";
import { eNum } from "./num";
import { eList } from "./list";
import { eLocaleStorage, eSessionStorage } from "./storage";
export class eHttpRequest {
  //========< private static
  #states = {
    0: "unsent",
    1: "opened",
    2: "uploading",
    3: "processing",
    4: "downloading",
    5: "completed"
  };
  //========< private variables
  #request = new XMLHttpRequest();
  #method = null;
  #address = null;
  #headers = null;
  #urlData = null;
  #bodyData = null;
  #responseType = null;
  #onStateChange = null;
  //
  httpCode = null;
  state = null;
  stateText = null;
  error = null;
  response = null;
  //========< stats
  stats = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  };
  //========< upload
  #upload = {
    start: null,
    total: 0,
    loaded: 0,
    time: 0,
    duration: 0,
    percentage: 0,
    speed: 0,
    estimate: 0
  };
  //========< download
  #download = {
    start: null,
    total: 0,
    loaded: 0,
    time: 0,
    duration: 0,
    percentage: 0,
    speed: 0,
    estimate: 0
  };
  //========< public
  constructor(method = null, address = null, {
    headers = null,
    urlData = null,
    bodyData = null,
    responseType = null,
    onStateChange = null
  } = {}) {
    this.#method = method;
    this.#address = address;
    this.#headers = headers;
    this.#urlData = urlData;
    this.#bodyData = bodyData;
    this.#responseType = responseType;
    this.#onStateChange = onStateChange;
    // encode url data
    if (this.#urlData) {
      var query = "?";
      for (var key in this.#urlData) query += `${encodeURIComponent(key)}=${encodeURIComponent(this.#urlData[key])}&`;
      this.#address += query;
    }
    // setState
    this.#setState(0, null);
  }
  async send() {
    return await new Promise(resolve => {
      try {
        // request
        // response type
        if (this.#responseType) this.#request.responseType = this.#responseType;
        // this.#request.timeout = 4000;
        this.#request.open(this.#method, this.#address, true
        // this.#requestUsername,
        // this.#requestPassword
        );
        // 
        if (this.#headers) {
          for (var key in this.#headers) {
            this.#request.setRequestHeader(key, this.#headers[key]);
          }
        }
        // onloadstart
        this.#request.onloadstart = event => this.#setState(1, null);
        // upload onloadstart
        this.#request.upload.onloadstart = event => {
          if (this.#onStateChange) this.#uploadCalc(event.total, event.loaded);
          this.#setState(2, null);
        };
        // upload onprogress
        this.#request.upload.onprogress = event => {
          if (this.#onStateChange) this.#uploadCalc(event.total, event.loaded);
          this.#setState(2, null);
        };
        // upload onload
        this.#request.upload.onloadend = event => {
          if (this.#onStateChange) this.#uploadCalc(event.total, event.loaded);
          this.#setState(3, null);
        };
        // onprogress
        this.#request.onprogress = event => {
          if (this.#onStateChange) this.#downloadCalc(event.total, event.loaded);
          this.#setState(4, null);
        };
        // onload
        this.#request.onloadend = event => {
          if (this.#onStateChange) this.#downloadCalc(event.total, event.loaded);
          this.response = this.#request.response;
          this.#setState(5, null);
          resolve(this);
        };
        // ontimeout
        this.#request.ontimeout = event => {
          this.#setState(5, "timeout");
          resolve(this);
        };
        // onabort
        this.#request.onabort = event => {
          this.#setState(5, "aborted");
          resolve(this);
        };
        // onerror
        this.#request.onerror = event => {
          this.#setState(5, "failed");
          resolve(this);
        };
        // send
        this.#request.send(this.#bodyData);
      } catch (e) {
        this.#setState(5, e);
      }
    });
  }
  //========< private
  #uploadCalc(total, loaded) {
    if (!this.#upload.start) this.#upload.start = performance.now();
    this.#upload.total = total;
    this.#upload.loaded = loaded;
    this.#upload.duration = performance.now() - this.#upload.start;
    if (this.state !== 2) {
      this.#upload.speed = 0;
      this.#upload.estimate = 0;
    } else {
      this.#upload.percentage = eNum.round(this.#upload.loaded / this.#upload.total * 100, 2);
      this.#upload.speed = eNum.round(this.#upload.loaded / this.#upload.duration, 2);
      this.#upload.estimate = eNum.round((this.#upload.total - this.#upload.loaded) / this.#upload.speed, 2);
    }
  }
  #downloadCalc(total, loaded) {
    if (!this.#download.start) this.#download.start = performance.now();
    this.#download.total = total;
    this.#download.loaded = loaded;
    this.#download.duration = performance.now() - this.#download.start;
    if (this.state !== 4) {
      this.#download.speed = 0;
      this.#download.estimate = 0;
    } else {
      this.#download.percentage = eNum.round(this.#download.loaded / this.#download.total * 100, 2);
      this.#download.speed = eNum.round(this.#download.loaded / this.#download.duration, 2);
      this.#download.estimate = eNum.round((this.#download.total - this.#download.loaded) / this.#download.speed, 2);
    }
  }
  #setState(state, error = null) {
    this.httpCode = this.#request.status;
    this.state = state;
    this.stateText = this.#states[state];
    this.error = error;
    //
    if (!this.stats[state]) {
      this.stats[state] = performance.now();
      if (state > 0) this.stats[state - 1] = this.stats[state] - (this.stats[state - 1] ?? 0);
    }
    //
    if (this.#onStateChange) this.#onStateChange(this);
  }
}
export class eApiCaller {
  //========< private variables
  #baseUrl = null;
  get baseUrl() {
    return this.#baseUrl;
  }
  #defaultHeaders = null;
  #defaultUrlData = null;
  #defaultBodyData = null;
  #bodyDataType = null;
  #responseHandler = null;
  #responseType = null;
  #onBefore = null;
  #onAfter = null;
  //========< public
  constructor(baseUrl = null, {
    defaultUrlData = {},
    defaultBodyData = {},
    defaultHeaders = {},
    bodyDataType = "json",
    responseHandler = request => {
      return eSuccess(null, null);
    },
    responseType = "json",
    onBefore = () => {},
    onAfter = () => {}
  } = {}) {
    this.#baseUrl = baseUrl;
    this.#defaultHeaders = defaultHeaders ?? {};
    this.#defaultUrlData = defaultUrlData ?? {};
    this.#defaultBodyData = defaultBodyData ?? {};
    this.#bodyDataType = bodyDataType;
    this.#responseHandler = responseHandler;
    this.#responseType = responseType;
    this.#onBefore = onBefore;
    this.#onAfter = onAfter;
  }
  //========< public
  async call(url, {
    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = this.#bodyDataType,
    responseType = this.#responseType,
    onBefore = this.#onBefore,
    onAfter = this.#onAfter
  } = {}) {
    try {
      // before
      if (eType.func(onBefore)) onBefore();
      // add default headers
      if (!eType.obj(headers)) headers = {};
      headers = {
        ...this.#defaultHeaders,
        ...headers
      };
      // add default url data
      if (!eType.obj(urlData)) urlData = {};
      urlData = {
        ...this.#defaultUrlData,
        ...urlData
      };
      urlData = eList.objToUrlData(urlData);
      if (urlData) urlData = `?${urlData}`;
      // add body data
      if (eType.formData(bodyData)) {
        bodyData = eList.formDataToObj(bodyData);
      }
      if (!eType.obj(bodyData)) {
        bodyData = {};
      }
      bodyData = {
        ...this.#defaultBodyData,
        ...bodyData
      };
      switch (bodyDataType) {
        case "formdata":
          bodyData = eList.objToFormData(bodyData);
          break;
        default:
          bodyData = JSON.stringify();
          break;
      }
      // xhr
      var request = new eHttpRequest(method, this.#baseUrl + url + urlData, {
        headers: headers,
        responseType: responseType,
        bodyData: bodyData
      });
      // await response
      await request.send();
      // after
      if (eType.func(onAfter)) onAfter();
      // return
      return this.#responseHandler(request);
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return null;
    }
  }
  //========< public
  async callStored(url, {
    method = "POST",
    headers = {},
    urlData = {},
    bodyData = {},
    bodyDataType = this.#bodyDataType,
    responseType = this.#responseType,
    onBefore = this.#onBefore,
    onAfter = this.#onAfter,
    namespace = "",
    storage = "session"
  } = {}) {
    try {
      let name = `${this.#baseUrl}${url}${namespace && `:${namespace}`}`;
      // check data exists
      let res;
      if (storage === "locale") res = eLocaleStorage.get(name);else res = eSessionStorage.get(name);
      if (res) {
        return eSuccess(res.message, res.data);
      }
      // doesnt exist
      let r = await this.call(url, {
        method,
        headers,
        urlData,
        bodyData,
        bodyDataType,
        responseType,
        onBefore,
        onAfter
      });
      // error handler
      if (r.success === false) {
        return r;
      } else {
        // success save
        if (storage === "locale") {
          eLocaleStorage.set(name, {
            message: r.message,
            data: r.data
          });
        } else {
          eSessionStorage.set(name, {
            message: r.message,
            data: r.data
          });
        }
        return eSuccess(r.message, r.data);
      }
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return null;
    }
  }
  //========< public
  checkStored(url, namespace = "", storage = "session") {
    try {
      let name = `${namespace}:${this.#baseUrl}${url}`;
      if (storage === "locale") return eLocaleStorage.get(name);else return eSessionStorage.get(name);
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return null;
    }
  }
}