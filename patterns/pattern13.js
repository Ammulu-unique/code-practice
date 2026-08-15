let n=5;
let count=1;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(count+" ");
        count++;
    }
    console.log();
}