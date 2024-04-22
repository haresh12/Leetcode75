/**
 *  Maximum Average Subarray I
 * 
 *  You are given an integer array nums consisting of n elements, and an integer k.
    Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
    Any answer with a calculation error less than 10-5 will be accepted.

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 */


/**
 *  DONE IN 15 MIN MAX
 *  SEE WHEN EVER SUBARRAY PROBLEMS COME WE NEED TO THING ABOUT SLIDING WINDOW FIRST
 *  ALWAYS THING ABOUT EDGE CASE LIKE WHAT IF ARRAY SIZE IS LESS THEN K IT MAY IMPECT IN SOME PROBLEM
 *  [-1]   let maxSubArray = Number.MIN_SAFE_INTEGER;  here expected answer was -1 but i was getting 0 because maxSubArray default value 
 *  was 0 SO EDGE CASES MATTERSS
 * 
 * THIS SOLUTION WILL FAIL BECAUSE TIME LIMIT EXCEED IT MAKE SENSE BECAUSE SUPPOSE YOU HAVE 1 2 3 4 5 FIRST YOU ARE DOING COMUPATION OF 
 * 1 2 3 4 WHICH IS 10 NOW NEXT TIME YOU ALREADY HAVE COMUTATION OF 2 3 4 THEN WHY ARE YOU DOING IT AGAIN I WILL TRY TO SOLVE IT DIFFERENT
 * WAY BUT LETS KEEP THIS ONE HERE ONLY
 */
function maxSubArrayTimeLimitExceed(arr,k){
let maxSubArray = Number.MIN_SAFE_INTEGER;   
for(let i = 0 ; i <= arr.length - k ; i++){
    // IN ALMOST ALL PROBLEM OF SLIDING WINDOW THIS WILL BE USEFUL FOR SURE
    let current = i;
    let max = current + k
    let total = 0;
    let currentMax = 0;
    while(current < max){
        total+=arr[current];
        current++;
    }
    currentMax = total/k

    if(currentMax > maxSubArray) maxSubArray = currentMax;
}
return maxSubArray
};


console.log(maxSubArrayTimeLimitExceed([-1],1))


/**
 *  FOR NOW ITS FINE BUT ITS COMPLEX WE NEED TO LEARN SLIDING WINDOW PROPER WAY
 *  FOR SLIDING WINDOW AT THIS TIME ITS ALL ABOUT FORMULA THAT WE CREATE ITS TALKING MORE TIME NEED TO GO DEEP INTO THAT
 * 
 *  AND HERE AFTER ONE HOUR THIS IS THE CODE THAT PASSED
 */
function maxSubArray(arr,k){
if(arr.length <= k){
   total =  arr.reduce(((curr,total) => total+= curr ),0) 
   return total/k
}else {
  let total = 0;
  for(let i  =  0  ; i < k ; i++){
    total+=arr[i]
  }
 let maxSubArray = total;
 for(let i = k ; i < arr.length ; i++){
  const current = (total + arr[i] - arr[i -k]);
    if(current  > maxSubArray){
      maxSubArray =  current;
    }
    total = current;    
 }
 // After doing only adding we can divide them with k that also fine if we think logical
 return maxSubArray/k 
}

}


console.log(maxSubArray([7,4,5,8,8,3,9,8,7,6],7))