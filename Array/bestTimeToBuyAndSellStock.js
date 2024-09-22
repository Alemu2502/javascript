var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let minPrice = prices[0];
  let maxProfit = 0;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }
  return maxProfit;
}
let prices =  [7,1,5,3,6,4];
console.log(maxProfit(prices));