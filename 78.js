var subsets = function(nums = []) {
  let res = []
  const generateSubSets = (nums = [],index,sub = [])=>{

    if(index === nums.length){
      return sub
    }
    let temp = generateSubSets(nums,index+1,[...sub,nums[index]])
    if(temp){
      res = [...res,temp] 
    }
    temp = generateSubSets(nums,index+1,sub)
    if(temp){
      res = [...res,generateSubSets(nums,index+1,sub)]
    }
    return null
  }
  generateSubSets(nums,0,[])
  return res
};
subsets([1,2,3])