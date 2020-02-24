function getMaximumGold(grid) {
  let rows = grid.length
  let cols = grid[0].length

  let visited = Array(rows)
    .fill()
    .map(() => Array(cols).fill())

  function go(x, y) {
    if (x < 0 || y < 0) return 0
    if (x >= cols || y >= rows) return 0

    // Never visit a cell with zero gold.
    if (grid[y][x] === 0) return 0

    // Can't visit the same cell more than once.
    if (visited[y][x]) return 0
    visited[y][x] = true

    // You can walk one stop to the left, right, up or down.
    let left = go(x - 1, y)
    let right = go(x + 1, y)
    let up = go(x, y - 1)
    let down = go(x, y + 1)

    console.log(x, y, '->', grid[y][x], {left, right, up, down})

    visited[y][x] = false

    return grid[y][x] + Math.max(left, right, up, down)
  }

  let max = 0

  // Start and stop from any position.
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] > 0) {
        max = Math.max(max, go(x, y))

        console.log(x, y, 'max ->', grid[y][x], max)
      }
    }
  }

  return max
}

console.log(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]))
