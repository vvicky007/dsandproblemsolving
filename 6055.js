var convertTime = function(current = '', correct='') {
    
  const times = [60,15,5,1]
  const convert = (time='')=>{
    const splitted = time.split(':')
    const hr= parseInt(splitted[0]) 
    const min = parseInt(splitted[1])
    return hr*60 + min
  }
  let curr = convert(current), corr = convert(correct)
  let diff = corr-curr
  let lp = 0, div,res = 0
  while(lp<times.length){
    div = Math.floor(diff/times[lp])
    if(div>0){
      diff = diff-div*times[lp]
      res = res + div
    }
    if(diff===0){
      break;
    }
    lp++;
  }
  return res
};
convertTime("02:30","04:35")