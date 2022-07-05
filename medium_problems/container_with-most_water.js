// ***************** Container With  Most Water ******************
// Problem: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// solution-1 
var maxArea = function(height) {
    let total_water = 0;
    for (let i = 0; i < height.length; i++) { // n -time

        for (let j = i + 1; j < height.length; j++) { // n -time
            let heig
            if (height[i] > height[j]) {
                heig= height[j]
            } else { 
                heig = height[i]
            }

            let width = j - i

            let current_water = heig * width

            if (total_water < current_water) {
                total_water = current_water
            }
            // console.log(heig, width);
            // console.log(current_water);
        }
    }
    return total_water;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// Time Complexity: n * n = n^2

// ------------------------------------------------------------------------------------------------------------------------------- //

// solution-2 (optimeized code)
var maxArea2 = function(height) {
    let total_water = 0;
    for (let i = 0; i < height.length; i++) { // n -time

        for (let j = i + 1; j < height.length; j++) { // n -time
            let heig = Math.min(height[i], height[j])

            let width = j - i

            let current_water = heig * width

            total_water = Math.max(current_water, total_water)
        }
    }
    return total_water;
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7]));
// Time Complexity: n * n = n^2

// ------------------------------------------------------------------------------------------------------------------------------- //

// solution-3 (Linear Time Complexity--O(n))
var maxArea2 = function(height) {
    let total_water = 0;

    let first  = 0;
    let last = height.length -1;

    while (first < last) {
        let heig = Math.min(height[first], height[last]);
        let width = last - first;

        let current_water = heig * width;

        total_water = Math.max(total_water, current_water);

        if (height[first] <= height[last]) {
            first++;
        } else {
            last--;
        }
    }
    return total_water;
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7]));
// Time Complexity: O(n)
// Space Complexity: O(1)
