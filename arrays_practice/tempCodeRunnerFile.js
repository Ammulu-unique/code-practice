// intersection of two arrays
//brute force approach
function intersection(arr1,arr2){
    let ans=[];
    for(let i=0;i<arr1.length;i++){
        let element=arr1[i];
        for(let j=0;j<arr2.length;j++){
            if(element==arr2[j]){
                ans.push(element);
                arr2[j]=-1234;
                break;
            }
        }
    }
    return ans;
}

//two pointer approach (intersection of arrays- unique elements)
function intersection2(arr1,arr2){
    let i=0;
    let j=0;
    let ans=[];
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]===arr2[j]){
            if(!ans.includes(arr1[i])){
                ans.push(arr1[i]);
            }
            i++;
            j++;
        }else if(arr1[i]<arr2[j]){
            i++;
        }else{
            j++;
        }
    }
    return ans;
}

let arr1=[1,4,5];
let arr2=[2,4,6];
console.log(intersection(arr1,[...arr2])); 
console.log(intersection2(arr1,arr2));