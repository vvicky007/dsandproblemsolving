/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let path = 0
  const traverse=(root,targetSum)=>{
    if(!root){
      return 
    }
    helper(root,targetSum)
    traverse(root.left,targetSum)
    traverse(root.right,targetSum)
    
    return path
  }
  const helper = (root,sum)=>{
    if(!root){
      return
    }
    if(root.val===null){
      return
    }
    if(sum===root.val){
      path++ 
    }
    sum = sum-root.val
    helper(root.left,sum)
    helper(root.right,sum)
  }
  traverse(root,targetSum)   
  return  path 
};
