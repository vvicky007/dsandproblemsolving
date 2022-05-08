var removeDigit = function(number = '', digit) {
    
  let x = number, arr = [];
  for(let i = 0 ; i < number.length;i++){
    if(number[i]===digit){
      arr.push(x.substring(0,i)+x.substring(i+1,x.length))
    }
  }
  arr = arr.sort((a,b)=>parseInt(b)-parseInt(a))
    return  arr[0]
};
removeDigit("2918247756338836829948259212259612948986573547572133445495998236287245768816987491842618661"
,"9")