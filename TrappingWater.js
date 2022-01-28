var trap = function(height) {
   let right = [], left = [],max = height[0],max2 = height[height.length-1]
   for(let i = 0 ; i < height.length ; i++){
    
    max = Math.max(max,height[i])
    
     left[i] = max
   } 
   for(let i = height.length-1 ; i >= 0 ; i--){
    
    max2 = Math.max(max2,height[i])
    
    right[i] = max2
  } 
  let min,trapped = [],res = 0;
  for(let i = 0 ; i < height.length ; i++){
    min = Math.min(left[i],right[i])
    trapped[i] = min - height[i]
  }
  for(let i = 0 ; i < trapped.length;i++){
   
      res = res+trapped[i]
   
  }
  return res
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
