/**
 *  String Compression
 * 
 *  Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. 
Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.


 
 */


/**
 *  THIS ONE IS DONE BUT WILL CONTINUE AGAIN TOMORROW BECAUSE WE NEED TO MODIFY SAME ARRAY
 */
function compression(arr) {

let output = [];

let current = arr[0];
let total = 1;
for(let i = 1; i <=arr.length ; i++){  
   if(current === arr[i]) {
     total++;
   }else {
    if(total === 1){
        output.push(current);
    }else{
        output.push(current);
        let totalInstr = `${total}`
        for(let i = 0 ; i < totalInstr.length ; i++){
            output.push(totalInstr[i]);
        }
    }
    current = arr[i];
    total =1;

   }
}
return output;
}

console.log(compression(["a","a","b","b","c","c","c"]))