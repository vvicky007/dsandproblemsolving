var longestMountain = function(arr) {
    let isininc = false, isindec = false,res = 0,len = 0
    for(let i = 0 ; i < arr.length-1 ; i++){
      if(arr[i+1]>arr[i]){
        
        if(isindec){
          isininc = false
          isindec = false
          len = 0
          if(arr[i+1]>arr[i]){
            len = 1
            isininc = true
          }
        }else{
          isininc = true
          len++;
        }
        
      }
      if(arr[i+1]<arr[i]){
        if(isininc){
          len++;
          isindec = true
        }
        else{
          isininc = false
          isindec = false
          len = 0
          // if(arr[i+2]&&arr[i+2]<arr[i+1]){
          //   len = 1
          // }
        }
      }
      if(arr[i+1]===arr[i]){
        isininc = false
          isindec = false
          len = 0
      }
      if(isininc&&isindec&&len+1>=3){
        res = Math.max(res,len+1)
      }
      
    }
    return res
};
// longestMountain([2,1,4,7,3,2,5])
longestMountain([875,884,239,731,723,685])