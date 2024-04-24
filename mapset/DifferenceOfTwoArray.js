/**
 *  2215. Find the Difference of Two Arrays
 *  
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
    Note that the integers in the lists may be returned in any order.


Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

 */

//Beats 93.65% of users with JavaScript GOOD
/**
 *  this one is easy but line number 42 why i had to do this thats intersting 
 */
function differnace(nums1,nums2){
  let obj1 = new Map();
  let obj2 = new Map()
  
  for(let i  = 0 ; i < nums1.length ; i++){
     obj1.set(nums1[i],true)
  }

  for(let i  = 0 ; i < nums2.length ; i++){
   if(obj1.has(nums2[i])) continue;  // THIS LINE IT LIT YOU CAN NOT REMEBER IT DO YOU WILL FACE ISSUE AND THEN YOU WILL COME UP WITH THIS 
    obj2.set(nums2[i],true)

 }
 for(let i = 0 ; i < nums2.length ; i++){
    if(obj1.has(nums2[i])) {
        obj1.delete(nums2[i])
    }
 }
 return [Array.from(obj1.keys()),Array.from(obj2.keys())]  // THIS IS I LEARNED FROM DOM SERIES BECAUSE DOM ALSO RETURN NODE LIST WHICH IS ITTERABLE
}

console.log(differnace([1,2,3],[2,3,4]))