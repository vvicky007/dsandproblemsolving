function merge(arr1 = [],arr2 = []){

  let l1 = arr1.length, l2 = arr2.length
  let itr1 = 0, itr2 = 0, res = []
  while(itr1<l1||itr2<l2){
    if( itr1<l1&& arr1[itr1]<arr2[itr2]){
      res.push(arr1[itr1])
      itr1++
      continue
    }
  
    if(itr2<l2)
    {
      res.push(arr2[itr2])
      itr2++
    }
    
  }
 
  return res

}

merge([3,9,12],[2,3,14,18])