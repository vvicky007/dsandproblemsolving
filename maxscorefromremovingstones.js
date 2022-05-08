var maximumScore = function(a, b, c) {
    let count = 0
    let arr = [a,b,c]
    const check = (arr)=>{
      arr = arr.sort()
      if(arr[1]===0&&arr[0]===0){
        return true
      }
    }
    while(!check(arr)){
      arr = arr.sort((a,b)=>a-b)
      arr[1]--;
      arr[2]--
      count++
    }
    return count
};
maximumScore(1,8,8)
/**
 * 
 */