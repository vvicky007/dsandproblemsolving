var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  const digitMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  let res = []

  const generateSubsets = (pos,str)=>{

    if(str.length === digits.length){
      res.push(str)
      return
    }
    
    for(let j = 0 ; j < digitMap[digits[pos]].length; j++){
      generateSubsets(pos+1,str+digitMap[digits[pos]][j])
    }
    
    return 
  }
  generateSubsets(0,'')
  return res
};
letterCombinations("23")