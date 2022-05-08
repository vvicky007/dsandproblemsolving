var uniquePaths = function(m, n) {
    let dp = [],temp = []
    for(let i = 0 ; i < m ; i++){
      temp = []
      if(i === 0){
        for(let j = 0 ; j < n ; j++){
          temp.push(1)
        } 
      }
      else{
        temp.push(1)
        for(let j = 0 ; j < n-1;j++){
          temp.push(0)
        }
      }
      dp.push(temp)
    }
    for(let i = 1 ; i < m ; i++){
      for(let j = 1 ; j < n ;j++){
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }

    return dp[m-1][n-1]
};
uniquePaths(3,7)