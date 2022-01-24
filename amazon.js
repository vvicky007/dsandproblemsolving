const isGreater = (a,b)=>{
  let splittedA = a.split(" ")
  let splittedB = b.split(" ")
  let greater,flag = 0 ;
  for(let i = 1 ; i< Math.min(splittedA.length,splittedB.length);i++){
      if(splittedA[i]>splittedB[i]){
          flag++;
          greater = splittedA
          break;
      }
       if(splittedB[i]>splittedA[i]){
          flag++;
          greater = splittedB
          break;
      }
  }
  if(flag===0){
      if(splittedA[0]>=splittedB[0]){
          greater = splittedA
      }
      else{
          greater = splittedB
      }
  }
  if(greater===splittedA){
      return 1
  }
  else{
      return -1
  }
}

function sortOrders(orderList) {
  // Write your code here
  let nonprime = [], prime =[]
  let result = [], splitted = []
  for(let i = 0 ; i <  orderList.length ;i++){
      splitted = orderList[i].split(" ")
      if(/^\d+$/.test(splitted[1])){
          nonprime.push(orderList[i])
      }
      else{
        prime.push(orderList[i])
      }
  }
  prime.sort((a,b)=>isGreater(a,b))
  result = [...prime,...nonprime]
return result
}
console.log(sortOrders(["t2 13 121 98","r1 box ape bit",
"b4 xi me nu",
"br8 eat nim did",
"w1 has uni gry",
"f3 52 54 31"]));
sortOrders(["mi2 jog mid pet","wz3 34 54 398","a1 alps cow bar","x4 45 21 7"])