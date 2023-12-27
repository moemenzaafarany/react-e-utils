"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eDate = void 0;
var _type = require("./type");
var _str = require("./str");
var _num = require("./num");
var _list = require("./list");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var eDate = exports.eDate = /*#__PURE__*/function () {
  function eDate( /**/
  ) {
    _classCallCheck(this, eDate);
    //========< variable & constructor
    _defineProperty(this, "date", void 0);
    _defineProperty(this, "SOW", null);
    var args = arguments;
    if (args.length === 0) this.date = new Date(Date.now());else if (args.length === 1) {
      if (_type.eType.eDate(args[0])) this.date = new Date(args[0].date);else this.date = new Date(args[0]);
    } else if (args.length > 1) {
      var _args$, _args$2, _args$3, _args$4, _args$5, _args$6, _args$7, _args$8, _args$9;
      this.date = new Date((_args$ = args[0]) !== null && _args$ !== void 0 ? _args$ : 0, ((_args$2 = args[1]) !== null && _args$2 !== void 0 ? _args$2 : 1) - 1, (_args$3 = args[2]) !== null && _args$3 !== void 0 ? _args$3 : 1, (_args$4 = args[3]) !== null && _args$4 !== void 0 ? _args$4 : 0, (_args$5 = args[4]) !== null && _args$5 !== void 0 ? _args$5 : 0, (_args$6 = args[5]) !== null && _args$6 !== void 0 ? _args$6 : 0, (_args$7 = args[6]) !== null && _args$7 !== void 0 ? _args$7 : 0, (_args$8 = args[7]) !== null && _args$8 !== void 0 ? _args$8 : 0, (_args$9 = args[8]) !== null && _args$9 !== void 0 ? _args$9 : 0);
    }
    if (!this.date || this.date === "Invalid Date" || isNaN(this.date)) throw "Invalid Date";
  }
  _createClass(eDate, [{
    key: "setSOW",
    value:
    //========< Start of week
    function setSOW() {
      var firstWeekday = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      try {
        if (firstWeekday) this.SOW = _num.eNum.clamp(firstWeekday, 0, 6);
        return this;
      } catch (err) {
        var _this$constructor;
        console.trace(this === null || this === void 0 || (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.name, err);
        return undefined;
      }
    }
    //========< time zone
  }, {
    key: "timezone",
    get: function get() {
      try {
        return this.date.toLocaleDateString(undefined, {
          day: "2-digit",
          timeZoneName: "short"
        }).slice(4);
      } catch (err) {
        var _this$constructor2;
        console.trace(this === null || this === void 0 || (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.name, err);
        return undefined;
      }
    }
  }, {
    key: "timezoneName",
    get: function get() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (err) {
        return undefined;
      }
    }
    /*
     * Get Diff in minutes
     */
  }, {
    key: "timezoneOffset",
    get: function get() {
      try {
        return -this.date.getTimezoneOffset();
      } catch (err) {
        var _this$constructor3;
        console.trace(this === null || this === void 0 || (_this$constructor3 = this.constructor) === null || _this$constructor3 === void 0 ? void 0 : _this$constructor3.name, err);
        return undefined;
      }
    }
    //========< Leap
  }, {
    key: "leapYear",
    get: function get() {
      return eDate.isLeapYear(this.year, false);
    }
  }, {
    key: "numericLeapYear",
    get: function get() {
      return eDate.isLeapYear(this.year, true);
    }
  }, {
    key: "year",
    get:
    //========< year
    function get() {
      try {
        return this.date.getFullYear();
      } catch (err) {
        var _this$constructor4;
        console.trace(this === null || this === void 0 || (_this$constructor4 = this.constructor) === null || _this$constructor4 === void 0 ? void 0 : _this$constructor4.name, err);
        return undefined;
      }
    }
  }, {
    key: "yearPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.year, 4, "0", true);
      } catch (err) {
        var _this$constructor5;
        console.trace(this === null || this === void 0 || (_this$constructor5 = this.constructor) === null || _this$constructor5 === void 0 ? void 0 : _this$constructor5.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalYears",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 31557600000); // ( 1000*60*60*24*365.25 )
      } catch (err) {
        var _this$constructor6;
        console.trace(this === null || this === void 0 || (_this$constructor6 = this.constructor) === null || _this$constructor6 === void 0 ? void 0 : _this$constructor6.name, err);
        return undefined;
      }
    }
  }, {
    key: "year2",
    get: function get() {
      try {
        return parseInt(this.year.toString().substring(2, 4));
      } catch (err) {
        var _this$constructor7;
        console.trace(this === null || this === void 0 || (_this$constructor7 = this.constructor) === null || _this$constructor7 === void 0 ? void 0 : _this$constructor7.name, err);
        return undefined;
      }
    }
  }, {
    key: "year2Padded",
    get: function get() {
      try {
        return _str.eStr.pad(this.year2.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor8;
        console.trace(this === null || this === void 0 || (_this$constructor8 = this.constructor) === null || _this$constructor8 === void 0 ? void 0 : _this$constructor8.name, err);
        return undefined;
      }
    }
  }, {
    key: "month",
    get:
    //========< month
    function get() {
      try {
        return this.date.getMonth() + 1;
      } catch (err) {
        var _this$constructor9;
        console.trace(this === null || this === void 0 || (_this$constructor9 = this.constructor) === null || _this$constructor9 === void 0 ? void 0 : _this$constructor9.name, err);
        return undefined;
      }
    }
  }, {
    key: "monthPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.month.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor10;
        console.trace(this === null || this === void 0 || (_this$constructor10 = this.constructor) === null || _this$constructor10 === void 0 ? void 0 : _this$constructor10.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalMonths",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 2629756800); // ( 1000*60*60*24*30.437 )
      } catch (err) {
        var _this$constructor11;
        console.trace(this === null || this === void 0 || (_this$constructor11 = this.constructor) === null || _this$constructor11 === void 0 ? void 0 : _this$constructor11.name, err);
        return undefined;
      }
    }
  }, {
    key: "monthShortText",
    get: function get() {
      try {
        return eDate.monthNoText(this.month, true);
      } catch (err) {
        var _this$constructor12;
        console.trace(this === null || this === void 0 || (_this$constructor12 = this.constructor) === null || _this$constructor12 === void 0 ? void 0 : _this$constructor12.name, err);
        return undefined;
      }
    }
  }, {
    key: "monthLongText",
    get: function get() {
      try {
        return eDate.monthNoText(this.month, false);
      } catch (err) {
        var _this$constructor13;
        console.trace(this === null || this === void 0 || (_this$constructor13 = this.constructor) === null || _this$constructor13 === void 0 ? void 0 : _this$constructor13.name, err);
        return undefined;
      }
    }
  }, {
    key: "daysInMonth",
    get: function get() {
      try {
        return new Date(this.year, this.month, 0).getDate();
      } catch (err) {
        var _this$constructor14;
        console.trace(this === null || this === void 0 || (_this$constructor14 = this.constructor) === null || _this$constructor14 === void 0 ? void 0 : _this$constructor14.name, err);
        return undefined;
      }
    }
  }, {
    key: "daysInMonthPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.daysInMonth.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor15;
        console.trace(this === null || this === void 0 || (_this$constructor15 = this.constructor) === null || _this$constructor15 === void 0 ? void 0 : _this$constructor15.name, err);
        return undefined;
      }
    }
  }, {
    key: "week",
    get:
    //========< week
    function get() {
      try {
        var _this$SOW;
        var SOW = (_this$SOW = this.SOW) !== null && _this$SOW !== void 0 ? _this$SOW : 0;
        // current
        var cWeekday = this.weekday;
        // fix week 0 actually being 52/53
        var cDiff = SOW > cWeekday ? SOW - (cWeekday + 7) : SOW - cWeekday;
        var cFDOW = new eDate(this).addDays(cDiff);
        // get first day of week for calc
        var firstYearDay = cFDOW.setMonth(1).setDay(1);
        var firstYearDayWeekday = firstYearDay.weekday;
        // diff between SOW and FYD WD
        var firstYearDayDiff = SOW > firstYearDayWeekday ? SOW - (firstYearDayWeekday + 7) : SOW - firstYearDayWeekday;
        // fix first actual week being 0
        if (firstYearDayDiff === 0) firstYearDayDiff -= 7;
        // get actual fist day of week
        var firstYearDayFDOW = firstYearDayDiff === 0 ? firstYearDay : new eDate(firstYearDay).addDays(firstYearDayDiff);
        // calc weeks since
        var weekNo = firstYearDayFDOW.weeksDiff(this);
        // normal
        return weekNo;
      } catch (err) {
        var _this$constructor16;
        console.trace(this === null || this === void 0 || (_this$constructor16 = this.constructor) === null || _this$constructor16 === void 0 ? void 0 : _this$constructor16.name, err);
        return undefined;
      }
    }
  }, {
    key: "weekPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.week.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor17;
        console.trace(this === null || this === void 0 || (_this$constructor17 = this.constructor) === null || _this$constructor17 === void 0 ? void 0 : _this$constructor17.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalWeeks",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 604800000); // ( 1000*60*60*24*7 )
      } catch (err) {
        var _this$constructor18;
        console.trace(this === null || this === void 0 || (_this$constructor18 = this.constructor) === null || _this$constructor18 === void 0 ? void 0 : _this$constructor18.name, err);
        return undefined;
      }
    }
  }, {
    key: "weekFirstDay",
    get: function get() {
      try {
        var _this$SOW2;
        var sow = (_this$SOW2 = this.SOW) !== null && _this$SOW2 !== void 0 ? _this$SOW2 : 0;
        return new eDate(this).addDays(sow > this.weekday ? sow - (this.weekday + 7) : sow - this.weekday);
      } catch (err) {
        var _this$constructor19;
        console.trace(this === null || this === void 0 || (_this$constructor19 = this.constructor) === null || _this$constructor19 === void 0 ? void 0 : _this$constructor19.name, err);
        return undefined;
      }
    }
    //========< days
  }, {
    key: "yearDay",
    get: function get() {
      try {
        return new eDate(this).setMonth(1).setDay(1).daysDiff(this) + 1;
      } catch (err) {
        var _this$constructor20;
        console.trace(this === null || this === void 0 || (_this$constructor20 = this.constructor) === null || _this$constructor20 === void 0 ? void 0 : _this$constructor20.name, err);
        return undefined;
      }
    }
  }, {
    key: "yearDayPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.yearDay.toString(), 3, "0", true);
      } catch (err) {
        var _this$constructor21;
        console.trace(this === null || this === void 0 || (_this$constructor21 = this.constructor) === null || _this$constructor21 === void 0 ? void 0 : _this$constructor21.name, err);
        return undefined;
      }
    }
  }, {
    key: "day",
    get: function get() {
      try {
        return this.date.getDate();
      } catch (err) {
        var _this$constructor22;
        console.trace(this === null || this === void 0 || (_this$constructor22 = this.constructor) === null || _this$constructor22 === void 0 ? void 0 : _this$constructor22.name, err);
        return undefined;
      }
    }
  }, {
    key: "dayPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.day.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor23;
        console.trace(this === null || this === void 0 || (_this$constructor23 = this.constructor) === null || _this$constructor23 === void 0 ? void 0 : _this$constructor23.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalDays",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 86400000); // ( 1000*60*60*24 )
      } catch (err) {
        var _this$constructor24;
        console.trace(this === null || this === void 0 || (_this$constructor24 = this.constructor) === null || _this$constructor24 === void 0 ? void 0 : _this$constructor24.name, err);
        return undefined;
      }
    }
  }, {
    key: "weekday",
    get: function get() {
      try {
        return this.date.getDay();
      } catch (err) {
        var _this$constructor25;
        console.trace(this === null || this === void 0 || (_this$constructor25 = this.constructor) === null || _this$constructor25 === void 0 ? void 0 : _this$constructor25.name, err);
        return undefined;
      }
    }
  }, {
    key: "weekdayShortText",
    get: function get() {
      try {
        return eDate.weekdayNoText(this.weekday, true);
      } catch (err) {
        var _this$constructor26;
        console.trace(this === null || this === void 0 || (_this$constructor26 = this.constructor) === null || _this$constructor26 === void 0 ? void 0 : _this$constructor26.name, err);
        return undefined;
      }
    }
  }, {
    key: "weekdayLongText",
    get: function get() {
      try {
        return eDate.weekdayNoText(this.weekday, false);
      } catch (err) {
        var _this$constructor27;
        console.trace(this === null || this === void 0 || (_this$constructor27 = this.constructor) === null || _this$constructor27 === void 0 ? void 0 : _this$constructor27.name, err);
        return undefined;
      }
    }
  }, {
    key: "hour",
    get:
    //========< hour
    function get() {
      try {
        return this.date.getHours();
      } catch (err) {
        var _this$constructor28;
        console.trace(this === null || this === void 0 || (_this$constructor28 = this.constructor) === null || _this$constructor28 === void 0 ? void 0 : _this$constructor28.name, err);
        return undefined;
      }
    }
  }, {
    key: "hourPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.date.getHours().toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor29;
        console.trace(this === null || this === void 0 || (_this$constructor29 = this.constructor) === null || _this$constructor29 === void 0 ? void 0 : _this$constructor29.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalHours",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 3600000); // ( 1000*60*60 )
      } catch (err) {
        var _this$constructor30;
        console.trace(this === null || this === void 0 || (_this$constructor30 = this.constructor) === null || _this$constructor30 === void 0 ? void 0 : _this$constructor30.name, err);
        return undefined;
      }
    }
  }, {
    key: "hour12",
    get: function get() {
      try {
        return this.hour % 12 || 12;
      } catch (err) {
        var _this$constructor31;
        console.trace(this === null || this === void 0 || (_this$constructor31 = this.constructor) === null || _this$constructor31 === void 0 ? void 0 : _this$constructor31.name, err);
        return undefined;
      }
    }
  }, {
    key: "hour12Padded",
    get: function get() {
      try {
        return _str.eStr.pad(this.hour12.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor32;
        console.trace(this === null || this === void 0 || (_this$constructor32 = this.constructor) === null || _this$constructor32 === void 0 ? void 0 : _this$constructor32.name, err);
        return undefined;
      }
    }
    //========< minute
  }, {
    key: "minute",
    get: function get() {
      try {
        return this.date.getMinutes();
      } catch (err) {
        var _this$constructor33;
        console.trace(this === null || this === void 0 || (_this$constructor33 = this.constructor) === null || _this$constructor33 === void 0 ? void 0 : _this$constructor33.name, err);
        return undefined;
      }
    }
  }, {
    key: "minutePadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.minute.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor34;
        console.trace(this === null || this === void 0 || (_this$constructor34 = this.constructor) === null || _this$constructor34 === void 0 ? void 0 : _this$constructor34.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalMinutes",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 60000); // ( 1000*60 )
      } catch (err) {
        var _this$constructor35;
        console.trace(this === null || this === void 0 || (_this$constructor35 = this.constructor) === null || _this$constructor35 === void 0 ? void 0 : _this$constructor35.name, err);
        return undefined;
      }
    }
    //========< second
  }, {
    key: "second",
    get: function get() {
      try {
        return this.date.getSeconds();
      } catch (err) {
        var _this$constructor36;
        console.trace(this === null || this === void 0 || (_this$constructor36 = this.constructor) === null || _this$constructor36 === void 0 ? void 0 : _this$constructor36.name, err);
        return undefined;
      }
    }
  }, {
    key: "secondPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.second.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor37;
        console.trace(this === null || this === void 0 || (_this$constructor37 = this.constructor) === null || _this$constructor37 === void 0 ? void 0 : _this$constructor37.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalSeconds",
    get: function get() {
      try {
        return Math.floor(this.date.getTime() / 1000);
      } catch (err) {
        var _this$constructor38;
        console.trace(this === null || this === void 0 || (_this$constructor38 = this.constructor) === null || _this$constructor38 === void 0 ? void 0 : _this$constructor38.name, err);
        return undefined;
      }
    }
    //========< miliseconds
  }, {
    key: "millisecond",
    get: function get() {
      try {
        return this.date.getMilliseconds();
      } catch (err) {
        var _this$constructor39;
        console.trace(this === null || this === void 0 || (_this$constructor39 = this.constructor) === null || _this$constructor39 === void 0 ? void 0 : _this$constructor39.name, err);
        return undefined;
      }
    }
  }, {
    key: "millisecondPadded",
    get: function get() {
      try {
        return _str.eStr.pad(this.millisecond.toString(), 2, "0", true);
      } catch (err) {
        var _this$constructor40;
        console.trace(this === null || this === void 0 || (_this$constructor40 = this.constructor) === null || _this$constructor40 === void 0 ? void 0 : _this$constructor40.name, err);
        return undefined;
      }
    }
  }, {
    key: "totalMilliseconds",
    get: function get() {
      try {
        return this.date.getTime();
      } catch (err) {
        var _this$constructor41;
        console.trace(this === null || this === void 0 || (_this$constructor41 = this.constructor) === null || _this$constructor41 === void 0 ? void 0 : _this$constructor41.name, err);
        return undefined;
      }
    }
    //========< time persid
  }, {
    key: "timePeriod",
    get: function get() {
      try {
        return this.hour < 12 ? "am" : "pm";
      } catch (err) {
        var _this$constructor42;
        console.trace(this === null || this === void 0 || (_this$constructor42 = this.constructor) === null || _this$constructor42 === void 0 ? void 0 : _this$constructor42.name, err);
        return undefined;
      }
    }
  }, {
    key: "timePeriodUppercase",
    get: function get() {
      try {
        return this.timePeriod.toUpperCase();
      } catch (err) {
        var _this$constructor43;
        console.trace(this === null || this === void 0 || (_this$constructor43 = this.constructor) === null || _this$constructor43 === void 0 ? void 0 : _this$constructor43.name, err);
        return undefined;
      }
    }
    //========< add
  }, {
    key: "addYears",
    value: function addYears(years) {
      try {
        return new eDate(this.year + years, this.month, this.day, this.hour, this.minute, this.second, this.millisecond).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor44;
        console.trace(this === null || this === void 0 || (_this$constructor44 = this.constructor) === null || _this$constructor44 === void 0 ? void 0 : _this$constructor44.name, err);
        return undefined;
      }
    }
  }, {
    key: "addMonths",
    value: function addMonths(months) {
      try {
        return new eDate(this.year, this.month + months, this.day, this.hour, this.minute, this.second, this.millisecond).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor45;
        console.trace(this === null || this === void 0 || (_this$constructor45 = this.constructor) === null || _this$constructor45 === void 0 ? void 0 : _this$constructor45.name, err);
        return undefined;
      }
    }
  }, {
    key: "addDays",
    value: function addDays(days) {
      try {
        return new eDate(this.year, this.month, this.day + days, this.hour, this.minute, this.second, this.millisecond).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor46;
        console.trace(this === null || this === void 0 || (_this$constructor46 = this.constructor) === null || _this$constructor46 === void 0 ? void 0 : _this$constructor46.name, err);
        return undefined;
      }
    }
  }, {
    key: "addHours",
    value: function addHours(hours) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour + hours, this.minute, this.second, this.millisecond).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor47;
        console.trace(this === null || this === void 0 || (_this$constructor47 = this.constructor) === null || _this$constructor47 === void 0 ? void 0 : _this$constructor47.name, err);
        return undefined;
      }
    }
  }, {
    key: "addMinutes",
    value: function addMinutes(minutes) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour, this.minute + minutes, this.second, this.millisecond).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor48;
        console.trace(this === null || this === void 0 || (_this$constructor48 = this.constructor) === null || _this$constructor48 === void 0 ? void 0 : _this$constructor48.name, err);
        return undefined;
      }
    }
  }, {
    key: "addSeconds",
    value: function addSeconds(seconds) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour, this.minute, this.second + seconds, this.millisecond).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor49;
        console.trace(this === null || this === void 0 || (_this$constructor49 = this.constructor) === null || _this$constructor49 === void 0 ? void 0 : _this$constructor49.name, err);
        return undefined;
      }
    }
  }, {
    key: "addMilliseconds",
    value: function addMilliseconds(milliseconds) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond + milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor50;
        console.trace(this === null || this === void 0 || (_this$constructor50 = this.constructor) === null || _this$constructor50 === void 0 ? void 0 : _this$constructor50.name, err);
        return undefined;
      }
    }
    //========< set
  }, {
    key: "setYear",
    value: function setYear(years) {
      try {
        return new eDate(years, this.month, this.day, this.hour, this.minute, this.second, this.milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor51;
        console.trace(this === null || this === void 0 || (_this$constructor51 = this.constructor) === null || _this$constructor51 === void 0 ? void 0 : _this$constructor51.name, err);
        return undefined;
      }
    }
  }, {
    key: "setMonth",
    value: function setMonth(months) {
      try {
        return new eDate(this.year, months, this.day, this.hour, this.minute, this.second, this.milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor52;
        console.trace(this === null || this === void 0 || (_this$constructor52 = this.constructor) === null || _this$constructor52 === void 0 ? void 0 : _this$constructor52.name, err);
        return undefined;
      }
    }
  }, {
    key: "setDay",
    value: function setDay(days) {
      try {
        return new eDate(this.year, this.month, days, this.hour, this.minute, this.second, this.milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor53;
        console.trace(this === null || this === void 0 || (_this$constructor53 = this.constructor) === null || _this$constructor53 === void 0 ? void 0 : _this$constructor53.name, err);
        return undefined;
      }
    }
  }, {
    key: "setHour",
    value: function setHour(hours) {
      try {
        return new eDate(this.year, this.month, this.day, hours, this.minute, this.second, this.milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor54;
        console.trace(this === null || this === void 0 || (_this$constructor54 = this.constructor) === null || _this$constructor54 === void 0 ? void 0 : _this$constructor54.name, err);
        return undefined;
      }
    }
  }, {
    key: "setMinute",
    value: function setMinute(minutes) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour, minutes, this.second, this.milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor55;
        console.trace(this === null || this === void 0 || (_this$constructor55 = this.constructor) === null || _this$constructor55 === void 0 ? void 0 : _this$constructor55.name, err);
        return undefined;
      }
    }
  }, {
    key: "setSecond",
    value: function setSecond(seconds) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour, this.minute, seconds, this.milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor56;
        console.trace(this === null || this === void 0 || (_this$constructor56 = this.constructor) === null || _this$constructor56 === void 0 ? void 0 : _this$constructor56.name, err);
        return undefined;
      }
    }
  }, {
    key: "setMillisecond",
    value: function setMillisecond(milliseconds) {
      try {
        return new eDate(this.year, this.month, this.day, this.hour, this.minute, this.second, milliseconds).setSOW(this.SOW);
      } catch (err) {
        var _this$constructor57;
        console.trace(this === null || this === void 0 || (_this$constructor57 = this.constructor) === null || _this$constructor57 === void 0 ? void 0 : _this$constructor57.name, err);
        return undefined;
      }
    }
    //========< diff
  }, {
    key: "yearsDiff",
    value: function yearsDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalYears - this.totalYears;
      } catch (err) {
        var _this$constructor58;
        console.trace(this === null || this === void 0 || (_this$constructor58 = this.constructor) === null || _this$constructor58 === void 0 ? void 0 : _this$constructor58.name, err);
        return undefined;
      }
    }
  }, {
    key: "monthsDiff",
    value: function monthsDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalMonths - this.totalMonths;
      } catch (err) {
        var _this$constructor59;
        console.trace(this === null || this === void 0 || (_this$constructor59 = this.constructor) === null || _this$constructor59 === void 0 ? void 0 : _this$constructor59.name, err);
        return undefined;
      }
    }
  }, {
    key: "weeksDiff",
    value: function weeksDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalWeeks - this.totalWeeks;
      } catch (err) {
        var _this$constructor60;
        console.trace(this === null || this === void 0 || (_this$constructor60 = this.constructor) === null || _this$constructor60 === void 0 ? void 0 : _this$constructor60.name, err);
        return undefined;
      }
    }
  }, {
    key: "daysDiff",
    value: function daysDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalDays - this.totalDays;
      } catch (err) {
        var _this$constructor61;
        console.trace(this === null || this === void 0 || (_this$constructor61 = this.constructor) === null || _this$constructor61 === void 0 ? void 0 : _this$constructor61.name, err);
        return undefined;
      }
    }
  }, {
    key: "hoursDiff",
    value: function hoursDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalHours - this.totalHours;
      } catch (err) {
        var _this$constructor62;
        console.trace(this === null || this === void 0 || (_this$constructor62 = this.constructor) === null || _this$constructor62 === void 0 ? void 0 : _this$constructor62.name, err);
        return undefined;
      }
    }
  }, {
    key: "minutesDiff",
    value: function minutesDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalMinutes - this.totalMinutes;
      } catch (err) {
        var _this$constructor63;
        console.trace(this === null || this === void 0 || (_this$constructor63 = this.constructor) === null || _this$constructor63 === void 0 ? void 0 : _this$constructor63.name, err);
        return undefined;
      }
    }
  }, {
    key: "secondsDiff",
    value: function secondsDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalSeconds - this.totalSeconds;
      } catch (err) {
        var _this$constructor64;
        console.trace(this === null || this === void 0 || (_this$constructor64 = this.constructor) === null || _this$constructor64 === void 0 ? void 0 : _this$constructor64.name, err);
        return undefined;
      }
    }
  }, {
    key: "millisecondsDiff",
    value: function millisecondsDiff(date) {
      try {
        date = new eDate(date).setSOW(this.SOW);
        return date.totalMilliseconds - this.totalMilliseconds;
      } catch (err) {
        var _this$constructor65;
        console.trace(this === null || this === void 0 || (_this$constructor65 = this.constructor) === null || _this$constructor65 === void 0 ? void 0 : _this$constructor65.name, err);
        return undefined;
      }
    }
    //========< timesince
  }, {
    key: "timeDiff",
    value: function timeDiff(date) {
      var T = [{
        n: "millisecond",
        d: 1000
      }, {
        n: "second",
        d: 60
      }, {
        n: "minute",
        d: 60
      }, {
        n: "hour",
        d: 24
      }, {
        n: "day",
        d: 30.4167
      }, {
        n: "month",
        d: 12
      }, {
        n: "year",
        d: null
      }];
      try {
        var diff = this.millisecondsDiff(date);
        var max = getMax(diff, T);
        var arr = [];
        arr.push({
          n: T[max.i].n,
          v: Math.floor(max.v) * Math.sign(diff)
        });
        var v = max.v;
        for (var i = max.i - 1; i >= 0; i--) {
          v = (v - Math.floor(v)) * T[i].d;
          if (Math.floor(v) > 0) arr.push({
            n: T[i].n,
            v: Math.floor(v)
          });
        }
        return arr;
      } catch (err) {
        var _this$constructor66;
        console.trace(this === null || this === void 0 || (_this$constructor66 = this.constructor) === null || _this$constructor66 === void 0 ? void 0 : _this$constructor66.name, err);
        return undefined;
      }
      function getMax(diff, T) {
        diff = Math.abs(diff);
        var i = null;
        var v = null;
        for (var ti in T) {
          if (T[ti].d !== null && diff > T[ti].d) {
            diff = diff / T[ti].d;
          } else {
            i = ti;
            v = diff;
            break;
          }
        }
        return {
          i: i,
          v: v
        };
      }
    }
    //========< formats
  }, {
    key: "dateFormat",
    get: function get() {
      return "".concat(this.yearPadded, "-").concat(this.monthPadded, "-").concat(this.dayPadded);
    }
  }, {
    key: "readableDateFormat",
    get: function get() {
      return "".concat(this.weekdayShortText, ", ").concat(this.day, " ").concat(this.monthShortText, " ").concat(this.year);
    }
  }, {
    key: "timeFormat",
    get: function get() {
      return "".concat(this.hour12Padded, ":").concat(this.minutePadded, ":").concat(this.secondPadded, " ").concat(this.timePeriod);
    }
  }, {
    key: "readableTimeFormat",
    get: function get() {
      return "".concat(this.hour12Padded, ":").concat(this.minutePadded, " ").concat(this.timePeriod);
    }
  }, {
    key: "datetimeFormat",
    get: function get() {
      return "".concat(this.dateFormat, " ").concat(this.timeFormat);
    }
  }, {
    key: "readableDatetimeFormat",
    get: function get() {
      return "".concat(this.readableDateFormat, ", ").concat(this.readableTimeFormat);
    }
  }, {
    key: "hourMinuteFormat",
    get: function get() {
      return "".concat(this.hour12Padded, ":").concat(this.minutePadded, " ").concat(this.timePeriod);
    }
  }, {
    key: "timestampFormat",
    get: function get() {
      return "".concat(this.dateFormat, " ").concat(this.hourPadded, ":").concat(this.minutePadded, ":").concat(this.secondPadded);
    }
  }, {
    key: "excelDateFormat",
    get: function get() {
      return "".concat(this.dayPadded, "/").concat(this.monthPadded, "/").concat(this.yearPadded);
    }
    //========< format
  }, {
    key: "getFormated",
    value: function getFormated() {
      var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Y-m-d H-i-s";
      var formats = {
        d: function d(date) {
          return date.dayPadded;
        },
        D: function D(date) {
          return date.weekdayShortText;
        },
        j: function j(date) {
          return date.day;
        },
        l: function l(date) {
          return date.weekdayLongText;
        },
        w: function w(date) {
          return date.weekday;
        },
        W: function W(date) {
          return date.weekPadded;
        },
        z: function z(date) {
          return date.yearDay;
        },
        F: function F(date) {
          return date.monthLongText;
        },
        m: function m(date) {
          return date.monthPadded;
        },
        M: function M(date) {
          return date.monthShortText;
        },
        n: function n(date) {
          return date.month;
        },
        t: function t(date) {
          return date.daysInMonth;
        },
        L: function L(date) {
          return date.numericLeapYear;
        },
        Y: function Y(date) {
          return date.yearPadded;
        },
        y: function y(date) {
          return date.year2Padded;
        },
        a: function a(date) {
          return date.timePeriod;
        },
        A: function A(date) {
          return date.timePeriodUppercase;
        },
        g: function g(date) {
          return date.hour12;
        },
        G: function G(date) {
          return date.hour;
        },
        h: function h(date) {
          return date.hour12Padded;
        },
        H: function H(date) {
          return date.hourPadded;
        },
        i: function i(date) {
          return date.minutePadded;
        },
        s: function s(date) {
          return date.secondPadded;
        },
        e: function e(date) {
          return date.timezone;
        },
        E: function E(date) {
          return date.timezoneName;
        },
        O: function O(date) {
          return date.timezoneOffset;
        }
      };
      try {
        var str = format;
        for (var k in formats) {
          str = str.replaceAll(k, "{".concat(k, "}"));
        }
        for (var k2 in formats) {
          if (str.includes("{".concat(k2, "}"))) str = str.replaceAll("{".concat(k2, "}"), formats[k2](this));
        }
        return str;
      } catch (err) {
        var _this$constructor67;
        console.trace(this === null || this === void 0 || (_this$constructor67 = this.constructor) === null || _this$constructor67 === void 0 ? void 0 : _this$constructor67.name, err);
        return undefined;
      }
    }
    //========< time id (int)
  }, {
    key: "getTime",
    value: function getTime() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "unix";
      var times = {
        unix: function unix(date) {
          return date.totalSeconds;
        },
        Y: function Y(date) {
          return date.yearPadded;
        },
        Ym: function Ym(date) {
          return +"".concat(times.Y(date)).concat(date.monthPadded);
        },
        Ymd: function Ymd(date) {
          return +"".concat(times.Ym(date)).concat(date.dayPadded);
        },
        YmdH: function YmdH(date) {
          return +"".concat(times.Ymd(date)).concat(date.hourPadded);
        },
        YmdHi: function YmdHi(date) {
          return +"".concat(times.YmdH(date)).concat(date.minutePadded);
        },
        YmdHis: function YmdHis(date) {
          return +"".concat(times.YmdHi(date)).concat(date.secondPadded);
        },
        YW: function YW(date) {
          return +"".concat(times.Y(date)).concat(date.weekPadded);
        },
        YWw: function YWw(date) {
          return +"".concat(times.YW(date)).concat(date.weekday);
        },
        YWwH: function YWwH(date) {
          return +"".concat(times.YWw(date)).concat(date.hourPadded);
        },
        YWwHi: function YWwHi(date) {
          return +"".concat(times.YWwH(date)).concat(date.minutePadded);
        },
        YWwHis: function YWwHis(date) {
          return +"".concat(times.YWwHi(date)).concat(date.secondPadded);
        }
      };
      try {
        var _times$id;
        return ((_times$id = times[id]) !== null && _times$id !== void 0 ? _times$id : times.unix)(this);
      } catch (err) {
        var _this$constructor68;
        console.trace(this === null || this === void 0 || (_this$constructor68 = this.constructor) === null || _this$constructor68 === void 0 ? void 0 : _this$constructor68.name, err);
        return undefined;
      }
    }
    //========< compare (-1, 0, 1)
  }, {
    key: "compare",
    value: function compare(date) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ymd";
      try {
        date = new eDate(date).setSOW(this.SOW);
        var d1 = this.getTime(time);
        var d2 = date.getTime(time);
        //
        if (d1 === d2) return 0;else if (d1 > d2) return 1;else if (d1 < d2) return -1;
      } catch (err) {
        var _this$constructor69;
        console.trace(this === null || this === void 0 || (_this$constructor69 = this.constructor) === null || _this$constructor69 === void 0 ? void 0 : _this$constructor69.name, err);
        return undefined;
      }
    }
  }, {
    key: "isAfter",
    value: function isAfter(date) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ymd";
      try {
        return this.compare(date, time) === 1;
      } catch (err) {
        var _this$constructor70;
        console.trace(this === null || this === void 0 || (_this$constructor70 = this.constructor) === null || _this$constructor70 === void 0 ? void 0 : _this$constructor70.name, err);
        return undefined;
      }
    }
  }, {
    key: "isBefore",
    value: function isBefore(date) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ymd";
      try {
        return this.compare(date, time) === -1;
      } catch (err) {
        var _this$constructor71;
        console.trace(this === null || this === void 0 || (_this$constructor71 = this.constructor) === null || _this$constructor71 === void 0 ? void 0 : _this$constructor71.name, err);
        return undefined;
      }
    }
  }, {
    key: "equalTo",
    value: function equalTo(date) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ymd";
      try {
        return this.compare(date, time) === 0;
      } catch (err) {
        var _this$constructor72;
        console.trace(this === null || this === void 0 || (_this$constructor72 = this.constructor) === null || _this$constructor72 === void 0 ? void 0 : _this$constructor72.name, err);
        return undefined;
      }
    }
    //========< between (true, false)
  }, {
    key: "between",
    value: function between(startDate, endDate) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Ymd";
      var strictlyBetween = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      try {
        startDate = new eDate(startDate).setSOW(this.SOW);
        endDate = new eDate(endDate).setSOW(this.SOW);
        var d = this.getTime(time);
        var sd = startDate.getTime(time);
        var ed = endDate.getTime(time);
        if (strictlyBetween === false && sd <= d && d <= ed || strictlyBetween === true && sd < d && d < ed) return true;
        return false;
      } catch (err) {
        var _this$constructor73;
        console.trace(this === null || this === void 0 || (_this$constructor73 = this.constructor) === null || _this$constructor73 === void 0 ? void 0 : _this$constructor73.name, err);
        return undefined;
      }
    }
    //========< intersect (true, false)
  }], [{
    key: "parseDate",
    value: function parseDate(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ymd';
      var includeLastYear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      // ymd|dmy|mdy|serial
      try {
        switch (format) {
          case "ymd":
          case "dmy":
          case "mdy":
            var splitter = value.includes("/") ? "/" : "-";
            var d = value.split(splitter);
            var nd = {
              y: null,
              m: null,
              d: null
            };
            var f = format.split("");
            for (var i in f) {
              switch (f[i]) {
                case "y":
                  nd.y = d[i].length < 4 ? eDate.year2ToYear(d[i], includeLastYear) : d[i];
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
  }, {
    key: "now",
    get: function get() {
      return new eDate();
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear(year) {
      var numeric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      try {
        var v = (year % 4 === 0 || year % 400 === 0) && year % 1000 !== 0;
        // numeric
        if (numeric) return v ? 1 : 0;
        // normal
        return v;
      } catch (err) {
        var _this$constructor74;
        console.trace(this === null || this === void 0 || (_this$constructor74 = this.constructor) === null || _this$constructor74 === void 0 ? void 0 : _this$constructor74.name, err);
        return undefined;
      }
    }
  }, {
    key: "year2ToYear",
    value: function year2ToYear(year2) {
      var includeLastYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      try {
        var cdate = new eDate();
        var cYear = cdate.year2;
        var cStart = parseInt(cdate.year.toString().substring(0, 2));
        var nYear = includeLastYear === true ? "".concat(parseInt(year2) > cYear ? cStart - 1 : cStart).concat(year2) : "".concat(cStart).concat(year2);
        return nYear;
      } catch (err) {
        var _this$constructor75;
        console.trace(this === null || this === void 0 || (_this$constructor75 = this.constructor) === null || _this$constructor75 === void 0 ? void 0 : _this$constructor75.name, err);
        return undefined;
      }
    }
  }, {
    key: "monthNoText",
    value: function monthNoText() {
      var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _short = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var nameShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      var nameLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      try {
        // short
        if (_short) return nameShort[month - 1];
        // long
        return nameLong[month - 1];
      } catch (err) {
        var _this$constructor76;
        console.trace(this === null || this === void 0 || (_this$constructor76 = this.constructor) === null || _this$constructor76 === void 0 ? void 0 : _this$constructor76.name, err);
        return undefined;
      }
    }
  }, {
    key: "weekdayNoText",
    value: function weekdayNoText() {
      var weekday = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _short2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var namesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var namesLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      try {
        // short
        if (_short2) return namesShort[weekday];
        // long
        return namesLong[weekday];
      } catch (err) {
        var _this$constructor77;
        console.trace(this === null || this === void 0 || (_this$constructor77 = this.constructor) === null || _this$constructor77 === void 0 ? void 0 : _this$constructor77.name, err);
        return undefined;
      }
    }
  }, {
    key: "periodsIntersect",
    value: function periodsIntersect(startDate1, endDate1, startDate2, endDate2) {
      var time = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Ymd";
      var firstWeekday = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      try {
        startDate1 = new eDate(startDate1).setSOW(firstWeekday);
        endDate1 = new eDate(endDate1).setSOW(firstWeekday);
        startDate2 = new eDate(startDate2).setSOW(firstWeekday);
        endDate2 = new eDate(endDate2).setSOW(firstWeekday);
        var sd1 = startDate1.getTime(time);
        var ed1 = endDate1.getTime(time);
        var sd2 = startDate2.getTime(time);
        var ed2 = endDate2.getTime(time);
        if (sd1 <= sd2 && sd2 <= ed1 || sd1 <= ed2 && ed2 <= ed1 || sd2 <= sd1 && sd1 <= ed2 || sd2 <= ed1 && ed1 <= ed2) return true;
        return false;
      } catch (err) {
        var _this$constructor78;
        console.trace(this === null || this === void 0 || (_this$constructor78 = this.constructor) === null || _this$constructor78 === void 0 ? void 0 : _this$constructor78.name, err);
        return undefined;
      }
    }
    //========<  min/max
  }, {
    key: "max",
    value: function max(dates) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ymd";
      var firstWeekday = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      try {
        var d = _list.eList.forEach(dates, [], function (key, value, res) {
          res.push(new eDate(value).setSOW(firstWeekday).getTime(time));
        });
        var m = Math.max.apply(Math, _toConsumableArray(d));
        var date = dates.find(function (o) {
          return o.getTime(time) === m;
        });
        return new eDate(date).setSOW(firstWeekday);
      } catch (err) {
        var _this$constructor79;
        console.trace(this === null || this === void 0 || (_this$constructor79 = this.constructor) === null || _this$constructor79 === void 0 ? void 0 : _this$constructor79.name, err);
        return undefined;
      }
    }
  }, {
    key: "min",
    value: function min(dates) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Ymd";
      var firstWeekday = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      try {
        var d = _list.eList.forEach(dates, [], function (key, value, res) {
          res.push(new eDate(value).setSOW(firstWeekday).getTime(time));
        });
        var m = Math.min.apply(Math, _toConsumableArray(d));
        var date = dates.find(function (o) {
          return o.getTime(time) === m;
        });
        return new eDate(date).setSOW(firstWeekday);
      } catch (err) {
        var _this$constructor80;
        console.trace(this === null || this === void 0 || (_this$constructor80 = this.constructor) === null || _this$constructor80 === void 0 ? void 0 : _this$constructor80.name, err);
        return undefined;
      }
    }
    //========<  data
  }, {
    key: "calendarMonthData",
    value: function calendarMonthData(date) {
      var startWeekday = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      try {
        date = new eDate(date);
        if (!date) return undefined;
        var weekdays = [];
        var daysData = [];
        var monthData = [];
        var startDate = date.setSOW(startWeekday).setDay(1).weekFirstDay;
        // week days
        for (var i = 0; i < 7; i++) {
          weekdays.push(_num.eNum.loop(startWeekday + i - 1, 1, 0, 6));
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
          monthData: monthData
        };
      } catch (err) {
        var _this$constructor81;
        console.trace(this === null || this === void 0 || (_this$constructor81 = this.constructor) === null || _this$constructor81 === void 0 ? void 0 : _this$constructor81.name, err);
        return undefined;
      }
    }
  }]);
  return eDate;
}();