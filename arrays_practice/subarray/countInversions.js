// count inversions

function inversions(arr){
    let count=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(i<j && arr[i]>arr[j]){
                count++;
            }
        }
    }
    return count;
}

let arr=[5,3,2,4,1];
console.log(inversions(arr));

// using merge sort
let count=0;
function merge(arr,low,mid,high){
    let temp=[];
    let left=low;
    let right=mid+1;
    while(left<=mid && right<=high){
        if(arr[left]<arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            count+=(mid-left+1);
            right++;
        }
    }
    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }
    for(let i=0;i<temp.length;i++){
        arr[i+low]=temp[i];
    }
}

function mergeSort(arr,low,high){
    if(low>=high){
        return;
    }
    let mid=Math.floor((low+high)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
}

function inversion1(arr,n){
    mergeSort(arr,0,n-1);
    return count;
}

let arr1=[5,3,2,4,1];
console.log(inversion1(arr1,arr1.length));