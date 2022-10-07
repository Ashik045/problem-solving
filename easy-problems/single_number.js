// ***************** Single Number ******************
// Problem: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: Input: nums = [2,2,1]
// Output: 1

// Example 2:
// IInput: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: Input: nums = [1]
// Output: 1

// solution-1
var singleNumber = function(nums) { // using javascript for of loop
    let number = 0;

    for (let i of nums) {
        number ^= i;
    }

    return number;
};
console.log(singleNumber([4,1,2,1,2]));
// Time Complexity: O(n)

// ----------------------------------------------------------------
// solution-2 
var singleNumber2 = function(nums) { // using javascript array.reduce() function
   return nums.reduce((prev, curr) => prev ^ curr)
};

console.log(singleNumber2([4,1,2,1,2]));
// Time Complexity: O(n)