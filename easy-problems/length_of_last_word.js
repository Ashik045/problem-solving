
// *****************  Length of Last Word ******************
// Problem: Given a string s consisting of words and spaces, return the length of the last word in the string.A word is a maximal substring consisting of non-space characters only.

// Example-1: 
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// solution:
var lengthOfLastWord = function(s) {
    const array = [];
    const words = s.split(' ');

    for (let i = 0; i < words.length ; i ++) {
        if(words[i].length > 0) {
            array.push(words[i]);
        }
    }

    return array[array.length - 1].length; // return the length of the last word
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
// Time Complexity: O(n)
// Space Complexity: O(1)