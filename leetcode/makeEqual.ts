function makeEqual(words: string[]): boolean {
  const map: { [char: string]: number } = {};

  for (const word of words) {
    for (const char of word) {
      map[char] = (map[char] || 0) + 1;
    }
  }

  for (const char in map) {
    if (map[char] % words.length !== 0) return false;
  }

  return true;
}
