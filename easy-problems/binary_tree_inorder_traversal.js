// ***************** Two sum ******************
// Problem: Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// solution-1
var inorderTraversal = function(root) {
    let result = [];

    function inOrderFunction(node) {
        if(!node) return;
        inorderTraversal(node.left);
        result.push(node.val);
        inOrderFunction(node.right);
    }

    inOrderFunction(root);
    return result;
};

console.log(inorderTraversal([1,null,2,3]));
// Time Complexity: 

