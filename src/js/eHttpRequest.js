import eNum from "./eNum";

export default class eHttpRequest {
    //========< private static
    #states = {
        0: "unsent",
        1: "opened",
        2: "uploading",
        3: "processing",
        4: "downloading",
        5: "completed",
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
        5: null,
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
        estimate: 0,
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
        estimate: 0,
    };
    //========< public
    constructor(
        method = null,
        address = null,
        {
            headers = null,
            urlData = null,
            bodyData = null,
            responseType = null,
            onStateChange = null,
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
            for (var key in this.#urlData)
                query += `${encodeURIComponent(key)}=${encodeURIComponent(
                    this.#urlData[key]
                )}&`;
            this.#address += query;
        }
        // setState
        this.#setState(0, null);
    }
    async send() {
        return await new Promise((resolve) => {
            try {
                // request
                // response type
                if (this.#responseType) this.#request.responseType = this.#responseType;
                // this.#request.timeout = 4000;
                this.#request.open(
                    this.#method,
                    this.#address,
                    true
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
                this.#request.onloadstart = () => this.#setState(1, null);
                // upload onloadstart
                this.#request.upload.onloadstart = (event) => {
                    if (this.#onStateChange) this.#uploadCalc(event.total, event.loaded);
                    this.#setState(2, null);
                };
                // upload onprogress
                this.#request.upload.onprogress = (event) => {
                    if (this.#onStateChange) this.#uploadCalc(event.total, event.loaded);
                    this.#setState(2, null);
                };
                // upload onload
                this.#request.upload.onloadend = (event) => {
                    if (this.#onStateChange) this.#uploadCalc(event.total, event.loaded);
                    this.#setState(3, null);
                };
                // onprogress
                this.#request.onprogress = (event) => {
                    if (this.#onStateChange)
                        this.#downloadCalc(event.total, event.loaded);
                    this.#setState(4, null);
                };
                // onload
                this.#request.onloadend = (event) => {
                    if (this.#onStateChange)
                        this.#downloadCalc(event.total, event.loaded);
                    this.response = this.#request.response;
                    this.#setState(5, null);
                    resolve(this);
                };
                // ontimeout
                this.#request.ontimeout = () => {
                    this.#setState(5, "timeout");
                    resolve(this);
                };
                // onabort
                this.#request.onabort = () => {
                    this.#setState(5, "aborted");
                    resolve(this);
                };
                // onerror
                this.#request.onerror = () => {
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
            this.#upload.percentage = eNum.round(
                (this.#upload.loaded / this.#upload.total) * 100,
                2
            );
            this.#upload.speed = eNum.round(
                this.#upload.loaded / this.#upload.duration,
                2
            );
            this.#upload.estimate = eNum.round(
                (this.#upload.total - this.#upload.loaded) / this.#upload.speed,
                2
            );
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
            this.#download.percentage = eNum.round(
                (this.#download.loaded / this.#download.total) * 100,
                2
            );
            this.#download.speed = eNum.round(
                this.#download.loaded / this.#download.duration,
                2
            );
            this.#download.estimate = eNum.round(
                (this.#download.total - this.#download.loaded) / this.#download.speed,
                2
            );
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
            if (state > 0)
                this.stats[state - 1] =
                    this.stats[state] - (this.stats[state - 1] ?? 0);
        }
        //
        if (this.#onStateChange) this.#onStateChange(this);
    }
}