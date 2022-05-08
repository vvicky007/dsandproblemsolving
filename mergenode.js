
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeNodes = function(head) {
    if(!head) return []

    let itr = head, zc = 0,res = null,sum = 0,itr2

    while(itr){
      if(itr.val===0&&itr!==head){
        if(!res){
          res = new ListNode(sum)
          itr2 = res
        }
        else{
          itr2.next = new ListNode(sum)
          itr2 = itr2.next
        }
        sum = 0
      }
      
      sum = sum + itr.val
      itr = itr.next
    }
  
    return res
};