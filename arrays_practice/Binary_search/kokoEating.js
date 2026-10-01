// koko eating bananas
function maxval(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

function hours(arr,mid){
    let totalH=0;
    for(let i=0;i<arr.length;i++){
        totalH+=Math.ceil(arr[i]/mid);
    }
    return totalH;
}

function eating(arr,h){
    let low=1;
    let high=maxval(arr);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let totalH=hours(arr,mid);
        if(totalH<=h){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
}

let arr=[3,6,7,11];
console.log(eating(arr,8));