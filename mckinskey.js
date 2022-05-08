var prefixCount = function(words = [], pref) {
    let count = 0

    const matched = (str = '',pref = '')=>{
      let res = true
      for(let i = 0 ; i < pref.length;i++){
        if(str[i]!==pref[i]){
          return false
        }
      }
      return true
    }
    for(let i = 0 ; i < words.length;i++){
      if(matched(words[i],pref)){
        count++;
      }
    }
    return count
};

prefixCount(["pay","attention","practice","attend"],"at")