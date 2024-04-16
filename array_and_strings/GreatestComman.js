/**
 * 1071. Greatest Common Divisor of Strings
 * 
 *  For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */


    /**
     *  THIS IS LIT INCREDIBLE QUESTION 20 MIN SPENT ON WRONG QUESTION UNDERSTANDING
     *  DONE BY SELF BUT TOOK ONE HOUR
     */
function commonDivisor(str1,str2) {
let outPutString = str2;
   
while(true){
   if(outPutString === str1){
      return str2; // HERE I WAS RETURNING OUTPUTSTRING WRONG THOUGHT
   }
   if(str2.length === 0) return ""  // LEARN WHERE TO PUT WHICH CONDITION IT MATTERS

 if(outPutString.length < str1.length){
      outPutString  = `${outPutString}` + `${str2}`;
   } else if(outPutString.length >= str1.length){  // HERE EQUAL SIGN WAS MISSING
      outPutString = "";
      outPutString = str2.substring(0,str2.length-1)
      str2 = str2.substring(0,str2.length-1)
   }
}
}

 console.log(commonDivisor("LEET","CODE"))
