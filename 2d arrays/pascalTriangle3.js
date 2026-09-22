// print pascal triangle

function row(rowIndex){
    let ans=1;
    let result=[];
    result.push(ans);
    for(let i=0;i<rowIndex;i++){
        ans=ans*(rowIndex-i);
        ans=Math.floor(ans/(i+1));
        result.push(ans);
    }
    return result;
}

function pascalTriangle(rowNum){
    let ans=[];
    for(let i=0;i<rowNum;i++){
        ans.push(row(i));
    }
    return ans;
}
console.log(pascalTriangle(6))