var breakPalindrome = function(palindrome = '') {
  let lp = 0  ,res = 0,rp = palindrome.length-1
  if(palindrome.length===1){
    return ''
  }
  while(lp<palindrome.length){
    if(palindrome[lp]!=='a'){
      break
    }
    lp++;
    rp--;
  }
  if(lp!==palindrome.length&&lp!==rp){
    palindrome = palindrome.substring(0,lp)+'a'+palindrome.substring(lp+1,palindrome.length)
  }
  if(lp===palindrome.length||rp===lp){
    palindrome = palindrome.substring(0,palindrome.length-1)+'b'
  }
 
 
  return palindrome
};
breakPalindrome("aba")