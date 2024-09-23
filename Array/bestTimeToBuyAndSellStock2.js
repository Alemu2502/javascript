function bestBuyerAndSeller(prices) {
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
      if(prices[i] > prices[i -1]) {
        profit += prices[i] - prices[i - 1];
      }
    }
    return profit;
}
let prices = [7,6,4,3,1];
console.log(bestBuyerAndSeller(prices));