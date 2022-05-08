var findWinners = function(matches = []) {
    let winners = {}, lostOne = {}, lostMorethanOne = {}
    for(let i = 0 ; i < matches.length;i++){
      if( lostOne[ matches[i][0]] ===undefined && lostMorethanOne[matches[i][0]] === undefined ){
        if(winners[matches[i][0]]!==undefined){
          winners[matches[i][0]]++;
        }
        else{
          winners[matches[i][0]] = 1
        }
      }
      if(winners[matches[i][1]]!==undefined){
        delete winners[matches[i][1]]
      }
      if(lostOne[matches[i][1]]===undefined&&lostMorethanOne[matches[i][1]]===undefined){
        lostOne[matches[i][1]] = 1
      }
      else{
        delete lostOne[matches[i][1]]
        if(lostMorethanOne[matches[i][1]]===undefined){
          lostMorethanOne[matches[i][1]] = 1
        }
        else{
          lostMorethanOne[matches[i][1]]++;
        }
       
      }
    }
    let winnersArr = []
    Object.keys(winners).map(key=>{
        winnersArr.push({player:key,wins:winners[key]})
    })  
    winnersArr = winnersArr.sort((a,b)=>{
      if( parseInt( a['player'])>b['player']){
        return 1
      }
      else if (a['player']<b['player']){
        return -1
      }
      return 0
    })
    let res = []
    res[0] = winnersArr.map((x)=> parseInt(x['player']))
    res[1] = Object.keys(lostOne).map((key)=>parseInt(key))
    return res
};
findWinners([[1,5],[2,5],[2,8],[2,9],[3,8],[4,7],[4,9],[5,7],[6,8]])