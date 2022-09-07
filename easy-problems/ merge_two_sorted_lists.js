// *****************  Merge Two Sorted Lists ******************
// Problem: You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1: 
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2: 
// Input: list1 = [], list2 = []
// Output: []


// solution-1
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;

    if (list1.val > list2.val) {
        [list1, list2] = [list2, list1]
    }

    list1.next = mergeTwoLists(list1.next, list2)

    return list1 || list2
};

console.log([1,2,4], [1,3,4]);

// Time Complexity: 

// -------------------------------------------------------------------------------------------------------------------------------

// solution-2


// Time Complexity:
// Space Complexity: 
