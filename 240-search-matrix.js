function searchMatrix(grid, target) {
  if (grid.length === 0) return false

  let rows = grid.length
  let cols = grid[0].length

  let x = cols - 1
  let y = 0

  while (y < rows && x >= 0) {
    console.log('N')

    if (grid[y][x] === target) return true

    if (grid[y][x] > target) x--
    else y++
  }

  return false
}

let m = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]

console.log(searchMatrix(m, 5))
console.log(searchMatrix(m, 20))
