let n=5;
let char=65
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(char));
    }
    char++;
    console.log();
}