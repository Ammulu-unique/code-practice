//Binary To Decimal

function binary_to_decimal(bin){
    let count=0;
    let dec=0;
    while(bin!==0){
        let r=bin%10;
        dec=dec+r*(2**count);
        count++;
        bin=Math.floor(bin/10);
    }
    return dec;
}

console.log(binary_to_decimal(111))