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
  - [**useEState**: easy use state](#---useEState)
  - [**useEAsyncState**: easy async use state](#---useEAsyncState)
  - [**useERef**: easy use ref](#---useERef)
  - [**useECookieState**: use state stored as cookie](#---useECookieState)
  - [**useESessionStorageState**: use state stored as session storage](#---useESessionStorageState)
  - [**useELocaleStorageState**: use state stored as locale storage](#---useELocaleStorageState)
  - [**createEContext**: easy to use context](#---createEContext)
  - [**createETranslationContext**: builtIn Translation context](#---createETranslationContext)
  - [**useEApiState**: call api state](#---useEApiState)
  - [**useEApiStoredState**: call stored api state](#---useEApiStoredState)
  - [**createEApiContext**: call api context](#---createEApiContext)
  - [**createEApiStoredContext**: call stored api context](#---createEApiStoredContext)

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
