var convertToTitle = function(columnNumber) {
  let result = ''
  while(columnNumber!==0){
     if(columnNumber%26===0){
       result = result + "Z"
     }
     else{
      result = result + String.fromCharCode((columnNumber%26)+64)
     }
     if(columnNumber%26){
      columnNumber = columnNumber - columnNumber%26
     }
     else{
      columnNumber = columnNumber - 26
     }
     columnNumber = Math.floor(columnNumber/26)
  }
  let newString = "";
  for (var i = result.length - 1; i >= 0; i--) {
      newString += result[i];
  }
  return newString;
};
let result = 0
var titleToNumber = function(columnTitle) {
    
     
  let sum = 0
  for (let i = 0; i < columnTitle.length; i++) {
      const exp = columnTitle.length - 1 - i
      sum += (columnTitle[i].charCodeAt(0) - 64) * (26 ** exp)
  }
  
  return sum
};

const getValue = (str)=>{
    if(str.length===1){
        return str[str.length-1].charCodeAt(0)-64
    }
    if(str.length===0){
      return 0
    }
    if(str.length===2){
      return 26*(str[0].charCodeAt(0)-64) + str[1].charCodeAt(0)-64
    }
    let tobeadded = str[str.length-1]
    result = result +(tobeadded.charCodeAt(0)-64)+ 26*getValue(str.substring(0,str.length-1))
    return result
}
titleToNumber("AAA")