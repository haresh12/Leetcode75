/**
 * 328. Odd Even Linked List
 * 
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

 You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 */

 let head = {
    val : 1 ,
    next : {
        val : 2,
        next :  {
            val : 3,
            next :{
                val : 4,
                next : {
                    val : 5,
                    next :  {
                       val : 6,
                       next :{
                        val :  7,
                        next :{
                            val : 8,
                            next : {
                                val : 9,
                                next : {
                                    val : 10,
                                    next : null
                                }
                            }
                        }
                       } 
                    }

                }
            }
        }
    }
}


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
      if(i%2 !== 0){
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
    
  currLeftHead.next = rightHead  
  head.next = leftHead;


return JSON.stringify(head)
  
 }

 console.log(oddEvenList(head))