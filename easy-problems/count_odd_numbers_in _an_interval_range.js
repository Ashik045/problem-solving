// ***************** Count Odd Numbers in an Interval Range ******************
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Example 1:
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

// --------------------------------------------------------------------------------------------------------------------
// solution-1
var countOdds = function(low, high) {
    const count = 0;

    for (let i  = low; i <= high; i++) {
        if(i % 2 === 1) {
            count += 1;
        }
    }

    return count;
};

console.log(countOdds(3, 7));
// Time Complexity: O(n)
