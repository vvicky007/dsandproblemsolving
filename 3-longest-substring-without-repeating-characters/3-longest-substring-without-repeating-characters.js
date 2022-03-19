/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let lp = 0 , rp = 0, seen = {}, longest = 0;
    while(rp<s.length){
        
        if(seen[s[rp]]){
            lp = Math.max(lp,seen[s[rp]]);
        }
        longest = Math.max(longest,rp-lp+1)
        seen[s[rp]] = rp+1
         rp++; 
    }
    return longest
};