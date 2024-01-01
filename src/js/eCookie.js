import { eStr } from "./eStr";
import eType from "./eType";

export default class eCookie {
    static get enabled() {
        return navigator.cookieEnabled;
    }
    static get(name) {
        try {
            if (!eType.str(name)) return false;
            name = eStr.str2hex(name);
            var value = null;
            var list = decodeURIComponent(document.cookie).split(";");
            // separate
            var map = {};
            for (var str of list) {
                var pair = str.trim().split("=");
                var val = pair.join("=").split(`${pair[0]}=`)[1];

                if (Object.prototype.hasOwnProperty.call(map, pair[0])) {
                    if (!eType.arr(map[pair[0]])) map[pair[0]] = [map[pair[0]]];
                    map[pair[0]].push(val);
                } else {
                    map[pair[0]] = val;
                }
            }
            value = map[name];
            // decode
            value = eStr.storageDecode(value);
            return value;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static set(
        name,
        value,
        { expireHours = 24 * 7 } = {}
    ) {
        try {
            if (!eType.str(name)) return false;
            name = eStr.str2hex(name);
            // expire
            var expire = "";
            if (eType.num(expireHours)) {
                expire = new Date(Date.now() + expireHours * 3600000).toUTCString();
                expire = `expires=${expire};`
            }
            // encode
            value = eStr.storageEncode(value);
            // set
            document.cookie = `${name}=${value};${expire}path=/;`;
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static del(name) {
        try {
            if (!eType.str(name)) return false;
            name = eStr.str2hex(name);
            document.cookie = `${name}=${null};expires=${new Date(
                Date.now() / 2
            ).toUTCString()};path=/`;
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}