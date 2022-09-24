// *****************  Add Binary ******************
// Problem: Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

// solution:
var addBinary = function(a, b) {
    const bin_a = `0b${a}`;
    const bin_b = `0b${b}`;

    const result  = BigInt(bin_a) + BigInt(bin_b);
    return result.toString(2);
};

console.log(addBinary('1010', '1011'));