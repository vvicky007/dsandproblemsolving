var findKDistantIndices = function(nums =[], key, k) {
  let indexes = [],res={}
  for(let i = 0 ; i < nums.length;i++){
    if(nums[i]===key){
      indexes.push(i)
    }
  }
  for(let i = 0 ; i <indexes.length;i++){
    
    
      let temp = k,itr = indexes[i]
      while(temp>=0&&itr>=0){
        res[itr] = true
        temp--;
        itr--;
      }
      temp = 0,itr = indexes[i]
      while(temp<=k&&itr<nums.length){
        res[itr] = true
        temp++;
        itr++;
      }
    }
   
    
    
  
  
    return Object.keys(res).map((x)=>parseInt(x))
};
console.log(findKDistantIndices([3,4,9,1,3,9,5],9,1));
