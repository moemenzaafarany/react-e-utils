//========< privileges handler
// export class ePrivileges {
//     static #data = {};
//     static #current = {};
//     static #storeData = true;
//     //========<
//     static get data() {
//         return ePrivileges.#data;
//     }
//     static get current() {
//         return ePrivileges.#current;
//     }
//     static get dataValues() {
//         let obj = {};
//         for (let code in ePrivileges.#data) {
//             let values = [];
//             let flat = eList.objFlatten(ePrivileges.#data[code].data);
//             for (let k in flat) {
//                 if (eType.arr(flat[k])) values = [...values, ...flat[k]];
//                 else values.push(flat[k]);
//             }
//             obj[code] = eList.arrUnique(values);
//         }
//         return obj;
//     }
//     //========< init
//     static init(privileges, { storeData = true } = {}) {
//         try {
//             ePrivileges.#storeData = storeData;
//             for (let v of privileges) {
//                 ePrivileges.addPrivileges(v);
//             }
//             if (ePrivileges.#storeData) {
//                 eCookie.set("privileges", ePrivileges.#current);
//             }
//         } catch (err) {
//             console.trace(this?.constructor?.name, err);
//             return undefined;
//         }
//     }
//     //========< add privileges
//     static addPrivileges({ code, initial, data }) {
//         try {
//             if (code) {
//                 ePrivileges.#data[code] = { code, data };
//                 ePrivileges.#current[code] = initial;
//                 if (ePrivileges.#storeData) {
//                     let vs = eCookie.get("privileges");
//                     if (vs[code]) ePrivileges.#current[code] = vs[code];
//                 }
//             }
//         } catch (err) {
//             console.trace(this?.constructor?.name, err);
//             return undefined;
//         }
//     }
//     //========< value
//     static setPrivilege(code, value, { reloadPage = true } = {}) {
//         try {
//             ePrivileges.#current[code] = value;
//             if (ePrivileges.#storeData === true) {
//                 eCookie.set("privileges", ePrivileges.#current);
//             }
//             if (reloadPage) window.location.reload(false);
//         } catch (err) {
//             console.trace(this?.constructor?.name, err);
//             return undefined;
//         }
//     }
//     //========< check
//     static hasPrivilege(code, id) {
//         try {
//             if (!ePrivileges.#data[code] || !eType.str(id)) return true;
//             let exists = false;
//             let keys = id?.split("/");
//             if (keys) {
//                 let page = eList.crawl(ePrivileges.#data[code].data, keys);
//                 let privs = [];
//                 // get list of privileges
//                 if (eType.arr(page)) privs = page;
//                 else if (eType.obj(page)) {
//                     page = eList.objFlatten(page);
//                     for (let v of Object.values(page)) {
//                         privs = [...privs, ...v];
//                     }
//                     privs = eList.arrUnique(privs);
//                 } else if (eType.str(page)) privs.push(page);
//                 // check if has privileges
//                 let userp = ePrivileges.#current[code];
//                 if (userp === "*" || privs.includes("*") === true) exists = true;
//                 else {
//                     if (eType.str(userp)) userp = [userp];
//                     for (let p of userp) {
//                         if (privs.includes(p) === true) exists = true;
//                     }
//                 }
//             } else exists = true;
//             return exists;
//         } catch (err) {
//             console.trace(this?.constructor?.name, err);
//             return undefined;
//         }
//     }
//     static privileged(obj) {
//         try {
//             if (!eType.obj(obj)) return true;
//             //
//             let missing = false;
//             for (let k in obj) {
//                 let v = obj[k];
//                 if (!ePrivileges.hasPrivilege(k, v)) missing = true;
//             }
//             return !missing;
//         } catch (err) {
//             console.trace(this?.constructor?.name, err);
//             return undefined;
//         }
//     }
// }
// export class ePrivilege {
//     // params
//     #key;
//     get key() { return this.#key; }
//     #def;
//     get def() { return this.#def; }
//     #data;
//     get data() { return this.#data; }
//     // constructor
//     constructor(key = "priv1", def = "*", data = {}) {
//         this.#key = key;
//         this.#def = def;
//         this.#data = eList.objFlatten(data, ".");
//     }
//     // translate
//     privileged(key) {
//         try {
//             key


//             var str = eList.crawl(this.data, key?.split("."), null);
//             if (str && fillerTag && fillers) {
//                 var i = 0;
//                 while (str.includes(fillerTag)) {
//                     str = str.replace(fillerTag, fillers[i] ?? "");
//                     i++;
//                 }
//             }
//             return (str ?? "N/A");
//         } catch (err) {
//             console.trace(this?.constructor?.name, err);
//             return undefined;
//         }
//     }
// }
//========< themes handler