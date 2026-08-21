// GCD of two numbers
function gcd_number(a,b){
    let gcd=1;
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
            gcd=i;
        }
    }
    return gcd;
}

console.log(gcd_number(6,81));