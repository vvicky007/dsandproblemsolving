/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  const traverseAll = (x) =>{
   let count = 0
   while(x){
      if(x%2===1){
        count++;
        x = x-1
        if(x===0){
          break
        }
      }
      x = x/2
      count++;
   }
   return count
  }
 
  return traverseAll(num)
};