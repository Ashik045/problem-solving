// ***************** Binary Tree Postorder Traversal ******************
// Problem: Given the root of a binary tree, return the postorder traversal of its nodes' values.

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
var postorderTraversal = function(root) {
    let result = [];

    function postOrderFunction(node) {
        if(!node) return;
        postOrderFunction(node.left);
        postOrderFunction(node.right);
        result.push(node.val);
    }
    
    postOrderFunction(root);
    return result;
};

console.log(postorderTraversal([1,null,2,3]));
// Time Complexity: 

