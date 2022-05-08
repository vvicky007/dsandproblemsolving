var minimumTime = function(time = [], totalTrips) {
 

  let max = time[0]

  for(let  i = 0 ; i < time.length ; i++){
    if(time[i]>max){
      max = time[i]
    }
  }
  let maxTime = max*totalTrips

  let l = 0 , r = maxTime, mid ,count = 0

  while(l<=r){
    mid = Math.floor((l+r)/2)
    count = 0
    for(let i = 0 ; i < time.length ; i++){
      count = count + Math.floor(mid/time[i])
    }
    if(count>=totalTrips){
      r = mid-1
    }
    else{
      l = mid+1
    }
  }
return r+1
};
minimumTime([5,10,10],9)