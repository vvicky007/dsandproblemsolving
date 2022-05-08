var subarraySum = function(nums=[], k) {
    let lp = 0 , rp = 0,sum = nums[0],count = 0
    while(lp<=rp&&lp<nums.length&&rp<nums.length){
      if(sum===k){
        count++
      }
     if(sum>sum+nums[rp]){
      sum = sum-nums[lp]
       lp++;
       rp++;
       sum = sum + nums[rp]
       continue
     }
      if(sum>k){
        sum = sum-nums[lp]
        lp++
      }
      else{
        rp++;
        sum = sum+nums[rp]
      }
    }
    return count
};
subarraySum([-1,-1,1],0)