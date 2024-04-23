/**
 *  Longest Subarray of 1's After Deleting One Element 
 * 
 *  Given a binary array nums, you should delete one element from it.

    Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray
    Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
 */


/**
 * Here the strategy i will use is like we will thing about remove at and but first convert into one to see how big subArray can be
 * HERE ENTIRE LOGIC IS SAME AS MaxConsecutiveOnes
 */
function  longestSubArray(nums){
    let i = 0;
    let j = 0;
    let current = 0;
    let max = 0;
    let isConverted = false;

    while(i < nums.length){

        if(nums[i] === 0 && isConverted === false){
             isConverted = true; // imaginory conversation of 0 into 1
            current++;
            i++;
        }

        if(nums[i] === 1){
            current++;
            i++;
        }

        if(nums[i] === 0 && isConverted){
          if(current > max) max = current; // THIS ONE LINE YES THIS ONE LINE WASTED 30 MIN AND CREATED ENDLESS DOUBT  current = max nhi BHAI max = current hoga
         
          while(nums[j] !== 0){
            j++;
          }
          j++;
          current = i - j;
          isConverted = false;
        }
    }
    console.log(current,max)
    
    return Math.max(current,max) -1;
} 

console.log(longestSubArray([0,1,1,1,0,1,1,0,1]))