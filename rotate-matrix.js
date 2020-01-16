const {make, log} = require('./grid-helper')

function rotateMatrix(matrix) {
  let rows = matrix.length - 1
  let cols = matrix[0].length - 1

  let newMatrix = Array.from(matrix).map(y => y.map(x => 0))

  for (let y = rows; y >= 0; y--) {
    for (let x = cols; x >= 0; x--) {
      newMatrix[y][x] = matrix[x][y]
    }
  }

  log(matrix)
  console.log()
  log(newMatrix)
}

rotateMatrix([
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
])

console.log()

rotateMatrix([
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'J'],
  ['K', 'L', 'M', 'N', 'O'],
  ['P', 'Q', 'R', 'S', 'T'],
  ['U', 'V', 'W', 'X', 'Y'],
])
