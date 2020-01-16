const map = [[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]]

function dfs(grid, i, j, path) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return 0

  if (grid[i][j] === 0 || !!path[i][j]) return 0

  let value = 0
  path[i][j] = true
  value += grid[i][j]

  let l = dfs(grid, i, j - 1, path)
  let r = dfs(grid, i, j + 1, path)
  let u = dfs(grid, i - 1, j, path)
  let d = dfs(grid, i + 1, j, path)

  path[i][j] = false

  return grid[i][j] + Math.max(l, r, u, d)
}

function maxGold(grid) {
  let path = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) path[i] = new Array(grid[0].length)

  let max = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0) {
        max = Math.max(result, dfs(grid, i, j, path))
      }
    }
  }

  return max
}
