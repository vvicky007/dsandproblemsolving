
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
  }
 
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
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
middleNode(head)