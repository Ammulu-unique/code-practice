// row with maximum ones

function maxOnes(mat){
    let countMax=0;
    let index=0;
    let n=mat.length;
    let m=mat[0].length;
    for(let i=0;i<n;i++){
        let countOnes=0;
        for(let j=0;j<m;j++){
            countOnes+=mat[i][j];
        }
        if(countOnes>countMax){
            countMax=countOnes;
            index=i;
        }
    }
    return [index,countMax];
}

let matrix=[
    [0,1],
    [1,1]
]

console.log(maxOnes(matrix));