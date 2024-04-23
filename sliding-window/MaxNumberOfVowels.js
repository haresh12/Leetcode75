/**
 * 1456. Maximum Number of Vowels in a Substring of Given Length
 * 
 * 
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 */



/**
 * THIS IS THE BEST THING HAPPEND TODAY SUBMITTED IN FIRST TIME ALSO 90 BEATS
 * 
 * SEE SLIDING WINDOW CAN MOST OF TIME GIVE YOU TLD ERROR SO THAT THE FIRST THING WE NEED TO CARE ABOUT
 * 
 */
function maxVowels(str,k){
str = str.toLowerCase();
if(str.length <= k){ 
   return str.split('').filter((char) => isVowle(char)).length
}else{
   let curr = 0;
   let max = 0;
   for(let i  =  0 ; i < k ; i++){
      if(isVowle(str[i])){
        curr++;
      }
    }

    // Because this is first round
     max = curr;
    for(let i = k ; i < str.length ; i++){
       if(isVowle(str[i])) curr++;
       if(isVowle(str[i-k])) curr--;

       if(curr > max) max = curr
    }
    return max  

}
}

function isVowle(char) {
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' 
}

console.log(maxVowels('abciiidef',3))