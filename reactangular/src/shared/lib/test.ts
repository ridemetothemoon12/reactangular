class LocalStorage {
  get(key: string | string[]) {
    const getLocalData = (key: string) => {
      const parsedKey = key.split(".");
      let targetValue = "";
      try {
        const item = localStorage.getItem(parsedKey[0]) ?? "";
        const value = JSON.parse(item);
        if (parsedKey.length === 1) targetValue = value;
        for (let i = 1; i < parsedKey.length; i++) {
          targetValue = value[parsedKey[i]] ?? "";
        }
      } catch (error) {
        targetValue = localStorage.getItem(key) ?? "";
      }
      if (typeof targetValue === "object") return "";
      return targetValue;
    };
    if (Array.isArray(key)) {
      return key.map((k) => getLocalData(k));
    } else {
      return getLocalData(key);
    }
  }
  set(key: string, value: string | object) {
    localStorage.setItem(
      key,
      typeof value === "string" ? value : JSON.stringify(value)
    );
  }
}
const lStorage = new LocalStorage();
export default lStorage;
