var maxArea = function(height = []) {
  let l = 0,r =height.length-1,max =0,area
  while(l<r){
    area = (r-l)*Math.min(height[l],height[r])
    max=Math.max(area,max)
    if(height[l]<height[r]){
      l++
    }
    else{
      r--
    }
  }
 return max
};
maxArea([1,8,6,2,5,4,8,3,7])