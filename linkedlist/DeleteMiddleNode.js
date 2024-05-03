/**
 *  Delete the Middle Node of a Linked List
 * 
 * 
 * You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 

Example 1:


Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 
 */

let head = {
    val : 1 ,
    next : {
        val : 2,
        next :  {
            val : 3,
            next :{
                val : 4,
                next : null
            }
        }
    }
}

/**
 *  DONE BY SELF BUT LOT OF SMALL MISTAKE DONE
 */
function deleteNode(head){
 // first let's find the length of the node
 
 
 let length = 0;

 let temp = head;

 // here don't check temp.next else ek length come milige
 while(temp){
    length++;
    temp = temp.next;
 }

 if(length === 1) return null; // THIS ONE IS EDGE CASE 

 let oneBeforeMiddle = Math.floor(length/2);
 let beforeNode = null;

 console.log(oneBeforeMiddle)

 temp = head
 while(oneBeforeMiddle !== 0){
    beforeNode = temp
    temp = temp.next;
    oneBeforeMiddle--;

 }
  if(beforeNode === null) return head
  beforeNode.next = temp.next;

return head
}

console.log(deleteNode(head))