import eStr from "./eStr";
import eType from "./eType";

export default class eLocaleStorage {
    static get enabled() {
        try {
            const key = `__E_Storage_Test__`;
            localStorage.setItem(key, null);
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }
    static get(name) {
        try {
            if (!eType.str(name)) return false;
            name = eStr.str2hex(name);
            var value = localStorage.getItem(name);
            // decode
            value = eStr.storageDecode(value);
            return value;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static set(name, value) {
        try {
            if (!eType.str(name)) return false;
            name = eStr.str2hex(name);
            // encode
            value = eStr.storageEncode(value);
            // set
            localStorage.setItem(name, value);
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
            localStorage.removeItem(name);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}