/**
 * 724. Find Pivot Index
 * 
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
 */


/**
 *  THIS ONE I WAS UNABLE TO DO EVEN THE SOLUTION I AM WRITING IS LEARNED FROM OTHER RESOURCES
 *  BUT SOLUTION IS LIT AND EASY TO UNDERSTAND
 *  DRY RUN IS ONLY WAY TO UNDERSTAD THIS ONE
 */
function pivotIndex(arr){
let sum = 0;
let temp = 0;
for(let i  = 0 ; i < arr.length ; i++){
    sum+=arr[i];
}

for(let j =  0 ; j < arr.length ; j++){
    // Here see we are removing value from sum 
    sum-=arr[j]
    if(temp === sum) return j;
     temp+= arr[j];
}
return -1;
}

console.log(pivotIndex([-1,-1,-1,-1,-1,0]))