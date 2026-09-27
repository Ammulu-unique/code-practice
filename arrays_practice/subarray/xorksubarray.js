// count sub array with xor as k

function xor1(arr,k){
    let n=arr.length;
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let xor=0;
            for(let l=i;l<=j;l++){
                xor^=arr[l];
            }
            if(xor===k){
                count++;
            }
        }
    }
    return count;
}

let arr=[4,2,2,6,4];
console.log(xor1(arr,6))

//better solution 

function xor2(arr,k){
    let n=arr.length;
    let count=0;
    for(let i=0;i<n;i++){
        let xor=0;
        for(let j=i;j<n;j++){
            xor^=arr[j];
            if(xor===k){
                count++;
            }
        }
    }
    return count;
}
console.log(xor2(arr,6));

//optimized solution 

function xor3(arr,k){
    let n=arr.length;
    let map=new Map();
    map.set(0,1);
    let count=0;
    let xr=0;
    for(let i=0;i<n;i++){
        xr=xr^arr[i];
        let x=xr^k;
        if(map.has(x)){
            count+=map.get(x);
        }
        map.set(xr,(map.get(xr)||0)+1);
    }
    return count;
}
console.log(xor3(arr,6));