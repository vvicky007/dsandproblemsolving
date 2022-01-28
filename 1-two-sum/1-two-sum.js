/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
     let map = {},result = [],toBe = 0,ind
    for(let i = 0 ; i < nums.length;i++){
     if(!map[nums[i]]){
       map[nums[i]] = [i]
     }
     else{
      map[nums[i]] = [...map[nums[i]],i]
     }
   }
   for(let i = 0 ; i < nums.length ; i++){
       toBe = target-nums[i]
       ind= map[nums[i]].shift()
       if(map[toBe]&&map[toBe].indexOf(i)===-1){
         if(map[toBe].length>0){
          result.push(i,map[toBe][0])
          map[nums[i]].shift()
          map[toBe].shift()
           break
         }
       }
   }
    return result
};