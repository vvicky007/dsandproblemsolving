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
  shift(){
    if(!this.head) return ;
    let res = {...this.head}
    this.head = this.head.next
    if(this.head.next===null){
      this.tail = this.head
    }
    res.next = null
    return res
  }
  unShift(val){
    const newHead = new Node(val);
    newHead.next = this.head;
    if(!this.head){
      this.tail = newHead
    }
    this.head = newHead
    return this
  }
  atIndex(index){
    let itrIndex = 0,flag = 0
    let itr = this.head
    while(itr){
      itr = itr.next;
      if(itr){
        itrIndex++;
      }
      if(itrIndex===index){
        flag++;
        break;
      }
    }
    if(flag===1){
      return itr;
    }
    else{
      return -1
    }    
  }
  setItem(val,index)
  {
    
    
    if(index===0 || !this.head){
     return this.unShift(val)
    }
    
    let newNode = new Node(val)
    let itr = this.head,itrIdx = 0
    if(index===1){
      newNode.next = this.head.next
      if(newNode.next===null){
        this.tail = newNode
      }
      this.head.next = newNode
      return this
    }
    while(itr){
      itr = itr.next
      if(itr){
        itrIdx++;
      }
      if(itrIdx===index-1){
        break;
      }
    }
    if(itr){
      newNode.next = itr.next;
      itr.next = newNode
    }
    else{
      this.tail.next = newNode
      this.tail = newNode
    }
    return this
  }
  reverse(){
    if(!this.head) return;
    let itr = this.head
    let newHead,nextNode,currNode;
    newHead = {...this.head}
    newHead.next = null
    
    while(itr.next){
      itr = itr.next
      nextNode = itr.next
      currNode = {...itr}
      currNode.next = newHead
      newHead = currNode
    }
    this.head = newHead
    return this;
  }

}
var pairSum = function(head) {
  let max = 0 
  const recurse = (node)=>{
      if(node === null){
         return max
      }
      max = recurse(node.next)
      max = Math.max(max,node.val+head.val)
      head = head.next
      return max
  }
  recurse(head)
  return max
};
let sl = new LinkedList()
sl.push(5)
sl.push(4)
sl.push(2)
sl.push(1)
pairSum(sl.head)