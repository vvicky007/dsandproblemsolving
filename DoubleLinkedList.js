class Node{
  constructor(val){
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      return this;
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    return this
  }
  display(){
    let itr = this.head
    while(itr){
      console.log(itr.value)
      itr = itr.next
    }
  }
  pop(){
    let poppeditem 
    if(this.tail){
      poppeditem = {...this.tail}
      this.tail = this.tail.prev
      this.tail.next = null
      poppeditem.prev = null
    } 
    return poppeditem
  }
  shift(){
    let res;
    if(this.head){
      res= {...this.head}
      this.head = this.head.next
      res.next = null
      this.head.prev = null;
      if(this.head.next===null){
        this.tail = this.head
      }
    }
    return res
  }
  unshift(val){
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    return this
  }
  get(idx){
    if(this.head){
      let itr = this.head,index = 0;
      while(itr){
        if(index===idx){
          return itr.value
        }
        itr = itr.next
        index++;
      }
    }
    return ;
  }
  insert(idx,val){
    if(idx ===0||!this.head){
      this.unshift(val)
    }
    let index = 0 , itr = this.head,newNode
    newNode = new Node(val)
    while(itr){
      if(idx-1===index){
        newNode.prev = itr
        newNode.next = itr.next
        itr.next = newNode
      }
      itr = itr.next
      index++;
    }
    return this
  }
}
const DL = new DoublyLinkedList()
DL.unshift('1')
DL.push('a')
DL.push('b')
DL.push('c')
DL.push('d')
DL.push('e')
// console.log(DL.shift())
// DL.shift()
// DL.unshift('a')
// DL.unshift('0')
DL.display()
DL.insert(6,'fof')
DL.display()