/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let found = {}, ind = 0
    for(let i = 0 ; i < s.length;i++){
      if(found[s[i]]===undefined){
        found[s[i]] = [i]
      }
      else{
        found[s[i]].push(i)
      }
      while(ind<s.length&&found[s[ind]]&&found[s[ind]].length>1){
        ind++
      }
    }
    return ind>s.length-1?-1:ind
};