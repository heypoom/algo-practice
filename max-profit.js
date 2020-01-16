function maxProfit(prices) {
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      let profit = prices[j] - prices[i]

      if (profit > max) max = profit
    }
  }

  return max
}

console.log(maxProfit([1, 5, 3, 2, 8, 6, 4, 10]))
