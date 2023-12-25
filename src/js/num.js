import { eType } from "./type";
import { eStr } from "./str";

export class eNum {
    static parse(value) {
        try {
            return Number(value);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null
        }
    }
    static loop(value, step, min, max) {
        try {
            if (
                !eType.num(value) ||
                !eType.num(step) ||
                !eType.num(min) ||
                !eType.num(max)
            )
                throw `invalid value=${eStr.from(value)}|step=${eStr.from(step)}|min=${eStr.from(min)}|max=${eStr.from(max)}`;
            value = value + step;
            if (value > max) {
                value -= max - min + 1;
            } else if (value < min) {
                value += max - min + 1;
            }
            return value;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static clamp(value, min, max) {
        try {
            if (!eType.num(value) || !eType.num(min) || !eType.num(max))
                throw `invalid value=${eStr.from(value)}|min=${eStr.from(min)}|max=${eStr.from(max)}`;
            return Math.min(max, Math.max(value, min));
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static stepTo(value, step, dest) {
        try {
            if (!eType.num(value) || !eType.num(step) || !eType.num(dest))
                throw `invalid value=${eStr.from(value)}|step=${eStr.from(step)}|dest=${eStr.from(dest)}`;
            if (value > dest) { // step down
                value -= step;
                if (value < dest) value = dest;
            } else { // step up
                value += step;
                if (value > dest) value = dest;
            }
            return value;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static easeTo(value, dest, multiplier = 1, round) {
        try {
            if (!eType.num(value) || !eType.num(dest) || !eType.num(multiplier))
                throw `invalid value=${value}|dest=${dest}|multiplier=${multiplier}`;
            let nv = value + ((dest - value) * multiplier);
            if (round) return eNum.round(nv, round);
            return nv;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static percent(value, max, multiplier = 100) {
        try {
            if (!eType.num(value) || !eType.num(max) || !eType.num(multiplier))
                throw `invalid value=${eStr.from(value)}|max=${eStr.from(max)}|multiplier=${eStr.from(multiplier)}`;
            return (value / max) * multiplier;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static fromPercent(value, min = 0, max = 0, multiplier = 100) {
        try {
            if (
                !eType.num(value) ||
                !eType.num(min) ||
                !eType.num(max) ||
                !eType.num(multiplier)
            )
                throw `invalid value=${value}|min=${min}|max=${max}|multiplier=${multiplier}`;
            return (max - min) * (value / multiplier);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static round(value, percision = 0) {
        try {
            if (!eType.num(value) || !eType.num(percision))
                throw `invalid value=${eStr.from(value)}|percision=${eStr.from(percision)}`;
            return +parseFloat(value).toFixed(percision);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static random(min = 0, max = 1) {
        try {
            if (!eType.num(min) || !eType.num(max)) throw `invalid min=${eStr.from(min)}|max=${eStr.from(max)}`;
            return Math.random() * (max - min) + min;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
    static readable(value, percision = 1, seperator = ",", persistentPercision = false) {
        try {
            if (
                !eType.num(value) ||
                !eType.num(percision, true) ||
                !eType.str(seperator) ||
                !eType.bool(persistentPercision)
            )
                throw `invalid value=${eStr.from(value)}|percision=${eStr.from(percision)}|seperator=${eStr.from(seperator)}|persistentPercision=${eStr.from(persistentPercision)}`;
            //
            var num = Math.abs(eNum.round(value, percision)).toString().split(".");
            var str = num[0] ?? "0";
            var dec = num[1] ?? "0";
            var res = "";
            //
            if (str.length > 3) {
                var arr = [];
                for (var i = str.length; i > 0; i = i - 3)
                    arr.push(str.slice(i - 3 < 0 ? 0 : i - 3, i));
                arr = arr.reverse();
                //
                res = arr.join(seperator);
            } else res = str;
            // add sign
            if (Math.sign(value) < 0) res = `-${res}`;
            // add decimals
            if (percision > 0 || persistentPercision) {
                let perc = dec;
                if (persistentPercision) perc = eStr.padRight(dec, percision, "0")
                res = `${res}.${perc}`;
            }
            //
            return res.toString();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return NaN;
        }
    }
}