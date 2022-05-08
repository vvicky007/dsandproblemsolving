const minSwaps=(nums)=>{
		// code here
		let sortedIndexes = {}
		let sorted = [...nums]
    sorted = sorted.sort((a,b)=>{
      if(a<b){
        return -1
      }
      else if(a>b){
        return 1
      }
      return 0
    })
		for(let i = 0;i<sorted.length;i++){
		    sortedIndexes[sorted[i]]=i
		}
		let cycles = 0 , swaps = 0,itr,swappedIndexes = {}
		for(let i = 0 ; i < nums.length;i++){
		    cycles = 1
		    if(sorted[i]===nums[i]){
		        continue;
		    }
		    itr = sortedIndexes[nums[i]]
        swappedIndexes[i] = true
		    while(itr!==i&&!swappedIndexes[itr]){
          swappedIndexes[itr] = true
		        itr = sortedIndexes[nums[itr]]
            cycles++;
		    }
        swaps = swaps + cycles-1
		} 
	}
  minSwaps([10, 19, 6, 3, 5])