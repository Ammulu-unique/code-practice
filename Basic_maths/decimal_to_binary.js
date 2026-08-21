// Decimal to binary

function decimal_to_binary(dec){
    let bin="";
    while(dec>0){
        let r=dec%2;
        bin=r+bin;
        dec=Math.floor(dec/2);
    }
    return bin;
}
console.log(decimal_to_binary(6));