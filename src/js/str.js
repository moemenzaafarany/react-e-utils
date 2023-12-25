import { eType } from "./type";

export class eStr {
    static pad(value, length, padChar = "0", left = true) {
        try {
            if (
                eType.null(value) ||
                !eType.num(length) ||
                !eType.str(padChar) ||
                !eType.bool(left)
            )
                throw `invalid value=${eStr.from(value)}|length=${eStr.from(length)}|padChar=${eStr.from(padChar)}|left=${eStr.from(left)}`;
            value = value.toString();
            let rep = eStr.repeat(padChar || "0", Math.abs(length) - value.length);
            if (left) return rep + value;
            else return value + rep;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static padLeft(value, length, padChar = "0") {
        return eStr.pad(value, length, padChar, true);
    }
    static padRight(value, length, padChar = "0") {
        return eStr.pad(value, length, padChar, false);
    }
    static repeat(value, count) {
        try {
            if (eType.null(value) || !eType.num(count)) throw `invalid value=${eStr.from(value)}|count=${eStr.from(count)}`;
            value = value.toString();
            let str = "";
            for (let i = 0; i < count; i++) str += value;
            return str;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static indent(count, value = "&#160;") {
        try {
            return eStr.repeat(value, count);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static size(text) {
        try {
            // text
            text = eStr.from(text);
            // calc
            return new TextEncoder().encode(text).byteLength;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static copyToClipboard(str, alertText = "Data copied to clipboard") {
        try {
            navigator.clipboard.writeText(str);
            if (alertText) alert(alertText);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static from(v) {
        if (!v) return "";
        if (eType.arr(v) || eType.obj(v)) v = JSON.stringify(v);
        if (eType.multi(v, ["str", "num", "bool"])) v = `${v}`;
        if (eType.class(v) === "object") v = v?.constructor?.name;
        return `${v}`;
    }

    // to hex and back
    static str2hex(str) {
        try {
            let hex = '';
            for (let i = 0; i < str.length; i++) {
                hex += str.charCodeAt(i).toString(16);
            }
            return hex;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static hex2str(hex) {
        try {
            let str = '';
            for (let i = 0; i < hex.length; i += 2) {
                str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
            }
            return str;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }

    static storageEncode(value) {
        try {
            if (!value) return null;
            let json = eType.arr(value) || eType.obj(value);
            if (value) {
                if (json) value = JSON.stringify(value);
                // value = encodeURIComponent(value);
            }
            return JSON.stringify({ j: json, v: value });
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static storageDecode(value) {
        try {
            if (!value) return null;
            let data = JSON.parse(value);
            let json = data.j;
            value = data.v;
            if (value) {
                // value = decodeURIComponent(value);
                if (json) value = JSON.parse(value);
            }
            return value;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
}