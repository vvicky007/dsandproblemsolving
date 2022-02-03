/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0, max = 0
    for(let i = 0 ; i < nums.length;i++){
        if(nums[i]===1){
            res++;
            max = Math.max(res,max)
        }
        else{
            res = 0
        }
    }
    return max
};