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