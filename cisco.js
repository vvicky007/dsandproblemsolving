function generatePalindrome2(x, oddPalindrome) {
  var res = x;
  x>>= oddPalindrome;
  while (x > 0) {
      res = (res << 1) | (x & 1);
      x>>= 1;
  }
  return res;
}
function isPalindrome(x, base) {

  var s = x.toString(base);
  var a = s.length - 1;
  var b = 0;

  while (b < a) {

      if (s[a] !== s[b]) {
          return false;
      }
      b++;
      a--;
  }
  return true;
}
function solution(limit) {
  var sum = 0;

  for (var parity = 0; parity < 2; parity++) {

      var p = generatePalindrome2(1, parity);
      for (var i = 2; p < limit; i++) {
          if (isPalindrome(p, 10)) {
              sum+= p;
          }
          p = generatePalindrome2(i, parity);
      }
  }
  return sum;
}
solution(1000000);