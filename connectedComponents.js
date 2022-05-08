let V;
let adjListArray=[];
 
// constructor
function Graph(v)
{   
    V = v
     
        // define the size of array as
        // number of vertices
  
        // Create a new list for each vertex
        // such that adjacent nodes can be stored
  
        for (let i = 0; i < V; i++) {
            adjListArray.push([]);
        }
}
 
// Adds an edge to an undirected graph
function addEdge(src,dest)
{
    // Add an edge from src to dest.
        adjListArray[src].push(dest);
  
        // Since graph is undirected, add an edge from dest
        // to src also
        adjListArray[dest].push(src);
}
 
function DFSUtil(v,visited)
{
    // Mark the current node as visited and print it
        visited[v] = true;
        // Recur for all the vertices
        // adjacent to this vertex
        for (let x = 0; x < adjListArray[v].length; x++)
        {
            if (!visited[adjListArray[v][x]])
                DFSUtil(adjListArray[v][x], visited);
        }
}
 
function connectedComponents()
{
    // Mark all the vertices as not visited
        let visited = new Array(V);
        for(let i = 0; i < V; i++)
        {
            visited[i] = false;
        }
        for (let v = 0; v < V; ++v)
        {
            if (!visited[v])
            {
                // print all reachable vertices
                // from v
                DFSUtil(v, visited);
         
            }
        }
}
 
// Driver code
Graph(5);
 
addEdge(1, 0);
addEdge(2, 3);
addEdge(3, 4);
connectedComponents();