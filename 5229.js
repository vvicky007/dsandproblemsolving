var divisorSubstrings = function(num = 0, k) {
    
  let numStr = num.toString()

  let arr = [],res = 0
  for(let i = 0 ; i < numStr.length;i++){
    arr.push(numStr[i])
    if(arr.length === k){
      let n = arr.join('')
      n  = parseInt(n)
      if(num%n===0){
        res++;
      }
      arr.shift()
    }
  }
  return res
};
divisorSubstrings(430043,2)