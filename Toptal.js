function solution(P = [], S = []) {
  // write your code in JavaScript (Node.js 8.9.4)
  let emptySeatIndexes = {}, esCount = 0, carCount = 0;
 S = S.sort((a,b)=>b-a)
  for(let i = 0 ; i < P.length ; i++){
    esCount = esCount + P[i]
  }
  let itr = 0;
  while(itr<S.length){
      
      esCount = esCount - S[itr]
      S[itr] = 0
      carCount++
      itr++;
    if(esCount<=0){
      break;
    }
  }
 
  return carCount
}

// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   let sum = 0
//   for(let i = 0 ; i < A.length ; i++){
//     sum =  sum + A[i]
//   }
//   A = A.sort((a,b)=>b-a)
//   for(let i = 0 ; i < A.length;i++){
    
//   }
//   return A
// }
solution([1,4,1],[1,5,1])