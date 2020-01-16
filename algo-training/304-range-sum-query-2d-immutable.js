function createSumRegion(input) {
  if (input.length === 0 || input[0].length === 0) return () => 0

  let memo = Array(input.length).fill(Array(input[0].length).fill(0))

  for (let x = 0; x < input[0].length; x++) {
    for (let y = 0; y < input.length; y++) {
      memo[y][x] = (memo[y][x - 1] || 0) + input[y][x]
    }
  }

  console.log(memo)

  return function sumRegion(sx, ex, sy, ey) {
    let sum = 0

    for (let y = sy; y <= ey; y++) {
      sum += memo[y][ex + 1] - memo[y][sx]
    }

    return sum
  }
}

const sumRegion = createSumRegion([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
])

console.log(sumRegion(2, 1, 4, 3)) // 8
console.log(sumRegion(1, 1, 2, 2)) // 11
console.log(sumRegion(1, 2, 2, 4)) // 12
