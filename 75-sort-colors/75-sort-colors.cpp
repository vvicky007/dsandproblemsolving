class Solution {
public:
    void sortColors(vector<int>& nums) {
        int num[3]={0};
        int len=nums.size();
        for(int i=0;i<len;i++)
        {
            num[nums[i]]+=1;
        }
        int j=0;
        for(int i=0;i<len;i++)
        {
            while(num[j]==0)
            {
                j++;      
            }
            nums[i]=j;
            num[j]--;
        }
    }
};