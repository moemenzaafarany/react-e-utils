import { eType } from "./type";
import { eStr } from "./str";
import { eNum } from "./num";
import { eList } from "./list";

export class eDate {
    //========< variable & constructor
    date;
    SOW = null;
    constructor(/**/) {
        var args = arguments;
        if (args.length === 0) this.date = new Date(Date.now());
        else if (args.length === 1) {
            if (eType.eDate(args[0])) this.date = new Date(args[0].date);
            else this.date = new Date(args[0]);
        } else if (args.length > 1) {
            this.date = new Date(
                args[0] ?? 0,
                (args[1] ?? 1) - 1,
                args[2] ?? 1,
                args[3] ?? 0,
                args[4] ?? 0,
                args[5] ?? 0,
                args[6] ?? 0,
                args[7] ?? 0,
                args[8] ?? 0
            );
        }
        if (!this.date || this.date === "Invalid Date" || isNaN(this.date)) throw "Invalid Date";
    }
    static parseDate(value, format = 'ymd', includeLastYear = true) { // ymd|dmy|mdy|serial
        try {
            switch (format) {
                case "ymd":
                case "dmy":
                case "mdy":
                    let splitter = value.includes("/") ? "/" : "-";
                    let d = value.split(splitter);
                    let nd = { y: null, m: null, d: null, }
                    let f = format.split("");
                    for (let i in f) {
                        switch (f[i]) {
                            case "y":
                                nd.y = (d[i].length < 4 ? eDate.year2ToYear(d[i], includeLastYear) : d[i]);
                                break;
                            default:
                                nd[f[i]] = d[i];
                        }
                    }
                    return new eDate(nd.y, nd.m, nd.d);
                case "serial":
                    return new eDate(excelDateSerialToDate(value));
                default:
                    return null;
            }
        } catch (err) {
            console.trace(this.constructor.name, err);
            return undefined;
        }

        function excelDateSerialToDate(serial) {
            var utc_days = Math.floor(serial - 25569);
            var utc_value = utc_days * 86400;
            var date_info = new Date(utc_value * 1000);

            var fractional_day = serial - Math.floor(serial) + 0.0000001;

            var total_seconds = Math.floor(86400 * fractional_day);

            var seconds = total_seconds % 60;

            total_seconds -= seconds;

            var hours = Math.floor(total_seconds / (60 * 60));
            var minutes = Math.floor(total_seconds / 60) % 60;

            return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
        }
    }
    static get now() { return new eDate() }
    //========< Start of week
    setSOW(firstWeekday = null) {
        try {
            if (firstWeekday) this.SOW = eNum.clamp(firstWeekday, 0, 6);
            return this;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< time zone
    get timezone() {
        try {
            return this.date
                .toLocaleDateString(undefined, {
                    day: "2-digit",
                    timeZoneName: "short",
                })
                .slice(4);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get timezoneName() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (err) {
            return undefined;
        }
    }
    /*
     * Get Diff in minutes
     */
    get timezoneOffset() {
        try {
            return -this.date.getTimezoneOffset();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< Leap
    get leapYear() {
        return eDate.isLeapYear(this.year, false);
    }
    get numericLeapYear() {
        return eDate.isLeapYear(this.year, true);
    }
    static isLeapYear(year, numeric = false) {
        try {
            let v = (year % 4 === 0 || year % 400 === 0) && year % 1000 !== 0;
            // numeric
            if (numeric) return v ? 1 : 0;
            // normal
            return v;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< year
    get year() {
        try {
            return this.date.getFullYear();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get yearPadded() {
        try {
            return eStr.pad(this.year, 4, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalYears() {
        try {
            return Math.floor(this.date.getTime() / 31557600000); // ( 1000*60*60*24*365.25 )
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get year2() {
        try {
            return parseInt(this.year.toString().substring(2, 4));
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get year2Padded() {
        try {
            return eStr.pad(this.year2.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static year2ToYear(year2, includeLastYear = true) {
        try {
            let cdate = new eDate();
            let cYear = cdate.year2;
            let cStart = parseInt(cdate.year.toString().substring(0, 2));
            let nYear = (includeLastYear === true ? `${(parseInt(year2) > cYear ? cStart - 1 : cStart)}${year2}` : `${cStart}${year2}`)
            return nYear;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< month
    get month() {
        try {
            return this.date.getMonth() + 1;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get monthPadded() {
        try {
            return eStr.pad(this.month.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalMonths() {
        try {
            return Math.floor(this.date.getTime() / 2629756800); // ( 1000*60*60*24*30.437 )
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get monthShortText() {
        try {
            return eDate.monthNoText(this.month, true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get monthLongText() {
        try {
            return eDate.monthNoText(this.month, false);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get daysInMonth() {
        try {
            return new Date(this.year, this.month, 0).getDate();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get daysInMonthPadded() {
        try {
            return eStr.pad(this.daysInMonth.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static monthNoText(month = 0, short = true) {
        const nameShort = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
        ];
        const nameLong = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        try {
            // short
            if (short) return nameShort[month - 1];
            // long
            return nameLong[month - 1];
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< week
    get week() {
        try {
            var SOW = this.SOW ?? 0;
            // current
            var cWeekday = this.weekday;
            // fix week 0 actually being 52/53
            var cDiff = SOW > cWeekday ? SOW - (cWeekday + 7) : SOW - cWeekday;
            var cFDOW = new eDate(this).addDays(cDiff);
            // get first day of week for calc
            var firstYearDay = cFDOW.setMonth(1).setDay(1);
            var firstYearDayWeekday = firstYearDay.weekday;
            // diff between SOW and FYD WD
            var firstYearDayDiff =
                SOW > firstYearDayWeekday
                    ? SOW - (firstYearDayWeekday + 7)
                    : SOW - firstYearDayWeekday;
            // fix first actual week being 0
            if (firstYearDayDiff === 0) firstYearDayDiff -= 7;
            // get actual fist day of week
            var firstYearDayFDOW =
                firstYearDayDiff === 0
                    ? firstYearDay
                    : new eDate(firstYearDay).addDays(firstYearDayDiff);
            // calc weeks since
            var weekNo = firstYearDayFDOW.weeksDiff(this);
            // normal
            return weekNo;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get weekPadded() {
        try {
            return eStr.pad(this.week.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalWeeks() {
        try {
            return Math.floor(this.date.getTime() / 604800000);// ( 1000*60*60*24*7 )
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get weekFirstDay() {
        try {
            var sow = this.SOW ?? 0;
            return new eDate(this).addDays(
                sow > this.weekday ? sow - (this.weekday + 7) : sow - this.weekday
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< days
    get yearDay() {
        try {
            return new eDate(this).setMonth(1).setDay(1).daysDiff(this) + 1;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get yearDayPadded() {
        try {
            return eStr.pad(this.yearDay.toString(), 3, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get day() {
        try {
            return this.date.getDate();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get dayPadded() {
        try {
            return eStr.pad(this.day.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalDays() {
        try {
            return Math.floor(this.date.getTime() / 86400000); // ( 1000*60*60*24 )
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get weekday() {
        try {
            return this.date.getDay();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get weekdayShortText() {
        try {
            return eDate.weekdayNoText(this.weekday, true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get weekdayLongText() {
        try {
            return eDate.weekdayNoText(this.weekday, false);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static weekdayNoText(weekday = 0, short = true) {
        const namesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const namesLong = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        try {
            // short
            if (short) return namesShort[weekday];
            // long
            return namesLong[weekday];
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< hour
    get hour() {
        try {
            return this.date.getHours();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get hourPadded() {
        try {
            return eStr.pad(this.date.getHours().toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalHours() {
        try {
            return Math.floor(this.date.getTime() / 3600000); // ( 1000*60*60 )
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get hour12() {
        try {
            return this.hour % 12 || 12;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get hour12Padded() {
        try {
            return eStr.pad(this.hour12.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< minute
    get minute() {
        try {
            return this.date.getMinutes();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get minutePadded() {
        try {
            return eStr.pad(this.minute.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalMinutes() {
        try {
            return Math.floor(this.date.getTime() / 60000); // ( 1000*60 )
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< second
    get second() {
        try {
            return this.date.getSeconds();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get secondPadded() {
        try {
            return eStr.pad(this.second.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalSeconds() {
        try {
            return Math.floor(this.date.getTime() / 1000);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< miliseconds
    get millisecond() {
        try {
            return this.date.getMilliseconds();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get millisecondPadded() {
        try {
            return eStr.pad(this.millisecond.toString(), 2, "0", true);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get totalMilliseconds() {
        try {
            return this.date.getTime();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< time persid
    get timePeriod() {
        try {
            return this.hour < 12 ? "am" : "pm";
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    get timePeriodUppercase() {
        try {
            return this.timePeriod.toUpperCase();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< add
    addYears(years) {
        try {
            return new eDate(
                this.year + years,
                this.month,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addMonths(months) {
        try {
            return new eDate(
                this.year,
                this.month + months,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addDays(days) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day + days,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addHours(hours) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour + hours,
                this.minute,
                this.second,
                this.millisecond
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addMinutes(minutes) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour,
                this.minute + minutes,
                this.second,
                this.millisecond
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addSeconds(seconds) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour,
                this.minute,
                this.second + seconds,
                this.millisecond
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    addMilliseconds(milliseconds) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.millisecond + milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< set
    setYear(years) {
        try {
            return new eDate(
                years,
                this.month,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    setMonth(months) {
        try {
            return new eDate(
                this.year,
                months,
                this.day,
                this.hour,
                this.minute,
                this.second,
                this.milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    setDay(days) {
        try {
            return new eDate(
                this.year,
                this.month,
                days,
                this.hour,
                this.minute,
                this.second,
                this.milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    setHour(hours) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                hours,
                this.minute,
                this.second,
                this.milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    setMinute(minutes) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour,
                minutes,
                this.second,
                this.milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    setSecond(seconds) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour,
                this.minute,
                seconds,
                this.milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    setMillisecond(milliseconds) {
        try {
            return new eDate(
                this.year,
                this.month,
                this.day,
                this.hour,
                this.minute,
                this.second,
                milliseconds
            ).setSOW(this.SOW);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< diff
    yearsDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalYears - this.totalYears;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    monthsDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalMonths - this.totalMonths;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    weeksDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalWeeks - this.totalWeeks;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    daysDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalDays - this.totalDays;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    hoursDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalHours - this.totalHours;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    minutesDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalMinutes - this.totalMinutes;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    secondsDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalSeconds - this.totalSeconds;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    millisecondsDiff(date) {
        try {
            date = new eDate(date).setSOW(this.SOW);
            return date.totalMilliseconds - this.totalMilliseconds;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< timesince
    timeDiff(date) {
        const T = [
            {
                n: "millisecond",
                d: 1000
            },
            {
                n: "second",
                d: 60
            },
            {
                n: "minute",
                d: 60
            },
            {
                n: "hour",
                d: 24
            },
            {
                n: "day",
                d: 30.4167
            },
            {
                n: "month",
                d: 12
            },
            {
                n: "year",
                d: null
            }
        ];

        try {
            let diff = this.millisecondsDiff(date);
            let max = getMax(diff, T);
            let arr = [];
            arr.push({ n: T[max.i].n, v: Math.floor(max.v) * Math.sign(diff) });
            let v = max.v;
            for (let i = max.i - 1; i >= 0; i--) {
                v = (v - Math.floor(v)) * T[i].d;
                if (Math.floor(v) > 0) arr.push({ n: T[i].n, v: Math.floor(v) });
            }
            return arr;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }

        function getMax(diff, T) {
            diff = Math.abs(diff)
            let i = null;
            let v = null;
            for (let ti in T) {
                if (T[ti].d !== null && diff > T[ti].d) {
                    diff = diff / T[ti].d
                } else {
                    i = ti;
                    v = diff;
                    break;
                }
            }
            return { i: i, v: v };
        }
    }
    //========< formats
    get dateFormat() {
        return `${this.yearPadded}-${this.monthPadded}-${this.dayPadded}`;
    }
    get readableDateFormat() {
        return `${this.weekdayShortText}, ${this.day} ${this.monthShortText} ${this.year}`;
    }
    get timeFormat() {
        return `${this.hour12Padded}:${this.minutePadded}:${this.secondPadded} ${this.timePeriod}`;
    }
    get readableTimeFormat() {
        return `${this.hour12Padded}:${this.minutePadded} ${this.timePeriod}`;
    }
    get datetimeFormat() {
        return `${this.dateFormat} ${this.timeFormat}`;
    }
    get readableDatetimeFormat() {
        return `${this.readableDateFormat}, ${this.readableTimeFormat}`;
    }
    get hourMinuteFormat() {
        return `${this.hour12Padded}:${this.minutePadded} ${this.timePeriod}`;
    }
    get timestampFormat() {
        return `${this.dateFormat} ${this.hourPadded}:${this.minutePadded}:${this.secondPadded}`;
    }
    get excelDateFormat() {
        return `${this.dayPadded}/${this.monthPadded}/${this.yearPadded}`;
    }
    //========< format
    getFormated(format = "Y-m-d H-i-s") {
        const formats = {
            d: (date) => date.dayPadded,
            D: (date) => date.weekdayShortText,
            j: (date) => date.day,
            l: (date) => date.weekdayLongText,
            w: (date) => date.weekday,
            W: (date) => date.weekPadded,
            z: (date) => date.yearDay,
            F: (date) => date.monthLongText,
            m: (date) => date.monthPadded,
            M: (date) => date.monthShortText,
            n: (date) => date.month,
            t: (date) => date.daysInMonth,
            L: (date) => date.numericLeapYear,
            Y: (date) => date.yearPadded,
            y: (date) => date.year2Padded,
            a: (date) => date.timePeriod,
            A: (date) => date.timePeriodUppercase,
            g: (date) => date.hour12,
            G: (date) => date.hour,
            h: (date) => date.hour12Padded,
            H: (date) => date.hourPadded,
            i: (date) => date.minutePadded,
            s: (date) => date.secondPadded,
            e: (date) => date.timezone,
            E: (date) => date.timezoneName,
            O: (date) => date.timezoneOffset,
        };

        try {
            var str = format;
            for (var k in formats) {
                str = str.replaceAll(k, `{${k}}`);
            }
            for (var k2 in formats) {
                if (str.includes(`{${k2}}`))
                    str = str.replaceAll(`{${k2}}`, formats[k2](this));
            }
            return str;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< time id (int)
    getTime(id = "unix") {
        const times = {
            unix: (date) => date.totalSeconds,
            Y: (date) => date.yearPadded,
            Ym: (date) => +`${times.Y(date)}${date.monthPadded}`,
            Ymd: (date) => +`${times.Ym(date)}${date.dayPadded}`,
            YmdH: (date) => +`${times.Ymd(date)}${date.hourPadded}`,
            YmdHi: (date) => +`${times.YmdH(date)}${date.minutePadded}`,
            YmdHis: (date) => +`${times.YmdHi(date)}${date.secondPadded}`,
            YW: (date) => +`${times.Y(date)}${date.weekPadded}`,
            YWw: (date) => +`${times.YW(date)}${date.weekday}`,
            YWwH: (date) => +`${times.YWw(date)}${date.hourPadded}`,
            YWwHi: (date) => +`${times.YWwH(date)}${date.minutePadded}`,
            YWwHis: (date) => +`${times.YWwHi(date)}${date.secondPadded}`,
        };
        try {
            return (times[id] ?? times.unix)(this);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< compare (-1, 0, 1)
    compare(date, time = "Ymd") {
        try {
            date = new eDate(date).setSOW(this.SOW);
            var d1 = this.getTime(time);
            var d2 = date.getTime(time);
            //
            if (d1 === d2) return 0;
            else if (d1 > d2) return 1;
            else if (d1 < d2) return -1;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    isAfter(date, time = "Ymd") {
        try {
            return this.compare(date, time) === 1;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    isBefore(date, time = "Ymd") {
        try {
            return this.compare(date, time) === -1;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    equalTo(date, time = "Ymd") {
        try {
            return this.compare(date, time) === 0;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< between (true, false)
    between(startDate, endDate, time = "Ymd", strictlyBetween = false) {
        try {
            startDate = new eDate(startDate).setSOW(this.SOW);
            endDate = new eDate(endDate).setSOW(this.SOW);
            var d = this.getTime(time);
            var sd = startDate.getTime(time);
            var ed = endDate.getTime(time);
            if (
                (strictlyBetween === false && sd <= d && d <= ed) ||
                (strictlyBetween === true && sd < d && d < ed)
            )
                return true;
            return false;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========< intersect (true, false)
    static periodsIntersect(
        startDate1,
        endDate1,
        startDate2,
        endDate2,
        time = "Ymd",
        firstWeekday = null
    ) {
        try {
            startDate1 = new eDate(startDate1).setSOW(firstWeekday);
            endDate1 = new eDate(endDate1).setSOW(firstWeekday);
            startDate2 = new eDate(startDate2).setSOW(firstWeekday);
            endDate2 = new eDate(endDate2).setSOW(firstWeekday);
            var sd1 = startDate1.getTime(time);
            var ed1 = endDate1.getTime(time);
            var sd2 = startDate2.getTime(time);
            var ed2 = endDate2.getTime(time);
            if (
                (sd1 <= sd2 && sd2 <= ed1) ||
                (sd1 <= ed2 && ed2 <= ed1) ||
                (sd2 <= sd1 && sd1 <= ed2) ||
                (sd2 <= ed1 && ed1 <= ed2)
            )
                return true;
            return false;
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========<  min/max
    static max(dates, time = "Ymd", firstWeekday = null) {
        try {
            var d = eList.forEach(dates, [], (key, value, res) => {
                res.push(new eDate(value).setSOW(firstWeekday).getTime(time));
            });
            var m = Math.max(...d);
            var date = dates.find((o) => o.getTime(time) === m);
            return new eDate(date).setSOW(firstWeekday);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static min(dates, time = "Ymd", firstWeekday = null) {
        try {
            var d = eList.forEach(dates, [], (key, value, res) => {
                res.push(new eDate(value).setSOW(firstWeekday).getTime(time));
            });
            var m = Math.min(...d);
            var date = dates.find((o) => o.getTime(time) === m);
            return new eDate(date).setSOW(firstWeekday);
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    //========<  data
    static calendarMonthData(date, startWeekday = 0) {
        try {
            date = new eDate(date);
            if (!date) return undefined;
            var weekdays = [];
            var daysData = [];
            var monthData = [];
            var startDate = date.setSOW(startWeekday).setDay(1).weekFirstDay;
            // week days
            for (var i = 0; i < 7; i++) {
                weekdays.push(eNum.loop(startWeekday + i - 1, 1, 0, 6));
            }
            // days data
            for (var di = 0; di <= 41; di++) {
                daysData.push(startDate.addDays(di));
            }
            // month data
            for (var wi = 0; wi <= 6; wi++) {
                monthData[wi] = daysData.slice(wi * 7, wi * 7 + 7);
            }
            return {
                date: date,
                year: date.year,
                month: date.month,
                startDate: daysData[0],
                endDate: daysData[daysData.length - 1],
                weekdays: weekdays,
                daysData: daysData,
                monthData: monthData,
            };
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
}