// sum of first n numbers (parameterised)

function sum1(i,sum){
    if(i<1){
        console.log(sum);
        return;
    }
    sum1(i-1,sum+i);
}
sum1(4,0);

// sum of first n numbers (functional type)

function sum2(n){
    if(n===0){
        return 0;
    }
    return n+sum2(n-1)
}

console.log(sum2(4))