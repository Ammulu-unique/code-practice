//floor and ceil

function floorandCeil(arr,x){
    let floor=-1;
    let n=arr.length;
    let ceil=n;
    let start=0;
    let end=n-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]<=x){
            floor=arr[mid];
            start=mid+1;
        }else{
            end=mid-1;
        }
    }

    start=0;
    end=n-1;
    while(start<=end){
        let mid=Math.floor(start+(end-start)/2);
        if(arr[mid]>=x){
            ceil=arr[mid];
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return [floor,ceil];
}

let arr1=[10,20,30,40,50]
console.log(floorandCeil(arr1,25));