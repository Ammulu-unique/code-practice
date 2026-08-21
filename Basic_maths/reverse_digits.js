// Reverse Digits of A Number

let n=1114021;
let rev=0;
let r;
while(n>0){
    let r=n%10;
    rev=rev*10+r;
    n=Math.trunc(n/10);
}

console.log(rev);