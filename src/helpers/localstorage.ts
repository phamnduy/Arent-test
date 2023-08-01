export const localStorageHelper = {
  setItem: (key: string, value: any): void => {
    let valueStringify = value;
    if (typeof value === "object") {
      valueStringify = JSON.stringify(value);
    }
    localStorage.setItem(key, valueStringify);
  },
  getItem: (key: string, options?: { isObject: boolean }): any => {
    const value = localStorage.getItem(key);
    if (value && options?.isObject) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  },
  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },
  // TODO: check token expired
  isLogin: (): boolean => {
    return !!localStorageHelper.getItem("accessToken");
  },
};
