import java.util.PriorityQueue;
import java.util.Scanner;

public class Solution {

    public int furthestBuilding(int[] heights, int bricks, int ladders) {
        int n = heights.length;
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int totalBuildingsJumped = 0;
        
        for (int i = 0; i < n - 1; i++) {
            int diff = heights[i + 1] - heights[i];
            if (diff > 0) {
                pq.offer(diff);
            }
            
            if (pq.size() > ladders) {
                if (!pq.isEmpty()) {
                    bricks -= pq.poll();
                    if (bricks < 0) {
                        break;
                    }
                }
            }
            
            totalBuildingsJumped++;
        }
        
        return totalBuildingsJumped;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of buildings");
        int n = sc.nextInt();
        System.out.println("Enter the height of buildings");

        int[] heights = new int[n];
        for (int i = 0; i < n; i++) {
            heights[i] = sc.nextInt();
        }

        System.out.println("Enter the number of bricks");
        int bricks = sc.nextInt();
        System.out.println("Enter the number of ladders");
        int ladders = sc.nextInt();

        Solution solution = new Solution();
        int result = solution.furthestBuilding(heights, bricks, ladders);
        System.out.println(result);
    }
}
