/**
 * We are given an array asteroids of integers representing asteroids in a row.

   For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, 
   negative meaning left). Each asteroid moves at the same speed.

   Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
   If both are the same size, both will explode. Two asteroids moving in the same direction will never meet

  
   Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 */


// WIP
function  asteroidCollision(arr){
 let output = [];

 for(let i = 0 ; i < arr.length ; i++){
      if(output.length === 0){
        output.push(arr[i]);
      }else {
        let top = output[output.length - 1];
        let curr = arr[i];
        // both are in same direction nothing needed to be done
        if((curr > 0  && top > 0) || (curr < 0  && top < 0)){
            output.push(curr);
        }else if(-top === curr){
            output.pop();
        }else if(-curr === top){
            output.pop()
        }
        else if (top > 0 && curr < 0) {
            // because current will colleps
             continue;
        }else if(top < 0 && curr > 0){
             output.pop();
             output.push(curr)
        }
      }
 }
 return output;
}

console.log(asteroidCollision([10,2,-5]));