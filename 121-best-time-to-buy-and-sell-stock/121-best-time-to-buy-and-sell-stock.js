/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===1){
    return 0
  }
    let min =[],max= [],res = Number.NEGATIVE_INFINITY
    for(let i = 0 ; i < prices.length;i++){
      if(i===0){
        min[i] = prices[i]
      }
      else{
        min[i] = Math.min(prices[i],min[i-1])
      }
    }
    for(let i = prices.length-1 ; i >=0;i--){
      if(i===prices.length-1){
        min[i] = prices[i]
      }
      else{
        max[i] = Math.max(prices[i],min[i+1])
      }
    }

    for(let i = 0 ; i < prices.length;i++){
      if(res<(max[i]-min[i])){
        res = max[i]-min[i]
      }
    }
    return res
    
};