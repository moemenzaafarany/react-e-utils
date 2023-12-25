export class eRes {
  //========< private variables
  #success = true;
  #message = null;
  #data = null;
  //========< getters
  get success() {
    return this.#success;
  }
  get message() {
    return this.#message;
  }
  get data() {
    return this.#data;
  }
  //========< constructors
  constructor(success = true, message = null, data = null) {
    this.#success = success;
    this.#message = message ? message.toString() : null;
    this.#data = data;
  }
  static success(message, data) {
    return new eRes(true, message, data);
  }
  static error(message, data) {
    return new eRes(false, message, data);
  }
}
export const eSuccess = eRes.success;
export const eError = eRes.error;