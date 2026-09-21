//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

function rotateMatrix(arr){
    let n=arr.length;
    let ans=Array.from(
        {length:n},
        ()=>new Array(n)
    );
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            ans[j][(n-1)-i]=arr[i][j];
        }
    }
    return ans;
}

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(rotateMatrix(matrix));

//optimal solution

function rotateImage1(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]];
        }
    }
    for(let i=0;i<n;i++){
        arr[i].reverse();
    }
    return arr;
}
let arr1=[
    [12,13,14],
    [15,16,17],
    [18,19,20]
]
console.log(rotateImage1(arr1));