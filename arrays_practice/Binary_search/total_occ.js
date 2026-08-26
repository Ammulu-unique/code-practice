// total number of occurrences of an element

function totalOccurrence(arr,element){
    let firstOcc=-1;
    let lastOcc=-1;
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]==element){
            firstOcc=mid;
            end=mid-1;
        }else if(arr[mid]>element){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    start=0;
    end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]==element){
            lastOcc=mid;
            start=mid+1;
        }else if(arr[mid]>element){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    if(firstOcc===-1){
        return 0;
    }
    let ans=(lastOcc-firstOcc)+1
    return ans;

}


let arr=[1,2,2,2,3,4];
console.log(totalOccurrence(arr,4));