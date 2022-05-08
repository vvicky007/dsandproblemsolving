var isPowerOfFour = function(n) {
  if(n<=0){
      return false
  }
  else{
      let oc = 0,bit
      for(let i = 0 ; i < 32;i+=2){
        bit = n&(1<<i)
        if(bit===n){
          oc++;
        }
      }
      return oc===1
  }
};
console.log(isPowerOfFour(18))