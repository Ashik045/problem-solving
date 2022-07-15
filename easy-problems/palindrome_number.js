// *****************  Palindrome Number ******************
// Question: Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// --------------------------------------------------------------------------------------------------------------------------------
// solution-1 (convert the integer to a String)
var isPalindrome = function(x) {
    let convertStr = x.toString();
    let reverseStr = '';

    for (let i = convertStr.length - 1; i >= 0; i-- ) {
        reverseStr += convertStr[i]
    }

    let convertNum = parseInt(reverseStr)

    return  x === convertNum ? true : false;
};

console.log(isPalindrome(121));
// Time Complexity: O(n)

// -------------------------------------------------------------------------------------------------------------------------------

// solution-2 (without converting the integer to a string)
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x > 0)) {
        return false;
    }

    let reverse = 0
    while (x > reverse) {
        reverse = reverse*10 + x%10
        // 0 + 0.1

        x = Math.floor(x/10)
    }
    return (x === reverse) || Math.floor(reverse/10) === x
};

console.log(isPalindrome(121));

// Time Complexity: O(1)
// Space Complexity: 
