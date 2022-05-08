var minimumAbsDifference = function(arr) {
  let temp, min = Infinity, paths = {}
  arr = arr.sort((a,b)=>{
    if(a>b){
      return 1
    }
    else if(a<b){
      return -1
    }
    return 0
  })
  for(let i=0;i<arr.length-1;i++){
      temp = arr[i]-arr[i+1]
      temp = Math.abs(temp)
      min = Math.min(temp,min)
      if(paths[temp]){
          paths[temp]=[...paths[min],[arr[i],arr[i+1]]]
          
      }
      else{
          paths[temp]=[[arr[i],arr[i+1]]]
      }
  }
  return paths[min]
};
minimumAbsDifference([1,3,6,10,15])