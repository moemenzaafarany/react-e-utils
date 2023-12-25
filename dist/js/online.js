import { eType } from "./type";
import { eStr } from "./str";
import { eDom } from "./dom";
export class eOnline {
  static get online() {
    return window.navigator.onLine;
  }
  static get type() {
    return navigator.connection.effectiveType;
  }
  static get dataSaver() {
    return navigator.connection.saveData;
  }
  static subscribe(callback = online => {}) {
    try {
      if (!eType.func(callback)) {
        throw `invalid callback=${eStr.from(callback)}`;
      }
      let abortOnline = offeDom.listenEvent(window, "online", event => {
        callback(true);
      }, {
        capture: true
      });
      let abortOffline = eDom.listenEvent(window, "offline", event => {
        callback(false);
      }, {
        capture: true
      });
      return () => {
        abortOnline.abort();
        abortOffline.abort();
      };
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return NaN;
    }
  }
}
(function () {
  "use strict";

  eDom.listenEvent(window, "online", event => {
    console.log("online", event);
  }, {
    capture: true
  });
  eDom.listenEvent(window, "offline", event => {
    console.log("offline", event);
  }, {
    capture: true
  });
  eDom.listenEvent(navigator.connection, "change", event => {
    console.log("change", event);
  }, {
    capture: true
  });
})();