// *****************  Search Insert Position ******************
// Problem: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// solution-1 
var searchInsert = function(nums, target) {
    let position = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            position = i;
        }

        if (nums[i] < target) {
            position = i + 1;
        }
    }
    return position;
};

const nums = [1,3,5,6]
console.log(searchInsert(nums, 2));

// Time Complexity: O(n)

// -------------------------------------------------------------------------------------------------
// solution-2:    binary search
const searchInsert2 = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if(nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left;
}

const nums2 = [1,3,5,6]
console.log(searchInsert2(nums2, 2));