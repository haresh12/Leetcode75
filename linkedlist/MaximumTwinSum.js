/**
 *  Maximum Twin Sum of a Linked List
 * 
 *  
 */


let head = {
    val : 4 ,
    next : {
        val : 2,
        next :  {
            val : 2,
            next :{
                val : 3,
                next : null
            }
        }
    }
}

/**
 *  ONE GOOD NEW IS THIS ONE WORKED ON FIRST TIME BUT ANOTHER THIS IS THIS IS NOT THE RIGHT
 *  WAY TO DO THIS PROBLEM WE NEED TO LEARN ABOUT FAST AND SLOW MOVING APPROCH OF LIKEDLIST
 */
function maxTwinSumLength(head){

  let temp = head;
  let length = 0;
  
  while(temp) {
    temp = temp.next;
    length++;
  }

  temp =  head;
  let index = 0;
  let sum = {}
  let max = Number.MIN_SAFE_INTEGER;
  while(temp){
   if(length - 1 - index in sum){
    let currSum = sum[length - 1 - index] + temp.val
    if(currSum > max) max = currSum;
   }else {
    sum[index] = temp.val; // THIS LINE IS LIT HERE WHY INDEX AND NOW LENGTH - I - INDEX THATS THE GAME CHANGER
   }
   index++;
   temp = temp.next;
  }

  return max;
}


maxTwinSumLength(head)
