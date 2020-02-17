// Given a 2D array of integers representing a 2D map.

// The value in each cell represents the height/elevation of the land. However, some cells can become inaccessible when the water level increase to the same or higher elevation of the land.

// Your task is to find the minimum water level that prevents us from travelling from the starting point to the destination.

// The starting point is the top left corner and the destination is the bottom right corner.

function travel(grid) {
  let level = 0
  let success = false
  let visited = grid.map(r => r.map(() => false))

  let rows = grid.length
  let cols = grid[0].length

  let iter = 0

  function traverse(x, y) {
    if (x < 0 || y < 0) return
    if (y >= rows || x >= cols) return
    if (visited[y][x]) return

    // Cells become inaccessible when the water level increase to the same or higher elevation of the land.
    if (grid[y][x] <= level) return

    visited[y][x] = true

    if (x === cols - 1 && y === rows - 1) {
      success = true
      return
    }

    traverse(x - 1, y)
    traverse(x + 1, y)
    traverse(x, y - 1)
    traverse(x, y + 1)
  }

  while (true) {
    traverse(0, 0)

    console.log(level, '->', success)

    console.log('Iter:', iter)

    if (!success) return level

    success = false
    level++
    visited = visited.map(r => r.map(() => false))
  }

  return level
}

console.log(
  travel([
    [3, 2, 3, 3, 3],
    [3, 2, 3, 2, 3],
    [3, 3, 3, 2, 3],
    [2, 2, 2, 2, 3],
    [0, 0, 0, 2, 3],
  ]),
)

// console.log(travel([
// 	[12, 13,  0,  0,  0],
// 	[0,  0,  0,  0,  0],
// 	[0,  0,  0,  0,  0],
// 	[0,  0,  0,  0,  0],
// 	[0,  0,  0,  0,  0],
// ]))

// console.log(travel([
// 	[60, 1,  2, 3, 4],
// 	[1,  2,  3, 4, 5],
// 	[2,  3,  4, 5, 6],
// 	[3,  4,  5, 6, 7],
// 	[4,  5,  6, 7, 8]
// ]))
//
// console.log(travel([
// 	[1, 1, 1, 1, 1],
// 	[1, 1, 1, 1, 1],
// 	[1, 1, 1, 1, 1],
// 	[1, 1, 1, 1, 1],
// 	[1, 1, 1, 1, 1]
// ]))
//
