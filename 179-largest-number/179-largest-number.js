const check = (obj)=>{
  let flag = false
  Object.keys(obj).forEach((x)=>{
    if(obj[x].num.length>0){
      flag = true
    }
  })
  return flag
}
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
 
    if(compareString(a+b,b+a)===a+b){
      return a
    }
  else{
    return b
  }
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
    let res = '',obj = {},max = '',maxidx,temp
    for(let i = 0 ; i < nums.length;i++){
      if(obj[nums[i]]===undefined){
        obj[nums[i]] = {num:nums[i],idx:i,occ:1}
      }
       else{
        obj[nums[i]] = {num:nums[i],idx:i,occ:obj[nums[i]].occ+1}
       }
    }
    while(check(obj)){
      max = '0'
      Object.keys(obj).forEach((x,idx)=>{
        if(obj[x].num&&obj[x].num.length>0){
           if(parseInt(obj[x].num[0])===parseInt(max[0])){
               
              temp = compareString(max,obj[x].num)
              max = temp
              maxidx = obj[temp].idx
          }
          if(parseInt(obj[x].num[0])>parseInt(max[0])){
            max = x
            maxidx = obj[x].idx
          }
         
        }
        
       
      })
      
      for(let k = 0;k< obj[max].occ;k++){
        res = res+max
      }
      obj[max] = {
        num:'',
        idx:obj[max].idx,
        occ:0
      }
    }
   
    return res
};