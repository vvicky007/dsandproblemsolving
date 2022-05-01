class Solution {
    public String removeDigit(String number, char digit) {
         int min_id = -1, last_id = -1;
        for(int i = 0; i < number.length(); i++)
        {
            if(number.charAt(i) == digit)
            {
                if(i < number.length()-1 && number.charAt(i) < number.charAt(i+1))
                {
                    min_id = i;
                    break;
                }
                last_id = i;
            }
        }
        StringBuilder sb = new StringBuilder();
        sb.append(number);
        if(min_id == -1)
            sb = sb.deleteCharAt(last_id);
        else
            sb = sb.deleteCharAt(min_id);
        return sb.toString();
    }
}