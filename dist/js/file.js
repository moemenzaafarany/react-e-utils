export class eFile {
  static getContentAsText(file) {
    return new Promise((resolve, reject) => {
      try {
        if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      } catch (err) {
        console.trace(this?.constructor?.name, err);
        return undefined;
      }
    });
  }
  static getContentAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      try {
        if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsArrayBuffer(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      } catch (err) {
        console.trace(this?.constructor?.name, err);
        return undefined;
      }
    });
  }
  static getContentAsBinaryString(file) {
    return new Promise((resolve, reject) => {
      try {
        if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      } catch (err) {
        console.trace(this?.constructor?.name, err);
        return undefined;
      }
    });
  }
  static getContentAsDataURL(file) {
    return new Promise((resolve, reject) => {
      try {
        if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      } catch (err) {
        console.trace(this?.constructor?.name, err);
        return undefined;
      }
    });
  }
  static downloadData(filename, data, type = "text/plain") {
    try {
      if (!eType.str(filename) || !eType.str(data) || !eType.str(type)) throw `invalid filename=${eStr.from(filename)}|data=${eStr.from(data)}|type=${eStr.from(type)}`;
      const blob = new Blob([data], {
        type: type
      });
      return eFile.downloadBlob(filename, blob);
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return false;
    }
  }
  static downloadBlob(filename, blob) {
    try {
      if (!eType.str(filename) || !eType.blob(blob)) throw `invalid filename=${eStr.from(filename)}|blob=${eStr.from(blob)}`;
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        const el = window.document.createElement("a");
        el.href = window.URL.createObjectURL(blob);
        el.download = filename;
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
      }
      return true;
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return false;
    }
  }
  static parseDataSheet(file, XLSX, customRowDelimiter = null, customColumnDelimiter = null) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
        var extension = (file.name.split(".").pop() || "").toLowerCase();
        var keys = [];
        var data = [];
        var fileData;
        if (extension === "xlsx" || extension === "xls") fileData = await eFile.getContentAsBinaryString(file);else fileData = await eFile.getContentAsText(file);
        if (!fileData) throw "file empty";
        if ((extension === "xlsx" || extension === "xls") && XLSX) {
          var workbook = XLSX.read(fileData, {
            type: "binary"
          });
          // Here is your object
          data = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          // loop data
          for (var k in data) {
            var hasData = false;
            // set keys
            for (var k2 in data[k]) {
              if (!keys.includes(k2)) keys.push(k2);
              if (!eType.empty(data[k][k2])) hasData = true;
            }
            // remove empties like formulas
            if (!hasData) delete data[k];
          }
          // return data
          resolve({
            keys: keys,
            data: data
          });
        } else {
          customRowDelimiter = customRowDelimiter ?? "\r\n";
          customColumnDelimiter = customColumnDelimiter ?? (extension === "tsv" ? "\t" : ",");
          var rows = fileData.split(customRowDelimiter);
          keys = rows[0].split(customColumnDelimiter);
          for (var i = 1; i < rows.length; i++) {
            var column = rows[i];
            if (column) {
              var arr = {};
              column = column.split(customColumnDelimiter);
              for (var i2 = 0; i2 < column.length; i2++) {
                arr[keys[i2]] = column[i2];
              }
              data.push(arr);
            }
          }
          resolve({
            keys: keys,
            data: data
          });
        }
      } catch (err) {
        console.trace(this?.constructor?.name, err);
        reject(undefined);
      }
    });
  }

  //========< getImage async
  static async getImageFromFile(file) {
    try {
      if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
      return await eFile.getImageFromUrl(await eFile.getContentAsDataURL(file));
    } catch (err) {
      console.trace(this?.constructor?.name, err);
      return undefined;
    }
  }
  static async getImageFromUrl(url) {
    return new Promise((resolve, reject) => {
      var image = new Image();
      image.onload = evt => resolve(image);
      image.onerror = evt => reject("error loading image");
      image.src = url;
    });
  }
}