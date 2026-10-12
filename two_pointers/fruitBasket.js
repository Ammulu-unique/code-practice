// fruits into baskets

function fruits(arr){
    let n=arr.length;
    let maxlen=0;
    for(let i=0;i<n;i++){
        let set=new Set();
        for(let j=i;j<n;j++){
            set.add(arr[j]);
            if(set.size<=2){
                maxlen=Math.max(maxlen,j-i+1);
            }else{
                break;
            }
        }
    }
    return maxlen;
}

let arr=[1,2,1];
console.log(fruits(arr));  

// better approach

function fruitsBasket(arr){
    let l=0;
    let r=0;
    let maxlen=0;
    let map=new Map();
    while(r<arr.length){
        map.set(arr[r],(map.get(arr[r])||0)+1);
        if(map.size>2){
            while(map.size>2){
                map.set(arr[l],map.get(arr[l])-1);
                if(map.get(arr[l])===0){
                    map.delete(arr[l]);
                }
                l++;
            }
        }
        if(map.size<=2){
            maxlen=Math.max(maxlen,r-l+1);
        }
        r++
    }
    return maxlen;
}
console.log(fruitsBasket(arr));

/*Optimized approach: Use a single `if (map.size > 2)` instead of `while`.
We shrink the window only once per iteration.
This works for finding the maximum length because we maintain the belength found so far; the window may temporarily have more than 2 fruits.
Each pointer moves only forward, giving O(n) time complexity.*/