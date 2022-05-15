/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
       if(nums.length === 1){
      return 0
    }
    let leftSum = [] , rightSum = [],count = 0
    leftSum.push(nums[0])
    rightSum[nums.length-1] = nums[nums.length-1]
    for(let i = 1 ; i < nums.length ; i++){
      leftSum[i] = leftSum[i-1] + nums[i]
    }
    for(let i = nums.length-2; i>=0;i--){
      rightSum[i] = rightSum[i+1] + nums[i]
    }
    for(let i = 0 ; i < nums.length-1;i++){
      if(leftSum[i]>=rightSum[i]-nums[i]){
        count++;
      }
    }
    return count
};