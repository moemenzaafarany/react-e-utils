/* eslint-disable no-unused-vars */
export default class eSocketServer {
    //========<
    static #states = {
        0: "connecting",
        1: "connected",
        2: "closing",
        3: "closed",
    };
    //========<
    #socket = null;
    #secure = null;
    #host = null;
    #port = null;
    #filepath = null;
    #onMessage = null;
    #onStateChange = null;
    #url = null;
    //
    #state = 0;
    #connected = false;
    #error = null;
    //========< public
    constructor({
        secure = false,
        host = null,
        port = null,
        filepath = null,
        onMessage = (_data) => { },
        onStateChange = (_state, _stateText, _connected, _error) => { },
    }) {
        this.#secure = secure;
        this.#host = host;
        this.#port = port;
        this.#filepath = filepath;
        this.#onMessage = onMessage;
        this.#onStateChange = onStateChange;
        this.connect();
    }
    connect() {
        // close first
        this.close();
        // reopen
        this.#url = `${this.#secure === true ? `wss` : `ws`}://${this.#host}${this.#port ? `:${this.#port}` : ""
            }${this.#filepath ? `/${this.#filepath}` : ``}`;

        this.#socket = new WebSocket(this.#url);
        this.#setState();
        this.#socket.onopen = () => {
            this.#setState();
        };
        this.#socket.onerror = () => {
            this.#setState();
        };
        this.#socket.onclose = () => {
            this.#setState();
        };
        this.#socket.onmessage = (evt) => {
            this.#setState();
            if (this.#onMessage) this.#onMessage(evt.data);
        };
    }
    send(data) {
        if (this.#socket && this.#connected) {
            this.#socket.send(data);
        }
    }
    close() {
        if (this.#socket && this.#connected) {
            this.#socket.close();
        }
    }
    #setState(error) {
        this.#state = this.#socket.readyState;
        this.#connected = this.#state === 1;
        this.#error = error;
        //
        if (this.#onStateChange)
            this.#onStateChange(
                this.#state,
                eSocketServer.#states[this.#state],
                this.#connected,
                this.#error
            );
    }
}