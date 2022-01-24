/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 var multiply = function(num1, num2) {
   let result
  let multipliedresults = [],multiplier = 0, remadded = 0,finalresult = 0
  for(let i = 0 ; i < num1.length+num2.length+1;i++){
    multipliedresults[i] = 0
  }
  let itr = num1.length+num2.length,ptr = 0
  for(let i = num1.length-1;i>=0;i--){
      multiplier = num1[i] - '0'
      remadded = 0
      ptr = itr
      for(let j = num2.length-1;j>=0;j--){
        if(j!==0){
          result = ((remadded +(multiplier*(num2[j]-'0')))%10)
        }
        else{
          result = ((remadded +(multiplier*(num2[j]-'0'))))
        }
        remadded = (multiplier*(num2[j]-'0'))+remadded
        remadded = Math.floor(remadded/10)
        if(j!==0){
          multipliedresults =addWithCarr(multipliedresults,ptr,result)
        }
        else{
          multipliedresults =addWithCarr(multipliedresults,ptr,result%10)
          multipliedresults =addWithCarr(multipliedresults,ptr-1,Math.floor(result/10) )
        }
        ptr--
      }
      itr--;
  }
  finalresult = ""
  itr = 0
  while(multipliedresults[itr]===0){
    itr++;
  }
  for(let i = itr; i < multipliedresults.length;i++){
    finalresult = finalresult + multipliedresults[i].toString()
  }
  return finalresult
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 const addWithCarr = (arr,ptr,plus)=>{
  if(ptr<0){
    return arr
  }
  if((arr[ptr] - '0')+plus<10){
    arr[ptr] = (arr[ptr] - '0')+plus
    arr[ptr] = arr[ptr].toString()
    return arr
  }
    let arg = (arr[ptr] - '0')+plus
    arr[ptr] = ((arr[ptr] - '0')+plus)%10
    arr[ptr] = arr[ptr].toString()
    arr = [...addWithCarr(arr,ptr-1,Math.floor(arg/10) )]
  return arr
}
var plusOne = function(digits) {
    let result = [...digits]
    result.unshift(0)
    
    result =  addWithCarr(result,result.length-1,1)
    let itr = 0
    while(result[itr]===0){
        result.shift()
    }
    return result
};
console.log(plusOne(["9"]));
