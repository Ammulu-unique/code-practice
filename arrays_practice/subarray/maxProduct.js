//maximum product

function maxProduct1(arr){
    let n=arr.length;
    let max=-Infinity;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let product=1;
            for(let k=i;k<=j;k++){
                product*=arr[k];
            }
            max=Math.max(max,product);
        }
    }
    return max;
}

let arr=[1,2,3,4,-3,7,6,8,9];
console.log(maxProduct1(arr));

function maxProduct2(arr){
    let n=arr.length;
    let max=-Infinity;
    for(let i=0;i<n;i++){
        let prod=1;
        for(let j=i;j<n;j++){
            prod=prod*arr[j];
            max=Math.max(max,prod);
        }
    }
    return max;
}

console.log(maxProduct2(arr))

//optimal solution

function maxProduct3(arr){
    let suf=1;
    let pref=1;
    let ans=-Infinity;
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(suf===0){
            suf=1;
        }
        if(pref===0){
            pref=1;
        }
        pref*=arr[i];
        suf*=arr[n-i-1];
        ans=Math.max(ans,Math.max(suf,pref));
    }
    return ans; 
}
let arr1=[2,3,-2,4]
console.log(maxProduct3(arr1));