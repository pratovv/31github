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
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        if(head.next==null)return head;
        ListNode pointer = head;
        while(pointer.next!=null){
            ListNode secondPointer = pointer.next;
            ListNode gcd = new ListNode();
            int gcdVal = findGCD(pointer.val,secondPointer.val);
            gcd.val = gcdVal;
            gcd.next = secondPointer;
            pointer.next = gcd;
            pointer = gcd.next;
        }
        return head;
    }
    private int findGCD(int num1,int num2){
        int response = 0;
        for(int i = 1 ; i <= num1 && i<=num2;i++){
            if(num1 % i == 0 && num2 % i == 0){
                response = i;
            }
        }
        return response;
    }
}
