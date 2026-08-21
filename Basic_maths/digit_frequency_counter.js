//Digit Frequency Counter

function frequency_of_digit(n,d){
    let count=0;
    while(n!==0){
        let r=n%10;
        if(r==d){
            count++;
        }
        n=Math.floor(n/10);
    }
    return count;
}
console.log(frequency_of_digit(133233,3));