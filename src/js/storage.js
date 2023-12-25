import { eType } from "./type";
import { eStr } from "./str";

export class eUrl {
    // url
    static getUrl(href, hashPath) {
        try {
            const url = new URL(href ?? window.location.href);
            return {
                base: url.href?.split("?")[0],
                href: url.href,
                params: eUrl.getParams(url.href),
                hash: eUrl.getHash(url.href),
                hashValues: (eType.str(hashPath) ? eUrl.getHashValues(hashPath, url.href) : null),
            };
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static setUrl(
        href = null,
        {
            params = {},
            hashPath = "",
            hashValues = {}
        }
    ) {
        try {
            const url = new URL(href ?? window.location.href);
            if (eType.obj(params)) url.href = eUrl.setParams(params, url.href);
            else url.href = eUrl.clearParams(url.href);
            if (eType.str(hashPath)) url.href = eUrl.setHash(hashPath, hashValues, url.href);
            else url.href = eUrl.clearHash(url.href);
            return url.href;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }

    // params
    static getParam(name, href) {
        try {
            if (!eType.str(name)) throw `invalid name=${eStr.from(name)}`;
            const url = new URL(href ?? window.location.href);
            return url.searchParams.get(name);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static getParams(href) {
        try {
            const url = new URL(href ?? window.location.href);
            let list = {};
            for (let key of url.searchParams.keys()) {
                if (key.indexOf("[]") > -1) list[key.replace("[]", "")] = url.searchParams.getAll(key);
                else list[key] = url.searchParams.get(key);
            }
            return list
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static setParam(name, value, href) {
        try {
            if (!eType.str(name)) throw `invalid name=${eStr.from(name)}`;
            const url = new URL(href ?? window.location.href);
            url.searchParams.set(name, value);
            return url.href;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static setParams(object = {}, href) {
        try {
            if (!eType.obj(object)) throw `invalid object=${eStr.from(object)}`;
            const url = new URL(href ?? window.location.href);
            url.search = "";
            for (let k in object) {
                let val = object[k];
                if (eType.arr(val)) {
                    for (let v of val) url.searchParams.append(`${k}[]`, v);
                } else {
                    url.searchParams.set(`${k}`, val);
                }
            }
            return url.href;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static delParam(name, href) {
        try {
            if (!eType.str(name)) throw `invalid name=${eStr.from(name)}`;
            const url = new URL(href ?? window.location.href);
            url.searchParams.delete(name);
            return url.href;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static clearParams(href) {
        try {
            const url = new URL(href ?? window.location.href);
            url.search = "";
            return url.href;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }

    // hash
    static getHash(href) {
        try {
            const url = new URL(href ?? window.location.href);
            if (!url.hash) return null;
            return url.hash.slice(1);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static getHashValues(pattern, href) { // "path like section1 section/:id"
        try {
            if (eUrl.matchHash(pattern, href)) {
                let hash = eUrl.getHash(href);
                let hashs = hash.split("/");
                let list = {};
                let sections = pattern.split("/");
                for (let i in sections) {
                    let v = sections[i]
                    if (v.indexOf(":") === 0) {
                        v = v.slice(1);
                        list[v] = hashs[i];
                    }
                }
                return list;
            }
            return {};
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static matchHash(pattern, href) {
        try {
            if (!eType.str(pattern)) throw `invalid pattern=${eStr.from(pattern)}`;
            const url = new URL(href ?? window.location.href);
            if (!url.hash) return {}
            let sections = pattern.split("/");
            for (let i in sections) {
                let v = sections[i]
                if (v.indexOf(":") === 0) {
                    v = v.slice(1);
                    sections[i] = "([^\\/](.*)|)";
                }
            }
            let regex = new RegExp(`\^${sections.join('\\/')}\$`, "i");
            let hash = url.hash.slice(1);
            return hash.match(regex);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static setHash(path, values = {}, href) { // "path like section1 section/:id"
        try {
            if (!eType.str(path)) throw `invalid path=${eStr.from(path)}`;
            const url = new URL(href ?? window.location.href);
            url.hash = (!path ? "" : `#${(!eType.obj(values) ? path : eUrl.hashParams(path, values))}`);
            return url.href;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static clearHash(href) {
        try {
            const url = new URL(href ?? window.location.href);
            url.hash = "";
            return url.href
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static hashParams(path, values = {}) { // "path section/:id,"
        try {
            if (!eType.str(path) || !eType.obj(values)) throw `invalid path=${eStr.from(path)}|values=${eStr.from(values)}`;
            let paths = path.split("/");
            for (let i in paths) {
                let v = paths[i];
                if (v.indexOf(":") === 0) {
                    v = v.slice(1);
                    paths[i] = values[v] ?? "";
                }
            }
            return paths.join("/");
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }

    // apply
    static apply(href, data = null, pushState = false) {
        try {
            if (pushState !== true) window.history.replaceState(data, null, href);
            else window.history.pushState(data, null, href);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}
export class eCookie {
    static get enabled() {
        return navigator.cookieEnabled;
    }
    static get(name) {
        try {
            if (!eType.str(name)) return false;
            var value = null;
            var list = decodeURIComponent(document.cookie).split(";");
            // separate
            var map = {};
            for (var str of list) {
                var pair = str.trim().split("=");
                var val = pair.join("=").split(`${pair[0]}=`)[1];

                if (map.hasOwnProperty(pair[0])) {
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
export class eSessionStorage {
    static get enabled() {
        try {
            const key = `__MZ_Storage_Test__`;
            sessionStorage.setItem(key, null);
            sessionStorage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }
    static get(name) {
        try {
            if (!eType.str(name)) return false;
            var value = sessionStorage.getItem(name);
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
            // encode
            value = eStr.storageEncode(value);
            // set
            sessionStorage.setItem(name, value);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static del(name) {
        try {
            if (!eType.str(name)) return false;
            sessionStorage.removeItem(name);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}
export class eLocaleStorage {
    static get enabled() {
        try {
            const key = `__MZ_Storage_Test__`;
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
            localStorage.removeItem(name);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}