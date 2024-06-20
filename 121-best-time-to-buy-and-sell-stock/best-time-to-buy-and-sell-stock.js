/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let l=0, r=1, max_pf=0;
    while(r<prices.length){
        if(prices[r]>prices[l]){
            let pf= prices[r]-prices[l]
            max_pf= Math.max(max_pf, pf)
        }else{
            l=r
        }
        r++
    }
    return max_pf
    
};