var findUnsortedSubarray = function(nums) {
  let max = (-Number.MAX_VALUE) * 2 , min = Infinity,flag = 0,lp = 0,rp = nums.length-1
  if(nums.length === 2){
    if(nums[1]<nums[0]){
      return 2
    }
    else{
      return 0
    }
  }
  if(nums.length===1){
    return 0
  }
  for(let i = 1 ; i < nums.length;i++){
    if((nums[i]<nums[i-1])){
      flag++;
    }
    if(flag){
      min = Math.min(nums[i],min)
    }
  }
  flag = 0
  for(let i = nums.length-2 ; i >=0;i--){
    if(nums[i]>nums[i+1]){
      flag++
    }
    if(flag){
      max = Math.max(nums[i],nums[i+1],max)
    }
  }
  for(let i = 0 ; i < nums.length;i++){
    if(nums[i]>min)
    {
      lp = i
      break
    }
  }
  for(let i = nums.length-1 ; i >=0;i--){
    if(nums[i]<max){
      rp = i
      break
    }
  }
  if(max === (-Number.MAX_VALUE) * 2&&min === Infinity){
    return 0
  }
  return rp-lp<0?0:rp-lp+1
};
console.log(findUnsortedSubarray([1,3,2]));
