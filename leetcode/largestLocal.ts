function largestLocal(grid: number[][]): number[][] {
    let result: number[][] = new Array(grid.length - 2).fill(0).map(x => []);
    for (let i = 0; i < grid.length - 2; i++) {
        for (let k = 0; k < grid.length - 2; k++) {
            result[i][k] = Math.max(...grid.slice(i, i + 3).map(row => row.slice(k, k + 3)).flat());
        }
    }
    return result;
};
