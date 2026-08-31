
let s="abcabcde";

let s1=new Array(26).fill(0);

for(let i=0;i<s1.length;i++){
    let index=s.charCodeAt(i)-'a'.charCodeAt(0);
    s1[index]++;
}

let queries=['a','b','e'];

for(let ch of queries){
    let index=ch.charCodeAt(0)-'a'.charCodeAt(0);
    console.log(s1[index]);
}