/**
 *  2390. Removing Stars From a String
 * 
 *  You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
 * 
 */

/**
 *  THIS IS DONE ON FIRST ATTEMPT INCREDIBLE ITS SAYS THAT I HAVE ATLEAST BASIC UNDERSTADING OF STACK
 * 
 *  SEE IN JS NO IN-BUILT DATA STRUTURE WE HAVE LIKE STACK AND QUEUE SO ARRAY IS EVERYTHING 
 */
function removeStart(str){
 let strToArr = str.split('').reverse();
 let stackIn = [];

 let pops = 0;
 
 for(let i  = 0 ; i < strToArr.length ; i++){
         let curr = strToArr[i] 
         if(pops === 0 && curr !== '*'){
            stackIn.push(curr)
         }else if(pops > 0 && curr !== '*'){
            pops--;
            continue;
         }else if (curr === '*'){
            pops++;
         }        
 }
return stackIn.reverse().join('')
}

console.log(removeStart('erase*****'))