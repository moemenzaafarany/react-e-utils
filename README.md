# react-e-utils

## Description

JS and React Utils to help you with your code.

## Installation

```bash
npm install react-e-utils
```

## Features

- [JS](#--JS)

  - [**eType**: check variable types](#---eType)
  - [**eStr**: string functions](#---eStr)
  - [**eNum**: numeric functions](#---eNum)
  - [**eList**: array and objects functions](#---eList)
  - [**eFile**: File functions](#---eFile)
  - [**eDom**: html functions](#---eDom)
  - [**eDate**: datetime functions](#---eDate)
  - [**eColor**: color functions](#---eColor)
  - [**eRes**: response object](#---eRes)
  - [**eUrl**: URL managment functions](#---eUrl)
  - [**eCookie**: get & set cookies](#---eCookie)
  - [**eSessionStorage**: get & set session storage](#---eSessionStorage)
  - [**eLocaleStorage**: get & set locale storage](#---eLocaleStorage)
  - [**eTimer**: repeating timer](#---eTimer)
  - [**eTimeout**: one time use timeout](#---eTimeout)
  - [**eOnline**: http request](#---eOnline)
  - [**eHttpRequest**: http request](#---eHttpRequest)
  - [**eApiCaller**: simplify http requests](#---eApiCaller)
  - [**eSocketServer**: web socket server](#---eSocketServer)
  - [**eNotification**: web notification functions](#---eNotification)
  - [**eImageEditor**: image editor](#---eImageEditor)
  - [**eTranslation**: translation & locale manager](#---eTranslation)
  - [**MISC**: misc functions](#---MISC)

- [React](#--React)
  - [**eUse**: easy use hooks](#---eUse)
    - [**eUse.State**: easy use state](#---eUse.State)
    - [**eUse.AsyncState**: easy async use state](#---eUse.AsyncState)
    - [**eUse.Ref**: easy use ref](#---eUse.Ref)
    - [**eUse.CookieState**: use state stored as cookie](#---eUse.CookieState)
    - [**eUse.SessionStorageState**: use state stored as session storage](#---eUse.SessionStorageState)
    - [**eUse.LocaleStorageState**: use state stored as locale storage](#---eUse.LocaleStorageState)
    - [**eUse.ApiState**: call api state](#---eUse.ApiState)
    - [**eUse.ApiStoredState**: call stored api state](#---eUse.ApiStoredState)
  - [**eCreate**: easy create hooks](#---eCreate)
    - [**eCreate.Context**: easy to use context](#---eCreate.Context)
    - [**eCreate.TranslationContext**: builtIn Translation context](#---eCreate.TranslationContext)
    - [**eCreate.ApiContext**: call api context](#---eCreate.ApiContext)
    - [**eCreate.ApiStoredContext**: call stored api context](#---eCreate.ApiStoredContext)
  - [**MultiEProviders**: put all providers to create](#---MultiEProviders)

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

### **- JS:**

JS functions.

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eType:**

JS variable types.

```js
eType.null(value); // null, undefined, NaN
eType.empty(value); // null, undefined, NaN, "", {}, []
eType.str(value, (canBeNull = true | false)); // string
eType.num(value, (canBeNull = true | false)); // int, float
eType.bool(value, (canBeNull = true | false)); // boolean
eType.arr(value, (canBeNull = true | false)); // array []
eType.obj(value, (canBeNull = true | false)); // object {}
eType.func(value, (canBeNull = true | false)); // functions
eType.class(value, className, (canBeNull = true | false)); // class
eType.file(value, (canBeNull = true | false)); // File
eType.blob(value, (canBeNull = true | false)); // Blob
eType.image(value, (canBeNull = true | false)); // Image
eType.formData(value, (canBeNull = true | false)); // FormData
eType.node(value, (canBeNull = true | false)); // Node
eType.element(value, (canBeNull = true | false)); // HTMLElement
eType.eRes(value, (canBeNull = true | false)); // eRes
eType.eDate(value, (canBeNull = true | false)); // eDate
eType.eColor(value, (canBeNull = true | false)); // eColor

eType.of(value); // get type
eType.multi(value, (types = ["str"]), (canBeNull = true | false)); // of multiple types
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eStr:**

JS string functions.

```js
eStr.padLeft(value, length, padChar); // pad str left "{pad}string"
eStr.padRight(value, length, padChar); // pad str right "string{pad}"

eStr.repeat(value, count); // repeat string
eStr.indent(count, (value = "&#160;")); // indent any string

eStr.size(text); // get text size

eStr.copyToClipboard(str, (alertText = "Data copied to clipboard")); // copy text to clipboard
// alertText=null then no alert

eStr.from(value); // convert anything to string

eStr.str2hex(str); // covert string to hex
eStr.hex2str(hex); // convert hex to string
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eNum:**

JS num functions.

```js
eNum.parse(value); // parse value

eNum.loop(value, step, min, max); // loop through numbers and return if exceeded

eNum.clamp(value, min, max); // limit min and max for num

eNum.stepTo(value, step, dest); // step to dest

eNum.easeTo(value, dest, (multiplier = 1), round); // ease to dest

eNum.percent(value, max, (multiplier = 100)); // to percent

eNum.fromPercent(value, (min = 0), (max = 0), (multiplier = 100)); // from percentage

eNum.round(value, (percision = 0)); // round number

eNum.random((min = 0), (max = 1)); // generate random number

eNum.readable(
  value,
  (percision = 1),
  (seperator = ","),
  (persistentPercision = false)
); // change any num to human friendly number string, 10000 => 10,000
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eList:**

JS array & object functions.

```js
// arrays
eList.findIndex(array, (findCondition = (index, value) => {})); // find first index in array that meet condition
eList.findInArr(array, (findCondition = (index, value) => {})); // find first value in array that meet condition
eList.findAllInArr(array, (findCondition = (index, value) => {})); // find all values in array that meet condition

eList.sortArr(array, (reverse = false), (processValue = (value) => value)); // sort array with given processed value
// like
eList.sortArr(["1", 2, 3], false, (v) => parseInt(v));

eList.removeIndexFromArr(array, index); // remove index from array and return array

eList.removeValueFromArr(array, index); // find and remove value from array and return array

eList.arrToStringTable(
  array,
  (columns = { id: "id", name: (o) => o["name2"] }),
  (rowSep = "\r\n"),
  (colSep = "\t")
); // array to csv, tsv or custom

eList.arrUnique(array, (cleanEmpty = false)); // remove duplicates and keep only unique values

eList.arrClean(array, (removeCondition = (index, value) => eType.empty(value))); // remove from arry if meets condition

eList.arrToFormData(array); // convert array to formdata

eList.arrCountIf(array, (condition = (key, value) => null)); // count value if matches condition

eList.arrMatchValues(array1, array2, (withIndex = false)); // check if values match each other, and if it should be index based

eList.arrToTree(array, childrenKey, parentKey, childKey, matchValue); // array to tree

// objects
eList.findKey(object, (findCondition = (key, value) => {})); // find first key in object that meet condition
eList.findInObj(object, (findCondition = (key, value) => {})); // find first value in object that meet condition
eList.findAllInObj(object, (findCondition = (key, value) => {})); // find all values in object that meet condition

eList.removeKeyFromObj(object, key); // remove key from object and return object

eList.keysOfObj(object); // return keys as array
eList.valuesOfObj(object); // return values as array
eList.lenOfObj(object); // return length of object

eList.objToFormData(object); // convert object to formdata
eList.formDataToObj(formData); // convert formdata to object

eList.objToUrlData(object); // convert object to url data

eList.objFlatten(object, (sep = "/"), (parentKey = null)); // flatten object

// all
eList.generateArray(length, (callback = (index, array) => null)); // generate array from length, callback return is added to array

eList.toArray(data, (callback = (index, value, array) => null)); // object||array to array, callback return is added to array

eList.toObject(data, (callback = (index, value, object) => null)); // object||array to object, callback return is added to object, returned should look like {[key]: value}

eList.forEach(data, result, (callback = (key, value, result) => null)); // loop object||array, and add to result manually and return result to save

eList.forEach(data, result, (callback = (key, value, result) => null)); // loop object||array, and add to result manually

eList.crawl(array, keys, (fallback = undefined)); // crawl in object||array to find value
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eFile:**

JS file functions.

```js
await eFile.getContentAsText(file); // return file content as string
await eFile.getContentAsArrayBuffer(file); // return file content as array buffer
await eFile.getContentAsBinaryString(file); // return file content as binary string
await eFile.getContentAsDataURL(file); // return file content as data url

eFile.downloadData(filename, data, (type = "text/plain")); // download data as file
eFile.downloadBlob(filename, blob); // download blob as file

await eFile.parseDataSheet(
  file,
  XLSX,
  (customRowDelimiter = null),
  (customColumnDelimiter = null)
);
/* 
auto parse csv, tsv or excel
or add customs to custom parse

if using excel, XLSX value must be added from xlsx 
https://www.npmjs.com/package/xlsx
*/

await eFile.getImageFromFile(file); // get Image from file
await eFile.getImageFromUrl(url); // get Image from URL
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eDom:**

JS html functions.

```js
eDom.html; // get html tag
eDom.htmlLang; // get,set html lang attr
eDom.htmlDir; // get,set html dir attr
eDom.htmlDir; // get,set html dir attr
eDom.head; // get head tag
eDom.body; // get body tag

// events
eDom.eventPreventDefault(runInstead = (event, target) => { }); // return function that prevents default of event

eDom.dispatchEvent(
  element,
  event = "",
  {
      detail,
      bubbles = true,
      cancelable = false,
      composed = false
  }
); // dispatch event

eDom.dispatchEvents(
  element,
  events = [],
  {
      detail,
      bubbles = true,
      cancelable = false,
      composed = false
  }
); // dispatch events

eDom.listenEvent(
  element,
  event = "",
  callback = (evt, eventName) => { },
  {
      preventDefault = false,
      capture = false,
      once = false,
      passive = false
  }
); // listen to event and return abort controller, which can abort event by using {res}.abort();

eDom.listenEvents(
  element,
  events = {
    "event": (evt, eventName) => { }
  },
  {
      preventDefault = false,
      capture = false,
      once = false,
      passive = false
  }
); // listen to events and return abort controllers, which can abort event by using {res}[eventname].abort();
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eDate:**

JS date functions.

```js
// static
eDate.parseDate(
  value,
  (format = "ymd" | "dmy" | "mdy" | "serial"),
  (includeLastYear = true)
); // parse a date from string
eDate.now; // return now as date

eDate.isLeapYear(year, (numeric = false)); // check if is leap year and return true|false, or 1|0 if numeric

eDate.year2ToYear(year2, (includeLastYear = true)); // convert year2 to year4, 99 to 1999

eDate.monthNoText((month = 0), (short = true)); // return month text as long text, short text if short true

eDate.weekdayNoText((weekday = 0), (short = true)); // return weekday text as long text, short text if short true

eDate.periodsIntersect(
  startDate1,
  endDate1,
  startDate2,
  endDate2,
  (time = "Ymd"),
  (firstWeekday = null)
); // check if periods are intersecting

eDate.max(dates, (time = "Ymd"), (firstWeekday = null)); // check max date from dates
eDate.min(dates, (time = "Ymd"), (firstWeekday = null)); // check min date from dates

eDate.calendarMonthData(date, (startWeekday = 0));
/*
  returns object,
  {
    date: current date,
    year: current year,
    month: current month,
    startDate: starting date of month,
    endDate: end date of month,
    weekdays: array of weekdays,
    daysData: array of all month days,
    monthData: array of month weeks, with array of days in each week
    [
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7],
      [1, 2, 3, 4, 5, 6, 7]
    ]
  };
*/

// instance
let date = new eDate(
  "2023-01-01 12:00:00" | (2023, 1, 1, 12, 0, 0) | Date | eDate
); // construct an eDate
date.setSOW(start_of_week); // set starting day of week 0-6

date.timezone; // get timezone
date.timezoneName; // get timezone name
date.timezoneOffset; // get timezone offset in minutes

date.leapYear; // get is leapyear true|false
date.numericLeapYear; // get is leapyear 1|0

date.year; // get numeric year
date.yearPadded; // get string year padded
date.totalYears; // get total years in date
date.year2; // get numeric year2
date.year2Padded; // get string year2 padded

date.month; // get numeric month
date.monthPadded; // get string month padded
date.totalMonths; // get total months in date
date.monthShortText; // get short text representation of month
date.monthLongText; // get long text representation of month
date.daysInMonth; // get total days in month
date.daysInMonthPadded; // get total days in month as padded string

date.week; // get numeric week
date.weekPadded; // get string week padded
date.totalWeeks; // get total weeks in date
date.weekFirstDay; // get first day of current week as eDate

date.yearDay; // get numeric day of year
date.yearDayPadded; // get string day of year padded
date.day; // get numeric day of month
date.dayPadded; // get string day of month padded
date.totalDays; // get total days in date
date.weekday; // get current weekday number
date.weekdayShortText; // get current weekday as short text representation
date.weekdayLongText; // get current weekday as long text representation

date.hour; // get numeric hour 24
date.hourPadded; // get string hour 24 padded
date.totalHours; // get total hours in date
date.hour12; // get numeric hour 12
date.hour12Padded; // get string hour 12 padded

date.minute; // get numeric minute
date.minutePadded; // get string minute padded
date.totalMinutes; // get total minutes in date

date.second; // get numeric second
date.secondPadded; // get string second padded
date.totalSeconds; // get total seconds in date

date.millisecond; // get numeric millisecond
date.millisecondPadded; // get string millisecond padded
date.totalMilliseconds; // get total milliseconds in date

date.timePeriod; // get am or pm
date.timePeriodUppercase; // get AM or PM

date.addYears(years); // add or subtract years and return new eDate
date.addMonths(months); // add or subtract months and return new eDate
date.addDays(days); // add or subtract days and return new eDate
date.addHours(hours); // add or subtract hours and return new eDate
date.addMinutes(minutes); // add or subtract minutes and return new eDate
date.addSeconds(seconds); // add or subtract seconds and return new eDate
date.addMilliseconds(milliseconds); // add or subtract milliseconds and return new eDate

date.setYear(years); // set years and return new eDate
date.setMonth(months); // set months and return new eDate
date.setDay(days); // set days and return new eDate
date.setHour(hours); // set hours and return new eDate
date.setMinute(minutes); // set minutes and return new eDate
date.setSecond(seconds); // set seconds and return new eDate
date.setMillisecond(milliseconds); // set milliseconds and return new eDate

date.yearsDiff(date); // difference in years since date
date.monthsDiff(date); // difference in months since date
date.weeksDiff(date); // difference in weeks since date
date.daysDiff(date); // difference in days since date
date.hoursDiff(date); // difference in hours since date
date.minutesDiff(date); // difference in minutes since date
date.secondsDiff(date); // difference in seconds since date
date.millisecondsDiff(date); // difference in milliseconds since date
date.timeDiff(date); // difference in time since date

date.dateFormat; // yyyy-mm-dd
date.readableDateFormat; // weekday, day month year
date.timeFormat; // hh:mm:ss period
date.readableTimeFormat; // hh:mm am/pm
date.datetimeFormat; // yyyy-mm-dd hh:mm:ss am/pm
date.readableDatetimeFormat; // weekday, day month year hh:mm:ss am/pm
date.hourMinuteFormat; // hh:mm am/pm
date.timestampFormat; // yyyy-mm-dd hh:mm:ss
date.excelDateFormat; // day/month/year

date.getFormated((format = "Y-m-d H-i-s")); // return formated date string

date.getTime((id = "unix")); // return an integer of time based on
// "unix"|"Y"|"Ym"|"Ymd"|"YmdH"|"YmdHi"|"YmdHis"|"YW"|"YWw"|"YWwH"|"YWwHi"|"YWwHis"

date.compare(date, (time = "Ymd")); // compares to date and returns 0 if equal, 1 if bigger, -1 if smaller
date.isAfter(date, (time = "Ymd")); // checks if current date comes after given date
date.isBefore(date, (time = "Ymd")); // checks if current date comes before given date
date.equalTo(date, (time = "Ymd")); // checks if current date is equal given date

date.between(startDate, endDate, (time = "Ymd"), (strictlyBetween = false)); // checks if current date is between two dates
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

### **- React:**

React functions.

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse:**

React use hook.

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse.State:**

easy useState hook

```js
const s = eUse.State(true);
s.value; // return current value
s.value = false; // sets current value
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse.AsyncState:**

easy async useState hook

```js
const s = eUse.AsyncState(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      reolve(true);
    }, 10000);
  });
});
s.value; // return current value
s.value = false; // sets current value
s.waiting; // return if waiting
s.run(); // runs async func
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse.Ref:**

easy async useRef hook

```js
const s = eUse.Ref(true);
s.value || s.current; // return current value
s.value || s.current = false; // sets current value
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse.CookieState:**

easy useState from cookie hook

```js
const s = eUse.CookieState("cookieName",
  { fallback = true, expireHours = 24 * 7 });
s.value; // return current value
s.value = false; // sets current value and save to cookie
s.save(value); // manuall save to cookie
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse.SessionStorageState:**

easy useState from session storage hook

```js
const s = eUse.SessionStorageState("storageName",
  { fallback = true});
s.value; // return current value
s.value = false; // sets current value and save to storage
s.save(value); // manuall save to storage
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eUse.LocaleStorageState:**

easy useState from locale storage hook

```js
const s = eUse.LocaleStorageState("storageName",
  { fallback = true});
s.value; // return current value
s.value = false; // sets current value and save to storage
s.save(value); // manuall save to storage
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eCreate:**

React create hook.

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eCreate.Context:**

easy createContext that generates use, provider, consumer, context

```js
const context = eCreate.Context(() => {
  const user = eUse.State(true);

  const setGuest = () => {
    user.value = false;
  };

  return {
    get user() {
      return user.value;
    },
    setGuest: setGuest,
  };
});

context.Use(); // use context
context.Provider(); // gets provider
context.Consumer(); // creates consumer

const { user, setGuest } = context.Use(); // must be inside of provider to use
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>

#### **-- eCreate.TranslationContext:**

easy built-in translation context

```js
const translation = eCreate.TranslationContext([
  new eLocale(
    code = "en",
    dir = "ltr"|"rtl",
    name = "English",
    fonts = ["sans-serif"],
    data = {"welcome" :"Welcome Customer!"}
  ),
], {
  fillerTag = null,
  autoDetect = true,
  defaultLocale = "en"
});

translation.Use(); // use context
translation.Provider(); // gets provider
translation.Consumer(); // creates consumer

const {
  locale, // current locale code
  dir, // current dir
  fonts, // current fonts arr
  fontfamily, // current fonts string
  locales, // all locales as eLocale
  setLocale, // set locale with new code
  forLocale, // returns value based on locale
  forDir, // returns value based on dir
  t // translate
} = translation.Use(); // must be inside of provider to use

setLocale(code); // changes locale

forLocale({"ar": "name_ar"}, "name_en");// returns value based on locale

forDir("ltr", "rtl"); // returns value based on current direction

t(key, { fillers = null || [], altLocale = null}); // returns translation of key or N/A if not found
// fillers replace the fillerTag with value
// altLocale translates based on different locale
```

<p align="right">(<a href="#react-e-utils">back to top</a>)</p>
<hr>
