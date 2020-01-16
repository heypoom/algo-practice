const {log, makeStr} = require('./grid-helper')

let moves = [[1, 0], [0, -1], [-1, 0], [0, 1]]

function printSpiral(grid) {
  let str = ''
  let visited = grid.map(r => r.map(c => false))
  let attempt = 0

  function go(x, y, dir) {
    let [mx, my] = moves[dir]
    let [nx, ny] = [x + mx, y + my]

    let isOOB = nx < 0 || ny < 0 || ny >= grid.length || nx >= grid[ny].length

    if (isOOB || visited[ny][nx]) {
      if (attempt++ > 3) return (str += grid[y][x])

      return go(x, y, (dir + 1) % moves.length)
    }

    attempt = 0
    str += grid[y][x]
    visited[y][x] = true

    go(nx, ny, dir)
  }

  go(0, 0, 0)

  console.log(str)
}

printSpiral(
  makeStr(`
ABCDE
PQRSF
OXYTG
NWVUH 
MLKJI 
`),
)

printSpiral(
  makeStr(`
ABC
NOD
MPE
LQF
KRG
JIH
`),
)

printSpiral(
  makeStr(`
ABCDE
JIHGF
`),
)
