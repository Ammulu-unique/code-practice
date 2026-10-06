//minimize max distance to gas station 

function gasStation(arr,k){
    let n=arr.length;
    let howMany=new Array(n-1).fill(0);
    for(let i=1;i<=k;i++){
        let maxSection=-1;
        let maxIndex=-1;
        for(let j=0;j<n-1;j++){
            let diff=arr[j+1]-arr[j];
            let sectionLength=diff/(howMany[j]+1);
            if(sectionLength>maxSection){
                maxSection=sectionLength;
                maxIndex=j;
            }
        }
        howMany[maxIndex]++;
    }
    let maxAns=-1;
    for(let i=0;i<n-1;i++){
        let diff=arr[i+1]-arr[i];
        let sectionLength=diff/(howMany[i]+1);
        maxAns=Math.max(maxAns,sectionLength);
    }
    return maxAns;

}

let arr=[1,13,17,23];
console.log(gasStation(arr,5));