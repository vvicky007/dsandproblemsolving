class Solution {
    public boolean isAnagram(String s, String t) {
              String s1 = s;
        String s2 = t;
        if(s1.length()!=s2.length()){
            return false;
        }

        HashMap<Character,Integer> str1 = new HashMap<>();
        HashMap<Character,Integer> str2 = new HashMap<>();
        for(var i = 0 ; i < s1.length();i++){
            if(str1.containsKey(s1.charAt(i))){
                var count = str1.get(s1.charAt(i));
                str1.put(s1.charAt(i),count+1);
            }
            else{
                str1.put(s1.charAt(i),1);
            }
        }

        for(var i = 0 ; i < s2.length();i++){
            if(str2.containsKey(s2.charAt(i))){
                var count = str2.get(s2.charAt(i));
                str2.put(s2.charAt(i),count+1);
            }
            else{
                str2.put(s2.charAt(i),1);
            }
        }

        for(var k:str1.keySet()){
            if(!str2.containsKey(k)){
                return false;
            }
            else{
                int count = str1.get(k);
                int count2 = str2.get(k);
                if(count!=count2){
                    return false;
                }
            }
        }


        return true;
    }
}