function transpose(matrix: number[][]): number[][] {
    const response:number[][] = [];
    for(let i = 0 ; i < matrix[0].length; i++){
        let arr = []
        for( let j = 0 ; j < matrix.length; j++){
            arr.push(matrix[j][i])
        }
        response.push(arr);
    }
    return response;
};
// [0,1] , [1,2]
// [1,4]
