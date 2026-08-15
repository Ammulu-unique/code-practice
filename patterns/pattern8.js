//Inverted pyramid

let n=5;
for(let i=n;i>=0;i--){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=2*i-1;j++){
        process.stdout.write("*");
    }
    console.log();
}