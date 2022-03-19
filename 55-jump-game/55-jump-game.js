/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
if(nums.length === 1){
  return true
}
  let res = false
  let itr = 0,maxSteps = nums[0],max = 0,flag = 0,maxi = 0
  while(itr<nums.length){
    max = 0
    if(nums[itr] ===0){
      break
    }
    if(maxSteps>=nums.length-1){
      res = true
      break
    }
    for(let i = 1;i<=nums[itr];i++){
      if(nums[itr+i]+i>=nums.length-1){
        flag++;
      }
      if(nums[itr+i]+i>max){
        max = nums[itr+i]+i
        maxi = itr+i
      }
    }
    if(flag ===1){
      res = true
      break
    }
    itr = maxi
    maxSteps = nums[itr] + itr
  }
  
  return res

};