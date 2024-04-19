/**
 * Increasing Triplet Subsequence  
 * 
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 * 
 * Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

 *  
 */

/**
 *  in short we need find if in any array if any 3 value are like i < j < k like in case of 5 6 7 its true in case of 3 2 4 its false
 */


/**
 *  HERE ONE BIG POINT WE MISSED SEE THIS SOLUTION WILL ONLY WORK WHEN THEY NEED IN SEQUESNCE BUT HERE ITS NOT CASE
 */
// function anyTriplate(arr){

// let i = 0;
// let j = 1;
// let k = 2;

// while(i < arr.length - 2){
//  if(arr[i] < arr[j] && arr[j] < arr[k] ){
//     return true
//  }else if(arr[i] > arr[j]   ){
//     i++;
//  }else if(arr[i] > arr[k])
//  i++;
//  j++;
//  k++;
// }
// return false;
// }


function anyTriplate(nums){
    let a = Infinity;b = Infinity, c = Infinity;
    for(let i=0;i<nums.length;i++){
     if(a>= nums[i]) a=nums[i];
     else if(b>= nums[i]) b =nums[i];
     else if(c>= nums[i]) return true;
   }
   return false
}
console.log(anyTriplate([2,1,5,0,4,6]));
