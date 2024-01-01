import { eRes } from "./eRes";
import { eDate } from "./eDate";
import { eColor } from "./eColor";

export default class eType {
    static multi(value, types, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value))
        ) {
            for (let t in types) {
                if (eType.func(t)) {
                    if (t(value)) return true;
                } else if (eType.str(t) && eType?.[t]) {
                    if (eType?.[t](value)) return true;
                }
            }
            return true;
        }
        return false;
    }
    static of(value) {
        if (eType.null(value)) return typeof value;
        return value.constructor.name;
    }
    static null(value) {
        if ([null, undefined, NaN].includes(value)) return true;
        return false;
    }
    static empty(value) {
        if ([null, undefined, NaN, "", {}, []].includes(value)) return true;
        return false;
    }
    static str(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "string" &&
                value.constructor.name === "String")
        )
            return true;
        return false;
    }
    static num(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "number" &&
                value.constructor.name === "Number")
        )
            return true;
        return false;
    }
    static bool(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "boolean" &&
                value.constructor.name === "Boolean")
        )
            return true;
        return false;
    }
    static arr(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value.constructor.name === "Array")
        )
            return true;
        return false;
    }
    static obj(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value.constructor.name === "Object")
        )
            return true;
        return false;
    }
    static func(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "function" &&
                ["AsyncFunction", "Function"].includes(value.constructor.name))
        )
            return true;
        return false;
    }
    static class(value, className, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" && (!className || (className &&
                    value.constructor.name === className)))
        )
            return true;
        return false;
    }
    static file(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value.constructor.name === "File")
        )
            return true;
        return false;
    }
    static blob(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value.constructor.name === "Blob" &&
                value instanceof Blob)
        )
            return true;
        return false;
    }
    static image(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value instanceof Image)
        )
            return true;
        return false;
    }
    static formData(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value instanceof FormData)
        )
            return true;
        return false;
    }
    static node(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) && typeof value === "object" && value instanceof Node)
        )
            return true;
        return false;
    }
    static element(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value instanceof HTMLElement)
        )
            return true;
        return false;
    }
    // e shit
    static eRes(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value instanceof eRes)
        )
            return true;
        return false;
    }
    static eDate(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value instanceof eDate)
        )
            return true;
        return false;
    }
    static eColor(value, canBeNull = false) {
        if (
            (canBeNull && eType.null(value)) ||
            (!eType.null(value) &&
                typeof value === "object" &&
                value instanceof eColor)
        )
            return true;
        return false;
    }
}