//reverse of a number;

function rev1(n,rev=0){
    if(n===0){
        return rev;
    }
    let r=n%10;
    return rev1(Math.floor(n/10),rev*10+r);
}

console.log(rev1(123,0));