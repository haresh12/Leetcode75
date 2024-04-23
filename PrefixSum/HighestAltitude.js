/**
 * 1732. Find the Highest Altitude 
 *  
 There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 

Example 1:

Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 */

// DONE IN 8 MIN ITS SIMPLE ARRAY QUESTION AND MAKE SURE UNDERSTAND FIRST THEN START CODING IT WAS POSSIBLE ONLY BECAUSE OF INPUT EXAMPLE
function maxHighestLatitude(arr){
let sum = 0;
let max =0; // because zero to return krna he hai its starting from there
for(let i = 0 ; i < arr.length ; i++){
    sum+=arr[i];
    if(sum > max){
      max = sum;
    }
}
return max

}

console.log(maxHighestLatitude([1,2,3,4]))