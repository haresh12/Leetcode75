/**
 *  2352. Equal Row and Column Pairs
 * 
 *  Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

   A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).


 */


function  pairs(grid) {
    const rows = grid.map(arr => arr.join())
    const columns = grid[0].map((col, i) => grid.map(row => row[i]).join())
    let count = 0
    for (let row of rows) {
        for (let column of columns) {
            if (row === column) count++
        }
    }
    return count
};



console.log([[3,2,1],[1,7,6],[2,7,7]])