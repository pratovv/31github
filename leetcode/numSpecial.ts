function numSpecial(mat: number[][]): number {
    let response = 0;
    for(let i = 0 ; i < mat.length;i++){
        const row: number = mat[i].reduce((acc,cum)=>acc+cum)
        for(let j = 0; j < mat[i].length;j++){
            const col: number = mat.reduce((sum,row)=>sum+=row[j],0)
            if(mat[i][j]===1 && row ===1 && col === 1){
                response++;                
            }
        }
    }
    return response;
};
