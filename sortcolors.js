var sortColors = function(nums = []) {

    let lp =0,rp = 1
    while(lp<nums.length&&rp<nums.length){
      if(nums[rp]<nums[lp]){
        [nums[rp],nums[lp]] = [nums[lp],nums[rp]]
        lp++
        rp++
      }
      else{
        rp++
      }
    }
    return nums
};
sortColors([2,0,2,1,1,0,2,1,0])