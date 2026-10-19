// product of digits

function product(n){
    if(n%10===n){
        return n;
    }
    return n%10*product(Math.floor(n/10));
}

console.log(product(123));