function calculate(str=''){

  let val = [0,1], sum = 0,temp,flag = 0
  for(let i = 2 ; i <=26 ; i++){
    let temp = BigInt(val[i-1] + val[i-2]) 
    val[i] = (temp) 
  }

  for(let i = 0 ; i < str.length ;i++){
      temp = str[i]
      if(temp.match(/[a-z]/i)&&temp===temp.toLowerCase()){
        console.log(temp.charCodeAt(0)-97);
        sum = sum+val[temp.charCodeAt(0)-97]
      }
      else if (temp.match(/[A-Z]/i)&&temp===temp.toUpperCase() ){
        sum = (sum+val[temp.charCodeAt(0)-65])
      }
      else{
        flag++;
        break
      }

  }
  if(flag===0){
    return sum
  }
  else{
    throw ""
  }

}
calculate('MORE')