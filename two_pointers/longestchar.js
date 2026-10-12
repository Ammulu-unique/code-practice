// longest repeating character replacement

function longest(s,k){
    let maxlen=0;
    let n=s.length;
    for(let i=0;i<n;i++){
        let hash=new Array(26).fill(0);
        let maxfreq=0;
        for(let j=i;j<n;j++){
            let index=s.charCodeAt(j)-'A'.charCodeAt(0); 
            hash[index]++;
            maxfreq=Math.max(maxfreq,hash[index]);
            let changes=(j-i+1)-maxfreq;
            if(changes<=k){
                maxlen=Math.max(maxlen,j-i+1);
            }else{
                break;
            }
        }
    }
    return maxlen;
}

let s="AAABABBA"
console.log(longest(s,2));

function longest2(s,k){
    let l=0;
    let r=0;
    let maxlen=0;
    let maxfreq=0;
    let hash=new Array(26).fill(0);
    while(r<s.length){
        let index=s.charCodeAt(r)-'A'.charCodeAt(0);
        hash[index]++;
        maxfreq=Math.max(maxfreq,hash[index]);
        if((r-l+1)-maxfreq>k){ //we can use if instead of while 
            hash[s.charCodeAt(l)-'A'.charCodeAt(0)]--;
            //maxfreq=0
            // for(let i=0;i<26;i++){
            //     maxfreq=Math.max(maxfreq,hash[i]);
            // } this can be skipped as while decresing lth value it doesn't help in getting our answer 
            l++;
        }
        if((r-l+1)-maxfreq<=k){
            maxlen=Math.max(maxlen,r-l+1);
        }
        r++;
    }
    return maxlen;
}

console.log(longest2(s,2));