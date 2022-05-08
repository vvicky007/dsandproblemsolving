var numberOfSubarrays = function(nums = [], k) {
let counter = 0;
  let itr = 0, count = 0,stack = [];

  while(itr<nums.length){
    if(nums[itr]%2!==0){
      count++;
      stack.push(itr)
    }
    if(count===k){
      
      let end = stack[stack.length-1]
      
      let start = stack[0]
     
      let s = start-1,e = end+1
      while(s>=0){
        if(nums[s]%2===1){
          break
        }
        s--
      }
      if(s<0){
        s = 0
      }
      if(nums[s]%2!==0){
        s++;
      }
      if(s>start)
      {
        s = start
      }
      while(e<=nums.length){
        if(nums[e]%2===1){
          break
        }
        e++;
      }
      if(e>nums.length-1){
        e = nums.length-1
      }
      if(nums[e]%2!==0){
        e--;
      }
      if(e<end){
        e =end
      }
      stack.shift()
      count--;
      let totalsub = (e-s-(end-start+1)+2)
      counter = counter + ((totalsub*(totalsub+1))/2)
      counter = counter - ((start-s)*(start-s+1))/2
      counter = counter - ((e-end)*(e-end+1))/2
      itr = e
    }
    itr++;

  }

  return counter
};
numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2)