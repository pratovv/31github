function destCity(paths: string[][]): string {
  let hashMap = new Map<string, string>();

  for (let path of paths) {
    hashMap.set(path[0], path[1]);
  }

  for (let value of hashMap.values()) {
    if (!hashMap.has(value)) {
      return value;
    }
  }
};
