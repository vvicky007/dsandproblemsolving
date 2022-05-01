/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
        
    let obj = {}, res = Number.MAX_VALUE
    for(let i = 0 ; i < cards.length ; i++){
      if(obj[cards[i]]===undefined){
        obj[cards[i]] = i
      }
      else{
        let len = i - obj[cards[i]]+1
        if(len<res){
          res = len
        }
        obj[cards[i]] = i
      }
    }
    return res===Number.MAX_VALUE?-1:res
};