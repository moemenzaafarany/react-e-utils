import { eType } from "./type";
import { eStr } from "./str";

export class eDom {
    //========< dom elements
    static get html() {
        return document.documentElement;
    }
    static get htmlLang() {
        return eDom.html.getAttribute("lang") ?? "en";
    }
    static set htmlLang(v) { eDom.html.setAttribute("lang", v) }
    static get htmlDir() {
        return eDom.html.getAttribute("dir") ?? "ltr";
    }
    static set htmlDir(v) { eDom.html.setAttribute("dir", v) }
    static get head() {
        return document.head;
    }
    static get body() {
        return document.body;
    }
    //========< selector
    static $(query = "", { parent = document, action = null } = {}) {
        try {
            let el = parent.querySelector(query);
            if (eType.func(action)) action(el);
            return el
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static $All(query = "", { parent = document, action = null } = {}) {
        try {
            let els = parent.querySelectorAll(query);
            if (eType.func(action)) els.forEach(el => action(el));
            return els
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static strToElement(query, parent = document) {
        try {
            if (eType.element(query)) return query;
            if (!eType.str(query)) return null;
            return parent.querySelector(query);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< events
    static eventPreventDefault(runInstead = (event, target) => { }) {
        return (event) => {
            if (event?.preventDefault) event?.preventDefault();
            if (event?.stopImmediatePropagation) event?.stopImmediatePropagation();
            if (runInstead) runInstead(event, event.target);
            return false;
        };
    }
    static dispatchEvent(
        element,
        event = "",
        {
            detail,
            bubbles = true,
            cancelable = false,
            composed = false
        } = {}
    ) {
        try {
            // isn't win, doc, el
            if (!eType.element(element) && window !== element && document !== element)
                throw `invalid element=${eStr.from(element)}`;
            // do
            return element.dispatchEvent(
                detail
                    ? new CustomEvent(event, {
                        detail: detail,
                        bubbles: bubbles,
                        cancelable: cancelable,
                        composed: composed,
                    })
                    : new Event(event, {
                        detail: detail,
                        bubbles: bubbles,
                        cancelable: cancelable,
                        composed: composed,
                    })
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static dispatchEvents(
        element,
        events = [],
        {
            detail,
            bubbles = true,
            cancelable = false,
            composed = false
        } = {}
    ) {
        try {
            // isn't win, doc, el
            if ((!eType.element(element) && window !== element && document !== element) || !eType.obj(events))
                throw `invalid element=${eStr.from(element)}|events=${eStr.from(events)}`;
            // do
            var dispatches = {};
            for (let eventName of events) {
                dispatches[eventName] = dispatchEvent(
                    element.eventName,
                    detail,
                    bubbles,
                    cancelable,
                    composed
                );
            }
            return dispatches;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static listenEvent(
        element,
        event = "",
        callback = (evt, eventName) => { },
        {
            preventDefault = false,
            capture = false,
            once = false,
            passive = false
        } = {}
    ) {
        try {
            // isn't win, doc, el
            if (
                (!eType.element(element) &&
                    window !== element &&
                    document !== element) ||
                !eType.func(callback)
            )
                throw `invalid element=${eStr.from(element)}|callback=${eStr.from(callback)}`;

            // do
            let controller = new AbortController();
            element.addEventListener(
                event,
                (evt) => {
                    if (preventDefault)
                        eDom.eventPreventDefault((evt) => callback(evt, event))(evt);
                    else callback(evt, event);
                },
                {
                    capture: capture,
                    once: once,
                    passive: passive,
                    signal: controller.signal,
                }
            );
            return controller;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static listenEvents(
        element,
        events = {},
        {
            preventDefault = false,
            capture = false,
            once = false,
            passive = false
        } = {}
    ) {
        try {
            // isn't win, doc, el
            if ((!eType.element(element) && window !== element && document !== element) || !eType.obj(events)) throw `invalid element=${eStr.from(element)}|events=${eStr.from(events)}`;
            // do
            var controllers = {};
            for (let eventName in events) {
                if (eType.func(events[eventName])) controllers[eventName] = eDom.listenEvent(
                    element,
                    eventName,
                    events[eventName],
                    preventDefault,
                    capture,
                    once,
                    passive
                );
            }
            return controllers;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< find Dom
    static findFirstParent(element, query) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            while (element.parentNode) {
                if (element.parentNode.matches(query)) return element.parentNode;
                else return eDom.findFirstParent(element.parentNode, query);
            }
            return null;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static findFirstChild(element, query) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            for (let childNode of Array.from(element.children)) {
                if (eType.element(childNode) && childNode.matches(query)) return childNode;
                return eDom.findFirstChild(childNode, query);
            }
            return null;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< manipulate dom
    static appendSampleToElement(
        element, sample,
        { outputEl = (el) => { }, sampleEl = (el) => { }, childEls = {} }
    ) {
        try {
            if (!eType.element(element) || !eType.element(sample)) throw `invalid element=${eStr.from(element)}|sample=${eStr.from(element)}`;
            if (outputEl) {
                try {
                    outputEl(element);
                } catch (err) { console.trace(this?.constructor?.name, err); }
            }
            let clone = eDom.populateElement(sample.cloneNode(true), sampleEl, childEls);
            if (clone) element.append(clone);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static populateElement(element, { parentEl = (el) => { }, childEls = {} }) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (parentEl) {
                try {
                    parentEl(element);
                } catch (err) { console.trace(this?.constructor?.name, err); }
            }
            for (let k in childEls)
                element.querySelectorAll(k).forEach((el) => {
                    try {
                        childEls[k](el)
                    } catch (err) { console.trace(this?.constructor?.name, err); }
                });
            return element;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< manipulate Classes
    static hasClasses(element, classes) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(classes)) classes = [classes];
            let match = true;
            for (let val of classes) {
                if (!element.classList.contains(val)) match = false
            }
            return match;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static addClasses(element, classes) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(classes)) classes = [classes];
            for (let val of classes) if (val) element.classList.add(val);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static addClassName(element, className) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            let classes = className.split(" ");
            for (let val of classes) if (val) element.classList.add(val);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static delClasses(element, classes) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(classes)) classes = [classes];
            for (let val of classes) element.classList.remove(val);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    //========< manipulate Attributes
    static hasAttrs(element, attrs) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(attrs)) attrs = [attrs];
            let match = true;
            for (let val of attrs) {
                if (!element.hasAttribute(val)) match = false
            }
            return match;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static getAttrs(element, attrs) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(attrs)) attrs = [attrs];
            let obj = {};
            for (let val of attrs) {
                obj[val] = element.getAttribute(val);
            }
            return obj;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static setAttrs(element, attrs = {}) {
        try {
            if (!eType.element(element) && !eType.obj(attrs)) throw `invalid element=${eStr.from(element)}|attrs=${eStr.from(attrs)}`;
            for (let key in attrs) element.setAttribute(key, attrs[key])
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static delAttrs(element, attrs) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(attrs)) attrs = [attrs];
            for (let val of attrs) element.removeAttribute(val);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    //========< manipulate properties
    static hasProps(element, props) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(props)) props = [props];
            let match = true;
            for (let val of props) {
                if (!element.hasOwnProperty(val)) match = false
            }
            return match;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static getProps(element, props) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(props)) props = [props];
            let obj = {};
            for (let val of props) {
                obj[val] = element[val];
            }
            return obj;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static setProps(element, props = {}) {
        try {
            if (!eType.element(element) && !eType.obj(props)) throw `invalid element=${eStr.from(element)}`;
            for (let key in props) element[key] = props[key];
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static delProps(element, props) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(props)) props = [props];
            for (let val of props) delete element[val];
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    //========< manipulate datasets
    static hasDatasets(element, datasets) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(datasets)) datasets = [datasets];
            let match = true;
            for (let val of datasets) {
                if (!element.dataset.hasOwnProperty(val)) match = false
            }
            return match;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static getDatasets(element, datasets) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(datasets)) datasets = [datasets];
            let obj = {};
            for (let val of datasets) {
                obj[val] = element.dataset[val];
            }
            return obj;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static setDatasets(element, datasets = {}) {
        try {
            if (!eType.element(element) && !eType.obj(datasets)) throw `invalid element=${eStr.from(element)}|datasets=${eStr.from(datasets)}`;
            for (let key in datasets) element.dataset[key] = datasets[key];
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static delDatasets(element, datasets) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(datasets)) datasets = [datasets];
            for (let val of datasets) delete element.dataset[val];
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    //========< manipulate styles
    static hasStyles(element, styles, computed = false) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(styles)) styles = [styles];
            let compStyles = (!computed ? element.style : getComputedStyle(element));
            let match = true;
            for (let val of styles) {
                if (!compStyles[val]) match = false
            }
            return match;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static getStyles(element, styles, computed = false) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(styles)) styles = [styles];
            let compStyles = (!computed ? element.style : getComputedStyle(element));
            let obj = {};
            for (let val of styles) {
                obj[val] = compStyles[val];
            }
            return obj;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static getStyle(element, style, computed = false) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            return eDom.getStyles(element, style, computed)?.[style];
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static setStyles(element, styles = {}) {
        try {
            if (!eType.element(element) && !eType.obj(styles)) throw `invalid element=${eStr.from(element)}|styles=${eStr.from(styles)}`;
            for (let key in styles) {
                if (element.style.hasOwnProperty(key)) element.style[key] = styles[key];
                else element.style.setProperty(key, styles[key]);
            }
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static addStyleName(element, styleName) {
        try {
            if (!eType.element(element) && !eType.str(styleName)) throw `invalid element=${eStr.from(element)}|styleName=${eStr.from(styleName)}`;
            if (styleName) element.setAttribute("style", (element.getAttribute("style") ?? "") + styleName);
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    static delStyles(element, styles) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            if (!eType.arr(styles)) styles = [styles];
            for (let val of styles) element.style[val] = null;
            return true;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
    //========< manipulate styles
    static elParent(element, level = 0) {
        try {
            if (!eType.element(element)) throw `invalid element=${eStr.from(element)}`;
            for (let i = 0; i < level; i++) {
                if (element.parentElement) element = element.parentElement;
            }
            return element;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}
export const e$ = eDom.$;
export const e$All = eDom.$All;