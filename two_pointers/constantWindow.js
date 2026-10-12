//calculate where sum of four numbers in an  array=k

function constantWindow(arr,windowSize,k){
    let l=0;
    let r=windowSize-1;  //we do this to get accurate position of elements we need as indexing starts from 0
    let sum=0;
    for(let i=l;i<=r;i++){ //Initially considering a window and calculating the sum of initial window
        sum=sum+arr[i];
    }
    if(sum===k){  // checking is sum=k for initial window
        return [l,r];
    }
    while(r<arr.length-1){ //updating values by removing, adding, incrementing until loop reaches n-1
        sum=sum-arr[l];
        l++;
        r++;
        sum=sum+arr[r];
        if(sum===k){
            return [l,r];
        }
    }
    return -1;
}

let arr=[0,0,1,3,3,4,5,-1];
console.log(constantWindow(arr,4,4));