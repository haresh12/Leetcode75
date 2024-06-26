/**
 * 413. Arithmetic Slices
 * 
 * An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
Example 2:

Input: nums = [1]
Output: 0
 
 */

/**
 * NEED MORE LOGICAL IMPROVMENT ALMOST HAD TO RUN 10 TIMES
 */
function numberOfArithmeticSlices(nums) {
    let diffCount = 1
    let count = 0
    for(let i = 0; i < nums.length ; i++){

        if(nums[i - 1] - nums[i - 2] === nums[i] - nums[i - 1]){
            diffCount++
            if(diffCount >= 2){
                if(diffCount === 2){
                    count = count + 1
                }else{
                    count = count + diffCount - 1
                }
            }
        }else{
            diffCount = 1
        }
    }

    return count
};

console.log(numberOfArithmeticSlices([1,2,3,4]))