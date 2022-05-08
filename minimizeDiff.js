function main(input = '') {
  let inp = input.split('\n')
  let t = 0     //
  while(t < inp.length){
    try{
      if(inp[t+1]===undefined){
        break
      }
      if(t+1>=inp.length){
        break
      }
      let n = inp[t+1].replace(/^\s+|\s+$/gm,'')
      let edges = {},edgArray = []
      n = parseInt(n)
      if(isNaN(n)){
        break
      }
      let k = 1
     
      while(true){

        let edge =inp[t+k+1]? inp[t+k+1].replace(/^\s+|\s+$/gm,'').split(' ').map(x=>parseInt(x)):[]
        if(edge.length<2){
          t =  t + k 
          break
        }
        let src = edge[0]
        let tar = edge[1]
        edgArray.push([src,tar])
        if(edges[src]===undefined){
          edges[src] = [tar]
        }
        else{
          edges[src].push(tar)
        }
        if(edges[tar]===undefined){
          edges[tar] = [src]
        }
        else{
          edges[tar].push(src)
        }
        k++;
      }
      if(edgArray.length === 0){
        continue
      }
      let res = Number.MAX_VALUE
      const dfsUtill = (node,visited,modifiedEdge,arr=[])=>{
          visited[node] = true
          arr.push(node)
          for(let i = 0 ; i < modifiedEdge[node].length;i++){
            if(!visited[modifiedEdge[node][i]]){
              dfsUtill(modifiedEdge[node][i],visited,modifiedEdge,arr)
            }
          }
          return arr
      }
      const connectedComps = (modifiedEdge)=>{
        let visited = []
        for(let i = 1 ; i <= n ;i++){
          visited[i] = false
        }
        let comps = []
        for(let i = 1 ; i <=n ; i++){
          if(!visited[i]){
           comps.push(dfsUtill(i,visited,modifiedEdge,[]))
          }
        }
        return comps
      }
      const minimize = (edge1,edge2)=>{

        let src = edge1[0],tar = edge1[1]
        let modifiedEdge = {...edges}
        for(let i = 0 ; i < modifiedEdge[src].length;i++){
          if(modifiedEdge[src][i] === tar){
            modifiedEdge[src] = [...modifiedEdge[src].slice(0,i),...modifiedEdge[src].slice(i+1)]
            break
          }
        }
        for(let i = 0 ; i < modifiedEdge[tar].length;i++){
          if(modifiedEdge[tar][i] === src){
            modifiedEdge[tar] = [...modifiedEdge[tar].slice(0,i),...modifiedEdge[tar].slice(i+1)]
            break
          }
        }
         src = edge2[0],tar = edge2[1]
        for(let i = 0 ; i < modifiedEdge[src].length;i++){
          if(modifiedEdge[src][i] === tar){
            modifiedEdge[src] = [...modifiedEdge[src].slice(0,i),...modifiedEdge[src].slice(i+1)]
            break
          }
        }
        for(let i = 0 ; i < modifiedEdge[tar].length;i++){
          if(modifiedEdge[tar][i] === src){
            modifiedEdge[tar] = [...modifiedEdge[tar].slice(0,i),...modifiedEdge[tar].slice(i+1)]
            break
          }
        }
        let keys = Object.keys(modifiedEdge)
        let arr = [],xorRes = 0
        let comps = connectedComps(modifiedEdge)
        for(let i = 0 ; i < comps.length;i++){
          xorRes = comps[i][0]
          for(let j = 1 ; j < comps[i].length;j++){
            xorRes = xorRes ^ comps[i][j]
          }
          arr.push(xorRes)
        }
        let min = Math.min(...arr), max = Math.max(...arr)
        
        
        if(max-min<res){
          res = max - min
        }
      }
      const calculate = ()=>{
        for(let i = 0 ; i < edgArray.length ; i++){
          for(let j = i+1 ; j < edgArray.length ; j++){
            minimize(edgArray[i],edgArray[j])
          }
        }
      }
      calculate()
      console.log(res)
    }
      catch(e){
        break
      }

  }     
}
main(`3
5
4 5
3 1
3 2
1 5
5
5 4
1 3
5 3
3 2
5
2 5
3 4
4 2
4 1`)