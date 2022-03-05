/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   if(s.length!==t.length){
    return false
  }
  let obj = {}
  for(let i = 0 ; i < s.length;i++){
    if(obj[s[i]]!==undefined){
      obj[s[i]]++
    }
    else{
      obj[s[i]] = 1
    }
  }
  for(let i = 0 ; i < t.length;i++){
    if(obj[t[i]]===undefined||obj[t[i]]<0){
      return false
    }
    else{
      obj[t[i]]--
    }
  }
  let flag = true
  Object.keys(obj).map((k)=>{
    if(obj[k]<0){
      flag =  false
    }
  })
  return flag
};