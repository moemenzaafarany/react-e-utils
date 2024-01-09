/* eslint-disable no-unused-vars */
export default class eSocketServer {
    //========<
    #socket = null;
    #secure = null;
    #host = null;
    #port = null;
    #filepath = null;
    #protocols = null;
    #onOpen = null;
    #onClose = null;
    #onError = null;
    #onMessage = null;
    #url = null;
    //
    #open = false;
    get open() {
        return this.#open;
    }
    //========< public
    constructor({
        secure = false,
        host = null,
        port = null,
        filepath = null,
        protocols = [],
        onOpen = () => { },
        onClose = () => { },
        onError = (_error) => { },
        onMessage = (_data) => { }
    }) {
        this.#secure = secure;
        this.#host = host;
        this.#port = port;
        this.#filepath = filepath;
        this.#protocols = protocols;
        this.#onOpen = onOpen;
        this.#onClose = onClose;
        this.#onError = onError;
        this.#onMessage = onMessage;
    }
    connect() {
        // close first
        this.close();
        // reopen
        this.#url = `${this.#secure === true ? `wss` : `ws`}://${this.#host}${this.#port ? `:${this.#port}` : ""
            }${this.#filepath ? `/${this.#filepath}` : ``}`;

        this.#socket = new WebSocket(this.#url, this.#protocols);
        this.#socket.onopen = () => {
            this.#open = this.#socket.readyState === 1;
            if (this.#onOpen) this.#onOpen();
        };
        this.#socket.onerror = (evt) => {
            this.#open = this.#socket.readyState === 1;
            if (this.#onError) this.#onError(evt.data);
        };
        this.#socket.onclose = () => {
            this.#open = this.#socket.readyState === 1;
            if (this.#onClose) this.#onClose();
        };
        this.#socket.onmessage = (evt) => {
            this.#open = this.#socket.readyState === 1;
            if (this.#onMessage) this.#onMessage(evt.data);
        };
    }
    send(data) {
        if (this.#socket && this.#open === true) {
            this.#socket.send(data);
        }
    }
    close() {
        if (this.#socket && this.#open === true) {
            this.#socket.close();
        }
    }
}