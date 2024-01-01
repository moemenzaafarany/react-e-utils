/* eslint-disable no-unused-vars */
export default class eTimer {
    #interval = null;
    #startTime;
    #duration;
    #callback;
    constructor(duration = 1000, callback = (_time) => { }) {
        this.#duration = duration;
        this.#callback = callback;
    }
    start() {
        this.#startTime = performance.now();
        clearInterval(this.#interval);
        this.#callback(performance.now() - this.#startTime);
        this.#interval = setInterval(
            () => this.#callback(performance.now() - this.#startTime),
            this.#duration
        );
    }
    stop() {
        clearInterval(this.#interval);
    }
}