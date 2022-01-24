function predictDays(day, k) {
  // Write your code here
let n = day.length
let left = []
let right = []
for(let i = 0 ; i < n ; i++){
  left[i] = 0
  right[i] = 0
}
for(let i = 1 ; i < n ; i++){
  if(day[i-1]>=day[i]){
      left[i] = left[i-1]+1
  }
}
for(let i = n-2 ; i >=0;i--){
  if(day[i+1]>=day[i]){
      right[i] = right[i+1]+1
  }
}
let res = []
for(let i = 0 ; i < n ; i++){
  if(left[i]>=k&&right[i]>=k){
      res.push(i+1)
  }
}
return res
}
predictDays([3,2,2,2,3,4],2)