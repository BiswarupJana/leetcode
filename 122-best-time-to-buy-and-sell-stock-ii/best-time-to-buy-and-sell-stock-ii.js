/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum=0
    let d=0
    for(let i=0; i<prices.length; i++){
        if(prices[i+1]>prices[i]){
           d= prices[i+1]-prices[i];
            sum+=d;
            
        }
    }
    return sum
};