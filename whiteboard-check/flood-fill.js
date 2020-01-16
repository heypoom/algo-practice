const {make, log} = require('../grid-helper')

function floodFill(grid, x, y, newColor) {
	let visited = grid.map(r => r.map(() => false))
	let oldColor = grid[y][x]

	function fill(x, y) {
		if (x < 0 ||
				y < 0 ||
			  y >= grid.length ||
				x >= grid[y].length) return

		if (visited[y][x]) return
		visited[y][x] = true

		if (grid[y][x] !== oldColor) return
		grid[y][x] = newColor

		fill(x - 1, y)
		fill(x + 1, y)
		fill(x, y - 1)
		fill(x, y + 1)
	}

	fill(x, y)

	return grid
}

log(floodFill(make(`
11100
11001
00011
00111
10000
`), 0, 0, 3))

