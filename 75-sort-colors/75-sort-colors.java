class Solution {
    public void sortColors(int[] nums) {
        ArrayList<Integer> arr = new ArrayList<>();
        for(int i = 0 ; i < nums.length ;i++){
            arr.add(nums[i]);
        }
        int i,j,k;
        k = arr.size()-1;
        i = 0 ; j = 0;
        
        while(j<=k){
            if(arr.get(j)>1){
                Collections.swap(arr,j,k);
                k--;
                continue;
            } else if (arr.get(j)<1) {
                Collections.swap(arr,i,j);
                j++;
                i++;
               continue;
            }
            j++;
        }
        for(int itr = 0 ; itr < arr.size() ; itr++){
            nums[itr] = arr.get(itr);
        }
        
    }
}