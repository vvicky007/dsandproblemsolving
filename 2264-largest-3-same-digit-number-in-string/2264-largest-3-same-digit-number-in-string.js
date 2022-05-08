/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    


  let itr = 0;
  let flag = 0 ,res = "" ,finalres =[];
  while(itr<num.length){
    if(num[itr]===num[itr+1]){
      let itr2 = itr
      let digit = num[itr]
      let count = 0;
      res = ""
      flag = 0
      for(let i = itr ; i < itr + 3 ; i++){
        if(num[i]===digit){
          res = res+digit
        }
      }
      if(res.length===3){
        finalres.push(res)
      }
    }
    itr++;
   
  }
  if(finalres.length >0){
    finalres = finalres.map((x)=>parseInt(x)).sort((a,b)=>b-a)
    if(finalres[0]===0){
      return "000"
    }
    return finalres[0].toString()
  }
  return ""
};