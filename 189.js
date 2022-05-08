var rotate = function(nums=[], k) {
    let res = []
    for(let i = 0 ; i < nums.length;i++){
      res[(i+k)%nums.length] = nums[i] 
    }
    return res
};
rotate([1,2,3,4,5,6,7],3)