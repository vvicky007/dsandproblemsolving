/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums = []) {
    
    let obj = {}
    for(let i = 0 ; i < nums.length ; i++ ){
        if(obj[nums[i]]!==undefined){
            return true
        }
        else{
            obj[nums[i]] = true
        }
    }
    return false
    
};