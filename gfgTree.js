class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = this.right = null;
    }
}
 
let root;
let preIndex = 0;
 
function printInorder(node)
{
    if (node == null)
            return;
  
    // First recur on left child
    printInorder(node.left);
 
    // Then print the data of node
    document.write(node.data + " ");
 
    // Now recur on right child
    printInorder(node.right);
}
function search(arr, strt, end, value)
{
    let i;
    for(i = strt; i <= end; i++)
    {
        if (arr[i] == value)
            return i;
    }
    return i;
}
function buildTree(In, pre, inStrt, inEnd)
{
    if (inStrt > inEnd)
        return null;
 
    // Pick current node from Preorder
    // traversal using preIndex and
    // increment preIndex
    let tNode = new Node(pre[preIndex++]);
 
    // If this node has no children then return
    if (inStrt == inEnd)
        return tNode;
 
    // Else find the index of this
    // node in Inorder traversal
    let inIndex = search(In, inStrt,
                         inEnd, tNode.data);
 
    // Using index in Inorder traversal,
    // construct left and right subtress
    tNode.left = buildTree(In, pre, inStrt,
                           inIndex - 1);
    tNode.right = buildTree(In, pre,
                            inIndex + 1,
                            inEnd);
 
    return tNode;
}
 
// Driver code
let In = [ 'D', 'B', 'E', 'A', 'F', 'C' ];
let pre = [ 'A', 'B', 'D', 'E', 'C', 'F'];
let len = In.length;
root = buildTree(In, pre, 0, len - 1);
console.log(inorder(root))