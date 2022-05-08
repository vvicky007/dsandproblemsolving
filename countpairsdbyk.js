var countPairs = function(a = [], k) {
  let f = Array(1e5 + 1).fill(0), gcdData = [], res = 0;
  const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
  for (const x of a) {
      let g = gcd(x, k);
      for (const y of gcdData) {
          if (g * y % k == 0) res += f[y];
      }
      if (f[g] == 0) gcdData.push(g);
      f[g]++;
  }
  return res;
};

countPairs([8,10,2,5,9,6,3,8,2],6)