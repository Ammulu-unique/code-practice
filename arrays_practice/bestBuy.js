//Best Time to Buy and Sell Stock

function buyStock(arr){
    let min=arr[0];
    let profit=0;
    for(let i=0;i<arr.length;i++){
        let cost=arr[i]-min;
        profit=Math.max(profit,cost);
        min=Math.min(min,arr[i]);
    }
    return profit;
}

let arr=[7,1,5,3,6,4];
console.log(buyStock(arr));