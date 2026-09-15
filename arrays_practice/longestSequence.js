//longest consecutive sequence

function longest(arr){
    let longest=0;
    for(let i=0;i<arr.length;i++){
        let current=arr[i];
        let count=1;
        while(arr.includes(current+1)){
            current++;
            count++;
        }
        longest=Math.max(longest,count);
    }
    return longest;
}

let arr=[102,4,100,1,101,3,2,1,1];
console.log(longest(arr));

//better version

function longest1(arr){
    if(arr.length===0){
        return 0;
    }
    let longest=1;
    let count=1;
    let lastSmaller=-Infinity;
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        if(arr[i]-1==lastSmaller){
            count++;
            lastSmaller=arr[i];
        }else if(arr[i]===lastSmaller){
            continue;
        }else{
            count=1;
            lastSmaller=arr[i];
        }
        longest=Math.max(longest,count);
    }
    return longest;
}

let arr1=[100,4,300,2,3,1,6,4];
console.log(longest1(arr1));

//optimized version

function longest2(arr){
    if(arr.length===0){
        return 0;
    }
    let longest=1;
    let set=new Set();
    for(let num of arr){
        set.add(num);
    }
    for(let num of set){
        if(!set.has(num-1)){
            let count=1;
            let current=num;
            while(set.has(current+1)){
                count++;
                current++;
            }
            longest=Math.max(longest,count);
        }
    }
    return longest;
}

let arr2=[102,4,100,1,101,3,2,1,1]
console.log(longest2(arr2))