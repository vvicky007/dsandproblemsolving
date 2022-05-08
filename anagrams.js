var minSteps = function(s='', t='') {

  let obj1 = {}, obj2 = {}
  for(let i = 0; i < s.length;i++){
    if(obj1[s[i]]===undefined){
      obj1[s[i]] = 1
    }
    else{
      obj1[s[i]]++
    }
  }
  for(let i = 0; i < t.length;i++){
    if(obj2[t[i]]===undefined){
      obj2[t[i]] = 1
    }
    else{
      obj2[t[i]]++
    }
  }
  let count = 0
  Object.keys(obj1).map((k)=>{

    if(obj2[k]===undefined){
      count = count + obj1[k]
      delete obj1[k]
    }
    else if(obj1[k]===obj2[k]){
      delete obj1[k]
      delete obj2[k]
    }
    else{
     if(obj1[k]>obj2[k]){
        count = count + obj1[k] - obj2[k]
        obj1[k] = obj1[k] - obj2[k]
        delete obj2[k]
      }
    }

  })
  Object.keys(obj2).map((k)=>{

    if(obj1[k]===undefined){
      count = count + obj2[k]
      delete obj2[k]
    }
    else if(obj1[k]===obj2[k]){
      delete obj1[k]
      delete obj2[k]
    }
    else{
     
      if(obj2[k]>obj1[k]){
        count = count + obj2[k] - obj1[k]
        obj2[k] = obj2[k] - obj1[k]
        delete obj1[k]
      }
    }

  })
return count
};
minSteps("cotxazilut",
"nahrrmcchxwrieqqdwdpneitkxgnt")