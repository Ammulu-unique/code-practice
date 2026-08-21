//Print all Divisors of a given Number

function divisors(n){
    let result="";
    for(let i=1;i<=n;i++){
        if(n%i==0){
            result+=i+" ";
        }
    }
    return result;
}

console.log(divisors(6));