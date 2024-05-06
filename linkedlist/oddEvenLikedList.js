/**
 * 328. Odd Even Linked List
 * 
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

 You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 */

 let head = {
    val : 1,
    next : {
        val : 1,
        next : null
    }
}


/**
 *  THIS ONE IS DONE BUT WE NEED TO TAKE CARE OF EDGE CASES ALSO HERE WE ARE TAKING EXTRA SPACE BUT MAKE SURE DO WITHOUT THAT
 */
 function oddEvenList(head){

    let temp = head;
    let length = 0;

    while(temp){
        temp = temp.next;
        length++;
    }

    let curr = head.next;
    let leftHead = null;
    let currLeftHead = null;
    let rightHead = null;
    let currRightHead = null;
    let i = 1;
    while(i !== length){
      let temp = {val : curr.val , next : null};
      if(i%2 === 0){
         if(leftHead === null){
            leftHead = currLeftHead = temp
         }else {
            currLeftHead.next = temp;
            currLeftHead = temp;
         }
      }else{
        if(rightHead === null){
            rightHead = currRightHead = temp
         }else {
            currRightHead.next = temp;
            currRightHead = temp;
         }
      }
      curr = curr.next;
      i++;
    }
    
   console.log(leftHead);
   console.log(rightHead) 
   if(currLeftHead) {
    currLeftHead.next = rightHead  
    head.next = leftHead;
   }else{
    head.next = rightHead;
   }


return JSON.stringify(head)
  
 }

 console.log(oddEvenList(head))