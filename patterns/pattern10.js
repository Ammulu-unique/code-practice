
let n=5;
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log();
}
for(let i=n-1;i>=0;i--){
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }
    console.log();
}