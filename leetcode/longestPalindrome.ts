function longestPalindrome(s: string): string {
       let ret = '';
    const expandPalindrome = (idx:number):void => {
        // odd case
        let left = idx, 
			right = idx;
        while(left >=0 && right<s.length && s[left]===s[right]) {
            (right -left +1) > ret.length && (ret = s.substring(left,right+1))
            left--;
            right++;
        }
		
        // reset for even case
        left = idx;
        right = idx+1
        while(left >=0 && right<s.length && s[left]===s[right]) {
            (right - left +1) > ret.length && (ret = s.substring(left,right+1))
            left--;
            right++;
        }
    }
    for(let i=0; i<s.length; i++) {
        expandPalindrome(i)
    }
    return ret;
}
