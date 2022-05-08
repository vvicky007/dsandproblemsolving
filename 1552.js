var maxDistance = function(position = [], m) {
  let arr = [...position]
  
  
  arr = arr.sort((a,b)=>{
    if(a>b){
      return 1
    }
    else if(a<b){
      return -1
    }
    else{
      return 0
    }
  })
  let l = arr[0],r = arr[arr.length-1]
  let obj = {}
  for(let i = 0 ; i < arr.length ; i++){
    obj[arr[i]] = true
  }
  let min = r-l
  function canBirdsFit(min){
    let b = 1
    let location = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
      if(arr[i]-location>=min){
        location = arr[i]
        b++;
        if(b===m){
          return true
        }
      }
    }
    return false
  }
  function modifiedSearch(l,r){
    let mid ,right,left;
   
    if(l>r){
      return
    }
    mid = Math.floor((r+l)/2)
    if(canBirdsFit(mid)){
      min = mid
      l = mid+1
      modifiedSearch(l,r)
    }
    else{
      r = mid-1
      modifiedSearch(l,r)
    }

  }
  modifiedSearch(0,r-l)
  return min
};

maxDistance([79,74,57,22],4)