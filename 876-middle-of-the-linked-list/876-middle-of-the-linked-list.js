/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
     let fp = head, sp = head
    while(fp!==null&&fp.next!==null){
      fp = fp.next.next
      sp = sp.next
    }
    return sp
};