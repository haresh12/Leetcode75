/**
 * 605. Can Place Flowers 
 * 
 *  You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

  Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed 
  without violating the no-adjacent-flowers rule and false otherwise.

  HERE MEANING OF ADJACENT MATTERS IN SIMPLE USKE LEFT AND RIGHT ME BARA HUA NHI HONA CHAIYE
 */


// [1,0] weird test case failed

/**
 *  DONE BY SELF MAX 20 MIN BUT FEW EDGE CASED MISSED SEE WHEN YOU CHECK THIS ONLY i === 0 && arr[i] === 0 THEN WHAT IF AT POSITION 1 WE ALREADY HAVE 1 THEN ITS
 *  NOT GOING TO WORK SO MUST CHECK LIKE NEXT ONE IS ALSO 0 
 *  
 *  SAME FOR LAST POSITION DON'T DIRECTLY PUT BEFORE PUTTING CHECK IF ONE BEFORE LAST ONE IS ALSO 0 .
 * 
 *  SO ALL ISSUES HAPPEND ONLY IN IF CONDITION
 */
function canPlaceFlovers(arr, num){
    for(let i  = 0 ; i < arr.length ; i++){
        if(num <= 0) return true;
        if((i === 0 && arr[i] === 0 && arr[i+1] === 0) ||  (i === arr.length -1 && arr[i] === 0 && arr[i-1] !== 1)){
           arr[i] = 1;
           num--;
        }else {
           if(arr[i-1] === 0 && arr[i] === 0 && arr[i+1] === 0){
               arr[i] = 1;
               num--;
           }
        }
       }
     if(num === 0) return true 
     else return false
}

