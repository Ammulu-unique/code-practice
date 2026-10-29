// solve sudoku

function sudoku(board){
    function isValid(row,col,c){
        for(let i=0;i<9;i++){
            //row
            if(board[i][col]===c){
                return false;
            }
            //col
            if(board[row][i]===c){
                return false;
            }
            //3x3 box
            let boxrow=3*Math.floor(row/3)+Math.floor(i/3);
            let boxcol=3*Math.floor(col/3)+(i%3);
            if(board[boxrow][boxcol]===c){
                return false;
            }
        }
        return true;
    }

    function solve(){
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]==='.'){
                    for(let c=1;c<=9;c++){
                        let digit=String(c);
                        if(isValid(i,j,digit)){
                            board[i][j]=digit;
                            if(solve()){
                                return true;
                            }
                            board[i][j]='.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    return solve();
}

let board=[["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]]

console.log(sudoku(board));