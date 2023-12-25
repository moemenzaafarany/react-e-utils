export class eIf {
  static switch(value = "", defaultValue = null, cases = ["1", "2"], values = ["a", "b"]) {
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
  static multi(defaultValue, ifs = [], values = []) {
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
}