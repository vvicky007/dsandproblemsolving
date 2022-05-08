var countEven = function(num) {
  if(num===1){
    return 0
  }
  const sumOfDigits = (num)=>{
    let sum = 0

    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
  }
  return sum
  }
  console.log(sumOfDigits(num));
  if(sumOfDigits(num)%2===0){
    if(num%2===0){
      return num/2
    }
    else{
      if(num>1){
        return (num-1)/2
      }
      else{
        return 0
      }
    }
  }
  else{
    return (num-2)/2
  }
};

// var countEven = function(num) {
//  let numoften= Math.flo
// };
countEven(30)