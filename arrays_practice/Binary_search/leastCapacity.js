// capacity to ship packages in D days

function dayscal(weights,cap){
    let days=1;
    let load=0;
    for(let i=0;i<weights.length;i++){
        if(load+weights[i]>cap){
            days+=1;
            load=weights[i];
        }else{
            load+=weights[i];
        }
    }
    return days;
}


function days(weights,days){
    let low=Math.max(...weights);
    let high=weights.reduce((a,b)=>a+b,0);
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let daysNum=dayscal(weights,mid);
        if(daysNum<=days){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low;
}

let weights=[3,2,2,4,1,4];
console.log(days(weights,3));