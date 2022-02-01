/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0){
        return false
    }
    let x = n-1
    return (n &x)==0
};