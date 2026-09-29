// upper bound is nothing but smallest index such that arr[index]>x

function upperBound(arr,x){
    let n=arr.length;
    let start=0;
    let end=n-1;
    let ans=n;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]>x){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return ans;
}

let arr=[2,3,6,7,8,8,11,11,11,12];
console.log(upperBound(arr,10));