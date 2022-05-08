var findMin = function(nums = []) {
    
 const modifiedBs = (start,end)=>{

  if(start>=end){
    return 
  }

  let mid = Math.floor((start+end)/2)

  
  if(nums[mid+1]<nums[mid]){
    return nums[mid+1]
  }
  else if(nums[mid-1]&&nums[mid-1]>nums[mid]){
    return nums[mid]
  }
  else if(nums[mid]>nums[start]){
    return modifiedBs(mid+1,end)
  }
  else{
    return modifiedBs(start,mid-1)
  }

 }

 if(nums[0]<=nums[nums.length-1]){
   return nums[0]
 }
 else{
  return modifiedBs(0,nums.length-1)
 }
};
findMin([3,1,2])