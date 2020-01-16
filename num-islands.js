const {make, log} = require('./grid-helper')

function islands(grid) {
  let visited = grid.map(x => x.map(y => false))

  function fill(x, y, newColor, oldColor = grid[y][x]) {
    if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length) return
    if (visited[y][x]) return
    if (grid[y][x] !== oldColor) return

    visited[y][x] = true
    grid[y][x] = newColor

    fill(x - 1, y, newColor, oldColor)
    fill(x + 1, y, newColor, oldColor)
    fill(x, y - 1, newColor, oldColor)
    fill(x, y + 1, newColor, oldColor)
  }

  let count = 0

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (grid[y][x] === 0) continue
      if (!visited[y][x]) count++

      log(grid)
      console.log()

      fill(x, y, 0)
    }
  }

  console.log('->', count)

  return count
}

islands(
  make(`
11101
00001
00111
01110
00111
`),
)

console.log()

islands(
  make(`
11011
00011
11000
00011
11100
`),
)
