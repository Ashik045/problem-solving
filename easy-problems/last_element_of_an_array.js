// ***************** last element of an array ******************
// Problem: Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// solution-1
function last(array, n) {
    if (array == null) {
        return void 0;
    }
    if(n == null) {
        return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0))
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
// Time Complexity:

// -------------------------------------------------------------------------------------------------------------------------------
