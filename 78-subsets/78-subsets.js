/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
       let subgenlimit = nums.length
    subgenlimit = 2 << nums.length-1
    let result = [], temp = [], bit
    for(let i = 0 ; i < subgenlimit;i++){
      temp = []
      for(let j = 0 ; j < nums.length;j++){
        let x =(1<<( nums.length-j-1))
        bit = i & (1<<( nums.length-j-1))
        if(bit>0){
          temp = [...temp,nums[nums.length-j-1]]
        }
      }
      result = [...result,temp]
    }
    return result
};