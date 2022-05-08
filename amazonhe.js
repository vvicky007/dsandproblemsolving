

function main(input) {
     
    let inp = input.split('\n')     // Writing output to STDOUT
    
    for(let t = 0 ; t < inp.length; t = t+3 ){
      if(inp[t+3] === undefined){
        break
      }
      if(inp[t+2]===undefined){
        break
      }
        let players = [], playstr = inp[t+2].replace(/^\s+|\s+$/gm,'').split(' ');
        players = playstr.map((x)=>parseInt(x))
        let trainers = [], trainerStr = inp[t+3].replace(/^\s+|\s+$/gm,'').split(' ');
        trainers = trainerStr.map((x)=>parseInt(x))
        
        trainers.sort((a,b)=>a-b)
        players.sort((a,b)=>a-b)
        console.log(trainers,players)
        let itr1 = 0 , itr2 = 0, objS = {},count = 0

        while(itr1<players.length){
         
            if(itr2>trainers.length-1){
              itr2 = trainers.length-1
            }
            if(objS[itr2]===undefined&&players[itr1]>=trainers[itr2]){
              objS[itr2] = true
              count++;
              itr2++;
              itr1++;
            }
            else{
              itr1++;
            }
            
            
        }
        console.log(count)
    }

}

main(
  `1
  4 3
  20 10 20 40
  40 5 30`)
