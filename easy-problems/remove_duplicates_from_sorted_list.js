// *****************  Remove Duplicates from Sorted List ******************
// Problem: Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// solution:
var deleteDuplicates = function(head) {
    if (!head) return head;
    
    let newHead = head;
    
    while(newHead.next) {
        if (newHead.val === newHead.next.val) {
            newHead.next = newHead.next.next;
        } else {
            newHead = newHead.next;
        }
    }
    
    return head;
};

console.log(deleteDuplicates([1,1,2,3,3]));
