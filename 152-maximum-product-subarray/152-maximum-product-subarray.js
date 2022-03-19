/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let dp = [],prod = 1
    let currMin = 1, currMax = 1,res = Math.max(...nums)
    for(let i = 0 ; i < nums.length ; i++){
      if(nums[i]===0){
        currMax = 1
        currMin = 1
      }
      let temp = currMax*nums[i]
      currMax = Math.max(nums[i]*currMax,nums[i]*currMin,nums[i])
      currMin = Math.min(temp,nums[i]*currMin,nums[i])
      res = Math.max(currMax,res,currMin)
    }
    return res
};