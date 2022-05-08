var mySqrt = function(x) {
  if(x===1){
    return 1
  }
  let result ;
  const bSearch = (s,e,target)=>{
    if(s>e){
      return 
    }
    let mid = Math.floor((s+e)/2)
    if(mid*mid === target){
      result = mid
      return
    }
    else if(mid*mid>target){
      return bSearch(s,mid-1,target)
    }
    else{
      result = mid
      return bSearch(mid+1,e,target)
    }

  }
  bSearch(0,x,x)
return result
};
mySqrt(5)