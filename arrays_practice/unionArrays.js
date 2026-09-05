// union of two  arrays

function unionArray(arr1,arr2){
    let union=[];
    let set1=new Set();
    for(let i=0;i<arr1.length;i++){
        set1.add(arr1[i]);
    }

    for(let j=0;j<arr2.length;j++){
        set1.add(arr2[j]);
    }

    let index=0;
    for(let value of set1){
        union[index]=value;
        index++;
    }
    return union;
}

let arr1=[1,2,3,4,4,5];
let arr2=[1,2,3,4,5,6,7];
console.log(unionArray(arr1,arr2));