// print linearly from 1 to n
let count=1;
function number1(n){
    if(count===n+1){
        return;
    }
    console.log(count);
    count++;
    number1(n);
}
number1(7);
function number2(i,n){
    if(i===n+1){
        return;
    }
    console.log(i);
    number2(i+1,n);
}
number2(1,7);

//print from n to 1;

function number3(i,n){
    if(i<1){
        return;
    }
    console.log(i);
    number3(i-1,n);
}
number3(3,3);
//print from 1 to n using backtracking

function number4(i,n){
    if(i<1){
        return;
    }
    number4(i-1,n);
    console.log(i);
}
number4(3,3)

//printing from n to 1 using back tracking

function number5(i,n){
    if(i>n){
        return;
    }
    number5(i+1,n);
    console.log(i);
}
number5(1,3);