/**
 *  2352. Equal Row and Column Pairs
 * 
 *  Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

   A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).


 */


 
  /**
   *  SEE THIS IS NOT THE WORLDS BEST ANS BUT HERE PURPOSE IS TO FIRST DO IT BY YOUR SELF IMPROVEMANT CAN BE LEARNED FOR SURE
   * 
   *  IMPORT THING TO LEARN FROM THIS IS HOW CAN CAN TRAVSE IN GRID ALSO grid[i][j] FOR ROW FIRST AND grid[j][i] FOR COLON FIRST
   * 
   *  WE NEED TO THING ABOUT WHAT IF TWO KEYS ARE SAME IN THAT CAN IT SHOULD BE COUNT AS 2 NOT ONE BUT OBJECT WILL OVERIDE IT
   * 
   *  NOTHING WORKED OUT AFTER ONE HOUR BAD DAY
   *  
   */
 function pairs(grid){
  if(allSame(grid)){
    return grid.length * grid[0].length;
  }
  console.log(allSame(grid))
  let currentRow = ``;
  let currentCol = ``;
  let output = {};
  let tempRow = {};
  let temCol = {}
  let ans = 0;
 for(let i = 0 ; i < grid.length ; i++){
   for(let j = 0 ; j < grid[i].length ; j++){
     currentRow+=grid[i][j];
     currentCol+=grid[j][i];  
   }
   if(currentCol === currentRow){
     if(output[currentCol]){
       output[currentCol]+=1;
     }else{
      output[currentCol] = 1;
     }
   }else if(currentCol in output){
    output[currentCol]+=1
   }else if(currentRow in output){
    output[currentRow]+=1
   }else if(currentCol in tempRow){
    if(output[currentCol]){
      output[currentCol]+=1;
    }else{
     output[currentCol] = 1;
    }
   }else if (currentRow in temCol){
    if(output[currentCol]){
      output[currentCol]+=1;
    }else{
     output[currentCol] = 1;
    }
   }
   else {
    temCol[currentCol] =  1
    tempRow[currentRow] = 1
   }
   currentCol = '';
   currentRow = '';
 }

 console.log(output)
  ans = Object.values(output).reduce((accum,curr) =>  accum = accum + curr , 0)
 return ans;
 }

 function allSame(grid){
  for(let i = 0 ; i < grid.length ; i++){
      for(let j = 0 ; j < grid[i].length ; j++){
         if(grid[i][j] !== grid[j][i]) return false
      }
  }
  return true
 }
 console.log(pairs([[13,13],[13,13]] ))