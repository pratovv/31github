function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const set: Set<number> = new Set<number>();
    let q = 0;

    const updateCount = (char) => {
        if (set.has(char)) {
            q++;
        } else {
            set.add(char);
        }
    };
    
    const response = A.map((_,i)=>{
        updateCount(A[i])
        updateCount(B[i])
    return q
    })

    return response;
};
