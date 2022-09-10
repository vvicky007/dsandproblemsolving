class Solution {
    public int trap(int[] height) {
        int[] lmax = new int[height.length];
        int[] rmax = new int[height.length];
        int max = -1;
        int volume = 0;
        for(int i = 0 ; i < height.length ; i++){
            if(height[i]>max){
                max = height[i];
            }
            lmax[i] = max;
        }
        max = -1;
        for(int i = height.length-1 ; i >=0 ; i--){
            if(height[i]>max){
                max = height[i];
            }
            rmax[i] = max;
        }
        for(int i = 0 ; i < height.length ; i++){
            int min = Math.min(lmax[i],rmax[i]);
            volume = volume + (min-height[i]);
        }
        return volume;
    }
}