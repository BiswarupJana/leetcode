/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const l= nums.length
    k = k % nums.length; // Handle cases where k is larger than the array size
  const part = nums.splice(nums.length - k, k); // Remove the last k elements
  nums.unshift(...part);
};