//Calculate nPr

function fact(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;
}

function npr(n,r){
    let num=fact(n);
    let deno=fact(n-r);
    let ans=Math.floor(num/deno);
    return ans;
}

console.log(npr(5,2));