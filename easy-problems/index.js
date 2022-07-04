// Two sum
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j] ) === target) {
                return [i, j];
            }
        }
    }
    return false;
};
console.log(twoSum([4, 3, 2, 7, 1, 5], 100));
