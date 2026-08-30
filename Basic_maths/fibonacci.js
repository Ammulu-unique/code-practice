// printing fibonacci series

function fibonacci(n){
    let a=0;
    let b=1;
    for(let i=0;i<n;i++){
        process.stdout.write(a+" ");
        let next=a+b;
        a=b;
        b=next;
    }
}
fibonacci(7)