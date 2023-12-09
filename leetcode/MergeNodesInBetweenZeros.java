/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeNodes(ListNode head) {
                ListNode newHead = new ListNode();
        ListNode a = newHead;
        if (head.next == null) return newHead;
        int ans = 0;
        while (head != null && head.next != null) {
            if (head.next.val == 0) {
                // if head.next.val is 0
                // add current head.val to ans
                ans += head.val;
                if (ans != 0) {
                    // creating a new node
                    a.next = new ListNode(ans);
                    a = a.next;
                }
                // reset ans to 0
                ans = 0;
            } else if (head.val != 0) {
                //adding non zereos value to ans
                ans += head.val;
            }
            head = head.next;
        }
        return newHead.next;
    }
}