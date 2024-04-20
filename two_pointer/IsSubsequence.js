/**
 *  392. Is Subsequence
 * 
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some 
(can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 
 */


/**
 *  SEE QUESTION IT SELF SAYS THAT s and t consist only of lowercase English letters. SO WE CAN USE ANY SYMBOL LIKE _
 *  WE REALLY NEED TO LEARN MORE ABOUT STRINGS IN JS HOW THEY WORK BECAUSE AT THIS TIME ALL TIME I HAVE TO COVERT INTO ARRAY
 *  NO NEED TO CONVERT STRING TO ARRAY
 */
function isSubsequence(s,t){
if(s.length > t.length) return false;

let index = 0

for(let i = 0 ; i < t.length ; i++){
    
    if(s[index] === t[i]){
        index++;
    }
}
return index === s.length ; // make sure don't do index + 1; because if condition is true then it will go all three time in that if block 

}

console.log(isSubsequence('abc','ahbgdc'))