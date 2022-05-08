
let res = 0
function circularPrime(n)
{
    
    var nNew = (n - 2) / 2;
        let marked = Array.from({length: n + 1},
            (_, i) => false);
     
     
    SieveOfSundaram(marked, n);
    console.log(marked)
    res++
    for (i = 1; i <= nNew; i++) {
        if (marked[i] == true)
            continue;
     
        var num = 2 * i + 1;
        num = Rotate(num);
        while (num != 2 * i + 1) {
            if (num % 2 == 0)
                break;
            if (marked[parseInt((num - 1) / 2)] == false)
                num = Rotate(num);
            else
                break;
        }
        if (num == (2 * i + 1))
           res++
        }
        return res
}
 
function SieveOfSundaram(marked , nNew)
{
  
    for (i = 1; i <= nNew; i++)
        for (j = i; (i + j + 2 * i * j) <= nNew; j++)
            marked[i + j + 2 * i * j] = true;
}
function countDigits(n)
{
    var digit = 0;
    while ((n = parseInt(n/10)) > 0)
        digit++;
    return digit;
}
function Rotate(n)
{
    var rem = n % 10;
    rem *= Math.pow(10, countDigits(n));
    n = parseInt(n/10) 
    n += rem; 
        return n;
}
 
// Driver code
var n = 200;
circularPrime(n)
console.log(res)
// This code is contributed by Amit Katiyar
 