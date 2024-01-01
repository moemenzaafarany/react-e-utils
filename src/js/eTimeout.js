/* eslint-disable no-unused-vars */

export default class eTimeout {
    #timeout = null;
    #startTime;
    #duration;
    #callback;
    constructor(duration = 1000, callback = (_time) => { }) {
        this.#duration = duration;
        this.#callback = callback;
    }
    start() {
        this.#startTime = performance.now();
        clearTimeout(this.#timeout);
        this.#timeout = setTimeout(
            () => this.#callback(performance.now() - this.#startTime),
            this.#duration
        );
    }
    reset() {
        this.start();
    }
    stop() {
        clearTimeout(this.#timeout);
    }
}