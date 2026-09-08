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

// better solution using hash and map

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

function mapsol(arr){
    let map1=new Map();
    for(let value of arr){
        if(map1.has(value)){
            map1.set(value,map1.get(value)+1);
        }else{
            map1.set(value,1);
        }
    }
    for(let [key,value] of map1){
        if(value===1){
            return key;
        }
    }

}

// console.log(mapsol(arr));

//optimized solution

function optSol(arr){
    let ans=0;
    for(let i=0;i<arr.length;i++){
        ans=ans^arr[i];
    }
    return ans;
}
console.log(optSol(arr));