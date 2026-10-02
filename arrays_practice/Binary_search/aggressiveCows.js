// Aggressive cows

function possiblePlacing(arr,mid,cows){
    let countCows=1;
    let last=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]-last>=mid){
            countCows++;
            last=arr[i];
        }
    }
    if(countCows>=cows){
        return true;
    }else{
        return false;
    }
}


function cowsPlacing(arr,cows){
    arr.sort((a,b)=>a-b);
    let low=1;
    let high=Math.max(...arr);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(possiblePlacing(arr,mid,cows)===true){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return high;
}

let arr=[0,3,4,7,9,10];
console.log(cowsPlacing(arr,4))