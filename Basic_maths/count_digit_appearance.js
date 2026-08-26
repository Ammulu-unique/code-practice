// Count occurrences of a digit in all array elements

function digitAppearance(arr,d){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let number=arr[i];
        while(number>0){
            let r=number%10;
            if(r==d){
                count++;
            }
            number=Math.floor(number/10);
        }
    }
    return count;
}

let arr=[1,22,32,44,52];
console.log(digitAppearance(arr,2));