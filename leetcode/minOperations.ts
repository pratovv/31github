function minOperations(s: string): number {
    let change0 = 0
    let change1 = 0

    for (let i = 0; i < s.length; i++) {
      const candidate = s[i]
      
      const expected0 = i % 2 === 0 ? '0' : '1'
      if (expected0 !== candidate) {
        change0 += 1
      }

      const expected1 = i % 2 === 0 ? '1' : '0'
      if (expected1 !== candidate) {
        change1 += 1
      }

    }

    return Math.min(change0, change1)
};
