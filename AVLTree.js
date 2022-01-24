class Node{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null;
    this.height = 1;
    this.inorder = []
  }
}
let inorder = []
class AvlTree{
  constructor(){
    this.root = null
  }
  leftleft(node){
    let newRoot = node.left
    let right = newRoot.right
    node.left = right
    newRoot.right = node
    newRoot.height = this.getHeight(newRoot)
    return newRoot
  }
  leftRight(node){
    let newRoot = node.left.right
    let right = newRoot.right
    let left = newRoot.left
    newRoot.left = node.left
    node.left = right
    newRoot.left.right = left
    newRoot.right = node
    newRoot.height = this.getHeight(newRoot)
    return newRoot;
  }
  rightright(node){
    let newRoot = node.right
    let newRootLeft = newRoot.left
    newRoot.left= node
    node.right = newRootLeft;
    newRoot.height = this.getHeight(newRoot)
    return newRoot
  }
  rightLeft(node){
    let newRoot = node.right.left
    let left =  newRoot.left
    let right = newRoot.right
    let newRootsRight = node.right
    newRoot.left = node
    newRoot.right = newRootsRight
    newRoot.right.left = right
    node.right = left
    newRoot.height = this.getHeight(newRoot)
    return newRoot
  }
  insertion(root,val){

    if(!root) {
      if(root===this.root){
        this.root= new Node(val)
        this.root.height = this.getHeight(this.root)
        return this.root
      }
      return new Node(val)
    }
    if(val>root.val) {
      root.right = this.insertion(root.right,val)
    }
    else{
      root.left = this.insertion(root.left,val)
    }
    root.height = this.getHeight(root)
    let rheight = root.right?root.right.height:0
    let lheight = root.left?root.left.height:0
    let balaceFactor = lheight-rheight
    if(balaceFactor<-1){
      if(val>root.right.val){
        return this.rightright(root)
      }
      else{
        return this.rightLeft(root)
      }
    }
    if(balaceFactor>1){
      if(val<root.left.val){
        return this.leftleft(root)
      }
      else{
        return this.leftRight(root)
      }
    }
    return root
  }
  levelOrder(){
    if(!this.root){
      return null;
    }
    let queue = []
    queue.push(this.root)
    let itr;
    while(queue.length){
      itr = queue.shift()
      if(itr&&itr.val){
        console.log(itr.val)
        queue.push(itr.left)
        queue.push(itr.right) 
      }
      else{
        console.log('null')
      }
     
    }
    console.log('...ended....')
  }
  getHeight(node){
    if(!node){
      return 0
    }
    let lheight = 1+this.getHeight(node.left)
    let rheight =  1+this.getHeight(node.right)
    node.height = Math.max(lheight,rheight)
    return Math.max(lheight,rheight)

  }
  search(node,val){
   let itr = node
   while(true){
     if(itr){
       if(itr.left&&itr.left.val===val){
        return itr
       }
       if(itr.right && itr.right.val === val){
         return itr;
       }
       if(itr.val===val){
         return itr
       }
       if(val>itr.val){
        itr = itr.right
        continue;
      }
      if(val<itr.val){
        itr = itr.left
      }

     }
     else{
       break;
     }
   }
   return -1;
  }

  delete(node,val){
    if(!node) return null;
    let parentNode = this.search(node,val)
    let toBeDeleted
    if(parentNode.right&&parentNode.right.val === val){
      toBeDeleted = parentNode.right 
      parentNode.right = this.getDeletionNode(toBeDeleted)
    }
    else if(parentNode.left&&parentNode.left.val===val){
      toBeDeleted = parentNode.left
      if(toBeDeleted.right === null && toBeDeleted.left===null){
        parentNode.left = this.getDeletionNode(toBeDeleted)
     }
    }
    else{
      return this.getDeletionNode(parentNode)
    }
    return node;
  }
  inorder(root){
    if(!root) return null;
    this.inorder(root.left)
    inorder.push(root.val)
    this.inorder(root.right)
  }
  getDeletionNode(toBeDeleted){
    if(toBeDeleted.right === null && toBeDeleted.left===null){
      return null
   }
   if(toBeDeleted.left!==null&&toBeDeleted.right!==null)
   {
      this.inorder(this.root)
      let valIndex = inorder.findIndex((x)=>x===toBeDeleted.val)
      let inorderPredecessor = inorder[valIndex-1]
      let parentNodeofPredecessor = this.search(this.root,inorderPredecessor)
      let newRoot = new Node(inorderPredecessor)
      if(parentNodeofPredecessor.left&&parentNodeofPredecessor.left.val===inorderPredecessor){
        parentNodeofPredecessor.left = this.getDeletionNode(parentNodeofPredecessor.left)
      }
      if(parentNodeofPredecessor.right&&parentNodeofPredecessor.right.val===inorderPredecessor){
        parentNodeofPredecessor.right = this.getDeletionNode(parentNodeofPredecessor.left)
      }
      newRoot.left = toBeDeleted.left
      newRoot.right = toBeDeleted.right
      return newRoot
   }
   if(!toBeDeleted.left){
     return toBeDeleted.right
   }
   else{
     return toBeDeleted.left
   }
  }
}
let newAvl = new AvlTree()
newAvl.root = newAvl.insertion(newAvl.root,10)
newAvl.root = newAvl.insertion(newAvl.root,20)
newAvl.root =  newAvl.insertion(newAvl.root,30)
// newAvl.levelOrder()
newAvl.root  = newAvl.insertion(newAvl.root,40)
newAvl.root = newAvl.insertion(newAvl.root,50)
newAvl.root = newAvl.insertion(newAvl.root,25)
newAvl.root = newAvl.insertion(newAvl.root,45)
newAvl.root = newAvl.insertion(newAvl.root,42)
newAvl.root = newAvl.insertion(newAvl.root,41)
newAvl.root = newAvl.insertion(newAvl.root,52)
newAvl.root = newAvl.insertion(newAvl.root,51)
newAvl.inorder(newAvl.root)
newAvl.levelOrder()
console.log(inorder)
newAvl.delete(newAvl.root,45)
newAvl.levelOrder()
// newAvl.delete(newAvl.root)