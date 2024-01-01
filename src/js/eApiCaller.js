import eHttpRequest from "./eHttpRequest";
import eList from "./eList";
import eLocaleStorage from "./eLocaleStorage";
import { eSuccess } from "./eRes";
import eSessionStorage from "./eSessionStorage";
import eType from "./eType";


export default class eApiCaller {
    //========< private variables
    #baseUrl = null;
    get baseUrl() { return this.#baseUrl }
    #defaultHeaders = null;
    #defaultUrlData = null;
    #defaultBodyData = null;
    #bodyDataType = null;
    #responseHandler = null;
    #responseType = null;
    #onBefore = null;
    #onAfter = null;
    //========< public
    constructor(
        baseUrl = null,
        {
            defaultUrlData = {},
            defaultBodyData = {},
            defaultHeaders = {},
            bodyDataType = "json",
            responseHandler = (_request) => { return eSuccess(null, _request) },
            responseType = "json",
            onBefore = () => { },
            onAfter = () => { },
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
        onAfter = this.#onAfter,
    } = {}) {
        try {
            // before
            if (eType.func(onBefore)) onBefore();
            // add default headers
            if (!eType.obj(headers)) headers = {};
            headers = { ...this.#defaultHeaders, ...headers };
            // add default url data
            if (!eType.obj(urlData)) urlData = {};
            urlData = { ...this.#defaultUrlData, ...urlData };
            urlData = eList.objToUrlData(urlData);
            if (urlData) urlData = `?${urlData}`;
            // add body data
            if (eType.formData(bodyData)) {
                bodyData = eList.formDataToObj(bodyData);
            }
            if (!eType.obj(bodyData)) {
                bodyData = {};
            }
            bodyData = { ...this.#defaultBodyData, ...bodyData };
            switch (bodyDataType) {
                case "formdata":
                    bodyData = eList.objToFormData(bodyData);
                    break;
                default:
                    bodyData = JSON.stringify();
                    break;
            }
            // xhr
            var request = new eHttpRequest(
                method,
                this.#baseUrl + url + urlData,
                {
                    headers: headers,
                    responseType: responseType,
                    bodyData: bodyData,
                }
            );
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
        storage = "session",
    } = {}) {
        try {
            let name = `${this.#baseUrl}${url}${namespace && `:${namespace}`}`;
            // check data exists
            let res;
            if (storage === "locale") res = eLocaleStorage.get(name);
            else res = eSessionStorage.get(name);
            if (res) {
                return eSuccess(res.message, res.data)
            }
            // doesnt exist
            let r = await this.call(url, { method, headers, urlData, bodyData, bodyDataType, responseType, onBefore, onAfter });
            // error handler
            if (r.success === false) {
                return r;
            } else {
                // success save
                if (storage === "locale") {
                    eLocaleStorage.set(name, { message: r.message, data: r.data });
                } else {
                    eSessionStorage.set(name, { message: r.message, data: r.data });
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
            if (storage === "locale") return eLocaleStorage.get(name);
            else return eSessionStorage.get(name);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
}