// searching a key using binary search method

function binary_search(arr,key){
    let n=arr.length;
    let start=0;
    let end=n-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);//normal formula
        //to avoid overflow we use mid=Math.floor(start+(end-start)/2);
        if(arr[mid]===key){
            return mid;
        }else if(arr[mid]>key){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return -1;
}

let arr=[1,2,3,55,66];
console.log(binary_search(arr,3))