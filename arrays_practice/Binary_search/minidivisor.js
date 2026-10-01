//find the smallest divisor given threshold

function divisor(arr,t){
    for(let i=1;i<=Math.max(...arr);i++){
        let sum=0;
        for(let j=0;j<arr.length;j++){
            sum+=Math.ceil(arr[j]/i);
        }
        if(sum<=t){
            return i;
        }
    }
    return -1;
}

let arr=[1,2,5,9];
console.log(divisor(arr,6));

function sumDivisor(arr,mid){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=Math.ceil(arr[i]/mid);
    }
    return sum;
}


function minidivisor(arr,threshold){
    let low=1;
    let high=Math.max(...arr);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(sumDivisor(arr,mid)<=threshold){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
}

console.log(minidivisor(arr,6));