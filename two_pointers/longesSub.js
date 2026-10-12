// longest substring without repeating characters

function longest(s){
    let n=s.length;
    let maxlen=0;
    for(let i=0;i<n;i++){
        let hash=new Array(256).fill(0); // new hash array for every i iteration
        for(let j=i;j<n;j++){
            if(hash[s.charCodeAt(j)]==1){ // checks if similar character appeared or not if yes break.
                break;
            }
            maxlen=Math.max(maxlen,j-i+1); //calculates length and updates maxlength
            hash[s.charCodeAt(j)]=1; // updates char positioned index inside hash array

        }
    }
    return maxlen;
}

let s="cabdzabcd";
console.log(longest(s));

//optimized version

function longest1(s){
    let n=s.length;
    let l=0;
    let r=0;
    let maxlen=0;
    let map=new Map();
    while(r<n){
        if(map.has(s[r])){
            if(map.get(s[r])>=l){
                l=map.get(s[r])+1;
            }
        }
        let len=r-l+1;
        maxlen=Math.max(maxlen,len);
        map.set(s[r],r);
        r++;
    }
    return maxlen;
}

console.log(longest1(s));
