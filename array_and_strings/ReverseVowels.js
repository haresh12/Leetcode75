/**
 *  345. Reverse Vowels of a String  
 * 
 *  Given a string s, reverse only all the vowels in the string and return it.
    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower 
    and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

 */



function isVowels(char) {

  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
     char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
   
        return true;
      
  }  
  
  return false;

}

/**
 *  DONE IN 15 MINUTE BUT THIS ONE WAS EASY STILL MAD HELL LOT OF MISTAKES PLEASE FOCUS WHEN YOU DO THIS
 */
function reverseVowels(str){
let i = 0;
let j = str.length - 1;
let arr = str.split('');

 while(i < j){
    if(isVowels(str[i]) && isVowels(str[j])){
        console.log('a')
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
       i++;
       j--;
    }else if(!isVowels(str[i])){
        i++;
    }else if(!isVowels(str[j])){
       j--; 
    }

 }
  return arr.join('');
}

console.log(reverseVowels('hello'))


