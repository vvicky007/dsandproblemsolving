function gcd(a, b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
function findGCD(arr=[])
{
    let result = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        result = gcd(arr[i], result);
 
        if(result == 1)
        {
        return 1;
        }
    }
    return result;
}
var minOperations = function(nums = [], numsDivide = []) {
    
  let total = nums.length
  let gcdArr =  findGCD(numsDivide)
  nums = nums.sort((a,b)=>a-b)
  let count = 0,flag = 0
  while(true){
    let fac = nums.shift()
    count++
    if(gcdArr%fac===0){
      flag = 1
      break
    }
    if(count>total){
      break
    }
  }
  return flag ===0?-1:count-1
};