//search key in sorted matrix

//brute force

function searchKey(mat,key){
    let n=mat.length;
    let m=mat[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(mat[i][j]===key){
                return [i,j];
            }
        }
    }
    return -1;
}

let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(searchKey(matrix,5));

// better solution using binary search

function binarySearch(arr,key){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]===key){
            return mid;
        }else if(arr[mid]<key){
            start=mid+1;
        }else{
            end=mid-1;
        }
    }
    return -1;
}

function searchkey1(mat,key){
    let n=mat.length;
    for(let i=0;i<n;i++){
        let result=binarySearch(mat[i],key);
        if(result!==-1){
            return [i,result];
        }
    }
    return -1;
}

console.log(searchkey1(matrix,5));

//optimized version

function searchKey2(mat,key){
    let n=mat.length;
    let m=mat[0].length;
    let i=0;
    let j=m-1;
    while(i<n && j>=0){
        if(mat[i][j]===key){
            return [i,j];
        }else if(mat[i][j]<key){
            i++;
        }else{
            j--;
        }
    }
    return -1;
}


console.log(searchKey2(matrix,5));

