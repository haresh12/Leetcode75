/**
 *  1768. Merge Strings Alternately
 *   
 *  You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other,
 *  append the additional letters onto the end of the merged string.
 */


/**
 *  BAD SOLUTION BUT STILL DO IT BY SELF
 *  EVERY TIME WHEN STRING PROBLEM COMES ONLY SOLUTIONS COMES INTO MIND THAT
 *  COVERT THAT INTO ARRAY AND THEN SOLVE THE PROBLEM
 * 
 *  SOONER OR LATER WE NEED
 */
function mergeString(str1 , str2){
 let newString = [];
 let index = 0;
 let arr1 = str1.split('');
 let i = 0;
 let j = 0;
 let arr2 = str2.split('');
 let total = arr1.length + arr2.length;

 while(index < total){
   if(arr1[i] && arr2[j]){
      newString.push(arr1[i]);
      newString.push(arr2[j]);
      i++;
      j++;
   }else if(arr1[i]){
     newString.push(arr1[i])
     i++
   }else if(arr2[j]){
    newString.push(arr2[j])
    j++;
   } 
   index++;
 }

 return newString.join('');
}

console.log(mergeString("ab","pqrs"));