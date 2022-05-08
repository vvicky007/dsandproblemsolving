
var detectCapitalUse = function(word = '') {
  
    let wordsArr = word.split(' '), cc = 0 , lastoccured = ''
    for(let i = 0 ; i < wordsArr.length;i++){
      for(let j = 0 ; j < wordsArr[i].length;j++){
        if(wordsArr[i][j]===wordsArr[i][j].toUpperCase()){
          cc++;
          lastoccured = j
        }
      }
      if(cc!==wordsArr[i].length&&lastoccured>0){
        return false
      }
    }
return true
};
detectCapitalUse("FlaG")