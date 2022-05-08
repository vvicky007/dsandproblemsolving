/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr = []) {
    
    let stack = []
    const MOD = 1e9 + 7;
    
    const left = {}
    const right = {}
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if (stack.length === 0) {
            stack.push([num, i])
        } else {
            let top = stack[stack.length-1]
            
            while( top && !(num > top[0]) && stack.length > 0){
                const [ln, idx] = stack.pop();
                top = stack[stack.length-1]
                
                right[idx] = i - idx
            }
            stack.push([num, i])
        }
    }
    
    for (const singleStack of stack) {
        const [num, idx] = singleStack
        right[idx] = arr.length - idx
    }
    stack = []
    
    for (let i = arr.length-1; i >= 0; i--) {
        const num = arr[i]
        if (stack.length === 0) {
            stack.push([num, i])
        } else {
            let top = stack[stack.length-1]
            
            while( top && !(num >= top[0]) && stack.length > 0){
                const [ln, idx] = stack.pop();
                top = stack[stack.length-1]
                
                left[idx] = idx  - i 
            }
            stack.push([num, i])
        }
    }
    for (const singleStack of stack) {
        const [num, idx] = singleStack
        left[idx] = idx - -1
    }
    let ans = 0
    
    for (let i = 0; i < arr.length; i++){
        
        ans += arr[i] * left[i] * right[i]
    }
    return ans % MOD
};

sumSubarrayMins(
[11,81,94,43,3])