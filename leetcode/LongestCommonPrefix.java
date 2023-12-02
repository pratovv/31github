class Solution {
    public String longestCommonPrefix(String[] strs) {
    StringBuilder pre = new StringBuilder(strs[0]);
    for (int i = 1; i < strs.length; i++) {
        for (int j = 0; j < pre.length(); j++) {
            if (j >= strs[i].length() || pre.charAt(j) != strs[i].charAt(j)) {
                pre.delete(j, pre.length());
                break;
            }
        }
    }
    return pre.toString();
    }
}