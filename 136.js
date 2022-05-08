
  var singleNumber = function(nums) {
    let obj = {},singlenum
  for(let i = 0 ; i < nums.length ; i++ ){
      if(obj[nums[i]]!==undefined){
          singlenum = -1
          obj[nums[i]] = true
          continue
      }
      else{
          obj[nums[i]] = true
          singlenum = nums[i]
      }
  }
  return singlenum
};
singleNumber([2,2,1])