// ***************** Longest Common Prefix ******************
// Problem: Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// -------------------------------------------------------------------------------------------------------------------------------
// solution-1
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let item = strs[i];
        // console.log(item);

        while (prefix !== "" && item.indexOf(prefix) !== 0 ) {
            prefix = prefix.slice(0, (prefix.length - 1));
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));

// Time Complexity: O(n)

