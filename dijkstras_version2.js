let distance_array = []
function sortdistarray(visited){
    distance_array.sort((a,b)=>{
        if(a.weight<b.weight){
            return -1
        }
        else if(a.weight>b.weight){
            return 1
        }
        else{
            return 0
        }
    })
    distance_array= distance_array.filter((nodes)=>{
        if(!visited[nodes.node]){
            return nodes
        }
    })
}
class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(src,dest,weight){
        if(!this.adjacencyList[src]){
            this.adjacencyList[src] = []
        }
        this.adjacencyList[src].push({
            "node":dest,
            weight
        })
        this.adjacencyList[dest].push({
            "node":src,
            weight
        })
        
    }
    Dijkstra(src,dest){
        const distance = {}
        const visited = {}
        const previous = {}
        let result = []
        for(let vertex in this.adjacencyList){
            if(vertex === src){
                distance[vertex] = 0
                distance_array.push({node:vertex,weight:0})
            }
            else{
                distance[vertex] = Infinity
                distance_array.push({node:vertex,weight:Infinity})
            }
            previous[vertex] = null
        }
        while(true){
            sortdistarray(visited)
            let smallest = distance_array[0]
            if(smallest.node===dest){
                let itr = smallest.node
                
                while(previous[itr]){
                    result.unshift(previous[itr])
                    itr = previous[itr]
                }
                result.push(smallest.node)
                break
            }
            visited[smallest.node] = true
            if(smallest&&smallest.node){
                this.adjacencyList[smallest.node].forEach((node)=>{
                    let dist = distance[smallest.node] + node.weight
                    if(distance[node.node]>dist){
                        distance[node.node] = dist
                        previous[node.node] = smallest.node
                        distance_array = distance_array.map((d)=>{
                            if(d.node===node.node){
                                return {
                                    node:node.node,
                                    weight:dist
                                }
                            }
                            else{
                                return d
                            }
                        })
                    }
                })
            }
        }
        return result
    }
  
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

// console.log(graph.adjacencyList)
console.log(graph.Dijkstra("A", "F"));




