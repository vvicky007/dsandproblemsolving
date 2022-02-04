/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
   let obj = {},lp = 0 , rp = 0  ,cf = 0, subindexes = [], min = Infinity, indexesTraversed = [],res = ''
  let visited = {}
  for(let i = 0 ; i < t.length;i++){
    if(obj[t[i]]){
      obj[t[i]]++
    }
    else{
      obj[t[i]] = 1
    }
    
  }
  const areEqual = (v,o)=>{

  }
for(let i = 0 ; i < s.length;i++){
  if(visited[s[i]]!==undefined&&obj[s[i]]!==undefined){
    visited[s[i]]++
  }
  else{
    if(obj[s[i]]!==undefined){
      visited[s[i]] = 1
    }
  }
  if(visited[s[i]]&&obj[s[i]]&&obj[s[i]]>=visited[s[i]])
  {
    cf++;
  }
  if(cf===t.length){
    
    while(obj[s[lp]]===undefined||(lp<s.length&&visited[s[lp]]>obj[s[lp]]&&lp<i)){
      if(visited[s[lp]]!==undefined){
        visited[s[lp]]--
      }
      lp++;
    }
    if(i-lp+1<min){
      min = i-lp+1
      res = s.substring(lp,i+1)
    }
    visited[s[lp]]--
    lp++;
    cf--
    
  }
}
    
 return res
};