/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2];
    
    // Sort the combined array
    arr.sort((a, b) => a - b);

    const n = arr.length;

    // Calculate the median
    if (n % 2 === 0) {
        // If even number of elements, average the middle two elements
        const midIndex = n / 2;
        return (arr[midIndex - 1] + arr[midIndex]) / 2;
    } else {
        // If odd number of elements, return the middle element
        const midIndex = Math.floor(n / 2);
        return arr[midIndex];
    }
};