

  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

var averageOfSubtree = function(root) {
    let count = 0
  const traverse = (root,arr = [])=>{
    if(root === null){
      return 
    }

    let sum = 0
    let tempArr = [...arr]
   
    if(root.left){
      if(root.left.val !== null){
      tempArr = [...tempArr,...traverse(root.left,[root.left.val])] 
      }
    }
 
    if(root.right){
      if(root.right.val!==null){ 
        tempArr = [...tempArr,...traverse(root.right,[root.right.val])]
      }
      
    }
   

    for(let i = 0 ; i < tempArr.length;i++){
      sum = sum+tempArr[i]
    }
    let avg = Math.floor(sum/tempArr.length)
    if(avg===root.val){
      count++;
    }
    return tempArr
  }
  
  console.log(root)
  traverse(root,[root.val])
return count
};
let root = new TreeNode(4)
root.left = new TreeNode(8)
root.right = new TreeNode(5)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(1)
root.right.left = new TreeNode(null)
root.right.right = new TreeNode(6)
averageOfSubtree(root)