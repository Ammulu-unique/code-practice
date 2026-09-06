// find element that appears once and other elements twice

function bruteforce(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count===1){
            return arr[i];
        }
    }
}

let arr=[1,1,2,2,3,4,4];
// console.log(bruteforce(arr));

//better solution using hash

function bettersol(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    let hash=new Array(max+1).fill(0);
    for(let i=0;i<arr.length;i++){
        hash[arr[i]]++;
    }
    for(let j=0;j<hash.length;j++){
        if(hash[j]===1){
            return j;
        }
    }
}

// console.log(bettersol(arr));

//optimized solution

function optSol(arr){
    let ans=0;
    for(let i=0;i<arr.length;i++){
        ans=ans^arr[i];
    }
    return ans;
}
console.log(optSol(arr));