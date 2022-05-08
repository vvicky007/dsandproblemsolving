/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 class MinHeap{
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
       
        if(this.sumofVal(lchildIndex)<this.sumofVal(maxIndex)){
          maxIndex = lchildIndex
        }
      }
      if(rchildIndex<this.values.length){
        if(this.sumofVal(rchildIndex)<this.sumofVal(maxIndex)){
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
      while(this.sumofVal(parentIndex)>this.sumofVal(itr)&&parentIndex>=0){
        [this.values[parentIndex],this.values[itr]] = [this.values[itr],this.values[parentIndex]]
        itr = parentIndex
        parentIndex =  Math.floor((itr-1)/2)
      } 
    }
  }
  sumofVal(idx){
    if(idx>=0&&idx<this.values.length){
      return this.values[idx][0]+this.values[idx][1]
    }
  }
}

var kSmallestPairs = function(nums1 = [], nums2 = [], k) {
  let res = [],temp
  const pq = new MinHeap()

  for(let i = 0 ; i < nums1.length;i++){
    for(let j = 0 ; j < nums2.length;j++){
      if(pq.values.length>=k){
        if(nums1[i]+nums2[j]<pq.sumofVal(0)){
          pq.insert([nums1[i],nums2[j]])
        }
      }
      else{
        pq.insert([nums1[i],nums2[j]])
      }
     
    }
  }
  for(let i = 0 ; i < k ; i++){
    temp = pq.delete()
    if(temp ===undefined){
      break
    } 
    res.push(temp)
  }
  console.log(res);
return res
};
kSmallestPairs([1,7,11],[2,4,10],3)