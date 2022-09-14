// ***************** Remove Duplicates from Sorted Array ******************
// Problem: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.

// solution-1
var removeDuplicates = function (nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set.values())
    return set.size;
}

console.log(removeDuplicates([1,1,2, 3, 3, 4,5, 5]));

// Time Complexity: 
// -------------------------------------------------------------------------------------------------------------------------------
