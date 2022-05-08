const merge = (arr1 = [],arr2 =[])=>{
  let itr1 = 0, itr2 = 0, res = []
  while(itr1<arr1.length&&itr2<arr2.length){
      if(arr1[itr1]<arr2[itr2]){
          res.push(arr1[itr1])
          itr1++
      }
      else{
          res.push(arr2[itr2])
          itr2++
      }
  }
  while(itr1<arr1.length){
      res.push(arr1[itr1])
      itr1++
  }
  while(itr2<arr2.length){
      res.push(arr2[itr2])
      itr2++
  }
  return res
}

const mergeSort = (nums=[],start,end)=>{
  let left=[],right=[]
  if(start>=end){
    let res = nums.slice(start,end+1)
    return res
  }
  left =mergeSort([...nums],start,Math.floor((start+end)/2))
  right = mergeSort([...nums],Math.floor((start+end)/2)+1,end)
  return merge(left,right)

}


var sortArray = function(nums = []) {
   return mergeSort(nums,0,nums.length-1)
};
sortArray([5,1,1,2,0,0])