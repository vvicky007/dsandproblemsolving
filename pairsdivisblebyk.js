var canArrange = function (arr = [], k) {
  let map = new Map();

  for (let i of arr) {
    let currMod = i % k;
    if (currMod < 0) {
      currMod += k;
    }

    if (map.has(currMod)) map.set(currMod, map.get(currMod) + 1);
    else map.set(currMod, 1);
  }

  if (map.get(0) % 2 == 1) return false;


  for (let i = 1; i < k; i++) {
    if (map.get(i) !== map.get(k - i)) return false;
  }
  return true;
};
canArrange([3, 8, 17, 2, 5, 6], 10)

