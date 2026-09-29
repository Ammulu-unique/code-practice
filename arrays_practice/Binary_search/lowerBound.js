// finding smallest index such that arr[index]>=x

function lowerBound(arr,target){
    let n=arr.length;
    let low=0;
    let high=n-1;
    let ans=n;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]>=target){
            ans=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans;
}

let arr=[1,2,3,3,5,8,8,10,10,11];
console.log(lowerBound(arr,9));