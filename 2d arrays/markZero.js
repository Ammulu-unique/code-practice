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
                arr[i][j]=0;
            }
        }
    }
    return arr;
}

let arr=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
]

console.log(markZero(arr));

// better solution 

function markZero1(arr){
    let n=arr.length;
    let m=arr[0].length;
    let col=new Array(m).fill(0);
    let row=new Array(n).fill(0);
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]===0){
                col[j]=1;
                row[i]=1;
            }
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(col[j]===1 || row[i]===1){
                arr[i][j]=0;
            }
        }
    }
    return arr;
}

let arr1=[
    [0,1,1],
    [1,1,1],
    [1,1,1]
]

console.log(markZero1(arr1));

//optimal solution 

function markZero2(arr){
    let n=arr.length;
    let m=arr[0].length;
    let col0=1;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(arr[i][j]===0){
                arr[i][0]=0;
                if(j!==0){
                    arr[0][j]=0;
                }else{
                    col0=0;
                }
            }
        }
    }
    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(arr[i][0]===0 || arr[0][j]===0){
                arr[i][j]=0;
            }
        }
    }
    if(arr[0][0]===0){
        for(let j=1;j<m;j++){
            arr[0][j]=0;
        }
    }
    if(col0===0){
        for(let i=0;i<n;i++){
            arr[i][0]=0;
        }
    }
    return arr;
}

let arr3=[
    [1,1,1,1],
    [1,0,1,1],
    [1,1,0,1],
    [0,1,1,1]
]

console.log(markZero2(arr3));