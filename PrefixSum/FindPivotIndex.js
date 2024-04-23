/**
 * 724. Find Pivot Index
 * 
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
 */


// WIP
function pivotIndex(arr){
 let i = 0;
 let j = arr.length - 1;
 let leftTotal = 0;
 let rightTotal = 0;


//  while(i <= j){
//    leftTotal+=arr[i];
//    i++;
//    console.log(leftTotal,rightTotal)
//    if(leftTotal === rightTotal) return i;
//    rightTotal+=arr[j];
//    j--;
//    if(leftTotal === rightTotal) return i;

//  }
 i = 1;
 j = arr.length -1;
 leftTotal = 0;
 rightTotal =0
 while(i < j){
    leftTotal+=arr[i];
    i++;
    console.log(leftTotal,rightTotal)
    if(leftTotal === rightTotal) return i;
    rightTotal+=arr[j];
    j--;
    if(leftTotal === rightTotal) return i;
 
  }

 return -1;
}

console.log(pivotIndex([2,1,-1]))