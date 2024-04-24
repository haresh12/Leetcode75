/**
 *  Unique Number of Occurrences
 * 
 *  Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 * 
 * Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

 */


// THIS ONE IS STRIGHT FORWARD
/**
 *  EVEN ITS STRAIGHT FORWARD BUT WHY USING SET IS HERE AND COMING IN MIND AT RIGHT TIME WAS LIT
 *  DONE IN 10 MIN 
 *  LITTLE ISSUE HAPPEND IN SET METHOD LIKE size() OR lengh OR its size property
 *  IF YOU UNDERSTAND THIS ONE MEANS YOU HAVE BASIC UNDERSTADING OF WHERE TO USE SET AND MAP
 */
function unique(arr){
 let map = new Map();
 for(let i  = 0 ; i < arr.length ; i++){
     if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1);
     }else{
        map.set(arr[i], 1);
     }
 }

 // TILL PROGRAM REACHES HERE WE WILL HAVE INFO LIKE WHICH KEY EXIST HOW MANY TIME


 return Array.from(map.values()).length === new Set(Array.from(map.values())).size  // no length no size() its size property not method

}

console.log(unique([2,2,1,1,3]))