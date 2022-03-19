/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
if(nums.length===1){
  return nums[0]
}
if(nums.length === 2){
  return Math.max(nums[0],nums[1])
}

let starting = 0, max =[nums[0],Math.max(nums[0],nums[1])]
for(let i = 2 ; i <nums.length;i++){
  max[i] = Math.max(nums[i] + max[i-2],max[i-1]) 
}
return max[nums.length-1]
};