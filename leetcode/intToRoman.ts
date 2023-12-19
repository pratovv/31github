function intToRoman(num: number): string {
    let response: string = '';
    const notations = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let pos = 0; num > 0; pos++) {
        while (num >= value[pos]) {
            response += notations[pos];
            num -= value[pos]
        }
    }
    return response
};
