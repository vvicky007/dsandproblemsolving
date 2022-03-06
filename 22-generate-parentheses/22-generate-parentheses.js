/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
     let res = []
  const generatep = (oc,cc,str)=>{

    if(str.length === n*2){
      res.push(str)
      return 
    }
    if(oc<n){
      generatep(oc+1,cc,str+'(')
    }
    if(cc<oc){
      generatep(oc,cc+1,str+')')
    }
    return 
  }
  generatep(0,0,'')
  return res
};