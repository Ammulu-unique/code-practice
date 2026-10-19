// find all anagrams

function arraysEqual(a,b){
    if(a.length!==b.length){
        return false;
    }
    for(let i=0;i<a.length;i++){
        if(a[i]!==b[i]){
            return false;
        }
    }
    return true;
}

function subanagram(s,p){
    let n=s.length;
    let k=p.length;
    let res=[];
    let pcount=new Array(26).fill(0);
    if(k>n){
        return res;
    }
    for(let i=0;i<p.length;i++){
        pcount[p.charCodeAt(i)-'a'.charCodeAt(0)]++;
    }
    for(let i=0;i<=n-k;i++){
        let scount=new Array(26).fill(0);
        for(let j=i;j<i+k;j++){
            scount[s.charCodeAt(j)-'a'.charCodeAt(0)]++;
        }
        if(arraysEqual(scount,pcount)){
            res.push(i);
        }
    }
    return res;
}

let s="cbaedabacd";
let p="abc";
console.log(subanagram(s,p));

//better solution

function anagramsub(s,p){
    let res=[];
    let map=new Map();
    for(let value of p){
        map.set(value,(map.get(value)||0)+1); 
    }
    let left=0;
    let right=0;
    let count=p.length;
    for(right=0;right<s.length;right++){
        let ch=s[right];
        let val=map.get(ch)||0;
        if(val>0){ 
            count--;
        }
        map.set(ch,val-1);
        if(right-left+1>p.length){
            let leftchar=s[left];
            let leftval=map.get(leftchar)?? 0;
            if(leftval>=0){
                count++;
            }
            map.set(leftchar,leftval+1);
            left++;
        }
        if(count===0){
            res.push(left);
        }
    }
    return res;
}

console.log(anagramsub(s,p));