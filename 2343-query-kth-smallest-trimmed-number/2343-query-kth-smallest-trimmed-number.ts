function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
    const dp = [];
    const result = [];
    
    for(let i = 0;i < queries.length;i++){
        if(dp[queries[i][1]]){
            result.push(dp[queries[i][1]][queries[i][0] - 1].index); 
            continue;
        }
        const newNums = nums.map((num, index)=>({
			// since the number may be over Number.MAX_SAFE_INTEGER, using BigInt here
            num: BigInt(num.slice(-1 * queries[i][1])),
            index
        }));
        // sorting function should return Number type
        newNums.sort((a, b)=>(a.num == b.num? a.index - b.index : Number(a.num - b.num)));
        
        dp[queries[i][1]] = newNums;
        result.push(newNums[queries[i][0] - 1].index);
    }
    
    return result;
};