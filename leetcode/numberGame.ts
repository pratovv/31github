function numberGame(nums: number[]): number[] {
    nums.sort(( a , b )=> a - b);
    for(let i = 0, j = 1 ; i < nums.length; i+= 2,j+=2){
        const first = nums[i];
        nums[i] = nums[j]
        nums[j] = first;
    }
    return nums;
};
