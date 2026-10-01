//nth root of an binary search

function checkPower(mid,m,n){
    let ans=1;
    for(let i=1;i<=n;i++){
        ans=ans*mid;
        if(ans>m){
            return 2;
        }
    }
    if(ans===m){
        return 1;
    }
    return 0;
}

function nthroot(m,n){
    let low=1;
    let high=m;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        let midN=checkPower(mid,m,n);
        if(midN===1){
            return mid;
        }else if(midN===0){
            low=mid+1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}

console.log(nthroot(27,3));