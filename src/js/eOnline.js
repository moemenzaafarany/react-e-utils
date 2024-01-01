/* eslint-disable no-unused-vars */
import eDom from "./eDom";
import eStr from "./eStr";
import eType from "./eType";

export default class eOnline {
    static get online() { return window.navigator.onLine; }
    static get type() { return navigator.connection.effectiveType; }
    static get dataSaver() { return navigator.connection.saveData; }

    static subscribe(callback = (_online) => { }) {
        try {
            if (
                !eType.func(callback)
            ) {
                throw `invalid callback=${eStr.from(callback)}`;
            }

            let abortOnline = eDom.listenEvent(window, "online", () => {
                callback(true);
            }, { capture: true });
            let abortOffline = eDom.listenEvent(window, "offline", () => {
                callback(false);
            }, { capture: true });

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

    eDom.listenEvent(window, "online", (event) => {
        console.log("online", event);
    }, { capture: true });
    eDom.listenEvent(window, "offline", (event) => {
        console.log("offline", event);
    }, { capture: true });
})();