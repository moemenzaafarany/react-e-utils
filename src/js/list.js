/* eslint-disable no-unused-vars */
import { eType } from "./type";
import { eStr } from "./str";

export class eList {
    //=======< array
    static findIndex(array, findCondition = (_index, _value) => { }) {
        try {
            if (!eType.arr(array) || !eType.func(findCondition)) throw `invalid array=${eStr.from(array)}|findCondition=${eStr.from(findCondition)}`;
            for (var index in array) {
                if (findCondition(index, array[index]) === true) return index;
            }
            return null;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static findInArr(array, findCondition = (_index, _value) => { }) {
        let i = eList.findIndex(array, findCondition);
        if (!i) return null;
        return array[i];
    }
    static findAllInArr(array, findCondition = (_index, _value) => { }) {
        try {
            if (!eType.arr(array) || !eType.func(findCondition)) throw `invalid array=${eStr.from(array)}|findCondition=${eStr.from(findCondition)}`;
            let list = [];
            for (var index in array) {
                if (findCondition(index, array[index]) === true) list.push(array[index]);
            }
            return list;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static sortArr(array, reverse = false, processValue = (value) => value) {
        try {
            if (!eType.arr(array) && eType.func(processValue)) throw `invalid array=${eStr.from(array)}|processValue=${eStr.from(processValue)}`;
            reverse = reverse === true ? -1 : 1;
            return array.sort(function (a, b) {
                // process
                a = processValue(a);
                b = processValue(b);
                // sort
                if (a < b) return -1 * reverse;
                if (a > b) return 1 * reverse;
                return 0;
            });
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static removeIndexFromArr(array, index) {
        try {
            if (!eType.arr(array) || !eType.num(parseInt(index)))
                throw `invalid array=${eStr.from(array)}|index=${eStr.from(index)}`;
            array.splice(parseInt(index), 1);
            return array;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return array;
        }
    }
    static removeValueFromArr(array, value) {
        try {
            if (!eType.arr(array)) throw `invalid array=${eStr.from(array)}`;
            var index = array.indexOf(value);
            if (index > -1) array.splice(index, 1);
            return array;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return array;
        }
    }
    static arrToStringTable(
        array,
        columns = { id: "id", name: (o) => o["name2"] },
        rowSep = "\r\n",
        colSep = "\t"
    ) {
        try {
            if (!eType.arr(array) && !eType.obj(columns))
                throw `invalid array=${eStr.from(array)}|columns=${eStr.from(columns)}`;
            // strings
            let head = "";
            let body = "";
            // append head
            for (let k in columns) {
                if (head) head += colSep;
                head += k;
            }
            head += rowSep;
            // append body
            for (let i in array) {
                let obj = array[i];
                let row = "";
                for (let k in columns) {
                    if (row) row += colSep;
                    if (eType.func(columns[k])) row += columns[k](obj) ?? " ";
                    else row += obj[columns[k]] ?? " ";
                }
                body += row + rowSep;
            }
            return head + body;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static arrUnique(array, cleanEmpty = false) {
        try {
            if (!eType.arr(array)) throw `invalid array=${eStr.from(array)}`;
            var arr = [];
            for (var v of array) {
                if (!arr.includes(v)) arr.push(v);
            }
            if (cleanEmpty === true) arr = eList.arrClean(arr);
            return arr;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static arrClean(array, removeCondition = (_index, value) => eType.empty(value)) {
        try {
            if (!eType.arr(array) && eType.func(removeCondition))
                throw `invalid array=${eStr.from(array)}|removeCondition=${eStr.from(removeCondition)}`;
            for (var k in array) {
                if (removeCondition(k, array[k]) === true) delete array[k];
            }
            return array;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static arrToFormData(array) {
        try {
            if (!eType.arr(array)) throw `invalid array=${eStr.from(array)}`;
            let fd = new FormData();
            for (let obj of array) {
                for (let k in obj) {
                    fd.append(`${k}[]`, obj[k]);
                }
            }
            return fd;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static generateArray(length, callback = (_index, _array) => null) {
        try {
            if (!eType.num(length) || !eType.func(callback)) return [];
            var array = [];
            for (var index = 0; index < length; index++) {
                var v = callback(index, array);
                if (v) array.push(v);
            }
            return array;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static toArray(data, callback = (_index, _value, _array) => null) {
        try {
            if ((!eType.arr(data) && !eType.obj(data)) || !eType.func(callback)) return [];
            var array = [];
            for (var k in data) {
                var v = callback(k, data[k], array);
                if (v) array.push(v);
            }
            return array;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static arrCountIf(array, condition = (_key, _value) => null) {
        try {
            if (!eType.arr(array) || !eType.func(condition)) return 0;
            var i = 0;
            for (var k in array) {
                if (condition(k, array[k])) i++;
            }
            return i;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static arrMatchValues(array1, array2, withIndex = false) {
        try {
            if (!eType.arr(array1) || !eType.arr(array2)) return false;
            if (array1.length !== array2.length) return false;
            var match = true;
            for (var i in array1) {
                if ((withIndex && array1[i] !== array2[i]) || (!withIndex && !array2.includes(array1[i]))) match = false;
            }
            return match;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static arrToTree(array, childrenKey, parentKey, childKey, matchValue) {
        try {
            if (!eType.arr(array)) throw `invalid array=${eStr.from(array)}`;
            // new arr
            var arr = [];
            // get key of arr/obj
            for (var i in array) {
                // easy access
                var obj = array[i];
                // check if in parent
                if (obj[childKey] === matchValue) {
                    // if in parent get children of current
                    var arr2 = eList.arrToTree(
                        array,
                        childrenKey,
                        parentKey,
                        childKey,
                        obj[parentKey],
                    );
                    if (arr2.length > 0) obj[childrenKey] = arr2;
                    // push onto big tree after finding Children
                    arr.push(obj);
                }
            }
            // return arr
            return arr;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //=======< object
    static findKey(object, findCondition = (_key, _value) => { }) {
        try {
            if (!eType.obj(object) || !eType.func(findCondition)) throw `invalid object=${eStr.from(object)}|findCondition=${eStr.from(findCondition)}`;
            for (var key in object) {
                if (findCondition(key, object[key]) === true) return key;
            }
            return null;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static findInObj(object, findCondition = (_index, _value) => { }) {
        let k = eList.findKey(object, findCondition);
        if (!k) return null;
        return object[k];
    }
    static findAllInObj(object, findCondition = (_key, _value) => { }) {
        try {
            if (!eType.obj(object) || !eType.func(findCondition)) throw `invalid object=${eStr.from(object)}|findCondition=${eStr.from(findCondition)}`;
            let list = {}
            for (var key in object) {
                if (findCondition(key, object[key]) === true) list[key] = object[key];
            }
            return list;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static removeKeyFromObj(object, key) {
        try {
            if (!eType.obj(object) || !eType.str(key))
                throw `invalid object=${eStr.from(object)}|key=${eStr.from(key)}`;
            delete object[key];
            return object;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return object;
        }
    }
    static keysOfObj(object) {
        try {
            if (!eType.multi(object, [eType.obj, eType.class])) throw `invalid object=${eStr.from(object)}`;
            return Object.keys(object);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static valuesOfObj(object) {
        try {
            if (!eType.multi(object, [eType.obj, eType.class])) throw `invalid object=${eStr.from(object)}`;
            return Object.values(object);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static lenOfObj(object) {
        try {
            if (!eType.multi(object, [eType.obj, eType.class])) throw `invalid object=${eStr.from(object)}`;
            return Object.keys(object).length;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static objToFormData(object) {
        try {
            if (!eType.obj(object)) throw `invalid object=${eStr.from(object)}`;
            let fd = new FormData();
            for (let k in object) {
                let val = object[k];
                if (eType.arr(val)) {
                    for (let v of val) fd.append(`${k}[]`, v);
                } else {
                    fd.append(`${k}`, val);
                }
            }
            return fd;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static objToUrlData(object) {
        try {
            if (!eType.obj(object)) throw `invalid object=${eStr.from(object)}`;
            let fd = [];
            for (let k in object) {
                let val = object[k];
                if (eType.arr(val)) {
                    for (let v of val) {
                        fd.push(`${encodeURIComponent(k)}[]=${encodeURIComponent(v)}`);
                    }
                } else {
                    fd.push(`${encodeURIComponent(k)}=${encodeURIComponent(val)}`);
                }
            }
            return fd.join("&");
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static objFlatten(object, sep = "/", parentKey = null) {
        try {
            if (!eType.obj(object)) throw `invalid object=${eStr.from(object)}`;
            var obj = {};
            // loop data
            // get key of arr/obj
            for (var k in object) {
                // check if in parent
                if (eType.obj(object[k])) {
                    obj = { ...obj, ...eList.objFlatten(object[k], sep, k) };
                } else {
                    let n = k;
                    if (parentKey) n = `${parentKey}${sep}${n}`;
                    obj[n] = object[k];
                }
            }
            // return arr
            return obj;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static formDataToObj(formData) {
        try {
            if (!eType.formData(formData)) throw `invalid object=${eStr.from(formData)}`;
            let list = {};
            for (let key of formData.keys()) {
                if (key.indexOf("[]") > -1) list[key.replace("[]", "")] = formData.getAll(key);
                else list[key] = formData.get(key);
            }
            return list;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static generateObject(length, callback = (_index, _object) => null) {
        try {
            if (!eType.num(length) || !eType.func(callback)) return [];
            var object = {};
            for (var index = 0; index < length; index++) {
                var v = callback(index, object);
                if (eType.obj(v)) {
                    object = { ...object, ...v };
                }
            }
            return object;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static toObject(data, callback = (_index, _value, _object) => null) {
        try {
            if ((!eType.arr(data) && !eType.obj(data)) || !eType.func(callback)) return [];
            var object = {};
            for (var k in data) {
                var v = callback(k, data[k], object);
                if (eType.obj(v)) {
                    object = { ...object, ...v };
                }
            }
            return object;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //=======< both
    static forEach(data, result, callback = (_key, _value, _result) => null) {
        try {
            if ((!eType.arr(data) && !eType.obj(data)) || !eType.func(callback)) return [];
            for (var k in data) {
                callback(k, data[k], result);
            }
            return result;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static crawl(array, keys, fallback = undefined) {
        try {
            if (!eType.multi(array, [eType.arr, eType.obj]) && !eType.arr(keys)) return fallback;
            var v = Object.prototype.hasOwnProperty.call(array, keys[0]) ? array[keys[0]] : null;
            for (var i = 1; i < keys.length; i++) {
                if (v && Object.prototype.hasOwnProperty.call(v, keys[i])) {
                    v = v[keys[i]];
                } else v = null;
            }
            return !eType.null(v) ? v : fallback;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
}