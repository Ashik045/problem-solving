// *****************  Plus One ******************
// Problem: Given a string s consisting of words and spaces, return the length of the last word in the string.A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Example 3:
// Input: digits = [9]
// Output: [1,0]

// solution:
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        // increse the number of digits
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    // add 1 at the beginning of the array
    digits.unshift(1);
    
    return digits;
};

console.log(plusOne([1,2,3]));