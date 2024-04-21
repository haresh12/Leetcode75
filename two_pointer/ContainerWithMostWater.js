/**
 *  11. Container With Most Water
 * 
 *   You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

     Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

     Notice that you may not slant the container.

input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, 
the max area of water (blue section) the container can contain is 49.
 */


/**
 *  THIS IS PERFECT ONE THING NEEDED TO BE LEARNED THAT MOST OF TIME I RETURN VALUE FROM INSIDE LOOP AND I HAVE TO DEBUG
 *  MAKE SURE YOU ALWAYS RETURN VALUE OUTSIDE OF LOOP
 */
function maxWater(arr){
  let i = 0;
  let j = arr.length - 1;
  let max = Number.MIN_SAFE_INTEGER;
  
  while( i < j){
    // step 1 we found at this stage what could be the max
    let current = Math.min(arr[i],arr[j]) * (j - i)
    console.log(current)
    if(current > max){
        max = current;
    }

    // now next is which index we should be further
    if(arr[i] > arr[j]){
        j--;
    }else{
      i++
    }
  }
  return max;
}

console.log(maxWater([1,50,6,50,5,4,8,3,7]))