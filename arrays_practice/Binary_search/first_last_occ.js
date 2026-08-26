// first and last occurrences of an element in an array

function firstLast(arr,key){
    firstOccurrence=-1;
    lastOccurrence=-1;
    start=0;
    end=arr.length-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]==key){
            firstOccurrence=mid;
            end=mid-1;
        }else if(arr[mid]>key){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    start=0;
    end=arr.length-1;
     while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]==key){
            lastOccurrence=mid;
            start=mid+1;
        }else if(arr[mid]>key){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return firstOccurrence+" "+lastOccurrence;
}

let arr=[1,2,3,3,3,4];
console.log(firstLast(arr,3));