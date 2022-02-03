/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums = nums.sort((a,b)=>{
        if(a&1>0){
            if(b&1>0){
                return 0
            }
            return 1
        }
        else{
            if(b&1>0){
                return -1
            }
            return 0
        }
    })
    return nums
};