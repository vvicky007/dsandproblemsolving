/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
class MinHeap{
    constructor(){
      this.values = []   
    }
    insertion(val){
        this.values.push(val)
        let insertedIndex = this.values.length-1
        if(this.values.length>1){
            let parentIndex = Math.floor((insertedIndex-1)/2)
            while(this.values[parentIndex]>this.values[insertedIndex]&&parentIndex>=0)
                {
                    [this.values[parentIndex],this.values[insertedIndex]] =                                         [this.values[insertedIndex],this.values[parentIndex]]
                    insertedIndex = parentIndex
                    parentIndex = Math.floor((insertedIndex-1)/2)
                }
        }
    }
    deletion(){
        if(this.values.length>0){
            let rootIndex = 0 
            let finalIndex = this.values.length
            finalIndex--
            [this.values[finalIndex],this.values[rootIndex]] = 
                [this.values[rootIndex],this.values[finalIndex]]
            let deletedElement = this.values.pop()
            let lchild = 2*rootIndex+1
            let rchild = 2*rootIndex+2
            while(true){
                let minIndex = rootIndex
                if(lchild<this.values.length){
                    if(this.values[lchild]<this.values[minIndex]){
                        minIndex = lchild
                    }
                }
                 if(rchild<this.values.length){
                    if(this.values[rchild]<this.values[minIndex]){
                        minIndex = rchild
                    }
                }
                if(minIndex === rootIndex){
                    break
                }
                [this.values[minIndex],this.values[rootIndex]] = 
                    [this.values[rootIndex],this.values[minIndex]]
                rootIndex = minIndex
                lchild = 2*rootIndex+1
                rchild = 2*rootIndex+2
            }
            return deletedElement
        }
        else{
            return this.values.pop()
        }
    }
}
var findMedianSortedArrays = function(nums1, nums2) {
    
    let medianIndex = [];
    let sumLength =(nums1.length+nums2.length)
    if(sumLength%2===0){
        medianIndex.push(Math.floor((sumLength-1)/2))
        medianIndex.push(sumLength/2)
       
    }
    else{
        medianIndex.push((sumLength-1)/2)
    }
    let minHeap = new MinHeap()
    for(let i = 0 ; i < nums1.length ; i++){
        minHeap.insertion(nums1[i])
    }
     for(let i = 0 ; i < nums2.length ; i++){
        minHeap.insertion(nums2[i])
    }
    let result = 0;
    if(medianIndex.length===1){
        for(let i = 0 ; i <= medianIndex[0] ; i++){
            result = minHeap.deletion()
        }
    }
    else{
        for(let i = 1 ; i <= medianIndex[1]+1;i++){
            let poppedVal = minHeap.deletion()
            if(i===medianIndex[0]+1){
                result = result + poppedVal
            }
            if(i===medianIndex[1]+1)
                {
                    result = result + poppedVal
                }
        }
        result = result/2
    }
    
    return result.toFixed(5)
};