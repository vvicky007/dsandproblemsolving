var groupAnagrams = function(strs = []) {
  
  let  sortedMap = {},itr,res = []
  for(let i = 0 ; i < strs.length;i++){
    itr = strs[i].split('').sort((a,b)=>{
      if(a>b){
        return 1
      }
      else if(a<b){
        return -1
      }
      return 0
    })
    itr = itr.join()
    if(sortedMap[itr]!==undefined){
      sortedMap[itr].push(strs[i])
    }
    else{
      sortedMap[itr] = [strs[i]]
    }

  }
  Object.keys(sortedMap).map((key)=>{
    res.push(sortedMap[key])
  })
return res

};
groupAnagrams(["eat","tea","tan","ate","nat","bat"])