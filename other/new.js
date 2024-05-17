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