// find element in an array that appears more than n/3 times
//brute force
function majority1(arr){
    let ans=[];
    let n=arr.length;
    for(let i=0;i<n;i++){
        if(ans.length===0 || ans[0]!==arr[i]){
            let count=0;
            for(let j=0;j<n;j++){
                if(arr[i]==arr[j]){
                    count++;
                }
            }
            if(count>Math.floor(n/3)){
                ans.push(arr[i]);
            }
            if(ans.length===2){
                break;
            }
        }
    }
    return ans;
}

let arr=[1,1,1,2,2,3,3,3];
console.log(majority1(arr));

//better solution with hash map

function majority2(arr){
    let n=arr.length;
    let hash=new Map();
    let ans=[];
    for(let number of arr){
        if(hash.has(number)){
            hash.set(number,hash.get(number)+1);
        }else{
            hash.set(number,1);
        }
    }

    for(let [key,value] of hash){
        if(value>Math.floor(n/3)){
            ans.push(key);
        }
    }
    return ans;
}
console.log(majority2(arr));

//Boyer-Moore approach

function majority3(arr){
    let count1=0;
    let count2=0;
    let el1;
    let el2;
    for(let i=0;i<arr.length;i++){
        if(count1===0 && arr[i]!==el2){
            count1=1;
            el1=arr[i];
        }else if(count2===0 && arr[i]!==el1){
            count2=1;
            el2=arr[i];
        }else if(arr[i]===el1){
            count1++;
        }else if(arr[i]===el2){
            count2++;
        }else{
            count1--;
            count2--;
        }
    }
    let ans=[];
    let c1=0;
    let c2=0;
    for(let i=0;i<arr.length;i++){
        if(el1===arr[i]){
            c1++;
        }
        if(el2===arr[i]){
            c2++;
        }
    }
    if(c1>Math.floor(arr.length/3)){
        ans.push(el1);
    }
    if(c2>Math.floor(arr.length/3)){
        ans.push(el2);
    }
    return ans;
}

console.log(majority3(arr));