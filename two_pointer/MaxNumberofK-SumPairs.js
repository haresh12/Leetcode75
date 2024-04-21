/**
 *  1679. Max Number of K-Sum Pairs
 *  
 *  You are given an integer array nums and an integer k.

    In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

    Return the maximum number of operations you can perform on the array.

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.


Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 */


/**
 *  AT THIS TIME ONLY SOLUTION COMES IN MIND IS FIRST SORT THE ARRAY AND THEN USE TO POINTER
 *  WE WILL SEE IF ANY BETTER SOLUTION
 */



function  maxPair(nums,k){
// first sort the array
nums = nums.sort((a,b) => a - b);

// BELOW PART IS SIMPLE AND STANDARD FOR MOST OF PROBLEM
let i = 0;
let j = nums.length - 1;  // Here missed -1 so again 5 minute debug
let total = 0;
while(i < j){
 if(nums[i] + nums[j] > k){
   j--;
 }else if(nums[i] + nums[j] < k){
    i++;
 }else{
    total++;
    i++;
    j--;
 } 
}
return total
}


console.log(maxPair([3,1,3,4,3],6))