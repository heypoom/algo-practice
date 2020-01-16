const {make, log} = require('./grid-helper')

function fill(grid, x, y, newColor) {
  let visited = grid.map(x => x.map(y => false))

  function floodFill(grid, x, y, newColor, oldColor = grid[y][x]) {
    if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length) return
    if (visited[y][x]) return
    if (grid[y][x] !== oldColor) return

    visited[y][x] = true
    grid[y][x] = newColor

    floodFill(grid, x - 1, y, newColor, oldColor)
    floodFill(grid, x + 1, y, newColor, oldColor)
    floodFill(grid, x, y - 1, newColor, oldColor)
    floodFill(grid, x, y + 1, newColor, oldColor)
  }

  floodFill(grid, x, y, newColor)

  return grid
}

log(
  fill(
    make(`
11101
00001
00111
01110
00111
`),
    4,
    4,
    2,
  ),
)

console.log()

log(
  fill(
    make(`
00010
01100
00110
01100
00000
`),
    2,
    2,
    2,
  ),
)
