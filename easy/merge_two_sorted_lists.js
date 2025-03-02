/**
 * Explain :    -         
 -------------------------------------------------------------------------------------------------------------------------------------------
 * Solution 1:  - Use LinkedLIst, i use JS should i will defining an Node class
                - Create a dummy node start with -1
                - Create a resultNode to contain result and current
                - Loop list1 and list2 when it != null
                - If currentValue list1 < currentValue list2 resultNode.next = currentValueList1 and set list1 to next node
                - Otherwise, resultNode.next = currentValueList2 and set list2 to next node
                - After that, set resultNode to next
                - In the end, get the nextNode of dummNode (its the head none of resultNode)
 * Solution 2:  - Use Recursive Method
 -------------------------------------------------------------------------------------------------------------------------------------------        
 * TimeComplex: - Solution 1: O(n+m)        
                - SOlution 2: O(n+m)
 -------------------------------------------------------------------------------------------------------------------------------------------        
 * SpaceComplex:- Solution 1: O(1)      => just use space of resultNode
                - SOlution 2: O(n+m)             
 ------------------------------------------------------------------------------------------------------------------------------------------- 
 * TestCase:    - Input : [1,2,4][1,3,4] | [][0] | [][]
 *              - Output: [1,1,2,3,4,4]  |  []   |  [0]
 -------------------------------------------------------------------------------------------------------------------------------------------
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new Node(-1);
    let resultNode = dummyNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            resultNode.next = list1;
            list1 = list1.next;
        } else {
            resultNode.next = list2;
            list2 = list2.next;
        }
        resultNode = resultNode.next;
    }

    resultNode.next = list1 !== null ? list1 : list2;

    return dummyNode.next;
};

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Solution 2
 */
// var mergeTwoLists = function(list1, list2) {
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoListsRecursive(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoListsRecursive(list1, list2.next);
//         return list2;
//     }
// }