/**
 * @param {string} s
 * @return {number}
 */
 class Stack{
  constructor(){
      this.stack = []
  }
  pop(){
      if(this.stack.length!==0){
         return this.stack.pop()
      }
      else{
          return null
      }
  }
  push(obj){
      this.stack.push(obj)
  }
  getLength(){
      return this.stack.length;
  }
  getTop(){
      if(this.stack.length!==0){
          return this.stack[this.stack.length-1]
      }
      else{
        return null;
      }
  }
  doesExist(index){
    let flag = 0 
    for(let i = 0 ; i < this.stack.length;i++){
      if(this.stack[i].index===index){
        flag++;
        break;
      }
    }
    if(flag>0) return true
    else return false
  }
}
var longestValidParentheses = function(s) {
  const validationStack = new Stack()
  const validStringStack = new Stack()
  const longestCollection = new Array()
  for(let i = 0 ; i < s.length ; i++){
      if(validationStack.getLength()===0&&s[i]!==')'){
          validationStack.push({value:s[i],index:i})
      } 
      else{
          if(s[i]===')'){
              if(validationStack.getTop()&&validationStack.getTop().value==='('){
                  let popped = validationStack.pop()
                  validStringStack.push(popped)
                  validStringStack.push({value:s[i],index:i})
                  longestCollection.push(...validStringStack.stack)
                  validStringStack.stack = []
              }
          }
          else{
              validationStack.push({value:s[i],index:i})
          }
          
      }
  }
 const sorted = longestCollection.sort((a,b)=>{
   if(a.index<b.index){
     return -1
   }
   else if(a.index>b.index){
    return 1
  }
  else {
    return 0
  }
 })
 let itrLongest = 1, maxLength = 0,itr = 0
 for(let i = 0 ; i < sorted.length;i++){
  if(sorted[i+1]&&sorted[i]&&(sorted[i+1].index == sorted[i].index+1)){
    itrLongest = i
    let finalItr,flag = 0
    for(let j = i+1 ; j <sorted.length;j++ ){
      if(sorted[j+1]&&sorted[j]&&(sorted[j+1].index !== sorted[j].index+1)){
        finalItr = j
        flag++;
        break
      }
    }
    if(flag ===0){
      finalItr = sorted.length-1
    }
    itrLongest = finalItr-i+1
    i = finalItr
    if(itrLongest>maxLength){
      maxLength = itrLongest
      itrLongest = 0
    }
  }
  else{
    if(itrLongest>maxLength){
      maxLength = itrLongest
      itrLongest = 0
    }
  }
 }

  return maxLength
  
};
console.log(longestValidParentheses("(()"))