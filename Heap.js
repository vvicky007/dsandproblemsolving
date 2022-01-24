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
        if(this.values[lchildIndex]>this.values[maxIndex]){
          maxIndex = lchildIndex
        }
      }
      if(rchildIndex<this.values.length){
        if(this.values[rchildIndex]>this.values[maxIndex]){
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
      while(this.values[parentIndex]<this.values[itr]&&parentIndex>=0){
        [this.values[parentIndex],this.values[itr]] = [this.values[itr],this.values[parentIndex]]
        itr = parentIndex
        parentIndex =  Math.floor((itr-1)/2)
      } 
    }
  }
}

let maxHeap = new MaxHeap()
maxHeap.insert(41)
maxHeap.insert(39)
maxHeap.insert(33)
maxHeap.insert(18)
maxHeap.insert(27)
maxHeap.insert(12)
maxHeap.insert(55)
maxHeap.insert(10)
maxHeap.insert(25)
console.log(maxHeap.values)
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
maxHeap.delete()
console.log(maxHeap.values)