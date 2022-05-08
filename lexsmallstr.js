var findLexSmallestString = function(s = '', a, b) {
  const obj = {}
  let minLex = s
  const dfs = (s,a,b)=>{
    if(obj[s]) return 
    if(minLex.localeCompare(s)>0) minLex = s
    obj[s] = true
    dfs(add(s,a),a,b)
    dfs(rotate(s,b),a,b)
  }
  const rotate = (s,b)=>{
    let res = ''
    for(let i = 0 ; i < s.length ; i++){
      res = res + s[(i+b)%s.length]
    }
    return res
  }
  const add = (s='',a)=>{
    let temp ,  res = s ;
    for(let i = 1 ; i < s.length;i+=2){
      temp = parseInt(s[i]) 
      temp = (temp + a)%10
      temp = temp.toString()
      res = res.substring(0,i) + temp + res.substring(i+1)
    }
    return res
  }
  dfs(s,a,b)
  return minLex
};
console.log(findLexSmallestString("1234",9,2));
