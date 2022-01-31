/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
   let lp = 0,rp = s.length-1,reslen = 0,res = ''
    for(let i = 0 ; i < s.length;i++){
      lp = i
      rp = i
      while(lp>=0&&rp<s.length&&s[rp]===s[lp]){
        if(rp-lp+1>reslen){
          res = s.substring(lp,rp+1)
          reslen = rp-lp+1
        }
        lp--;
        rp++;
      }
      lp = i
      rp = i+1
      while(lp>=0&&rp<s.length&&s[rp]===s[lp]){
        if(rp-lp+1>reslen){
          res = s.substring(lp,rp+1)
          reslen = rp-lp+1
        }
        lp--;
        rp++;
      }            
    }
  return res
};