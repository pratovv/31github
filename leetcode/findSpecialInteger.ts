function findSpecialInteger(arr: number[]): number {
    const map = new Map<number, number>();
    const quantity = arr.length / 4;
    let response = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        (map.get(arr[i]) ?? 0) + 1 > quantity
            ? (response = arr[i])
            : map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    return response;
}
