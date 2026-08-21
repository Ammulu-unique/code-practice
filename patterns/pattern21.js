let n=5;

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(j==1 || j==n || i==1 || i==n){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ")
        }
    }
    console.log();
}