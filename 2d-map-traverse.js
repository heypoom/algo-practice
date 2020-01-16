const {make} = require('./grid-helper')
const {showVisited} = require('./grid-show-visited')

function traverse(grid, sx = 0, sy = 0) {
  let visited = grid.map(r => r.map(c => false))
  let paths = []

  function walk(x, y) {
    if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length) return

    if (visited[y][x]) return
    if (grid[y][x] === 0) return

    visited[y][x] = true
    paths.push([x, y])
    showVisited(visited, x, y)

    walk(x - 1, y)
    walk(x + 1, y)
    walk(x, y - 1)
    walk(x, y + 1)
  }

  walk(sx, sy)

  console.log(paths.map(([x, y]) => `(${x}, ${y})`).join(' -> '))
  console.log()
}

let grid = make(`
11000
01010
01110
00011
00110
`)

traverse(grid)
traverse(grid, 2, 4)
