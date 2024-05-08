/**
 * Swap Nodes in Pairs
 * 
 *  Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without 
 * modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 * 
 * Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]

 */

let head = {
    val : 1 ,
    next : {
        val : 2,
        next :  {
            val : 3,
            next : null
        }
    }
}


/**
 *  Few things that we need to make sure before starting
 *   1. What if we have only one node 
 *   2. What if total number of nodes are in odd length
 *   THIS ONE DONE NICELY DONE IN 15 MIN MAX HARDLY 2 RUNS
 */
function swapNodes(head){
 if(head === null) return null;

 let curr = head;
 let next = curr?.next;
  
 while(next){
  let nextVal = next.val;
  next.val = curr.val;
  curr.val = nextVal 
  curr  = next?.next;
  next = curr?.next;
 }
return head; 
}

swapNodes(head)