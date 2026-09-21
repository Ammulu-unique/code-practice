// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

function moveRow(arr,i){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]!=0){
            arr[i][j]=-1;
        }
    }
}
function moveCol(arr,j){
    for(let i=0;i<arr.length;i++){
        if(arr[i][j]!=0){
            arr[i][j]=-1;
        }
    }
}



function markZero(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==0){
                moveRow(arr,i);
                moveCol(arr,j);
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==-1){
                arr[i][j];
            }
        }
    }
    return arr;
}

let arr=[
    [1,0,1,1],
    [1,0,1,0],
    [1,1,1,1]
]

console.log(markZero(arr));