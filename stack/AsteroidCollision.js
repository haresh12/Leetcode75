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


/**
 *  THIS ONE IS LIT
 *  SEE WE HAVE HELL LOT OF CONDITIONS HERE IT TOOK MORE TIME THEN EXPECTED
 *  EDGE CASES ARE LIKE HELL
 * 
 *  BUT FORGET ABOUT ABOVE ALL POINTS ONE THING THAT I MISSED IS LIKE
 * 
 *  IF AT TOP YOU HAVE -X AND THEN AT CURR YOU HAVE +Y THEN WE ARE NOT GOING TO DO ANYTHING JUST PUST BECAUSE - VALA ALREADY LEFT SIDE
 *  CHLA GYA HE COLLITION POSSIBLE NHI HE TRY WITH [-2,-1,1,2]
 */
function  asteroidCollision(arr){
 let output = [arr[0]];
 
 for(let i  = 1 ; i < arr.length ; i++){
   let curr = arr[i];
    let top  =  output[output.length - 1];
      
       if(!top){
        output.push(curr);
        continue;
       }
       if((top > 0 && curr > 0) || (top < 0 && curr < 0) || (top < 0 || curr > 0)){
        // this means both are in same direction;
        output.push(curr);
      }else if (((top > 0 && curr < 0) && (top === -curr)) || (top < 0 && curr > 0 && (-top === curr))){
           output.pop();
      }else if((curr < 0 && top > 0) && (-curr > top)) {
          output.pop();
          i--;  // IF YOU DON'T UNDERSTAND THIS LINE YOU ARE MISSING ENTIRE STUFF
      }else if((top < 0 && curr > 0) && (-top > curr)){
        continue;
      }
   }

 return output
}

console.log(asteroidCollision([-2,-2,1,-1]));