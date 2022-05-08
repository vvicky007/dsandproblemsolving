var merge = function(intervals) {
  if(intervals.length<=1){
    return intervals
  }
  let sortedIntervals = intervals.sort((a,b)=>{
    if(a[0]>b[0]){
      return 1
    }
    else if(a[0]<b[0]){
      return -1
    }
    return 0
  })
  let cs = sortedIntervals[0][0],ce = sortedIntervals[0][1],itr = 1,count = 0, ci = 0,res = []
  while(itr<sortedIntervals.length){
    while(itr<sortedIntervals.length){
      if((sortedIntervals[itr][1]>=cs&&sortedIntervals[itr][1]<=ce)||(sortedIntervals[itr][0]>=cs&&sortedIntervals[itr][0]<=ce)){
        
        if(ce<sortedIntervals[itr][1]){
          ce = sortedIntervals[itr][1]
        }
      }
      else{
        break
      }
      itr++;
    }
    res.push([cs,ce])
    if(itr>=sortedIntervals.length){
      break
    }
    ce = sortedIntervals[itr][1]
    cs = sortedIntervals[itr][0]
  }
  return res
};
merge([[1,3],[2,6],[8,10],[15,18]])