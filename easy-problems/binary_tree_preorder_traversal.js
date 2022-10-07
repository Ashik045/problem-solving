// ***************** Binary Tree PreOrder Traversal ******************
// Problem: Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
// Input: Input: root = [1,null,2,3]
// Output: [3,2,1]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

// solution-1
var preorderTraversal = function(root) {
    const result = [];
    
    function preOrder(node) {
        if (!node) return;
        result.push(node.val)
        preOrder(node.left);
        preOrder(node.right);
    }

    preOrder(root);
    return result;
};
// Time Complexity: 

