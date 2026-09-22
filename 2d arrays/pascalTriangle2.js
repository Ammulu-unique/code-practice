//Printing entire row of a pascal triangle given that row number

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

console.log(row(6));