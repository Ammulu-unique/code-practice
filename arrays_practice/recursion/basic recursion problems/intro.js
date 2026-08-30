
//print name five times
let count1=0;
function name1(){
    if(count1==5){
        return;
    }
    count1++;
    console.log("pikachu");
    name1();
}
name1();
// print name using recursion

function name2(i,n){
    if(i>n){
        return;
    }
    console.log("Ammu");
    name2(i+1,n);
}
name2(1,5);
