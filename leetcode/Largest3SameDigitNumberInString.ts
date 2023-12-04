function largestGoodInteger(num: string): string {
    const matches = new Set([
        '999', '888', '777', '666', '555', '444', '333', '222', '111', '000'
    ])
    for(const match of matches) {
        if (num.includes(match)) {
            return match;
        } 
    }
    return '';
};