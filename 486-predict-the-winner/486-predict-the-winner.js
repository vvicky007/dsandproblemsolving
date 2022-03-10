/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const dp = []

  let temp;
  for(let i = 1 ; i <= nums.length ; i++){
    temp = new Array(nums.length+1).fill([0,0],1,nums.length+1)
    dp[i] =  temp
    temp = []
  }
  for(let i = 1 ; i <= nums.length ; i++){
    dp[i][i] =  [nums[i-1],0]
  }
  let k = nums.length-1
  while(k>0){
    for(let i = 1 ; i <= k ; i++){
      let j = i + (nums.length-k)
        if(nums[j-1]+dp[i][j-1][1]>nums[i-1]+dp[i+1][j][1]){
          dp[i][j] = [nums[j-1]+dp[i][j-1][1],dp[i][j-1][0]]
        }
        else{
          dp[i][j] = [nums[i-1]+dp[i+1][j][1],dp[i+1][j][0]]
        }
  }
  
  k--;
  }
  
  return dp[1][nums.length][0]>=dp[1][nums.length][1]
};