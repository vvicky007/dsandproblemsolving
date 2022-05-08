function main(input) {
   
  // Writing output to STDOUT
  const inp = input.split('\n')
   
   const numOffriends = parseInt(inp[0])
   let network = {}, distances = {} , lastvisitedTable = {}
   for(let i = 1 ; i <= numOffriends ; i++){
       network[inp[i]] = []
   }
   const numOfConnections = parseInt(inp[numOffriends+1])
   
   for(let i = numOffriends+2 ; i < numOfConnections +numOffriends+2 ;i++ ){
      
      let [a,b] = inp[i].split(' ')
      network[a].push(b)
      network[b].push(a)
      distances[a] = -1
      distances[b] = -1
      lastvisitedTable[a] = a
      lastvisitedTable[b] = b
   }
  let src = inp[numOfConnections +numOffriends+2]
  let dest = inp[numOfConnections +numOffriends+3]
  distances[src] = 0
  let bfsQueue = [], visited = {}
  bfsQueue.push({index:src,path:src})
  let paths = []
  while(bfsQueue.length!==0&&Object.keys(visited).length<numOffriends){
      let {index,path} = bfsQueue.shift()
      if(visited[index]===undefined){
        for(let i = 0 ; i < network[index].length ; i++){
          distances[network[index][i]] = distances[index]+1
          
          if(network[index][i]===dest){
            paths.push(path)
           
          }
          else{
            bfsQueue.push({index:network[index][i],path:path+network[index][i]})
          }
      }
      }
      visited[index] = true
  }
  paths = paths.sort((a,b)=>{
    if(a.length>b.length){
      return 1
    }
    else if(a.length<b.length){
      return -1
    }
    return 0
  })
  let res = ''
  for(let i = paths[paths.length-1].length-1 ; i >= 0;i--){
   res = res + paths[paths.length-1][i]+' '
  }
  console.log(res)
}
main(`4
2
5
7
9
4
2 9
7 2
7 9
9 5
7
9`);