//Check if a number is prime or not
function prime_number(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(prime_number(1));
console.log(prime_number(2));
console.log(prime_number(6));