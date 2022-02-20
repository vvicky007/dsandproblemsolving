/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
     let obj = {},unique = []
  for(let i = 0 ; i < s.length ; i++){
    if(obj[s[i]]===undefined){
      unique.push(s[i])
      obj[s[i]] = 1
    }
    else{
      obj[s[i]]++;
    }
  }
  unique = unique.sort((a,b)=>{
    if(a<b){
      return 1
    }
    else if(a>b){
      return -1
    }
    return 0
  })
  let nextnon 
  let res = '',occ = 0,i = 0
  while(i<unique.length){
    if(occ>=repeatLimit&&obj[unique[i]]!==0){
      nextnon = -1
      for(let j = i+1 ; j < unique.length;j++){
        if(obj[unique[j]]>0){
          nextnon = j
          break
        }
      }
      if(nextnon===-1){
        break
      }
      res = res + unique[nextnon]
      obj[unique[nextnon]]--
      occ = 0
    }

    if(obj[unique[i]]!==0){
      res = res + unique[i]
      obj[unique[i]]--
      occ++
    }
    else{
      i++
      occ = 0
    }

  }
  return res
};