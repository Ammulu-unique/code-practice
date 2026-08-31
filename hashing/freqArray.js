
let arr=[1,2,3,2,2,4];
let hash=new Array(5).fill(0);
for(let number of arr){
    hash[number]++;
}

let queries=[1,2,3,4];
for(let number of queries){
    console.log(hash[number]||0);
}