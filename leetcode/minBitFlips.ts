function minBitFlips(start: number, goal: number): number {
    let startBinary = start.toString(2)
    let goalBinary = goal.toString(2);
    const maxLength = Math.max(startBinary.length, goalBinary.length);

    startBinary = startBinary.padStart(maxLength, '0');
    goalBinary = goalBinary.padStart(maxLength, '0');

    let response = 0;

    for(let i = 0 ; i < startBinary.length;i++){
        if(startBinary[i] !== goalBinary[i]){
            response++
        }
    }

    return response;
};
