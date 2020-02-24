function minPathSum(grid) {
  let rows = grid.length
  let cols = grid[0].length

  if (rows === 0) return 0

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (x > 0 && y > 0) {
        // Compute minimum of up and left tile.
        let min = Math.min(grid[y - 1][x], grid[y][x - 1])

        grid[y][x] += min
      } else if (y > 0) {
        console.log('y > 0', x, y)

        grid[y][x] += grid[y - 1][x]
      } else if (x > 0) {
        console.log('x > 0', x, y)

        grid[y][x] += grid[y][x - 1]
      }
    }
  }

  console.log(grid)

  return grid[rows - 1][cols - 1]
}

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])) // 7
