function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

var pathSum = function(root,targetSum) {
  let path = []
  if(!root){
    return path
  }
  if(root.left===null&&root.right===null){
    if(root.val===targetSum){
      return [[root.val]]
    }
    else{
      return path
    }
  }
  const helper = (root,sum,res)=>{
  
    if(!root){
      return 
    }
    if(root.val===null){
       return 
    }
    res = [...res,root.val]
    if(sum===root.val&&root.left===null&&root.right===null){
      path = [...path,res]
      return 
    }
    
    sum = sum-root.val
    helper(root.left,sum,[...res])
   
    helper(root.right,sum,[...res])
    return 
  }
  
  helper(root,targetSum,[])
  
  return  path
};


let tree = [1,0,1,1,2,0,-1,0,1,-1,0,-1,0,1,0]
console.log(tree.length)
let tr = new TreeNode(tree[0])
tr.left = new TreeNode(tree[1])
tr.right = new TreeNode(tree[2])

tr.left.left = new TreeNode(tree[3])
tr.left.right = new TreeNode(tree[4])

tr.right.left = new TreeNode(tree[5])
tr.right.right = new TreeNode(tree[6])

tr.left.left.left = new TreeNode(tree[7])
tr.left.left.right = new TreeNode(tree[8])

tr.right.right.left = new TreeNode(tree[9])
tr.left.right.right = new TreeNode(tree[10])

tr.right.left.left = new TreeNode(tree[11])
tr.right.left.right = new TreeNode(tree[12])

tr.right.right.left = new TreeNode(tree[13])
tr.right.right.right = new TreeNode(tree[14])



pathSum(tr,2)