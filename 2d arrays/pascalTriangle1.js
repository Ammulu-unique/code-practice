// finding the element at a given row and column of Pascal's Triangle 

function ncr(n,r){
    n=n-1;
    r=r-1;
    let res=1;
    for(let i=0;i<r;i++){
        res=res*(n-i);
        res=res/(i+1);
    }
    return res;
}

console.log(ncr(5,3));