class MaxHeap{
  constructor(){
    this.values = []
  }
  insert(value){
    this.values.push(value)
    this.bubbleup()
  }
  delete(){
    if(this.values.length>0){
      [this.values[0],this.values[this.values.length-1]] 
      = [this.values[this.values.length-1],this.values[0]]
      let deletedVal = this.values.pop()
     
      this.sinkDown()
      
      
      return deletedVal
    }
    else{
      let deletedVal = this.values.pop()
      return deletedVal
    }
    
  }
  sinkDown(){
    let rootIndex = 0
    let lchildIndex = 1
    let rchildIndex = 2 
    while(true){
      let maxIndex = rootIndex;
      if(lchildIndex<this.values.length){
        if(this.values[lchildIndex]&&this.values[maxIndex]&&this.values[lchildIndex].value>this.values[maxIndex].value){
          maxIndex = lchildIndex
        }
      }
      if(rchildIndex<this.values.length){
        if(this.values[rchildIndex]&&this.values[maxIndex]&&this.values[rchildIndex].value>this.values[maxIndex].value){
          maxIndex = rchildIndex
        }
      }
      if(maxIndex === rootIndex){
        break;
      }
      [this.values[rootIndex],this.values[maxIndex]] = [this.values[maxIndex],this.values[rootIndex]]
      rootIndex = maxIndex
      lchildIndex = 2*rootIndex+1
      rchildIndex = 2 * rootIndex+2
    }
  }
  bubbleup(){
    if(this.values.length>1){
      let itr = this.values.length-1
      let parentIndex = Math.floor((itr-1)/2)
      while(this.values[parentIndex]&&this.values[itr]&&this.values[parentIndex].value<this.values[itr].value&&parentIndex>=0){
        [this.values[parentIndex],this.values[itr]] = [this.values[itr],this.values[parentIndex]]
        itr = parentIndex
        parentIndex =  Math.floor((itr-1)/2)
      } 
    }
  }
}

var maxSlidingWindow = function(nums, k) {
  let max = [],res=[],lp = 0 , rp = 0
  let maxHeap = new MaxHeap() ;
  while(lp<=rp&&rp<=nums.length){
   
    if(rp-lp=== k){
      let deletedVal = maxHeap.values[0]
      while(maxHeap.values[0].index<lp||maxHeap.values[0].index>rp-1){
        deletedVal = maxHeap.delete()
      }
      res.push(maxHeap.values[0].value)
      lp++
    }
    else{
      maxHeap.insert({value:nums[rp],index:rp})
      rp++
    }
   
  }
  return res
};

