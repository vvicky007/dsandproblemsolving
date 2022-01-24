/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

 var findSubstring = function(s, words) {
  let matchedAscii = [],itrString = ''
  let mapObj = {}
  let wordLen = words[0].length
  const getasciiSum = (str)=>{
    return str.split("").reduce((acc, val) => {
      return acc + val.charCodeAt(0);
   }, 0);
  }
  let ascisumofwords = 0
  for(let i = 0 ; i < words.length;i++){
    ascisumofwords= ascisumofwords+getasciiSum(words[i])
    mapObj[words[i]] = {visited:false}
  }
  let totallength = wordLen*words.length 
  let resIndex = []
  for(let i = 0 ; i < s.length ; i++){
      itrString = s.substring(i,i+totallength)
      if(getasciiSum(itrString)===ascisumofwords){ 
        matchedAscii.push({
          word:itrString,
          index:i
        })
      }
  }
  
  let flag = 0,wordsArr
  const check = (arr)=>{
    
    for(let i =  0 ; i < arr.length ;i++){
      if(arr[i]!==null){
        return false
      }
    }
    return true
  }
  for(let i = 0 ; i < matchedAscii.length;i++){
    flag = 0
    itrString = ''
    wordsArr = [...words]
    for(let j = 0 ; j<matchedAscii[i].word.length;j++){
      itrString = matchedAscii[i].word.substring(j,j+wordLen)
     
      let wordIndex = wordsArr.findIndex((x)=>x===itrString)
      if(wordIndex===-1){
        break
      }
      wordsArr[wordIndex] = null
      j = j + wordLen-1
    }
    if(flag>0){
      matchedAscii[i].index = null
    }
    if(!check(wordsArr)){
      matchedAscii[i].index= null
    }
  }
  resIndex = matchedAscii.filter((x)=>{
    if(x.index!==null){
      return x
    }
  })
  return resIndex.map((x)=>x.index)
};
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]))