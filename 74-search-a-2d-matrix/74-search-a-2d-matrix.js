/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const binarySearch=(arr=[],target)=>{

  if(arr.length===0){
    return false
  }
if(arr.length===1){
    if(arr[0]===target) return true
    return false
  }
  let mid = Math.floor(arr.length/2)
  if(target===arr[mid]){
    return true
  }
  else if(target>arr[mid]){
    return binarySearch(arr.slice(mid),target)
  }
  else{
    return binarySearch(arr.slice(0,mid),target)
  }

}

var searchMatrix = function(matrix, target) {
 let arrToBeSearched = []
    for(let i = 0 ; i < matrix.length;i++){
      if(matrix[i][matrix[i].length-1]>=target&&matrix[i][0]<=target){
        if(binarySearch(matrix[i],target)){
          return true
        }
      }
    }
    return false
};