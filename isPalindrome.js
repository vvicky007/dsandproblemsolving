class Node{
  constructor(val){
      this.val = val;
      this.next = null
  }
}
class LinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
  }
  push(val){
      if(this.head===null&&this.tail===null){
          this.head = new Node(val)
          this.tail = this.head
      }
      else{
          let newNode = new Node(val)
         this.tail.next = newNode
         this.tail = newNode
      }
  }
  print(){
      let itr = this.head
      while(itr!==null){
          console.log(itr.val)
          itr = itr.next
      }
  }
  pop(){
      if(this.head!==null&&this.head!==this.tail){
          let itr = this.head

          while(itr.next.next!==null){
              itr = itr.next
          }
          let popedItem = this.tail
          this.tail = itr
          this.tail.next = null;
          if(popedItem!==null){
              return popedItem
          }
      }
      else if(this.head===this.tail){
          let res = this.head
          this.head = null;
          this.tail = this.head
          return res
      }
      else{
          return undefined;
      }
     
       
  }
  middle(){
    if(this.head){
      let fp = this.head,sp = this.head
      let queue = [], stack = []
      while(fp){
        if(fp){
          stack.push(fp.val)
          if(fp.next){
            stack.push(fp.next.val)
          }
        }
        if(sp){
          queue.push(sp.val)
        }
        if(fp.next){
          fp = fp.next.next
          sp = sp.next
        }
        else{
          break
        }
        
      }
      let flag = 0
      let len =  queue.length
      for(let i = 0 ; i < len;i++){
        if(queue.shift()!==stack.pop()){
          flag++;
          break
        }
      }
      return flag===0
    }
  }
}
function recurse(node) {
  if (node === null) {
      return true;
  }
  
  var isPal = recurse(node.next);
  
  if (node.val === head.val) {
      head = head.next;
      return isPal;
  } else {
      return false;
  }
}
var deleteMiddle = function(head) {
  if(!head){
    return []
  }
    let fp = head,sp =null
    while(fp&&fp.next&&fp.next.next){
      if(fp===head){
        sp = head
        fp = fp.next
        continue
      }
      fp = fp.next.next
      sp = sp.next
    }
    if(sp){
      sp.next = sp.next.next
    }
    else{
     
      if(fp.next===null){
        return []
      }
      if(fp.next.next===null){
        fp.next = null
        return fp
      }
    }
    return head
};
var removeElements = function(head, val) {
  if(!head){
      return null
  }
  while(head.val===val){
      head = head.next
  }
  let itr = head,temp
  while(itr){
      if(itr.next){
          if(itr.next.val===val){
              temp = itr.next
              while(temp&&temp.val===val){
                temp = temp.next
              }
              itr.next = temp
              continue
          }
      }
      itr = itr.next
      
  }
  return head
  
};
let sl = new LinkedList()
const stack = []
sl.push(1)
sl.push(2)
sl.push(2)
sl.push(1)
// sl.push(1)
// sl.push(2)
// sl.push(6)



removeElements(sl.head,2)
console.log(sl.middle())
// recurse(sl.head)
// console.log(sl.print())