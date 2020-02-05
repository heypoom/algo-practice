// Time Complexity: O(N) where N is the length of input array.
// Space Complexity: O(1), no extra space.

function maxProfit(prices) {
  if (!prices || prices.length === 0) return 0

  let firstBuy = Infinity
  let diff = -Infinity

  let firstProfit = 0
  let secondProfit = 0

  for (let price of prices) {
    firstBuy = Math.min(firstBuy, price)
    firstProfit = Math.max(firstProfit, price - firstBuy)

    diff = Math.max(diff, firstProfit - price)
    secondProfit = Math.max(secondProfit, price + diff)
  }

  return secondProfit
}

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])) // 6
console.log(maxProfit([1, 1, 5, 10, 4, 8, 11, 9, 4])) // 16
console.log(maxProfit([1, 2, 3, 4, 5])) // 4
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
