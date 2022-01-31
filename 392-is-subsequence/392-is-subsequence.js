/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let itr = 0,itr2 = 0, flag = false
 for(let i=0;i<t.length;i++){
   if(itr<s.length&&s[itr]===t[i]){
     itr++;
   }
 }
 return itr===s.length  
};