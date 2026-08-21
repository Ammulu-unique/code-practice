let n=5;

for(let i=1;i<=n;i++){
    let char=65+(n-i);
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(char));
        char++;
    }
    console.log();
}