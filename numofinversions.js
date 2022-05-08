const merge = (arr1 = [],arr2 =[])=>{
  let itr1 = 0, itr2 = 0, res = [],count = 0
  while(itr1<arr1.length&&itr2<arr2.length){
      if(arr1[itr1]<=arr2[itr2]){
          res.push(arr1[itr1])
          itr1++
      }
      else{
          count = count + (arr1.length-itr1)
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
  return {res,count}
}

const mergeSort = (nums=[],start,end,count = 0)=>{
  let left=[],right=[]
  let cunt = 0
  if(start>=end){
    let res = nums.slice(start,end+1)
    return {res,count:cunt}
  }
  
  left =mergeSort([...nums],start,Math.floor((start+end)/2),count)
  right = mergeSort([...nums],Math.floor((start+end)/2)+1,end,count)
  let result  =  merge(left.res,right.res)
  cunt = count + result.count + left.count + right.count
  return {res:result.res,count:cunt}

}


var sortArray = function(nums = []) {
  
  return mergeSort(nums,0,nums.length-1).count
};
console.log(sortArray([0,5,2,3,1]));

