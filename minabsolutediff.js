// const closestElement = (arr = [])=>{
//   if(arr.length===1){
//     return arr[0]
//   }
// if(arr.length&1>0){
//   return arr[(arr.length-1)/2]
// }
// else{
//   let a = arr[arr.length/2] , b = arr[(arr.length/2)-1]

//   let suma = 0, sumb = 0
//   for(let i = 0 ; i < arr.length;i++){
//     suma = suma + Math.abs(arr[i]-a)
//     sumb = sumb + Math.abs(arr[i]-b)
//   }
//   if(sumb<suma){
//     return b
//   }
//   return a
// }
// }
// closestElement([2,4,7])
const memalloc = (memory = [],queries = [])=>{
  let state = [], ind = 0,res = [], id = {},atc = 1,result = [],flag = 0
  const update = (arr=[],state = [],ind = 0)=>{
    for(let i = ind ; i < arr.length;i++){
      if(i==0){
        if(arr[i]===0){
          state[i] = 1
        }
        else{
          state[i] = 0
        }
      }
      else{
        if(arr[i]===0){
          state[i] = state[i-1]+1  
        }
        else{
          state[i] = 0
        }
      }
    }
    return {
      state,arr,ind
    }
  }
  res = update(memory,state,ind)
  state = res.state
  memory = res.arr
  const fill = (arr,ind,len)=>{
    for(let i = ind;i<ind+len;i++){
      arr[i] = 1
    }
    return arr
  }
  const clear = (arr,ind,len)=>{
    for(let i = ind;i<ind+len;i++){
      arr[i] = 0
    }
    return arr
  }
  
  queries.forEach((q)=>{
    flag =0
    if(q[0]===0){
      for(let i = 0 ; i <state.length;i++){
        if(state[i]===q[1]){
          memory = fill(memory,i-q[1]+1,q[1])
          res = update(memory,state,i-q[1]+1)
          state = res.state
          memory = res.arr
          id[atc] = {start:i-q[1]+1,len:q[1]}
          atc++;
          flag++;
          result = [...result,i-q[1]+1] 
          break
        }
      }
      if(flag===0){
        result = [...result,-1]
      }
    }
    else{
      
            let obj = id[q[1]]
            if(obj){
              memory = clear(memory,obj.start,obj.len)
              res = update(memory,state,obj.start)
              state = res.state
              memory = res.arr
              result = [...result,obj.len]
              delete id[q[1]]
              
            }
            else{
              result = [...result,-1]
            }
           
       
      
    }
  })
  return result
}
console.log(memalloc([0,1,0,0,0,1,1,0,0,0,1,0,0],[[0,2],[0,1],[0,1],[1,2],[1,4],[0,4]]))