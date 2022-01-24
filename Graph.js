class Graph{
  constructor(){
      this.adjacencyList = {}
  }
  add(a,b){
    if(!this.adjacencyList[a]){
      this.adjacencyList[a] = [b]
    }
    else{
      this.adjacencyList[a].push(b)
    }
    if(!this.adjacencyList[b]){
      this.adjacencyList[b] = [a]
    }
    else{
      this.adjacencyList[b].push(a)
    }
  }
  dfs(src){
    let visited = {}
    let result = []
    let adjList = this.adjacencyList
    Object.keys(this.adjacencyList).map((edge)=>{
      visited[edge] = false
    })
   function dfsrecursive(vertex){
     result.push(vertex)
     visited[vertex] = true
      adjList[vertex].forEach((vert)=>{
        if(!visited[vert]){
          dfsrecursive(vert)
        }
      })
   }
   dfsrecursive(src)
   return result
  }
}
let edges = []
const graph = new Graph()
for(let i = 0 ; i < edges.length;i++){
  graph.add(edges[i][0],edges[i][1])
}
console.log(graph.adjacencyList)
console.log(graph.dfs(0))
const res = graph.dfs(0)
console.log(res.indexOf(5))