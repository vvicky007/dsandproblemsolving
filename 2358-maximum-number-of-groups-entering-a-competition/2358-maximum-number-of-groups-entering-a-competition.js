/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function(grades) {
            let count = 0
    let sqrt = Math.sqrt(4*2*grades.length)
    let diff = sqrt-1
    let res = -1
    let binarySearch = (start,end)=>{
      if(end<start){
        return 
      }
      let mid  = Math.floor((start+end)/2)
      let sum = mid*(mid+1)
      if(sum>2*grades.length){
        return binarySearch(start,mid-1)
      }
      else if(sum<2*grades.length){
        res= mid
        return binarySearch(mid+1,end)
      }
      res = mid
    }
    binarySearch(0,grades.length)
    return res
};