var maxProfit = function(prices = []) {
  let lowest = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) lowest = prices[i];
    max = Math.max(max, prices[i] - lowest);
  }
  return max;
};
maxProfit([7,1,5,3,6,4])