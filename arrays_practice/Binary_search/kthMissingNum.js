// kth missing number in an array

function kthMissing(arr,k){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=k){
            k++;
        }else{
            break;
        }
    }
    return k;
}

arr=[2,3,4,7,11];
console.log(kthMissing(arr,5));

//binary search approach 

function kthMissing1(arr,k){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let missing=arr[mid]-(mid+1);
        if(missing<k){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return high+1+k;
}

console.log(kthMissing1(arr,5));