class Node{
  constructor(val){
    this.val = val
    this.left = null
    this.right = null;
  }
}
class Bst{
  constructor(){
    this.root = null
  }
  insert(val){
   
      let itr = this.root
      if(!itr){
        this.root = new Node(val)
        return this;
      }
      while(true){
        if(val>itr.val){
          if(itr.right){
            itr = itr.right
          }
          else{
            itr.right = new Node(val)
            break;
          }
        }
        else{
          if(itr.left){
            itr = itr.left
          }
          else{
            itr.left = new Node(val);
            break
          }
        }
      }
    return this
  }
  search(val){
    if(!this.root) return -1;
    let itr = this.root
    while(itr){
      if(itr.val===val){
        return itr
      }
      if(val>itr.val){
        itr = itr.right
      }
      else{
        itr = itr.left
      }
    }
    return -1;
  }
  bfs(){
    let visited = [],queue = []
    let itr = this.root,node
    queue.push(itr)
    if(this.root){
      while(queue.length){
        node = queue.shift()
        visited.push(node)
        if(node.left){
          queue.push(node.left)
        }
        if(node.right){
          queue.push(node.right)
        }
      }
    }
    return visited
  }
  preorder(){
    let data = []
    function traverse(node){
      data.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  postorder(){
    let data = []
    function traverse(node){
      
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data
  }
  path(root,val){
    let doesExist = false, arr = []
    if(root&&root.val === val){
      doesExist = true;
      arr.push(val)
      return {
        arr,doesExist
      }
    }
    if(!root){
      return {
        arr,doesExist
      }
    }
    arr = [...arr,root.val]
    if(!doesExist){
      let result = this.path(root.left,val)
      if(result.doesExist){
        let tempArr = result.arr
        doesExist = result.doesExist
        arr = [...arr,...tempArr]
      }
    }
    if(!doesExist){
      
      let result = this.path(root.right,val)
      if(result.doesExist){
        let tempArr = result.arr
        doesExist = true
        arr = [...arr,...tempArr]
      }
    }
    return {
      arr,doesExist
    }
  }
  pathToleet(root,p,q){
    if(!root||root.val===p||root.val===q) return root;
    const left = this.pathToleet(root.left,p,q)
    const right = this.pathToleet(root.right,p,q)
    return left&&right?root:left||right
  }
}
let postIndex = 7
function buildpostin(inorder,postorder){
 let rootIndex = -1
  for(let j = postorder.length-1;j>=0;j--){
   if(inorder.includes(postorder[j])){
    rootIndex = inorder.findIndex((x)=>x===postorder[j])
    break;
   }
 }
 if(inorder.length===1)
 {
   return new Node(inorder[0])
 }
 let root;
 if(rootIndex!==-1){

  root = new Node(inorder[rootIndex])
 if(rootIndex===0){
   root.right = buildpostin(inorder.slice(1),postorder)
   return root
 }
 else{
  root.left = buildpostin(inorder.slice(0,rootIndex),postorder)
 }
 if(rootIndex===inorder.length-1)
 {
  return root;
 }
 else{
  root.right = buildpostin(inorder.slice(rootIndex+1,inorder.length),postorder)
 }
  return root;
}
else{
  return null;
}
}
function build(inorder,pre){
let rootIndex = pre.findIndex((x)=> inorder.includes(x))
let root ;
if(inorder.length===1){
  root = new Node(inorder[0])
  return root;
}
if(rootIndex!==-1){
  root = new Node(pre[rootIndex])
  
  let inorderRoot = inorder.findIndex((x)=>x===pre[rootIndex])
  
  pre.splice(rootIndex,1)
  root.left = build(inorder.slice(0,inorderRoot),pre)
  if(inorderRoot+1===inorder.length){
    return root
  }
  root.right = build(inorder.slice(inorderRoot+1,inorder.length),pre)
  return root;
}
else{
  return root;
}
// root.left = getRoot()
}
function printInorder(node)
{
    if (node == null)
            return;
  
    // First recur on left child
    printInorder(node.left);
 
    // Then print the data of node
    console.log(node.val);
 
    // Now recur on right child
    printInorder(node.right);
}

function levelOrder(root){
  let levelQueue = []
  levelQueue.push(root)
  while(levelQueue.length!==0){
    let tempNode = levelQueue.shift()
    if(tempNode){
      console.log(tempNode.val)
    levelQueue.push(tempNode.left)
    levelQueue.push(tempNode.right)
    }
    else{
      console.log('null')
    }
  
  }
}
function buildPostorder(inorder,postorder,start,end){
  
  if(start>end){
    return null;
  }
  if(start===end){
    return new Node(inorder[start])
  }
  let reverse = [...postorder]
  let rootval = reverse.reverse().find((x)=>inorder.includes(x))
  let rootIndex = -1
  for(let j = start;j<=end;j++){
    if(inorder[j]===rootval){
      rootIndex = j;
      break;
    }
  }
  let root = new Node(inorder[rootIndex])
  root.left = buildPostorder(inorder,postorder,0,rootIndex-1)
  root.rigth = buildPostorder(inorder,postorder,rootIndex+1,inorder.length-1)
  return root;
}
function buildfromPostPre(preoder,postorder){
  if(postorder.length===1){
    return new Node(postorder[0])
  }

  let root = null;
  if(postorder.length===0||preoder.length===0){
    return root;
  }
  let rootVal = preoder[0]
  let leftPostIndex = postorder.findIndex((x)=>x===preoder[1])  
  let preIndex =  -1
  
  if(leftPostIndex!==-1){
    let leftPostOrder = postorder.slice(0,leftPostIndex+1)
    let righPostOrder = postorder.slice(leftPostIndex+1,postorder.length-1)
    
    for(var j = 1 ; j < preoder.length;j++){
      if(!leftPostOrder.includes(preoder[j])){
        
        break;
      }
    }
    preIndex = j
    let leftPreorder = preoder.slice(1,preIndex)
    let rightPreorder = preoder.slice(preIndex,preoder.length)
    root = new Node(rootVal)
    root.left = buildfromPostPre(leftPreorder,leftPostOrder)
    root.right = buildfromPostPre(rightPreorder,righPostOrder)
    return root;
  }
  else{
    return root;
  }
}

function getHeight(root){
  let lheight = 0,rheight = 0 ;
  if(!root) return 0;
  lheight = 1 + getHeight(root.left)
  rheight = 1 + getHeight(root.right)
  if(lheight>rheight) return lheight
  else return rheight
}
const bst =  new Bst()
console.log(bst.insert(10))
console.log(bst.insert(2))
console.log(bst.insert(11))
console.log(bst.insert(1))
console.log(bst.insert(13))
console.log(bst.insert(8))
console.log(bst.search(11))
console.log(bst.path(bst.root,8))
levelOrder(bst.root)
console.log(bst.pathToleet(bst.root,8,13))
// console.log(getHeight(newroot))