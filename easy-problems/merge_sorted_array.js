// *****************  Merge Sorted Array ******************
// Problem: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// solution-1:
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[i + m] = nums2[i]
    }

    // not return anything, modify nums1 in-place instead.
    nums1.sort((a, b) => a - b)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
// Time Complexity: O(n)

// ----------------------------------------------------------------

// solution-2: (faster than 92.53% of JavaScript online submissions)
var merge2 = function (nums1, m, nums2, n) {
    nums1.splice(m)

    for (let i = 0; i < n; i++) {
        // inserts each number from nums2 to the beggining of nums1 using array.unshift() method.
        nums1.unshift(nums2[i]);
    }

    // sort the array using array.sort() method
    nums1.sort((a, b) => a - b);
};

console.log(merge2([1,2,3,0,0,0], 3, [2,5,6], 3));
// Time Complexity: O(n)


