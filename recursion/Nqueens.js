//place four queens with three cconditions

function queens(n){
    let ans=[];
    //create a board
    let board=Array.from(
        {length:n},
        ()=>Array(n).fill('.')
    );

    //check if position is safe or unsafe
    
    function isSafe(row,col){
        //check if queen is present in the same column but different rows
        for(let i=0;i<row;i++){
            if(board[i][col]==='Q'){
                return false;
            }
        }

        //upper left diagonal
        for(let i=row-1,j=col-1;i>=0 && j>=0; i--,j--){
            if(board[i][j]==='Q'){
                return false;
            }
        }

        //upper right diagonal

        for(let i=row-1,j=col+1;i>=0 && j<n;i--,j++){
            if(board[i][j]==='Q'){
                return false;
            }
        }
        return true;
    }

    function backtrack(row){
        if(row===n){
            ans.push(board.map(r=>r.join("")));
            return;
        }
        for(let col=0;col<n;col++){
            if(isSafe(row,col)){
                board[row][col]='Q'; //place queen in safe position
                backtrack(row+1); // explore
                board[row][col]='.'; //undo to find other posiible way by removing queen
            }
        }
    }
    backtrack(0);
    return ans;
}

console.log(queens(4));