// finding peak element in a matrix

function rowIndex(mat,mid){
    let maxElement=0;
    let index=0;
    for(let i=0;i<mat.length;i++){
        if(mat[i][mid]>maxElement){
            maxElement=mat[i][mid];
            index=i;
        }
    }
    return index;
}

function peakElement(mat){
    let n=mat.length;
    let m=mat[0].length;
    let low=0;
    let high=m-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let rowNum=rowIndex(mat,mid);
        let left=mid-1 >=0 ? mat[rowNum][mid-1] : -Infinity;
        let right=mid+1 < m ? mat[rowNum][mid+1] : -Infinity;
        if(mat[rowNum][mid]>=left && mat[rowNum][mid] >=right){
            return [rowNum,mid];
        }
        if(mat[rowNum][mid]<left){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return [-1,-1];
}

let mat=[
    [4,2,1,5,4,5],
    [2,9,3,2,3,2],
    [1,7,6,0,1,3],
    [3,6,2,3,7,2]
]

console.log(peakElement(mat));