var solveNQueens = function(n) {
    
  let board = [],temp,res = [],modifiedRes = []
  for(let i = 0 ; i < n ; i++){
    temp = new Array(n).fill(0,0,n)
    board.push(temp)
  }
  const check = (board,ind)=>{
    let queenspos = -1
        for(let i = 0 ; i < n ; i++){
          if(board[ind][i]===1){
            queenspos = i
            break
          }
        }
       
        for(let i = 0 ; i < n ; i++){
          if(board[i][queenspos]===1&&i!==ind){
            board[ind][queenspos] = 0
            return false
          }
        }
        let diag= ind
        for(let i = queenspos ; i < n-1 &&diag<n-1; i++,diag++){
          if(board[diag+1][i+1]===1&&i!==queenspos){
            board[ind][queenspos] = 0
            return false
          }
        }
        diag = ind
        for(let i = queenspos ; i >0&&diag>0 ; i--,diag--){
          if(i>0&&ind>0&&board[diag-1][i-1]===1){
            board[ind][queenspos] = 0
            return false
          }
        }
        diag = ind
        for(let i = queenspos ; i >0&&diag<n-1 ; i--,diag++){
          if(i>0&&ind>0&&board[diag+1][i-1]===1){
            board[ind][queenspos] = 0
            return false
          }
        }
        diag = ind
        for(let i = queenspos ; i <n-1&&diag>0 ; i++,diag--){
          if(diag>0&&board[diag-1][i+1]===1){
            board[ind][queenspos] = 0
            return false
          }
        }
    
    return true
  }
  const arrangeQueens = (board,i,j)=>{
    if(i === 0 && j > n-1){
      return n
    }
    if(j>=n&&i>=1){
      let queenspos = -1
      for(let k = 0 ; k < n ; k++){
        if(board[i-1][k]===1){
          queenspos = k
          break
        }
      }
      board[i-1] = new Array(n).fill(0,0,n)
    
      return arrangeQueens(board,i-1,queenspos+1)
      
     
    }
    if(i===n){
      if(check(board,n-1)){
        res.push(board)
      }
      let queenspos = -1
      for(let k = 0 ; k < n ; k++){
        if(board[0][k]===1){
          queenspos = k
          break
        }
      }
      return queenspos
    }
  
    board[i][j] = 1
    if(check(board,i)){
      return arrangeQueens(board,i+1,0)
    }
    else{
      return arrangeQueens(board,i,j+1)
    }
  }
  let lastpos = -1
  while(lastpos!==n){

    lastpos = arrangeQueens(board,0,lastpos+1)
    board = []
    for(let i = 0 ; i < n ; i++){
      temp = new Array(n).fill(0,0,n)
      board.push(temp)
    }
  }
  for(let i = 0 ; i < res.length ; i++){
    temp = []
    for(j = 0 ; j < res[i].length;j++){
      let str = ''
      for(let k = 0 ; k < res[i][j].length;k++){
        if(res[i][j][k]===0){
          str = str+'.'
        }
        else{
          str = str+'Q'
        }
      }
      temp.push(str)
    }
    modifiedRes.push(temp)
  }
return modifiedRes
};
solveNQueens(5)