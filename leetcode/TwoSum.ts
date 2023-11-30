function twoSum(nums: number[], target: number): number[] {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums.indexOf(target-nums[i])!==-1){
            if(nums.indexOf(target-nums[i])===i)continue;
            return [i,nums.indexOf(target-nums[i])]
        }
    }
    return []
};