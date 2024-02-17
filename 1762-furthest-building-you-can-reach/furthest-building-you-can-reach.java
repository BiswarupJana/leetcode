class Solution {
    public int furthestBuilding(int[] heights, int bricks, int ladders) {
          int n =heights.length;
        PriorityQueue <Integer> q = new PriorityQueue<>();
        int brickesUsed=0;
        for(int i=1;i<n;i++){
            int diff= heights[i]- heights[i-1];
            if(diff>0){
                q.add(diff);
                if(q.size()> ladders){
                    brickesUsed+=q.remove();
                }
                if(brickesUsed> bricks){
                    return i-1;
                }
            }
        }
        return n-1;
    }
}