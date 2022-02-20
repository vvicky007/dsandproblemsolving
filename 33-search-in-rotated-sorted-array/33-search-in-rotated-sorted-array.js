/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
  const bsmodified = (arr,s,e,target)=>{
    if(s>e){
      return -1
    }
    let mid = Math.floor((s+e)/2)
    if(arr[mid]===target){
      return mid
    }
    if(arr[s]===target){
      return s
    }
    if(arr[e]===target){
      return e
    }
    if(arr[s]<arr[mid]){
      if(target<arr[mid]&&target>arr[s]){
        return bsmodified(arr,s,mid-1,target)
      }
      else{
        return bsmodified(arr,mid+1,e,target)
      }
    }
    if(arr[mid]<arr[e]){
      if(target>arr[mid]&&target<=arr[e]){
        return bsmodified(arr,mid+1,e,target)
      }
      else{
        return bsmodified(arr,s,mid-1,target)
      }
    }
      return -1
  }
  return bsmodified(nums,0,nums.length-1,target)
};