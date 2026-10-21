//linear search

function search(arr,target,i){
    if(i===arr.length){
        return true;
    }
    return arr[i]===target || search(arr,target,i+1);
}

//return index

function searchIndex(arr,target,i){
    if(i===arr.length){
        return -1;
    }
    if(arr[i]===target){
        return i;
    }else{
        return searchIndex(arr,target,i+1);
    }
}

let arr=[1,2,3,4];
console.log(search(arr,4,0));
console.log(searchIndex(arr,4,0));

//find all index
function findAll(arr,target,i,ans){
    if(i===arr.length){
        return ans;
    }

    if(arr[i]===target){
        ans.push(i);
    }
    return findAll(arr,target,i+1,ans);
}

let arr1=[1,2,2,3];
let ans=[];
console.log(findAll(arr1,2,0,ans));

//creating list inside the function instead of passing it

function findAllIndices(arr,target,index){
    let list=[];
    if(index===arr.length){
        return list;
    }
    if(arr[index]===target){
        list.push(index);
    }
    let ansfrombelowcalls=findAllIndices(arr,target,index+1);
    list.push(...ansfrombelowcalls);
    return list;
}

let arr3=[1,2,2];
console.log(findAllIndices(arr3,2,0));