//median in a matrix

function matMedian(mat){
    let n=mat.length;
    let m=mat[0].length;
    let arr=[];
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            arr.push(mat[i][j]);
        }
    }
    arr.sort((a,b)=>a-b);
    return arr[Math.floor((n*m)/2)];
}

let mat=[
    [1,5,7,9,11],
    [2,3,4,5,10],
    [9,10,12,14,16]
]

console.log(matMedian(mat));

//using binary search 

function upper(mat,x){
    let low=0;
    let high=mat.length-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(mat[mid]>x){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
}

function count(mat,mid){
    let count=0;
    for(let i=0;i<mat.length;i++){
        count+=upper(mat[i],mid);
    }
    return count;
}

function matMedian1(mat){
    let low=Infinity;
    let high=-Infinity;
    let n=mat.length;
    let m=mat[0].length;
    for(let i=0;i<n;i++){
        low=Math.min(low,mat[i][0]);
        high=Math.max(high,mat[i][m-1]);
    }
    let req=Math.floor((n*m)/2);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let smaller=count(mat,mid);
        if(smaller<=req){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return low;
}

console.log(matMedian1(mat));