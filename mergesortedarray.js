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
var sortedSquares = function(nums) {
  let neg = [], pos = []
  
  for(let i = 0 ; i < nums.length;i++){
      if(nums[i]<0){
          neg.unshift(nums[i]*nums[i])
      }
      else{
          pos.push(nums[i]*nums[i])
      }
  }
  return merge(neg,pos)
};
sortedSquares([-4,-1,0,3,10])