//printing fibonacci Number using recursion

function fib(n){
    if(n<=1){
        return n;
    }
    let last=fib(n-1);
    let slast=fib(n-2);
    return last+slast;
}

console.log(fib(4));