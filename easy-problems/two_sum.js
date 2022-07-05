// ***************** Two sum ******************
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// solution-1
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {  // n -time
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j] ) === target) {  // n -time
                return [i, j];
            }
        }
    }
    return false;
};
console.log(twoSum([4, 3, 2, 7, 1, 5], 10))
// Time Complexity: n * n = n^2

// -------------------------------------------------------------------------------------------------------------------------------

// solution-2
var twoSum2 = function(nums, target) {
    for (var i = 0; i < nums.length; i++) { // n -time
        let remaining = target - nums[i]; // O(1) -space

        for (var j = i + 1; j < nums.length; j++) { // n -time
            console.log(i, j);
            if(remaining === nums[j]) {
                return [i, j];
            }
        }
    }
    return false;
};

console.log(twoSum2([3, 2, 1, 5, 7], 10));

// Time Complexity: n * n = n^2
// Space Complexity: O(1)
