/**
 *  151. Reverse Words in a String
 * 
 * Given an input string s, reverse the order of the words.

   A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

   Return a string of the words in reverse order concatenated by a single space.

   Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space
   separating the words. Do not include any extra spaces.
 *  
 * 
 */


   /**
    *  DONE IN 5 MINUTE SEE HERE REVERSE WE CAN DO IT BY OUR SELF ALSO ITS NOT BIG DEAL MAKE THINGS SIMPLE
    */
   function reverse(str){
    let arr = str.split(' ');
    arr = arr.filter(item => item !== '')
    return arr.reverse().join(' ')
   }

   console.log(reverse('the sky is blue'));