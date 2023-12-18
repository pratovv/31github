function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    return [
        nums1.reduce((acc,cum)=>nums2.includes(cum)?acc+=1:acc,0),
        nums2.reduce((acc,cum)=>nums1.includes(cum)?acc+=1:acc,0)
    ]
};
