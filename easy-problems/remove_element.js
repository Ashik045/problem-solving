// ***************** Remove Element ******************
// Problem: Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

// solution-1
var removeElement = function(nums, val) {
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[num] = nums[i];
            num++;
        }
    }

    return num;
};

const nums = [3,2,2,3];
console.log(removeElement(nums, 3));
// Time Complexity: n * n = n^2

// ------------------------------------------------------------------------------------------------------------


