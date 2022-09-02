// *****************  Valid Parentheses ******************
// Problem: Given a string 's' containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

// Example:
// Input: s = "()"
// Output: true

// solution-1
var isValid = function(s) {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const currentCharacter = s[i];

        if(map[currentCharacter]) {
            stack.push(map[currentCharacter]);
        } else {
            if(currentCharacter !== stack.pop()) return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid(')('));

// Time Complexity: 

// -------------------------------------------------------------------------------------------------------------------------------

// solution-2
// const isValid = (s) => {
//     const map = {
//         '(':')',
//         '{':'}',
//         '[':']',        
//     }
//     let stack = []
//     for (let c of s) {
//         if (c in map){ 
//             stack.push(c)
//         } else if (map[stack.pop()] !== c) {
//             return false
//         }
//     }
//     return !stack.length
// };

// Time Complexity: 
// Space Complexity: 
