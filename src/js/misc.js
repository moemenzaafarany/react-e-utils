import { eType } from "./type";
import { eStr } from "./str";

export const eGetBrowser = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/edg/i)) return "edge";
    else if (userAgent.match(/opr\//i)) return "opera";
    else if (userAgent.match(/safari/i)) return "safari";
    else if (userAgent.match(/firefox|fxios/i)) return "firefox";
    else if (userAgent.match(/chrome|chromium|crios/i)) return "chrome";
    return undefined;
}
export const eStopConsole = () => {
    // eslint-disable-next-line no-debugger
    setInterval(() => { debugger }, 500);
}
export const eSwitchIf = (value = "", defaultValue = null, cases = ["1", "2"], values = ["a", "b"]) => {
    try {
        if (!eType.arr(cases)) throw `invalid cases=${eStr.from(cases)}|values=${eStr.from(values)}`;
        for (let i in cases) {
            if (value === cases[i]) return values[i];
        }
        return defaultValue;
    } catch (err) {
        console.trace(this?.constructor?.name, err);
        return undefined;
    }
}
export const eMultiIf = (
    defaultValue, ifs = [], values = [],
) => {
    try {
        if (!eType.arr(ifs)) throw `invalid ifs=${eStr.from(ifs)}|values=${eStr.from(values)}`;
        for (let i in ifs) {
            if (ifs[i]() === true) return values[i];
        }
        return defaultValue;
    } catch (err) {
        console.trace(this?.constructor?.name, err);
        return undefined;
    }
}