/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
     let count = 0,substr;
  for(let i = 0 ; i < words.length ; i++){
    substr = s.substring(0, words[i].length)
    if(substr === words[i]){
      count++;
    }
  }
  return count;
};