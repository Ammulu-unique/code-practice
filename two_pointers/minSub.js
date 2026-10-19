// minimum window substring

function substring1(s,t){
    let n=s.length;
    let minlen=Infinity;
    let sindex=-1;
    for(let i=0;i<n;i++){
        let hash=new Array(256).fill(0);
        let count=0;
        for(let j=0;j<t.length;j++){
            hash[t.charCodeAt(j)]++; 
        }
        for(let j=i;j<s.length;j++){
            let index=s.charCodeAt(j); 
            if(hash[index]>0){
                count++; // positive value indicates that required char is present hence do count++
            }
            hash[index]--;
            if(count===t.length){ // check the count with length of t string if equal then set minlength
                if(j-i+1<minlen){
                    minlen=j-i+1;
                    sindex=i;
                }
                break;
            }
        }
    }
    return sindex===-1 ? "":s.substring(sindex,sindex+minlen);
}

let s="ddaaabbca";
console.log(substring1(s,"abc"));

//optimized version

function minsub(s,t){
    let l=0;
    let r=0;
    let hash=new Array(256).fill(0);
    let sindex=-1;
    let minlength=Infinity;
    let count=0;
    for(let i=0;i<t.length;i++){
        hash[t.charCodeAt(i)]++;
    }
    while(r<s.length){
        if(hash[s.charCodeAt(r)]>0){
            count++;
        }
        hash[s.charCodeAt(r)]--;
        while(count===t.length){
            if(r-l+1<minlength){
                minlength=r-l+1;
                sindex=l;
            }
            hash[s.charCodeAt(l)]++;
            if(hash[s.charCodeAt(l)]>0){
                count--;
            }
            l++;
        }
        r++;
    }
    return sindex===-1 ? "": s.substring(sindex,sindex+minlength);
}

console.log(minsub(s,"abc"));