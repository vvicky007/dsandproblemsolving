/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */

const digArtifacts = (n, artifacts, dig) => {
   let grid = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
  for(const [x,y] of dig){
      grid[x][y]= 1;
  }
  

  let ans = 0;
  for(let [r1,c1,r2,c2] of artifacts){
      if(r1 == r2 && c1 == c2){
        
          if(grid[r1][c1] == 1)
              ans++;
      }else{          
          let flag = true;
          for(let i=r1; i <= r2; i++) {
              for(let j = c1; j <= c2; j++){                  
                  if(grid[i][j] != 1){
                      flag = false;
                      break;
                  }                        
              }
              if(! flag)
                  break;            
          }
          if(flag)
              ++ans;
      }    
  }
  
  return ans;
};