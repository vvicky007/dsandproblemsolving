var canJump = function(nums=[]) {
    
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
canJump([1,1,2,2,0,1,1])
//[2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6]