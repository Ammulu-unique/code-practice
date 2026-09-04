// check if array is sorted in non-decreasing order

function sortArrayCheck(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        if(arr[i]>=arr[i-1]){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

let arr1=[1,2,3,4];
console.log(sortArrayCheck(arr1))

// check if array is sorted and rotated

function sortRotateArray(arr){
    let n=arr.length;
    let count=0;
    for(let i=0;i<n;i++){
        if(arr[i]>arr[(i+1)%n]){
            count++;
        }
    }
    return count<=1;
}

let arr2=[3,4,5,1,2]
console.log(sortRotateArray(arr2))