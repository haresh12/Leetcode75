/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

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


function reverseAList(head){

  let prev = null;
  let curr = head;
  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next; // HERE STORING THE VALUE OF NEXT AT LINE 26 IS IMPORTENT STEP

  }

  return prev;
}

console.log(reverseAList(head))