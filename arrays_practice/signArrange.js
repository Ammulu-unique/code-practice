//Rearrange Array Elements by Sign

function signArray(arr){
    let ans=[];
    let positive=0;
    let negative=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            ans[positive]=arr[i];
            positive+=2;
        }else{
            ans[negative]=arr[i];
            negative+=2;
        }
    }
    return ans;
}

let arr=[1,2,-3,3,-4];
console.log(signArray(arr));

//this is focused on leftover elements 

function allsign(arr){
    let pos=[];
    let neg=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            neg.push(arr[i]);
        }else{
            pos.push(arr[i]);
        }
    }

    if(pos.length > neg.length){
        for(let i=0;i<neg.length;i++){
            arr[2*i]=pos[i];
            arr[2*i+1]=neg[i];
        }
        let index=2*neg.length;
        for(let i=neg.length;i<pos.length;i++){
            arr[index]=pos[i];
            index++;
        }
    }else{
        for(let i=0;i<pos.length;i++){
            arr[i*2]=pos[i];
            arr[i*2+1]=neg[i];
        }
        let index=2*pos.length;
        for(let i=pos.length;i<neg.length;i++){
            arr[index]=neg[i];
            index++;
        }
    }
    return arr;
}

let arr1=[-1,2,3,4,-3,1]
console.log(allsign(arr1));