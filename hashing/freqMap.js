// counting how many times specified numbers appeared in an array 

let arr=[1,2,3,2,5];
let freq=new Map();
for(let number of arr){
    if(freq.has(number)){
        freq.set(number,freq.get(number)+1);
    }else{
        freq.set(number,1);
    }
}

let queries=[2,3,5];
for(let number of queries){
    console.log(freq.get(number)||0);
}