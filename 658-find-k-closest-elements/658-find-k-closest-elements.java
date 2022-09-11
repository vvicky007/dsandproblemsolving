class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
  List<Integer> res = new ArrayList<Integer>();
        PriorityQueue<HashMap> pq = new PriorityQueue<>(new Comparator<HashMap>() {
            @Override
            public int compare(HashMap o1, HashMap o2) {
                int diff = ((int)o2.get("difference"))-((int)o1.get("difference"));
                if(diff==0){
                   return (int)o2.get("value")-(int)o1.get("value");
                }
                return ((int)o2.get("difference"))-((int)o1.get("difference"));
            }
        });

        for(int i:arr){
            HashMap h = new HashMap();
            h.put("value",i);
            h.put("difference",Math.abs(x-i));
            pq.add(h);
            if(pq.size()>k){
                pq.remove();
            }
        }
        for(HashMap i:pq){
            res.add((int)i.get("value"));
        }
        res.sort(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                return o1-o2;
            }
        });
        return res;
    }
}