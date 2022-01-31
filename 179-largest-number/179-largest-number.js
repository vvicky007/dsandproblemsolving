const compareString = (a='',b='')=>{
  let itr1 = 0,itr2=0,flag = 0, largest;
  if(a===b){
    return a
  }
  while(itr1<a.length&&itr2<b.length){
    if(parseInt(a[itr1])>parseInt(b[itr2])){
      return a
    }
    if(parseInt(a[itr1])<parseInt(b[itr2])){
      return b
    }
    
    flag=1
    itr1++;
    itr2++;
  }
 
  return a
}
var largestNumber = function(nums) {
     let flag = 0
    nums = nums.map((x)=>x.toString())
    for(let i = 0 ; i < nums.length;i++){
      if(nums[i]!=='0'){
        flag++;
        break;
      }
    }
    if(flag ===0){
      return '0'
    }
    nums = nums.sort((a,b)=>{
      if(compareString(a+b,b+a)===a+b){
        return -1
      }
      else if(compareString(a+b,b+a)===b){
        return 1
      }
      return 0 
    })
    let res = '',obj = {},max = '',maxidx,temp
    for(let i = 0 ; i < nums.length;i++){
      res = res+nums[i]
    }
    return res
};