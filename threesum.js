const used = {}
var threeSum = function(nums) {
   if(nums.length<3){
     return []
   } 
   nums = nums.sort(function(a,b){return a - b})
   let result = [],doesExist,target =0
  
   for(let i = 0 ; i < nums.length-2;i++){
    target = nums[i]!==0?nums[i]*-1:0
     doesExist = findTwoSum(nums,i+1,nums.length-1,target,nums[i])
     if(doesExist.length>0){
       result = [...result,...doesExist]
     }
   }
   return result
};
var findTwoSum = (nums,lp,rp,target,num)=>{
  let result = []
  while(lp<rp){
    if(nums[lp]+nums[rp]===target){
      if(!used[num*nums[lp]*nums[rp]]){
        result = [...result,[num,nums[lp],nums[rp]]]
        used[num*nums[lp]*nums[rp]] = true
      }
      lp++;
      rp--;
      continue
    }
    if(nums[lp]+nums[rp]>target){
      rp--;
      continue;
    }if(nums[lp]+nums[rp]<target){
      lp++;
      
    }
  }
  return result
}
var twoSum = function(nums, target) {
    
  let map = {},diff
  for(let i = 0 ; i < nums.length ; i++){
      diff = target-nums[i]
      if(diff in map){
          return [map[diff],i]
      }
      map[nums[i]] = i
  }
};
console.log(threeSum([0,0,0]))