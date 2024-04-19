/**
 * Product of Array Except Self
 *  
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

   The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

  You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
  
  
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */


/**
 *  SEE NOT SURE THIS IS GOOD OR BAD SOLUTION BUT DONE IN 15 MIN 
 * 
 *  MAKE SURE WHEN YOU ARE MULTIPLIYING THAT TIME DEFAULT VALUE SHOULD BE 0
 */
function product(arr){

let total = 1;
let totalZeros = 0
let positionOfZero = -1;
let output = [];
 
for(let i  = 0 ; i < arr.length ; i++){

    if(arr[i] === 0) {
        positionOfZero = i;
        totalZeros++;
        continue;
    }
    total*=arr[i];
}

console.log(total)

if(totalZeros > 1 ) return new Array(arr.length).fill(0)
else if(totalZeros === 1) {
   output = new Array(arr.length).fill(0);
   output[positionOfZero] = total;
   return output;
}else {
   for(let i = 0 ; i < arr.length ; i ++){
      output.push(Math.floor(total/arr[i]));
   }
   return output;
}
}

console.log(product([-1,1,0,-3,3]))