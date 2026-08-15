let n=5;
for(let i=n-1;i>=0;i--){
    let char=65;
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(char));
        char++;
    }
    console.log();
}