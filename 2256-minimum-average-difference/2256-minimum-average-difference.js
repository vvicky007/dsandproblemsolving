/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
     let left = [], right = [],sum = nums[0]
  left.push(nums[0])
  for(let i = 1 ; i < nums.length ; i++){
    sum = sum + nums[i]
    left[i] = Math.floor(sum/(i+1))
  }
  sum = 0
  let len = nums.length
  right[len-1] = 0
  for(let  i = nums.length-2; i >=0;i--){
    sum = sum + nums[i+1]
    right[i] = Math.floor(sum/(len-i-1))
  }
  let min = Number.MAX_VALUE,mini;
  for(let  i = 0 ; i < nums.length;i++){
    let  currmin= Math.abs(left[i]-right[i])
    if(currmin<min){
      min = currmin
      mini = i
    }
  }
  return mini
};