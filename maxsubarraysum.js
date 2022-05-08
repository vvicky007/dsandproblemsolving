var maxSubArray = function(nums) {
  let sum = 0;
  let maxSum = -Infinity;
  
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0]
  
  for(let i = 0;i<nums.length;i++){
      sum+=nums[i];
      maxSum = Math.max(maxSum,sum);
      if(sum < 0) sum = 0;
  }
  return maxSum;
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])