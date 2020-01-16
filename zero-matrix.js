const {log} = require('./grid-helper')

function zero(m) {
  let rows = m.length
  let cols = m[0].length

  let coords = []

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (m[y][x] === 0) coords.push([x, y])
    }
  }

  for (let [x, y] of coords) {
    console.log(`(${x}, ${y})`)

    for (let i = 0; i < cols; i++) m[y][i] = 0
    for (let i = 0; i < rows; i++) m[i][x] = 0
  }

  return m
}

log(
  zero([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 6, 7],
    [1, 2, 3, 6, 7],
    [1, 0, 3, 6, 7],
    [1, 2, 3, 6, 7],
  ]),
)

console.log()

log(zero([[1, 2], [1, 2], [1, 2], [1, 0], [1, 2]]))

console.log()

log(zero([[1, 2, 3, 4, 5], [1, 2, 0, 6, 7]]))
