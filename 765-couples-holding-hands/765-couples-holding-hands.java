class Solution {
    public int minSwapsCouples(int[] row) {
        final int n= row.length;
        int[] indices = new int[n];
        for(int i=0; i<n; i++){
			// Save the indices of all elements in a new array
            indices[row[i]] = i;
        }

        int swap =0;
        for(int i=0; i<n; i+=2){
            int a = row[i];
            int b = row[i+1];
            int max = Math.max(a, b);
            int min = Math.min(a, b);
            if(max != min+1 || min%2 != 0) { // not a couple
                // find a's partner
                int aPartnerIndex = indices[a%2 == 0 ? a+1 : a-1];
                
                row[aPartnerIndex] = b;
                indices[b] = aPartnerIndex;
				
				// no need to update row[i+1] and indices[aPartner] because we would never need to check them again.
				//They are now placed in their right positions.
                
                swap++;
            }
        }

        return swap;
    }
    
}