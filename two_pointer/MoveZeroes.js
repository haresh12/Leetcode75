/**
 * Move Zeroes
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
   Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */


// we simply need to move zeros at end there is simple algoritm for it.
/**
 *  TOOK ALMOST 30 MIN WHY 
 *  BECAUSE I WAS TRYING WITH BIG EXAMPLES ALWAYS SIMPLIFY THE THING TRY WITH SMALL EXAMPLE
 *  DON'T TRY TO REMEMBER ALGO ITS DONE BY SELF JUST BY THINKING
 *  DRY RUN ON PAN AND PAPER MATTERS
 *  ONE MORE PROBLEM SEE HERE IF IT WON'T HAVE 0 STILL IT WILL DO ALL THE SWAPING ANY MODIFY ARRAY THING ABOUT THOSE STUFF
 *  LEARN
 */
function moveZeros(arr){
 let i = 0;
 let j = 0;  // if you are going to start j from one hell lot of swap happen even if there is no zeros
 while(j < arr.length){
    if(arr[j] !== 0){
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
     i++;
     j++;
    }else{
       j++;
    }

 }
return arr;
}

console.log(moveZeros([1,2]))