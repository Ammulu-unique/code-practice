// adding primary diagonal and secondary diagonal elements 

function diagonalSum(matrix){
    let n=matrix.length;
    let m=matrix[0].length;
    let sum=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(i===j){
                sum+=matrix[i][j];
            }else if(j===n-i-1){
                sum+=matrix[i][j];
            }
        }
    }
    return sum;
}

//optimized version 

function diagonalSum1(matrix){
    let sum=0;
    let n=matrix.length;
    for(let i=0;i<n;i++){
        sum+=matrix[i][i];
        if(i!==n-i-1){
            sum+=matrix[i][n-i-1];
        }
    }
    return sum;
}

let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let matrix1=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(diagonalSum(matrix));
console.log(diagonalSum1(matrix1));

