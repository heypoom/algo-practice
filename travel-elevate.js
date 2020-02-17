function travel(grid) {
  // 1. Create level and success globals.
  let level = 0
  let success = false
  let lowest = Infinity

  let visited = grid.map(r => r.map(() => false))

  let rows = grid.length
  let cols = grid[0].length

  // 2. Create a traversal function.
  // 		If tile is <= water level, return.
  // 		If tile is at the bottom right, set success flag.
  // 		Else, recursively walk in all directions.

  function walk(x, y) {
    if (x < 0 || y < 0) return
    if (x >= cols || y >= rows) return

    if (visited[y][x]) return
    visited[y][x] = true

    if (grid[y][x] <= level) return

    if (x === cols - 1 && y === rows - 1) {
      success = true
      lowest = Math.min(lowest, grid[y][x])
      return
    }

    walk(x - 1, y)
    walk(x + 1, y)
    walk(x, y - 1)
    walk(x, y + 1)

    console.log('Lowest:', lowest)
  }

  // 3. Inside a loop, call the traversal function.
  //		if not success, return with the current water level.
  //		Otherwise, increment the level and reset visited.

  while (true) {
    walk(0, 0)

    console.log(level)

    if (!success) return level

    level++
    success = false
    visited = visited.map(r => r.map(() => false))
  }
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
