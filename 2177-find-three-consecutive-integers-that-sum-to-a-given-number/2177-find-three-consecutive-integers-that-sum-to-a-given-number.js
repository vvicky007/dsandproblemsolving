/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function(num) {
    let doubleplus = num*2 + 6
    
    if(doubleplus%6===0){
        let ul = doubleplus/6
        return [ul-2,ul-1,ul]
    }
    else{
        return []
    }
    
};