//Check if a number is Armstrong Number or not

function armstrong(n){
    let m=n;
    let p=n;
    let arm=0;
    let count=0;
    while(m!==0){
        count++;
        m=Math.floor(m/10);
    }
    while(n!=0){
        let r=n%10;
        arm=arm+r**count;
        n=Math.floor(n/10);
    }
    if(arm==p){
        return true;
    }else{
        return false;
    }
}

console.log(armstrong(153));