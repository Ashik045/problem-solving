// ***************** Roman to Integer ******************
// Problem: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3

// -------------------------------------------------------------------------------------------------------------------------------
// solution-1
var romanToInt = function(s) {
    const ROMAN_VAL = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])

    let result  = 0;
    for (var i = 0; i < s.length; i++) { 
        const current_val = ROMAN_VAL.get(s[i]);
        const next_val = ROMAN_VAL.get(s[i + 1])

        if (i + 1 < s.length && current_val < next_val) {
            result -= current_val
        } else {
            result += current_val
        }
    }
    return result
};

console.log(romanToInt("LVIII"));

// Time Complexity: O(n)

// -------------------------------------------------------------------------------------------------------------------------------
// solution-2 (Faster than solution-1)
var romanToInt = function(s) {
    const ROMAN_VAL = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let result  = 0;
    for (var i = 0; i < s.length; i ++) {
        const cur_val = ROMAN_VAL.get(s[i])
        const next_val = ROMAN_VAL.get(s[i + 1])
        // cur: L --> 50
        // nxt: V --> 5

        if(cur_val < next_val) {
            result = result + next_val - cur_val
            i += 1;
        } else {
            result += cur_val
        }
    }
    return result // 50
}
console.log(romanToInt("MCMXCIV"));

// Time Complexity: O(n)
// Space Complexity: 
