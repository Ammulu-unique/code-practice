//minimum number of days to make m Bouguets

function possible(arr,day,k){
    let count=0;
    let bouquetsno=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=day){
            count++;
        }else{
            bouquetsno+=Math.floor(count/k);
            count=0;
        }
    }
    bouquetsno+=Math.floor(count/k);
    return bouquetsno;
}

function daysNumber(arr,m,k){
    let max=Math.max(...arr);
    let min=Math.min(...arr);
    let n=arr.length;
    if(m*k>n){
        return -1;
    }
    for(let i=min;i<=max;i++){
        if(possible(arr,i,k)>=m){
            return i;
        }
    }
    return -1;
}

let arr=[7,7,7,7,13,11,12,7];
console.log(daysNumber(arr,2,3));

//using binary search

function minimumDays(arr,m,k){
    let n=arr.length;
    if(m*k>n){
        return -1;
    }
    let low=Math.min(...arr);
    let high=Math.max(...arr);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(possible(arr,mid,k)>=m){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
}

console.log(minimumDays(arr,2,3));