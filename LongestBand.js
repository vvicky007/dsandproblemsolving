var longestConsecutive = function(nums) {
  let obj = {}
  for(let i = 0 ; i < nums.length;i++){
      if(!obj[nums[i]]){
          obj[nums[i]] = nums[i]-1
      }
      
  }
  let longest = 0,len = 0,itr
  if(Object.keys(obj).length===1){
    return 1
  }
  for(let i = 0 ; i < nums.length ; i++){
    len = 0
    if(obj[nums[i]-1]===undefined){
      itr = nums[i]
      while(obj[itr]!==undefined){
        itr++;
        len++
      }
      longest = Math.max(longest,len)
    }

    
  }
return longest
};

console.log(longestConsecutive([1,2,0,1]));
