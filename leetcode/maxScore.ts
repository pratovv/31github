function maxScore(s: string): number {
  let result = 0;
  for (let i = 0; i < s.length - 1; i++) {
    let currentScore = 0;
    for (let j = 0; j <= i; j++) {
      if (s[j] === '0') {
        currentScore++;
      }
    }

    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === '1') {
        currentScore++;
      }
    }

    result = Math.max(result, currentScore);
  }

  return result;
};
