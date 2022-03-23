/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums = [], k) {
   if (k >= nums.length ) {
        k = k % nums.length
    }
    if ( k === 0 ) {
        return nums
    }
    nums.unshift(...nums.slice(-k))
    nums.splice(-k)
    return nums
};