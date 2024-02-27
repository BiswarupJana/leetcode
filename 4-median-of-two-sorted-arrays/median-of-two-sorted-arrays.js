/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    const isEven = totalLength % 2 === 0;
    const halfLength = Math.floor(totalLength / 2);

    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = halfLength - partitionX;

        const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if (isEven) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.min(minX, minY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
};
