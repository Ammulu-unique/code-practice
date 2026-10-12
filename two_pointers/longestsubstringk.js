//Longest Substring With At Most K Distinct Characters

function longest(s,k){
    let n=s.length;
    let maxlen=0;
    for(let i=0;i<n;i++){
        let map=new Map();
        for(let j=i;j<n;j++){
            map.set(s[j],(map.get(s[j])||0)+1);
            if(map.size<=k){
                maxlen=Math.max(maxlen,j-i+1);
            }else{
                break;
            }
        }
    }
    return maxlen; //TC: o(n^2) SC: O(k)
}

let s="aaabbccd";
console.log(longest(s,3));

//better approach

function longest1(s,k){
    let l=0;
    let r=0;
    let maxlen=0;
    let map=new Map();
    while(r<s.length){
        map.set(s[r],(map.get(s[r])||0)+1);
        while(map.size>k){
            map.set(s[l],map.get(s[l])-1);
            if(map.get(s[l])===0){
                map.delete(s[l]);
            }
            l++;
        }
        if(map.size<=k){
            maxlen=Math.max(maxlen,r-l+1);
        }
        r++;
    }
    return maxlen;
}

console.log(longest1(s,3));
// Optimization: Use `if (map.size > k)` instead of `while` to shrink
// the window only once per iteration.
// This works for finding the maximum length because we maintain the
// best length found so far, even if the current window temporarily
// has more than k distinct characters.
// Time: O(n), Space: O(k).