//finding missing element in an array

function findmissingElement(arr){
    for(let i=1;i<=arr.length+1;i++){
        let flag=0;
        for(let j=0;j<arr.length;j++){
            if(arr[j]==i){
                flag=1;
                break;
            }
        }
        if(flag===0){
            return i;
        }
    }
}

let arr=[1,2,5,6,3];
// console.log(findmissingElement(arr));

function findMissingHash(arr){
    let hash=new Array(arr.length+1).fill(0);
    for(let i=0;i<arr.length;i++){
        hash[arr[i]]++;
    }
    for(let i=1;i<hash.length;i++){
        if(hash[i]===0){
            return i;
        }
    }
}

// console.log(findMissingHash(arr));

function formula(arr){
    let s2=0;
    let n=arr.length+1;
    let sum=(n*(n+1))/2;
    for(let i=0;i<arr.length;i++){
        s2+=arr[i];
    }
    return sum-s2;
}

// console.log(formula(arr));

function xorMissing(arr){
    let n=arr.length+1;
    let xor1=0;
    let xor2=0;
    for(let i=1;i<=n;i++){
        xor1=xor1^i;
    }
    for(let i=0;i<arr.length;i++){
        xor2=xor2^arr[i];
    }
    return xor1^xor2;
}
console.log(xorMissing(arr));