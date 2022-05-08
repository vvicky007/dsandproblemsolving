var myPow = function(x, n) {
  
  const calculatePower=(x,n)=>{
    
    if(x===0) return 0
    if(n===0) return 1
    res = calculatePower(x*x,Math.floor(n/2))
    return n%2===0?res:x*res
  }
  if(n<0){

    return 1/calculatePower(x,n*-1)
  }
  else{
    return calculatePower(x,n)
  }
  
};
myPow(2.00000,10)