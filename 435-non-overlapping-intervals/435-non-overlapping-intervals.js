/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
       
   let sortedIntervals = intervals.sort((a,b)=>{
    if(a[0]>b[0]){
      return 1
    }
    else if(a[0]<b[0]){
      return -1
    }
    return 0
  })
  let cs = sortedIntervals[0][0],ce = sortedIntervals[0][1],itr = 1,count = 0, ci = 0
  while(itr<sortedIntervals.length){
    if((sortedIntervals[itr][1]>cs&&sortedIntervals[itr][1]<ce)||(sortedIntervals[itr][0]>=cs&&sortedIntervals[itr][0]<ce)){

      if(sortedIntervals[itr][1]<ce){
        ce = sortedIntervals[itr][1]
        cs = sortedIntervals[itr][0]
      }
      count++
    }
    else{
      ce = sortedIntervals[itr][1]
      cs = sortedIntervals[itr][0]
    }
    itr++;
  }
  return count
};