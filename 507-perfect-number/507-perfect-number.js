/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let i = 1;
    let sum = 0;
    while (i <= Math.floor(num / 2)) {
        if (num % i === 0) {
            sum += i;
        }
        i++;
    }
    if (sum === num) {
        return true;
    } else {
        return false;
    }
};