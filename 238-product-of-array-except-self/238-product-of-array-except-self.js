/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1 , zeroExists = false,zc = 0
    for(let i = 0 ; i < nums.length;i++){
      if(nums[i]!==0){
        product = product*nums[i]
      }
      else{
        zc++;
        zeroExists = true
      }
    }
    for(let i = 0 ; i < nums.length;i++){
      if(zc===0){
        nums[i] = Math.floor(product/nums[i]) 
      }
      else{
        if(zc ===1){
          if(nums[i]===0){
            nums[i] = product
          }
          else{
            nums[i] = 0
          }
        }
      }
    }
   if(zc>1){
     nums = nums.map((n)=>0)
   }
    return nums
};