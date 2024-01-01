import eNum from "./eNum";
import { eStr } from "./eStr";
import eType from "./eType";

export default class eColor {
    //========< variable & constructor
    #r;
    get r() { return this.#r }
    #g;
    get g() { return this.#g }
    #b;
    get b() { return this.#b }
    #o;
    get o() { return this.#o }
    #s = 0;
    get shade() { return this.#s; }
    get avg() { return ((this.r + this.g + this.b) / 3) }
    //========< variable & constructor
    #hsl = null;
    get hsl() {
        if (!this.#hsl) this.#hsl = eColor.RGBToHSL(this.#r, this.#g, this.#b);
        return this.#hsl;
    }
    //========< variable & constructor
    constructor(r, g, b, o) {
        try {
            this.#r = r ?? 0;
            this.#g = g ?? 0;
            this.#b = b ?? 0;
            this.#o = o ?? 1;
            this.#s = (0.299 * this.#r + 0.587 * this.#g + 0.114 * this.#b) / 255;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< parse
    static parse(color) {
        try {
            if (eType.eColor(color)) return color;
            var obj = [0, 0, 0, 1];
            // # F f f f
            if (eColor.colors?.[color]) return eColor.colors[color];
            else if (color?.match(/^#([a-f0-9]{3})$/i)) { // #f0f
                obj[0] = parseInt(color.substr(1, 1) + color.substr(1, 1), 16);
                obj[1] = parseInt(color.substr(2, 1) + color.substr(2, 1), 16);
                obj[2] = parseInt(color.substr(3, 1) + color.substr(3, 1), 16);
            } else if (color?.match(/^#([a-f]){1}([a-f0-9]{3})$/i)) { // #ef0f
                obj[0] = parseInt(color.substr(2, 1) + color.substr(2, 1), 16);
                obj[1] = parseInt(color.substr(3, 1) + color.substr(3, 1), 16);
                obj[2] = parseInt(color.substr(4, 1) + color.substr(4, 1), 16);
                obj[3] = parseInt(color.substr(1, 1) + color.substr(1, 1), 16) / 255;
            } else if (color?.match(/^#([a-f0-9]{6})$/i)) { // #ff00ff
                obj[0] = parseInt(color.substr(1, 2), 16);
                obj[1] = parseInt(color.substr(3, 2), 16);
                obj[2] = parseInt(color.substr(5, 2), 16);
            } else if (color?.match(/^#([a-f]){2}([a-f0-9]{6})$/i)) { // #eeff00ff
                obj[0] = parseInt(color.substr(3, 2), 16);
                obj[1] = parseInt(color.substr(5, 2), 16);
                obj[2] = parseInt(color.substr(7, 2), 16);
                obj[3] = parseInt(color.substr(1, 2), 16) / 255;
            } else if (color?.match(/^rgb\(([0-9 .]+),([0-9 .]+),([0-9 .]+)\)$/i)) { // rgb(255,0,255)
                color = color.substr(4, color.length - 5).split(",");
                obj[0] = eNum.clamp(parseFloat(color[0]), 0, 255);
                obj[1] = eNum.clamp(parseFloat(color[1]), 0, 255);
                obj[2] = eNum.clamp(parseFloat(color[2]), 0, 255);
            } else if (color?.match(/^rgba\(([0-9 .]+),([0-9 .]+),([0-9 .]+),([0-9 .]+)\)$/i)) { // rgba(255,0,255,100)
                color = color.substr(5, color.length - 6).split(",");
                obj[0] = eNum.clamp(parseFloat(color[0]), 0, 255);
                obj[1] = eNum.clamp(parseFloat(color[1]), 0, 255);
                obj[2] = eNum.clamp(parseFloat(color[2]), 0, 255);
                obj[3] = eNum.clamp(parseFloat(color[3]), 0, 1);
            } else throw "unkown color format!";
            return new eColor(obj[0], obj[1], obj[2], obj[3]);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< brightness
    lighten(perc) {
        try {
            if (eType.empty(perc)) return this;
            return new eColor(
                eNum.clamp(this.#r + ((255 - this.#r) * perc), 0, 255),
                eNum.clamp(this.#g + ((255 - this.#g) * perc), 0, 255),
                eNum.clamp(this.#b + ((255 - this.#b) * perc), 0, 255),
                this.#o
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    darken(perc) {
        try {
            if (eType.empty(perc)) return this;
            return new eColor(
                eNum.clamp(this.#r - (this.#r * perc), 0, 255),
                eNum.clamp(this.#g - (this.#g * perc), 0, 255),
                eNum.clamp(this.#b - (this.#b * perc), 0, 255),
                this.#o
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< opacity
    fadeOut(perc) {
        try {
            return new eColor(
                this.#r,
                this.#g,
                this.#b,
                eNum.clamp(this.#o - perc, 0, 1)
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    fadeIn(perc) {
        try {
            return new eColor(
                this.#r,
                this.#g,
                this.#b,
                eNum.clamp(this.#o + perc, 0, 1)
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========<
    setShade(percent) {
        try {
            if (eType.empty(percent)) return this;
            var add = (percent - this.#s) * 255;
            return new eColor(
                eNum.round(eNum.clamp(this.#r + add, 0, 255), 1),
                eNum.round(eNum.clamp(this.#g + add, 0, 255), 1),
                eNum.round(eNum.clamp(this.#b + add, 0, 255), 1),
                this.#o
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addShade(percent) {
        try {
            if (eType.empty(percent)) return this;
            var add = (this.#s + percent) * 255;
            return new eColor(
                eNum.round(eNum.clamp(this.#r + add, 0, 255), 1),
                eNum.round(eNum.clamp(this.#g + add, 0, 255), 1),
                eNum.round(eNum.clamp(this.#b + add, 0, 255), 1),
                this.#o
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< opacity
    setFade(o = 1) {
        try {
            return new eColor(
                this.#r,
                this.#g,
                this.#b,
                eNum.clamp(o, 0, 1)
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addFade(o = 1) {
        try {
            return new eColor(
                this.#r,
                this.#g,
                this.#b,
                eNum.clamp(this.#o + o, 0, 1)
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< check neigbors
    isNeighborColor(color, tolerance = 0.12) {
        try {
            color = eColor.parse(color);
            tolerance = tolerance * 255;
            return (
                Math.abs(this.#r - color.rgba[0]) <= tolerance &&
                Math.abs(this.#g - color.rgba[1]) <= tolerance &&
                Math.abs(this.#b - color.rgba[2]) <= tolerance
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< to string format
    get HEX() {
        try {
            return `#${eStr.pad(this.#r.toString(16), 2)}${eStr.pad(
                this.#g.toString(16),
                2
            )}${eStr.pad(this.#b.toString(16), 2)}`;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get HEXA() {
        try {
            return `#${eStr.pad(this.#o.toString(16), 2)}${eStr.pad(
                this.#r.toString(16),
                2
            )}${eStr.pad(this.#g.toString(16), 2)}${eStr.pad(
                this.#b.toString(16),
                2
            )}`;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get RGB() {
        try {
            return `rgb(${eNum.round(this.#r, 1)},${eNum.round(this.#g, 1)},${eNum.round(this.#b, 1)})`;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get RGBA() {
        try {
            return `rgba(${eNum.round(this.#r, 1)},${eNum.round(this.#g, 1)},${eNum.round(this.#b, 1)},${eNum.round(this.#o, 1)})`;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< get contrast
    get contrastHueColor() {
        return new eColor(
            255 - this.#r,
            255 - this.#g,
            255 - this.#b,
            this.#o
        );
    }
    get contrastShadeColor() {
        let add = this.#s < 0.5 ? 0.4 : -0.4;
        return this.addShade(add);

    }
    get contrastBlackWhiteColor() {
        let c = this.#s < 0.5 ? 255 : 0;
        return new eColor(c, c, c, this.#o);
    }
    //========< hue to color
    hueToColor(perc, color) {
        try {
            if (!eType.num(perc) || !eType.eColor(color)) throw `invalid perc=${eStr.from(perc)}|color=${eStr.from(color)}`;
            let mHSL = this.hsl;
            let cHSL = color.hsl;
            let dH = Math.abs(cHSL.h - mHSL.h) * perc;
            let dS = Math.abs(cHSL.s - mHSL.s) * perc;
            let dL = Math.abs(cHSL.l - mHSL.l) * perc;
            let rgb = eColor.HSLtoRGB(
                eNum.stepTo(mHSL.h, dH, cHSL.h),
                eNum.stepTo(mHSL.s, dS, cHSL.s),
                eNum.stepTo(mHSL.l, dL, cHSL.l)
            );
            return new eColor(rgb.r, rgb.g, rgb.b, this.#o);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    //========< get text
    scaleToColor(perc, color) {
        try {
            if (!eType.num(perc) || !eType.eColor(color)) throw `invalid perc=${eStr.from(perc)}|color=${eStr.from(color)}`;

            return new eColor(
                Math.round(this.r + (perc * (color.r - this.r))),
                Math.round(this.g + (perc * (color.g - this.g))),
                Math.round(this.b + (perc * (color.b - this.b))),
                this.o
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    //========< RGBToHSL
    static RGBToHSL(r, g, b) {
        try {
            var min, max, i, l, s, maxcolor, h, rgb = [];
            rgb[0] = r / 255;
            rgb[1] = g / 255;
            rgb[2] = b / 255;
            min = rgb[0];
            max = rgb[0];
            maxcolor = 0;
            for (i = 0; i < rgb.length - 1; i++) {
                if (rgb[i + 1] <= min) { min = rgb[i + 1]; }
                if (rgb[i + 1] >= max) { max = rgb[i + 1]; maxcolor = i + 1; }
            }
            if (maxcolor === 0) h = (rgb[1] - rgb[2]) / (max - min);
            if (maxcolor === 1) h = 2 + (rgb[2] - rgb[0]) / (max - min);
            if (maxcolor === 2) h = 4 + (rgb[0] - rgb[1]) / (max - min);
            if (isNaN(h)) h = 0;
            h = h * 60;
            if (h < 0) h = h + 360;
            l = (min + max) / 2;
            if (min === max) {
                s = 0;
            } else {
                if (l < 0.5) s = (max - min) / (max + min);
                else s = (max - min) / (2 - max - min);
            }
            s = s * 100;
            l = l * 100;
            return {
                h: eNum.round(eNum.clamp(h, 0, 360)),
                s: eNum.round(eNum.clamp(s, 0, 100), 1),
                l: eNum.round(eNum.clamp(l, 0, 100), 1)
            };
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< HSLtoRGB
    static HSLtoRGB(hue, sat, light) {
        try {
            if (sat > 1) sat = sat / 100;
            if (light > 1) light = light / 100;

            var t1, t2, r, g, b;
            hue = hue / 60;
            if (light <= 0.5) {
                t2 = light * (sat + 1);
            } else {
                t2 = light + sat - (light * sat);
            }
            t1 = light * 2 - t2;
            r = hueToRgb(t1, t2, hue + 2) * 255;
            g = hueToRgb(t1, t2, hue) * 255;
            b = hueToRgb(t1, t2, hue - 2) * 255;
            return { r: eNum.round(eNum.clamp(r, 0, 255), 2), g: eNum.round(eNum.clamp(g, 0, 255), 2), b: eNum.round(eNum.clamp(b, 0, 255), 2) };
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
        function hueToRgb(t1, t2, hue) {
            if (hue < 0) hue += 6;
            if (hue >= 6) hue -= 6;
            if (hue < 1) return (t2 - t1) * hue + t1;
            else if (hue < 3) return t2;
            else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
            else return t1;
        }
    }
    //========< generate colors
    static generateColorList(count = 1, { saturation = 100, lightness = 50 } = {}) {
        try {
            var colors = [];
            for (let i = 0; i < count; i++)
                colors.push(eColor.indexColor(i, saturation, lightness, count));
            return colors;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    static indexColor(index, { saturation = 100, lightness = 50, colors = 10 } = {}) {
        try {
            if (colors < 1) colors = 1; // defaults to one color - avoid divide by zero
            let rgb = eColor.HSLtoRGB(
                (index * (360 / colors)) % 360,
                saturation,
                lightness
            );
            return new eColor(rgb.r, rgb.g, rgb.b);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    //========< scale
    static scaleColors(perc, stops, colors, o) {
        try {
            if (!eType.num(perc) || !eType.arr(stops) || !eType.arr(colors) || stops.length !== colors.length) throw `invalid perc=${eStr.from(perc)}|stops=${eStr.from(stops)}|colors=${eStr.from(colors)}`;
            for (let i = 0; i < stops.length; i++) {
                let cS = stops[i];
                let cC = eColor.parse(colors[i]);

                let nS = stops[i + 1] ?? 1;
                let nC = eColor.parse(colors[i + 1] ?? cC);
                if (cS <= perc && perc < nS) return cC.setFade(o).scaleToColor((perc - cS) / (nS - cS), nC);
            }
            if (perc <= Math.min(...stops)) return eColor.parse(colors[0]).setFade(o);
            else return eColor.parse(colors[colors.length - 1]).setFade(o);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    // presets
    static scaleHeatColors(perc, firstColors, o) {
        try {
            if (!eType.num(perc)) throw `invalid perc=${eStr.from(perc)}`;
            let colors = eColor.heatColorsScaleData.colors;
            if (firstColors) {
                colors.shift()
                colors = [firstColors, ...colors];
            }
            return eColor.scaleColors(perc, eColor.heatColorsScaleData.stops, colors, o);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    //========< scale
    static listColorsScale(length, stops, colors, o) {
        try {
            if (!eType.num(length) || !eType.arr(stops) || !eType.arr(colors) || stops.length !== colors.length) throw `invalid length=${eStr.from(length)}|stops=${eStr.from(stops)}|colors=${eStr.from(colors)}`;

            let min = Math.min(...stops);
            let max = Math.max(...stops);
            let per = (max - min) / length;
            let list = [];

            for (let i = min; i <= max; i += per) list.push(eColor.scaleColors(i, stops, colors, o));

            return list;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    // presets
    static listHeatColors(length, firstColors, o) {
        try {
            if (!eType.num(length)) throw `invalid length=${eStr.from(length)}`;
            let colors = eColor.heatColorsScaleData.colors;
            if (firstColors) {
                colors.shift()
                colors = [firstColors, ...colors];
            }
            return eColor.listColorsScale(length, eColor.heatColorsScaleData.stops, colors, o);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return null;
        }
    }
    //========< scales
    static get heatColorsScaleData() {
        return {
            stops: [0, 0.15, 0.35, 0.65, 0.9, 1],
            colors: [eColor.colors.steelblue, eColor.colors.darkred, eColor.colors.red, eColor.colors.orange, eColor.colors.yellow, eColor.colors.white]
        }
    }
    //========< some colors
    static get colors() {
        return {
            get transparent() { return new eColor(255, 255, 255, 0) },

            get light() { return new eColor(238, 238, 238, 0) },
            get dark() { return new eColor(51, 51, 51, 0) },
            get error() { return new eColor(220, 53, 69, 0) },
            get danger() { return new eColor(220, 53, 69, 0) },
            get warning() { return new eColor(255, 193, 7, 0) },
            get warn() { return new eColor(255, 193, 7, 0) },
            get success() { return new eColor(40, 167, 69, 0) },
            get alert() { return new eColor(23, 162, 184, 0) },
            get info() { return new eColor(23, 162, 184, 0) },

            get aliceblue() { return new eColor(240, 248, 255) },
            get antiquewhite() { return new eColor(250, 235, 215) },
            get aqua() { return new eColor(0, 255, 255) },
            get aquamarine() { return new eColor(127, 255, 212) },
            get azure() { return new eColor(240, 255, 255) },
            get beige() { return new eColor(245, 245, 220) },
            get bisque() { return new eColor(255, 228, 196) },
            get black() { return new eColor(0, 0, 0) },
            get blanchedalmond() { return new eColor(255, 235, 205) },
            get blue() { return new eColor(0, 0, 255) },
            get blueviolet() { return new eColor(138, 43, 226) },
            get brown() { return new eColor(165, 42, 42) },
            get burlywood() { return new eColor(222, 184, 135) },
            get cadetblue() { return new eColor(95, 158, 160) },
            get chartreuse() { return new eColor(127, 255, 0) },
            get chocolate() { return new eColor(210, 105, 30) },
            get coral() { return new eColor(255, 127, 80) },
            get cornflowerblue() { return new eColor(100, 149, 237) },
            get cornsilk() { return new eColor(255, 248, 220) },
            get crimson() { return new eColor(220, 20, 60) },
            get cyan() { return new eColor(0, 255, 255) },
            get darkblue() { return new eColor(0, 0, 139) },
            get darkcyan() { return new eColor(0, 139, 139) },
            get darkgoldenrod() { return new eColor(184, 134, 11) },
            get darkgray() { return new eColor(169, 169, 169) },
            get darkgreen() { return new eColor(0, 100, 0) },
            get darkkhaki() { return new eColor(189, 183, 107) },
            get darkmagenta() { return new eColor(139, 0, 139) },
            get darkolivegreen() { return new eColor(85, 107, 47) },
            get darkorange() { return new eColor(255, 140, 0) },
            get darkorchid() { return new eColor(153, 50, 204) },
            get darkred() { return new eColor(139, 0, 0) },
            get darksalmon() { return new eColor(233, 150, 122) },
            get darkseagreen() { return new eColor(143, 188, 143) },
            get darkslateblue() { return new eColor(72, 61, 139) },
            get darkslategray() { return new eColor(47, 79, 79) },
            get darkturquoise() { return new eColor(0, 206, 209) },
            get darkviolet() { return new eColor(148, 0, 211) },
            get deeppink() { return new eColor(255, 20, 147) },
            get deepskyblue() { return new eColor(0, 191, 255) },
            get dimgray() { return new eColor(105, 105, 105) },
            get dodgerblue() { return new eColor(30, 144, 255) },
            get firebrick() { return new eColor(178, 34, 34) },
            get floralwhite() { return new eColor(255, 250, 240) },
            get forestgreen() { return new eColor(34, 139, 34) },
            get fuchsia() { return new eColor(255, 0, 255) },
            get gainsboro() { return new eColor(220, 220, 220) },
            get ghostwhite() { return new eColor(248, 248, 255) },
            get gold() { return new eColor(255, 215, 0) },
            get goldenrod() { return new eColor(218, 165, 32) },
            get gray() { return new eColor(128, 128, 128) },
            get green() { return new eColor(0, 128, 0) },
            get greenyellow() { return new eColor(173, 255, 47) },
            get honeydew() { return new eColor(240, 255, 240) },
            get hotpink() { return new eColor(255, 105, 180) },
            get indianred() { return new eColor(205, 92, 92) },
            get indigo() { return new eColor(75, 0, 130) },
            get ivory() { return new eColor(255, 255, 240) },
            get khaki() { return new eColor(240, 230, 140) },
            get lavender() { return new eColor(230, 230, 250) },
            get lavenderblush() { return new eColor(255, 240, 245) },
            get lawngreen() { return new eColor(124, 252, 0) },
            get lemonchiffon() { return new eColor(255, 250, 205) },
            get lightblue() { return new eColor(173, 216, 230) },
            get lightcoral() { return new eColor(240, 128, 128) },
            get lightcyan() { return new eColor(224, 255, 255) },
            get lightgoldenrodyellow() { return new eColor(250, 250, 210) },
            get lightgrey() { return new eColor(211, 211, 211) },
            get lightgreen() { return new eColor(144, 238, 144) },
            get lightpink() { return new eColor(255, 182, 193) },
            get lightsalmon() { return new eColor(255, 160, 122) },
            get lightseagreen() { return new eColor(32, 178, 170) },
            get lightskyblue() { return new eColor(135, 206, 250) },
            get lightslategray() { return new eColor(119, 136, 153) },
            get lightsteelblue() { return new eColor(176, 196, 222) },
            get lightyellow() { return new eColor(255, 255, 224) },
            get lime() { return new eColor(0, 255, 0) },
            get limegreen() { return new eColor(50, 205, 50) },
            get linen() { return new eColor(250, 240, 230) },
            get magenta() { return new eColor(255, 0, 255) },
            get maroon() { return new eColor(128, 0, 0) },
            get mediumaquamarine() { return new eColor(102, 205, 170) },
            get mediumblue() { return new eColor(0, 0, 205) },
            get mediumorchid() { return new eColor(186, 85, 211) },
            get mediumpurple() { return new eColor(147, 112, 216) },
            get mediumseagreen() { return new eColor(60, 179, 113) },
            get mediumslateblue() { return new eColor(123, 104, 238) },
            get mediumspringgreen() { return new eColor(0, 250, 154) },
            get mediumturquoise() { return new eColor(72, 209, 204) },
            get mediumvioletred() { return new eColor(199, 21, 133) },
            get midnightblue() { return new eColor(25, 25, 112) },
            get mintcream() { return new eColor(245, 255, 250) },
            get mistyrose() { return new eColor(255, 228, 225) },
            get moccasin() { return new eColor(255, 228, 181) },
            get navajowhite() { return new eColor(255, 222, 173) },
            get navy() { return new eColor(0, 0, 128) },
            get oldlace() { return new eColor(253, 245, 230) },
            get olive() { return new eColor(128, 128, 0) },
            get olivedrab() { return new eColor(107, 142, 35) },
            get orange() { return new eColor(255, 165, 0) },
            get orangered() { return new eColor(255, 69, 0) },
            get orchid() { return new eColor(218, 112, 214) },
            get palegoldenrod() { return new eColor(238, 232, 170) },
            get palegreen() { return new eColor(152, 251, 152) },
            get paleturquoise() { return new eColor(175, 238, 238) },
            get palevioletred() { return new eColor(216, 112, 147) },
            get papayawhip() { return new eColor(255, 239, 213) },
            get peachpuff() { return new eColor(255, 218, 185) },
            get peru() { return new eColor(205, 133, 63) },
            get pink() { return new eColor(255, 192, 203) },
            get plum() { return new eColor(221, 160, 221) },
            get powderblue() { return new eColor(176, 224, 230) },
            get purple() { return new eColor(128, 0, 128) },
            get rebeccapurple() { return new eColor(102, 51, 153) },
            get red() { return new eColor(255, 0, 0) },
            get rosybrown() { return new eColor(188, 143, 143) },
            get royalblue() { return new eColor(65, 105, 225) },
            get saddlebrown() { return new eColor(139, 69, 19) },
            get salmon() { return new eColor(250, 128, 114) },
            get sandybrown() { return new eColor(244, 164, 96) },
            get seagreen() { return new eColor(46, 139, 87) },
            get seashell() { return new eColor(255, 245, 238) },
            get sienna() { return new eColor(160, 82, 45) },
            get silver() { return new eColor(192, 192, 192) },
            get skyblue() { return new eColor(135, 206, 235) },
            get slateblue() { return new eColor(106, 90, 205) },
            get slategray() { return new eColor(112, 128, 144) },
            get snow() { return new eColor(255, 250, 250) },
            get springgreen() { return new eColor(0, 255, 127) },
            get steelblue() { return new eColor(70, 130, 180) },
            get tan() { return new eColor(210, 180, 140) },
            get teal() { return new eColor(0, 128, 128) },
            get thistle() { return new eColor(216, 191, 216) },
            get tomato() { return new eColor(255, 99, 71) },
            get turquoise() { return new eColor(64, 224, 208) },
            get violet() { return new eColor(238, 130, 238) },
            get wheat() { return new eColor(245, 222, 179) },
            get white() { return new eColor(255, 255, 255) },
            get whitesmoke() { return new eColor(245, 245, 245) },
            get yellow() { return new eColor(255, 255, 0) },
            get yellowgreen() { return new eColor(154, 205, 50) },
        }
    }
}