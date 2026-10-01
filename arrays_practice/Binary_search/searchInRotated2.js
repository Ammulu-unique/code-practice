//search in rotated 2

function rotated2(arr,target){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]===target){
            return true;
        }
        if(arr[low]===arr[mid] && arr[mid]===arr[high]){
            low++;
            high--;
            continue;
        }
        //left
        if(arr[low]<=arr[mid]){
            if(arr[low]<=target && target<=arr[mid]){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }else{
            if(arr[mid]<=target && target<=arr[high]){
                low=mid+1;
            }else{
                high=mid-1;
            }
        }
    }
    return false;
}

let arr=[7,8,9,1,1,2,3,4,5,5];
console.log(rotated2(arr,5));